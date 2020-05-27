import historyProvider from './historyProvider';
// import stream from './stream';

const supportedResolutions = ["1", "3", "5", "10", "15", "30", "60", "240", "D", "W", "M"]
// const supportedResolutions = ["1", "60", "D"]

const config = {
	supported_resolutions: supportedResolutions
};

export default {
	onReady: cb => {
        // console.log('=====onReady running')
		setTimeout(() => cb(config), 0)
	},
	// searchSymbols: (userInput, exchange, symbolType, onResultReadyCallback) => {
	// 	console.log('====Search Symbols running')
	// },
	resolveSymbol: (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
		// expects a symbolInfo object in response
		// console.log('======resolveSymbol running')
		// console.log(symbolName)
		var symbol_stub = {
			name: symbolName,
			description: '',
			type: 'crypto',
			session: '24x7',
			ticker: symbolName,
			minmov: 1,
			pricescale: 100000000,
			has_intraday: true,
			intraday_multipliers: ['1', '60'],
			has_daily: true,
			has_empty_bars: false,
			supported_resolution: supportedResolutions,
			volume_precision: 3,
			data_status: 'streaming',
		}
		if (
            symbolName
            && symbolName.split('-')[1]
        ) {
            if (symbolName.split('-')[1].includes('KRW')) {
                symbol_stub.pricescale = 100
            }
            if (['USDT'].includes(symbolName.split('-')[1])) {
                symbol_stub.pricescale = 1000
            }
		}
		setTimeout(function () {
			onSymbolResolvedCallback(symbol_stub)
			// console.log('Resolving that symbol....', symbol_stub)
		}, 0)


		// onResolveErrorCallback('Not feeling it today')

	},
	getBars: function (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {
		// console.log('=====getBars running')
        if (!firstDataRequest && !historyProvider.last.next) {
            onHistoryCallback([], { noData: true });
            return;
        }
		historyProvider.getBars(symbolInfo, resolution, from, to, firstDataRequest)
			.then(bars => {
                // bars = bars.map((bar) => { })
				if (bars.length) {
					onHistoryCallback(bars, { noData: false })
				} else {
					onHistoryCallback(bars, { noData: true })
				}
			}).catch(err => {
				console.log({ err })
				onErrorCallback(err)
			})

	},

	subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback) => {
		// console.log('===== subscribeBars runnning')
		// stream.subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback);
	},
	unsubscribeBars: subscriberUID => {
		// console.log('===== unsubscribeBars running')
		// stream.unsubscribeBars(subscriberUID)
	},
	// calculateHistoryDepth: (resolution, resolutionBack, intervalBack) => {
	// 	//optional
	// 	console.log('=====calculateHistoryDepth running')
	// 	// while optional, this makes sure we request 24 hours of minute data at a time
	// 	// CryptoCompare's minute data endpoint will throw an error if we request data beyond 7 days in the past, and return no data
	// 	// return resolution < 60 ? { resolutionBack: 'D', intervalBack: '1' } : undefined
	// 	return undefined
	// },
	getMarks: (symbolInfo, startDate, endDate, onDataCallback, resolution) => {
        //optional
		// console.log('=====getMarks running')
	},
	getTimeScaleMarks: (symbolInfo, startDate, endDate, onDataCallback, resolution) => {
        //optional
		// console.log('=====getTimeScaleMarks running')
	},
	getServerTime: cb => {
		// console.log('=====getServerTime running')
	}
}
