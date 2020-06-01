import historyProvider from './historyProvider';
// import stream from './stream';

const supportedResolutions = ["1", "2", "5"]

const config = {
	supported_resolutions: supportedResolutions
};

export default {
	onReady: cb => {
        console.log('=====onReady running')
		setTimeout(() => cb(config), 0)
	},
	resolveSymbol: (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
		var symbol_stub = {
			name: symbolName,
			description: '',
			type: 'crypto',
			session: '24x7',
			ticker: symbolName,
			minmov: 1,
			pricescale: 10000,
			has_intraday: true,
			intraday_multipliers: ['1', '60'],
			has_daily: true,
			has_empty_bars: false,
			supported_resolution: supportedResolutions,
			volume_precision: 3,
			data_status: 'streaming',
		}
		// if (
        //     symbolName
        //     && symbolName.split('-')[1]
        // ) {
        //     if (symbolName.split('-')[1].includes('KRW')) {
        //         symbol_stub.pricescale = 100
        //     }
        //     if (['USDT'].includes(symbolName.split('-')[1])) {
        //         symbol_stub.pricescale = 1000
        //     }
		// }
		setTimeout(function () {
			onSymbolResolvedCallback(symbol_stub)
		}, 0)

	},
	Bars: function (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {
        if (!firstDataRequest && !historyProvider.last.next) {
            onHistoryCallback([], { noData: true });
            return;
        }
		historyProvider.getBars(symbolInfo, resolution, from, to, firstDataRequest)
			.then(bars => {
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
	},
	unsubscribeBars: subscriberUID => {
	},
	getMarks: (symbolInfo, startDate, endDate, onDataCallback, resolution) => {
	},
	getTimeScaleMarks: (symbolInfo, startDate, endDate, onDataCallback, resolution) => {
	},
	getServerTime: cb => {
	}
}
