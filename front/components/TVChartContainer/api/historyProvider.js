import agent from '../../../agent';
import axios from 'axios';

const API_ROOT = `${process.env.RAZZLE_API_ENDPOINT}/api/${process.env.RAZZLE_API_VERSION}`;
const history = {}; // 각 trading pair의 마지막 바를 기록한 뒤 socket으로 새로운 ticker가 오면 그 뒤에 붙여서 그래프를 업데이트합니다.
let last = {
    tradingPairName: '',
    next: null,
};
// Option 1. 원 데이터 그대로 Bar 데이터를 만듭니다.
function getOiginalBarsWithResults(results) {
    let bars = [];
    if (results.length) {

        for (let i = results.length - 1; 0 <= i; i--) {
            const candle = results[i];
            bars.push({
                time: new Date(candle.candle_start_date_time).getTime(),
                open: parseFloat(candle.open_price),
                high: parseFloat(candle.high_price),
                low: parseFloat(candle.low_price),
                close: parseFloat(candle.close_price),
                volume: parseFloat(candle.candle_acc_trade_volume)
            });
        }
    }
    return bars;
}

/* 위 로직은 거래발생 횟수 만큼만 차트에 그려지는 문제가 있습니다.  */
/* 아래 로직을 적용하면 타임라인과 일치하여 거래가 보여지며 거래가 많지 않으면 비어보일 수 있습니다 */
/* 아래 로직을 적용한다면 stream에서도 새로운 거래가 추가될때, 그 이전 시간들에 bar를 추가해주는 로직이 필요합니다. */

// Option 2. 원 데이터의 빈 부분을 채우는 그래프 데이터를 만듭니다
function getFilledBarWithResults(results, resolution) {
    let bars = [];
    for (let index = results.length - 1; 0 <= index; index--) {
        let currentCandle = results[index];
        let nextCandle = results[index - 1];
        bars.push({
            time: new Date(currentCandle.candle_start_date_time).getTime(),
            open: parseFloat(currentCandle.open_price),
            high: parseFloat(currentCandle.high_price),
            low: parseFloat(currentCandle.low_price),
            close: parseFloat(currentCandle.close_price),
            volume: parseFloat(currentCandle.candle_acc_trade_volume)
        });
        if (nextCandle) {
            let differenceInMillisecond = new Date(nextCandle.candle_start_date_time).getTime() - new Date(currentCandle.candle_start_date_time).getTime();
            const fixedResoluiton = (resolution.indexOf('D') > -1 ? 24 * 60 : (resolution >= 60 ? 60 : 1)) * 60 * 1000;
            while (fixedResoluiton < differenceInMillisecond) {
                differenceInMillisecond = differenceInMillisecond - fixedResoluiton;
                bars.push({
                    time: new Date(nextCandle.candle_start_date_time).getTime() - differenceInMillisecond,
                    open: parseFloat(currentCandle.close_price),
                    high: parseFloat(currentCandle.close_price),
                    low: parseFloat(currentCandle.close_price),
                    close: parseFloat(currentCandle.close_price),
                    volume: 0
                });
            }
        }
    }
    return bars;
}

export default {
    history,
    last,
    getBars: function (symbolInfo, resolution, from, to, first, pageSize) {
        // console.log('start to get bars');
        if (first) {
            const tradingPairName = symbolInfo.name;
            const url = resolution.indexOf('D') > -1 ? '/day_candles/' : '/minute_candles/';
            const queryParams = {
                trading_pair: tradingPairName,
                unit: resolution.indexOf('D') > -1 ? null : resolution >= 60 ? 60 : 1,
                page_size: pageSize ? pageSize : 2000,
                to: to
            };

            return axios.get(`${API_ROOT}${url}`, {
                params: queryParams
            })
                .then(response => {
                    const { results, next } = response.data;
                    last.next = next ? next.replace('http:', 'https:') : null;
                    let bars = getFilledBarWithResults(results, resolution);
                    if (bars.length) {
                        var lastBar = bars[bars.length - 1];
                        history[symbolInfo.name] = { lastBar }
                    }
                    return bars;
                })
                .catch(() => {
                    return [];
                })
        } else {
            const nextPath = last.next && last.next.split('v1.0')[1];
            return axios.get(`${API_ROOT}${nextPath}`)
                .then(response => {
                    const { results, next } = response.data;
                    last.next = next ? next.replace('http:', 'https:') : null;
                    let bars = getFilledBarWithResults(results, resolution);
                    return bars;
                })
                .catch(() => {
                    return [];
                })
        }
    }
}

