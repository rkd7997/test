import React, { Component } from 'react';
import './TVChartView.scss';
import Datafeed from './api/';


class TVChartContainer extends Component {
    static defaultProps = {
		symbol: '',
		interval: '5',
		containerId: 'tv_chart_container',
		libraryPath: `/charting_library/`,
		chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: false,
		autosize: true
    };
    
	componentDidMount() {
        this._initializeTVWidget('Light');
        // this.props.i18n.on('languageChanged', this._changeLanguage);
        if (this.tvWidget._ready) {
            this.tvWidget.setSymbol('', 5);
        } else {
            if (this.tvWidget._readyHandlers.length === 0) {
                this.tvWidget.onChartReady(() => {
					this.tvWidget.setSymbol('', 5);
                });
            } 
        }
    }
    
    componentWillReceiveProps(nextProps) {
        // if (this.props.tradingPairName !== nextProps.tradingPairName) {
        //     if (this.tvWidget._ready) {
        //         this.tvWidget.setSymbol(nextProps.tradingPairName, this.props.min || this.props.interval);
        //     }

        //     if (this.tvWidget._readyHandlers.length === 0) {
        //         this.tvWidget.onChartReady(() => {
        //             this.tvWidget.setSymbol(this.props.tradingPairName, this.props.min || this.props.interval);
        //         });
        //     }
        // }
        
        // if (this.props.theme !== nextProps.theme) {
        //     // debugger
        //     this._initializeTVWidget(nextProps.theme);
        // }
    }

	componentWillUnmount() {
		// const i18n = this.props.i18n;
        // i18n.off('languageChanged', this._changeLanguage);
        // this.tradingPairName = null;
    }
    
    _changeLanguage = () => {
        // if (this.tvWidget._ready) {
        //     this.tvWidget.setLanguage(this._getCurrentLanguage());
        // } else {
        //     this.tvWidget.onChartReady(() => {
        //         this.tvWidget.setLanguage(this._getCurrentLanguage());
        //     });
		// }
		return 'ko'
    }

	_getCurrentLanguage = () => {
		// const language = this.props.i18n.language.split('-')[0];
		// return language;
		return 'ko'
	}

	_initializeTVWidget = (targetTheme) => {
		let height = '100%' 
		// this.props.useDocumentScreenSize ? `${document.documentElement.clientHeight}px` : '100%';

		let volumePaneSize = "small";

		// if(this.props.isMobile) {
		// 	volumePaneSize = "large"
		// }
		
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
		if (targetTheme == "night" || targetTheme == "dark") {
			volumePaneSize = "small"
			background = "rgb(26, 34, 40)";
			vertGridProperties_color = "rgb(49, 54, 59)";
			horzGridProperties_color = vertGridProperties_color;
			scalespProperties_textColor = "rgb(160, 160, 160)";
			upColor = "rgb(73, 176, 124)";
			downColor = "rgb(232, 67, 82)";
			studiesOverrides = {
				"volume.volume.color.0": "rgb(149, 17, 20)", // fall
				"volume.volume.color.1": "rgb(16, 80, 20)", // rise
			};
			custom_css_url = 'custom_night.css';
			enabled_features = [
				//'hide_left_toolbar_by_default',
				//'remove_library_container_border',
			];
			theme = 'Dark';
		}
        
        // const { tradingPairName } = this.props;
		const widgetOptions = {
			debug: false,
			symbol: 'tradingPairName',
			datafeed: Datafeed,
			interval: 5,
			container_id: 'tv_chart_container',
			timezone: 'Asia/Seoul',	
			libraryPath: `/charting_library/`,
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
			chartsStorageUrl: 'https://saveload.tradingview.com',
			chartsStorageApiVersion: '1.1',
			clientId: 'tradingview.com',
			userId: 'public_user_id',

			// charts_storage_url: 'this.props.chartsStorageUrl',
			// charts_storage_api_version: 'this.props.chartsStorageApiVersion',
			// client_id: 'this.props.clientId',
			// user_id: 'this.props.userId',
			fullscreen: 'this.props.fullscreen',
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
		console.log(this.tvWidget,'티비위젯뱀')
	}

	render() {
		console.log(this.props.containerId,'컨테이너id뱀')
		return (
			<div
				id={'tv_chart_container'}
				className={'TVChartContainer'}
			/>
		);
	}
} export default TVChartContainer;
