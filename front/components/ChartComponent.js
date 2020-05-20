import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import { Doughnut, Bar } from "react-chartjs-2";

const ChartComponent = () => {
    const expData = {
        // labels: ["긍정적", "부정적", "보통"],
        datasets: [
          {
            // labels: ["긍정적", "부정적", "보통"],
            data: [6000, 1300,2700,6000, 1300,2700,6000, 1300,2700,6000, 1300,2700,6000, 1300,2700,6000, 1300,2700,6000, 1300,2700,6000, 1300,2700],
            borderWidth: 2,
            hoverBorderWidth: 3,
            backgroundColor: [
              "rgba(238, 102, 121, 1)",
              "rgba(98, 181, 229, 1)",
              "rgba(255, 198, 0, 1)"
            ],
            fill: true
          }
        ]
      };

      let backColor = [];
      let number = [];
      for(var i=0; i<expData.datasets[0].data.length;i++){
            number.push(i+1)
          if(i === 0){backColor.push('blue'); continue;}
          if(expData.datasets[0].data[i] > expData.datasets[0].data[i-1]){ backColor.push('blue')}
          else if(expData.datasets[0].data[i] === expData.datasets[0].data[i-1]){backColor.push('grey')}
          else{
              backColor.push('red')
          }
      }
      expData.datasets[0].backgroundColor = backColor
      expData.labels = number;
      expData.datasets[0].labels = number
      
    return (

        <div>

<i class="ri-admin-line"></i>
        <div>
        <Bar
        data={expData}
        width={300}
        height={300}
        options={{ maintainAspectRatio: false }}
        />
        </div> 
      </div>
      );
  
} 
  

export default ChartComponent;
