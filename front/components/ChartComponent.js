// import React, { useCallback } from 'react';
// import { Button, Form, Input } from 'antd';
// import { Doughnut, Bar } from "react-chartjs-2";
// // import { createChart } from 'lightweight-charts';


// const ChartComponent = () => {
//     const expData = {
//         // labels: ["긍정적", "부정적", "보통"],
//         datasets: [
//           {
//             // labels: ["긍정적", "부정적", "보통"],
//             data: [6000, 1300,2700,6000, 1300,2700,6000, 1300,2700,6000, 1300,2700,6000, 1300,2700,6000, 1300,2700,6000, 1300,2700,6000, 1300,2700],
//             borderWidth: 2,
//             hoverBorderWidth: 3,
//             backgroundColor: [
//               "rgba(238, 102, 121, 1)",
//               "rgba(98, 181, 229, 1)",
//               "rgba(255, 198, 0, 1)"
//             ],
//             fill: true
//           }
//         ]
//       };

//       let backColor = [];
//       let number = [];
//       for(var i=0; i<expData.datasets[0].data.length;i++){
//             number.push(i+1)
//           if(i === 0){backColor.push('blue'); continue;}
//           if(expData.datasets[0].data[i] > expData.datasets[0].data[i-1]){ backColor.push('blue')}
//           else if(expData.datasets[0].data[i] === expData.datasets[0].data[i-1]){backColor.push('grey')}
//           else{
//               backColor.push('red')
//           }
//       }
//       expData.datasets[0].backgroundColor = backColor
//       expData.labels = number;
//       expData.datasets[0].labels = number

//       // var chart = LightweightCharts.createChart(document.body, { width: 400, height: 300 });
//     // var lineSeries = chart.addLineSeries();   
//     // lineSeries.setData([
//     // { time: '2019-04-11', value: 80.01 },
//     // { time: '2019-04-12', value: 96.63 },
//     // { time: '2019-04-13', value: 76.64 },
//     // { time: '2019-04-14', value: 81.89 },
//     // { time: '2019-04-15', value: 74.43 },
//     // { time: '2019-04-16', value: 80.01 },
//     // { time: '2019-04-17', value: 96.63 },
//     // { time: '2019-04-18', value: 76.64 },
//     // { time: '2019-04-19', value: 81.89 },
//     // { time: '2019-04-20', value: 74.43 },
//     // ]);
// // chart.timeScale().fitContent();
      
//     return (

//         <div>
//         <Bar
//         data={expData}
//         width={500}
//         height={300}
//         options={{ maintainAspectRatio: false }}
//         /> 
//       </div>
//       );
  
// } 
  

// export default ChartComponent;


// import { createChart } from "lightweight-charts";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// var socketIOClient = require('socket.io-client');
// var sailsIOClient = require('sails.io.js');
// var io = sailsIOClient(socketIOClient);
const dataSeries = [];
let chart_on = true;
let chart = null;

