// api/stream.js
import historyProvider from './historyProvider.js'

var socketIOClient = require('socket.io-client');
var sailsIOClient = require('sails.io.js');
var io2 = sailsIOClient(socketIOClient);
io2.sails.url = 'http://211.62.107.211:1340';
console.log('subscribing..');

io2.socket.get('/api/v1/price/subscribe?channel=EUR', function (resData) {
  console.log(resData);
});

io2.socket.on('PriceAdd', function (msg) {
  // let d =new Date(Number(msg.time)).toISOString().substr(0,10); //day

  const channelString = '0~liverates~EUR~USD';
  const sub = _subs.find(e => e.channelString === channelString)
 

  if (sub) {
    // disregard the initial catchup snapshot of trades for already closed candles
    if (msg.time < sub.lastBar.time / 1000) {
      return
     }
    }
  if (!sub) return;
  let bar = sub.lastBar;
  if (bar.isBarClosed) {
    return;
  }

  const data = {
    time: bar.time/1000,
    price: bar.price
   }


  if(sub.lastData){
   let d = sub.lastData;
    d.price = msg.price
    var _lastBar = updateBar( d, sub);
    
    sub.listener(_lastBar)
    // update our own record of lastBar
    sub.lastBar = _lastBar;
    sub.lastData = data;
    return;
  }

  sub.lastData = data;
   



    

});

io2.socket.on('PriceAdd_1Min', function (msg) {
  console.log(msg,'메시지-1분')


  
});





// keep track of subscriptions
var _subs = []

export default {
 subscribeBars: function(symbolInfo, resolution, updateCb, uid, resetCache) {

  const channelString = createChannelString(symbolInfo)
  socket.emit('SubAdd', {subs: [channelString]})

  var newSub = {
   channelString,
   uid,
   resolution,
   symbolInfo,
   lastBar: historyProvider.history[symbolInfo.name].lastBar,
   listener: updateCb,
  }
  console.log('subscribed '+ channelString);
 _subs.push(newSub)
 },
 unsubscribeBars: function(uid) {
  var subIndex = _subs.findIndex(e => e.uid === uid)
  if (subIndex === -1) {
   return
  }
  var sub = _subs[subIndex]
  socket.emit('SubRemove', {subs: [sub.channelString]})
  _subs.splice(subIndex, 1)
 }


}

// Take a single trade, and subscription record, return updated bar
function updateBar(data, sub) {
 var lastBar = sub.lastBar
 let resolution = sub.resolution
 if (resolution.includes('D')) {
  // 1 day in minutes === 1440
  resolution = 1440
 } else if (resolution.includes('W')) {
  // 1 week in minutes === 10080
  resolution = 10080
 }
var coeff = resolution * 60
 // console.log({coeff})
 var rounded = Math.floor(data.time / coeff) * coeff
 var lastBarSec = lastBar.time / 1000
 var _lastBar

if (rounded > lastBarSec) {
  // create a new candle, use last close as open **PERSONAL CHOICE**
  _lastBar = {
   time: rounded * 1000,
   open: lastBar.close,
   high: lastBar.close,
   low: lastBar.close,
   close: data.price,
  }

 } else {
  // update lastBar candle!
  if (data.price < lastBar.low) {
   lastBar.low = data.price
  } else if (data.price > lastBar.high) {
   lastBar.high = data.price
  }

  lastBar.close = data.price
  _lastBar = lastBar
 }
 return _lastBar
}

// takes symbolInfo object as input and creates the subscription string to send to CryptoCompare
function createChannelString(symbolInfo) {
  var channel = symbolInfo.name.split(/[:/]/)
  const exchange = channel[0] 
  const to = channel[2]
  const from = channel[1]
 // subscribe to the CryptoCompare trade channel for the pair and exchange
  return `0~${exchange}~${from}~${to}`
}
