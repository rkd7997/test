import * as React from 'react';
import './TVChartView.scss';
import { widget } from '../../static/charting_library/charting_library.min';
import Datafeed from './api3/'



function getLanguageFromURL() {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(window.location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export class TVChartContainer extends React.PureComponent {
	static defaultProps = {
		symbol: 'liverates:EUR/USD',
		interval: '1',
		containerId: 'tv_chart_container',
		libraryPath: '/charting_library/',
		chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: false,
		autosize: true,
		studiesOverrides: {},
	};

	
	tvWidget = null;

	componentDidMount() {



		const widgetOptions = {
			debug: false,
			symbol: this.props.symbol,
			timezone: 'Asia/Seoul',
			datafeed: Datafeed,
			interval: this.props.interval,
			container_id: this.props.containerId,
			library_path: this.props.libraryPath,
			locale: 'ko',
			disabled_features: ['use_localstorage_for_settings'],
			enabled_features: ['study_templates'],
			charts_storage_url: this.props.chartsStorageUrl,
			charts_storage_api_version: this.props.chartsStorageApiVersion,
			client_id: this.props.clientId,
			user_id: this.props.userId,
			fullscreen: this.props.fullscreen,
			autosize: this.props.autosize,
			studies_overrides: this.props.studiesOverrides,
			
			overrides: {
				"mainSeriesProperties.showCountdown": true,
				"paneProperties.background": "#131722",
				"paneProperties.vertGridProperties.color": "#363c4e",
				"paneProperties.horzGridProperties.color": "#363c4e",
				"symbolWatermarkProperties.transparency": 90,
				"scalesProperties.textColor" : "#AAA",
				"mainSeriesProperties.candleStyle.wickUpColor": '#336854',
				"mainSeriesProperties.candleStyle.wickDownColor": '#7f323f',
			}
		};


		
		const tvWidget = new widget(widgetOptions);
		this.tvWidget = tvWidget;

		this._initializeTVWidget(white);

		tvWidget.onChartReady(() => {
			tvWidget.headerReady().then(() => {
				const button = tvWidget.createButton();
				button.setAttribute('title', 'Click to show a notification popup');
				button.classList.add('apply-common-tooltip');
				button.addEventListener('click', () => tvWidget.showNoticeDialog({
					title: 'Notification',
					body: 'TradingView Charting Library API works correctly',
					callback: () => {
						console.log('Noticed!');
					},
				}));

				button.innerHTML = 'Check API';
			});
		});
	}

	componentWillUnmount() {
		if (this.tvWidget !== null) {
			this.tvWidget.remove();
			this.tvWidget = null;
		}
	}

	_initializeTVWidget = (targetTheme) => {
		let height = this.props.useDocumentScreenSize ? `${document.documentElement.clientHeight}px` : '100%';

		let volumePaneSize = "small";

		if(this.props.isMobile) {
			volumePaneSize = "large"
		}
		
		let background = "#fff",
			vertGridProperties_color = "rgb(221, 221, 221)",
			horzGridProperties_color = "rgb(221, 221, 221)",
			scalesProperties_textColor = "#4a4a4a",
			upColor = "#ec5761",
			downColor = "#0042b7",
			studiesOverrides = {
				"volume.volume.color.0": "#0042b7",
				"volume.volume.color.1": "#ec5761",
				"volume.volume.transparency": 70
			},
			custom_css_url = "custom.css",
			enabled_features = [
				'hide_left_toolbar_by_default',
				// 'remove_library_container_border',
			],
			theme = 'Light';
        
        const { tradingPairName } = this.props;
		const widgetOptions = {
			debug: false,
			symbol: tradingPairName,
			datafeed: Datafeed,
			interval: this.props.min || this.props.interval,
			container_id: this.props.containerId,
			timezone: 'Asia/Seoul',
			library_path: this.props.libraryPath,
			locale: this._getCurrentLanguage(), // 번역
			disabled_features: [
				'use_localstorage_for_settings',
				'header_symbol_search',
				'symbol_search_hot_key',
				'header_compare',
				'compare_symbol',
				'header_saveload',
				'header_undo_redo',
				'header_settings',
				'border_around_the_chart',
				"volume_force_overlay"
				//'chart_property_page_background'
			],
			enabled_features: enabled_features,
			loading_screen: { backgroundColor: "#ebeff2", foregroundColor: "#0042b7" },
			charts_storage_url: this.props.chartsStorageUrl,
			charts_storage_api_version: this.props.chartsStorageApiVersion,
			client_id: this.props.clientId,
			user_id: this.props.userId,
			fullscreen: this.props.fullscreen,
			custom_css_url: custom_css_url,
			width: '100%',
			height: height,
			// autosize: this.props.autosize,
			time_frames: [
				// { text: "2y", resolution: "D", description: "2 Years" },
				// { text: "1y", resolution: "D", description: "1 Year", },
				{ text: "6month", resolution: "D", description: "6 Month" },
				{ text: "1month", resolution: "60", description: "1 Month" },
				{ text: "1week", resolution: "30", description: "1 Week" },
			],
			studies_overrides: studiesOverrides,
			theme: theme,
			overrides: {
				// "mainSeriesProperties.showCountdown": true,
				"paneProperties.background": background,
				"paneProperties.vertGridProperties.color": vertGridProperties_color,
				"paneProperties.horzGridProperties.color": horzGridProperties_color,
				"symbolWatermarkProperties.transparency": 90,
				"scalesProperties.textColor": scalesProperties_textColor,
				// "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
				// "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f',
				"paneProperties.crossHairProperties.color": "#666",
				"paneProperties.crossHairProperties.width": 1,
				"paneProperties.crossHairProperties.style": "solid",
				//"paneProperties.topMargin": 12,
				//"paneProperties.bottomMargin": 3,
				// "mainSeriesProperties.prevClosePriceLineColor": "red",
				// "mainSeriesProperties.candleStyle.upColor": "#6ba583",
				// Filled Candle styles
				"mainSeriesProperties.candleStyle.upColor": upColor,
				"mainSeriesProperties.candleStyle.downColor": downColor,
				"mainSeriesProperties.candleStyle.drawBorder": false,
				"mainSeriesProperties.candleStyle.borderUpColor": upColor,
				"mainSeriesProperties.candleStyle.borderDownColor": downColor,
				"mainSeriesProperties.candleStyle.drawWick": true,
				"mainSeriesProperties.candleStyle.wickUpColor": upColor,
				"mainSeriesProperties.candleStyle.wickDownColor": downColor,
				// Hollow Candles styles
				"mainSeriesProperties.hollowCandleStyle.upColor": upColor,
				"mainSeriesProperties.hollowCandleStyle.downColor": downColor,
				"mainSeriesProperties.hollowCandleStyle.drawWick": true,
				"mainSeriesProperties.hollowCandleStyle.drawBorder": true,
				"mainSeriesProperties.hollowCandleStyle.borderUpColor": upColor,
				"mainSeriesProperties.hollowCandleStyle.borderDownColor": downColor,
				"mainSeriesProperties.hollowCandleStyle.wickUpColor": upColor,
				"mainSeriesProperties.hollowCandleStyle.wickDownColor": downColor,
				// // Heikin Ashi styles
				"mainSeriesProperties.haStyle.upColor": upColor,
				"mainSeriesProperties.haStyle.downColor": downColor,
				"mainSeriesProperties.haStyle.drawWick": true,
				"mainSeriesProperties.haStyle.drawBorder": true,
				"mainSeriesProperties.haStyle.borderUpColor": upColor,
				"mainSeriesProperties.haStyle.borderDownColor": downColor,
				"mainSeriesProperties.haStyle.wickUpColor": upColor,
				"mainSeriesProperties.haStyle.wickDownColor": downColor,
				"mainSeriesProperties.haStyle.barColorsOnPrevClose": false,

				// Bar styles
				"mainSeriesProperties.barStyle.upColor": upColor,
				"mainSeriesProperties.barStyle.downColor": downColor,
				"mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
				"mainSeriesProperties.barStyle.dontDrawOpen": false,

				// Volume Area
				//"mainSeriesProperties.showPriceLine": true,
				"volumePaneSize": volumePaneSize,
				"mainSeriesProperties.showPriceLine.upColor": upColor,
				"mainSeriesProperties.showPriceLine.downColor": downColor,

			},

		};
		this.tvWidget = new window.TradingView.widget(widgetOptions);
	}

	render() {
		console.log(this.tvWidget,'티비위젯')
		return (
			<div
				id={ this.props.containerId }
				className={ 'TVChartContainer' }
			/>
		);
	}
}
