// api/stream.js
import historyProvider from './historyProvider.js'
// we use Socket.io client to connect to cryptocompare's socket.io stream


var io = require('socket.io-client')
var socket_url = 'wss://streamer.cryptocompare.com'
var socket = io(socket_url)



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
  console.log(msg.price,'메시지',_subs)


  const channelString = '0~liverates~EUR~USD';
  const sub = _subs.find(e => e.channelString === channelString)
 

  if (sub) {
    // disregard the initial catchup snapshot of trades for already closed candles
    if (msg.time < sub.lastBar.time / 1000) {
      return
     }
    }
  // if (_subs == null) return;
  let bar = sub.lastBar;
  if (bar.isBarClosed) {
    return;
  }

  console.log(bar,'바');
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

var simul ={
 sub : null,
 interval : 1500,
 max_ratio : 0.0005
};

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
  // simul.sub = newSub;
 },
 unsubscribeBars: function(uid) {
  var subIndex = _subs.findIndex(e => e.uid === uid)
  if (subIndex === -1) {
   //console.log("No subscription found for ",uid)
   return
  }
  var sub = _subs[subIndex]
  socket.emit('SubRemove', {subs: [sub.channelString]})
  _subs.splice(subIndex, 1)
 }


}

function startSimul() {
  simul.timer = setInterval(updateSimul, simul.interval );
}

function updateSimul() {
   if (simul.sub == null) return;

   let bar = simul.sub.lastBar;
   // console.log( 'closed=' , bar.isBarClosed );
   if (bar.isBarClosed) {
     return;
   }
   // let hi_lo = Math.random();
   let r = Math.random() * (simul.max_ratio*2) - simul.max_ratio;

   // let which = bar.high;
   // if (hi_lo < 0) {
   //  which = bar.low;
   // }

    let d = simul.sub.lastData;

    if (d && d.price) {
     d.price = d.price * (1 + r);

     // if (hi_lo < 0) {
     //  bar.low = sim_val
     // } else {
     //  bar.high = sim_val
     // }
    //  console.log('updateSimul ', d.price);
     // if (simul.sub.lastBar.high < sim_close) {
     //  simul.sub.lastBar.high = sim_close;
     // } else if (simul.sub.lastBar.low  > sim_close) {
     //  simul.sub.lastBar.low = sim_close;

     var _lastBar =   updateBar( d, simul.sub);
     // var _lastBar = updateBar(data, sub)
  // send the most recent bar back to TV's realtimeUpdate callback
     simul.sub.listener(_lastBar)
     // update our own record of lastBar
     simul.sub.lastBar = _lastBar;
    }
}

// startSimul();

socket.on('connect', () => {
 console.log('===Socket connected')
})
socket.on('disconnect', (e) => {
 console.log('===Socket disconnected:', e)
})
socket.on('error', err => {
 console.log('====socket error', err)
})


socket.on('m', (e) => {
  // console.log(e, new Date(), 'api3 데이터소켓')
 // here we get all events the CryptoCompare connection has subscribed to
 // we need to send this new data to our subscribed charts
 const _data= e.split('~')
 if (_data[0] === "3") {
  // console.log('Websocket Snapshot load event complete')
  return
 }
 const data = {
  sub_type: parseInt(_data[0],10),
  exchange: _data[1],
  to_sym: _data[2],
  from_sym: _data[3],
  trade_id: _data[5],
  ts: parseInt(_data[6],10),
  // volume: parseFloat(_data[7]),
  price: parseFloat(_data[8])
 }

 const channelString = `${data.sub_type}~${data.exchange}~${data.to_sym}~${data.from_sym}`

 const sub = _subs.find(e => e.channelString === channelString)


 if (sub) {
  // disregard the initial catchup snapshot of trades for already closed candles
  if (data.ts < sub.lastBar.time / 1000) {
    return
   }


var _lastBar = updateBar(data, sub)

// send the most recent bar back to TV's realtimeUpdate callback
  sub.listener(_lastBar)
  // update our own record of lastBar
  sub.lastBar = _lastBar;
  sub.lastData = data;
 }
})

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
  // channel[0] === 'GDAX' ? 'Coinbase' : channel[0]
  const to = channel[2]
  const from = channel[1]
 // subscribe to the CryptoCompare trade channel for the pair and exchange
  return `0~${exchange}~${from}~${to}`
}
