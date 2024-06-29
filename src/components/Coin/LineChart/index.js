import React from 'react';
 import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // Dont get rid of this 
import { convertNumbers } from '../../../functions/ConvertNumber';

 //Chart.register(CategoryScale, LinearScale, PointElement, LineElement); 
 function LineChart({ chartData, priceType, multiAxis }) {
   const options = {
     plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
    mode: 'index',
    intersect: false,
    },
    scales: {
      crypto1: {
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
          // include a dollar sign in the ticks
           callback: function (value) {
           if (priceType === "total_volumes") {
            return convertNumbers(value);
           } else if (priceType == "market_caps") {
            return "$" + convertNumbers(value);
           } else {
            return '$' + value.toLocaleString();
            }
          },
        },
      },
      crypto2: multiAxis && {
        type: 'linear',
        display: true,
        position: 'right',
        ticks: {
          // include a dollar sign in the ticks
           callback: function (value) {
           if (priceType === "total_volumes") {
            return convertNumbers(value);
           } else if (priceType == "market_caps") {
            return "$" + convertNumbers(value);
           } else {
            return '$' + value.toLocaleString();
            }
          },
        },
      },
    },
   };

  return <Line data={chartData} options={options} />;
}
 
export default LineChart;
