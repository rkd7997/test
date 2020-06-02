import React, { useState, useCallback, useEffect } from 'react';
import { Button, List, Card, Icon, Tabs } from 'antd';
// import NicknameEditForm from '../components/NicknameEditForm';
// import ChartComponent from '../components/ChartComponent'
import dynamic from 'next/dynamic';

// import TVChartContainer from '../components/TVChartContainer/'


const { TabPane } = Tabs;

const TVChartContainer = dynamic(
	() =>
		import('../components/TVChartContainer').then(mod => mod.TVChartContainer),
	{ ssr: false },
);


var times =59;

const chartpage = () => {
  // const [time, settime] = useState(times);
  const [smallsec, setsmallsec] = useState(times%10);
  const [bigsec, setbigsec] = useState(parseInt(times/10));
  const [First, setFirst] = useState(false);
  const next_hours = new Date().getHours();
  const next_minutes = new Date().getMinutes()+1;
  const smallHours = next_hours%10;
  const bigHours = parseInt(next_hours/10); 
  const smallMinutes = next_minutes%10;
  const bigMinutes = parseInt(next_minutes/10); 


  
  if(!First){
    setFirst(true);
    setInterval(function() {
      // var i = times;
      // i = times -1;

      if(times === 0){
        times = 59;
      }
      else{
      times --;
      }
      // settime(times);
      setsmallsec(times%10);
      setbigsec(parseInt(times/10));
      // console.log(smallsec,bigsec,time,i)
    }, 1000);

  }

  return (
<TVChartContainer  style={{width:'100%',height:'100%'}} />
  );
};

export default chartpage;
