// import historyProvider from './historyProvider';
// import socketStore from 'stores/socketStore';

// export default {
//     subscribeBars: 
//         (
//             symbolInfo, 
//             resolution, 
//             onRealtimeCallback, 
//             subscribeUID, 
//             onResetCacheNeededCallback
//         ) => {
//             /* new */
//             const symbolHistory = historyProvider.history[symbolInfo.name] || {};
//             let subscribingChannelInfoForTradingView = {
//                 symbolInfo,
//                 resolution,
//                 onRealtimeCallback,
//                 subscribeUID,
//                 lastBar: symbolHistory.lastBar || null,
//             };

//             socketStore.setSubscribingChannelInfoForTradingView(subscribingChannelInfoForTradingView);
//     },

//     unsubscribeBars: (subscribeUID) => {
//         /* new */
//         socketStore.setSubscribingChannelInfoForTradingView(null);
//     }
// }