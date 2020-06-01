import axios from 'axios';

const history = {}
export default {
	history: history,
    getBars: function(symbolInfo, resolution, from, to, first, limit) {		
		const urls = `http://211.62.107.211:1340/api/v1/candle`
		return axios.get(urls, {
		})
            .then(response => {
				if (response.data.length) {
					var bars = [];
					if(first){
					for(var i=0; i<response.data.length;i++){
						const el = response.data[i];
						let times = new Date(el.time).getTime();
						console.log(times,'타임즈')
						const obj ={
							time: times, //TradingView requires bar time in ms
							low: el.low,
							high: el.high,
							open: el.open,
							close: el.close,
						}
						
						bars.push(obj)
					}		
				}
						if (first) {
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
