// var rp = require('request-promise').defaults({json: true})
import axios from 'axios';



const api_root = 'https://min-api.cryptocompare.com'
const history = {}

export default {
	history: history,

    getBars: function(symbolInfo, resolution, from, to, first, limit) {
		console.log(symbolInfo,resolution,from,to,first,limit,'뭐')
		var split_symbol = symbolInfo.name.split(/[:/]/)
			const url = resolution === 'D' ? '/data/histoday' : resolution >= 60 ? '/data/histohour' : '/data/histominute'
			const qs = {
					e: split_symbol[0],
					fsym: split_symbol[1],
					tsym: split_symbol[2],
					toTs:  to ? to : '',
					limit: limit ? limit : 2000, 
					// aggregate: 1//resolution 
				}
			// console.log({qs})

			// const coinbit_api = 'https://production-api.coinbit.global/api/v1.0/minute_candles/?trading_pair=BTC-KRW&unit=1&page_size=2000&to=1590730162';

        // return rp({
        //         url: `${api_root}${url}`,
        //         qs,
		//     })

		// const queryParams_coinbit = {
		// 	trading_pair:'BTC-KRW',
		// 	unit:1,
		// 	page_size:2000,
		// 	to:1590730162,
		// } 
		
		const urls = `${api_root}${url}`
		return axios.get(urls, {
				params:qs
			// params:queryParams_coinbit
			//  queryParams
		})
            .then(response => {
                console.log({response})
				if (response.data.Response && response.data.Response === 'Error') {
					console.log('에러요')
					console.log('CryptoCompare API error:',response.data.Message)
					return []
				}
				if (response.data.Data.length) {
					console.log(`Actually returned: ${new Date(response.data.TimeFrom * 1000).toISOString()} - ${new Date(response.data.TimeTo * 1000).toISOString()}`)
					var bars = [];
					if(first){
					for(var i=0; i<1400;i++){
						const el = response.data.Data[i];
						const obj ={
							time: el.time * 1000, //TradingView requires bar time in ms
							low: el.low,
							high: el.high,
							open: el.open,
							close: el.close,
							// volume: el.volumefrom 
						}
						bars.push(obj)
					}
		
				}
				else{
					// var bars = response.data.Data.map(el => {
					// 	return {
					// 		time: el.time * 1000, //TradingView requires bar time in ms
					// 		low: el.low,
					// 		high: el.high,
					// 		open: el.open,
					// 		close: el.close,
					// 		volume: el.volumefrom 
					// 	}
					// })
	
				}
						if (first) {
							console.log('퍼스트요',bars)
							
							var lastBar = bars[bars.length - 1]
							history[symbolInfo.name] = {lastBar: lastBar}
							return bars
						}
					return []
				} else {
					return []
				}
			})
}
}