const  Graph = () => {
  const chartRef = React.useRef(null);
  
  const { chart_data } = useSelector(state => state.chart);
  


   
  React.useEffect(()=> {
    
    if(chartRef.current && chart_on){
      chart_on = false;
      chart = LightweightCharts.createChart(chartRef.current, {
        width: 845,
        height: 400,
        crosshair: {
          mode: "normal"
        }
      });
    }
      if(chart_data === null){return;}
      if(chart === null){return;}
      socketChart(chart,chart_data);
  }, [chart_data])

  React.useEffect(()=> {    
      const charts = LightweightCharts.createChart(chartRef.current, {
        width: 845,
        height: 400,
        crosshair: {
          mode: "normal"
        }
      });
      prepareChart(charts);
  }, [])

  
  function socketChart(chart,chart_data) {
    const dataSeries = chart.addCandlestickSeries();
    dataSeries.setData([ ]);
    dataSeries.applyOptions({
      priceFormat: {
          type: 'price',
          precision: 5,
          minMove: 0.0001,
      },
  });

    let d =Number(chart_data.time); // unix time
    console.log(chart_data);
    let r = dataSeries.update({
        time: d,
        open: Number(chart_data.open),
        close: Number(chart_data.close),
        high: Number(chart_data.high),
        low: Number(chart_data.low),
    })
    let bar = ({
      time: d,
      open: Number(chart_data.open),
      close: Number(chart_data.close),
      high: Number(chart_data.high),
      low: Number(chart_data.low),
  })

  
  }





  function prepareChart(chart) {

  var candleSeries = chart.addCandlestickSeries();

  var data = [
    { time: "2018-10-19", open: 54.62, high: 55.5, low: 54.52, close: 54.9 },
    { time: "2018-10-22", open: 55.08, high: 55.27, low: 54.61, close: 54.98 },
    { time: "2018-10-23", open: 56.09, high: 57.47, low: 56.09, close: 57.21 },
    { time: "2018-10-24", open: 57.0, high: 58.44, low: 56.41, close: 57.42 },
    { time: "2018-10-25", open: 57.46, high: 57.63, low: 56.17, close: 56.43 },
  ];

  candleSeries.setData(data);

  var lastClose = data[data.length - 1].close;
  var lastIndex = data.length - 1;

  var targetIndex = lastIndex + 105 + Math.round(Math.random() + 30);
  var targetPrice = getRandomPrice();

  var currentIndex = lastIndex + 1;
  var currentBusinessDay = { day: 29, month: 5, year: 2019 };
  var ticksInCurrentBar = 0;
  var currentBar = {
    open: null,
    high: null,
    low: null,
    close: null,
    time: currentBusinessDay
  };

  function mergeTickToBar(price) {
    if (currentBar.open === null) {
      currentBar.open = price;
      currentBar.high = price;
      currentBar.low = price;
      currentBar.close = price;
    } else {
      currentBar.close = price;
      currentBar.high = Math.max(currentBar.high, price);
      currentBar.low = Math.min(currentBar.low, price);
    }
    candleSeries.update(currentBar);
  }

  function reset() {
    candleSeries.setData(data);
    lastClose = data[data.length - 1].close;
    lastIndex = data.length - 1;

    targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
    targetPrice = getRandomPrice();

    currentIndex = lastIndex + 1;
    currentBusinessDay = { day: 29, month: 5, year: 2019 };
    ticksInCurrentBar = 0;
  }

  function getRandomPrice() {
    return 10 + Math.round(Math.random() * 10000) / 100;
  }

  function nextBusinessDay(time) {
    var d = new Date();
    d.setUTCFullYear(time.year);
    d.setUTCMonth(time.month - 1);
    d.setUTCDate(time.day + 1);
    d.setUTCHours(0, 0, 0, 0);
    return {
      year: d.getUTCFullYear(),
      month: d.getUTCMonth() + 1,
      day: d.getUTCDate()
    };
  }

  setInterval(function() {
    var deltaY = targetPrice - lastClose;
    var deltaX = targetIndex - lastIndex;
    var angle = deltaY / deltaX;
    var basePrice = lastClose + (currentIndex - lastIndex) * angle;
    var noise = 0.1 - Math.random() * 0.2 + 1.0;
    var noisedPrice = basePrice * noise;
    mergeTickToBar(noisedPrice);
    if (++ticksInCurrentBar === 5) {
      // move to next bar
      currentIndex++;
      currentBusinessDay = nextBusinessDay(currentBusinessDay);
      currentBar = {
        open: null,
        high: null,
        low: null,
        close: null,
        time: currentBusinessDay,
      };
      ticksInCurrentBar = 0;
      if (currentIndex === 5000) {
        reset();
        return;
      }
      if (currentIndex === targetIndex) {
        // change trend
        lastClose = noisedPrice;
        lastIndex = currentIndex;
        targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
        targetPrice = getRandomPrice();
      }
    }
  }, 200);

}


  return (
    // <div style={{paddingTop:'300px'}}>
  <div ref={chartRef} />
    // </div>
  );
}

export default Graph;