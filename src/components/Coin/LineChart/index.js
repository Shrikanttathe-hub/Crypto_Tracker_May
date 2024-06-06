import React from 'react';
import { Line } from 'react-chartjs-2';
import { convertNumber } from '../../../functions/ConvertNumber';
import { CategoryScale, Chart, plugins, LinearScale, PointElement, LineElement  } from 'chart.js'; 
 
Chart.register(CategoryScale, LinearScale, PointElement, LineElement); 
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
      y: {
        // type: 'linear', 
        ticks: {
          callback: function (value, index, ticks) {
            if (priceType === 'prices') return '$' + value.toLocaleString();
            else {
              return '$' + convertNumber(value);
            }
          },
        },
      },
      x:{
        type:"category",
      }
    },
  };
 
  return <Line data={chartData} options={options} />;
}
 
export default LineChart;
 















// import React from 'react';
// import { Legend, plugins } from 'chart.js';
// import { display } from '@mui/system';
// import { Line } from 'react-chartjs-2';
// import {chartData} from './' 
// import { convertNumber } from '../../../functions/ConvertNumber';
// import { CategoryScale, Chart } from 'chart.js';
// Chart.register(CategoryScale)

// function LineChart({chartData, priceType, multiAxis}) {
// const options = {
//     plugins: {
//       legend: {
//         display: multiAxis ? true : false,
//       },
//     },
//     responsive: true,
//     interaction: {
//         mode: "index",
//         intersect: false,
//     },
//     scales: {
//       y: {
//           ticks: {
//               // Include a dollar sign in the ticks
//               callback: function(value, index, ticks) {
//                 if (priceType == "prices") return "$" + value.toLocaleString();
//                 else{
//                   return "$" + convertNumber(value);
//                 }
//                   return '$' + value.toLocaleString();
//               },
//           },
//       },
//   },
// };

//   return <Line data={chartData} options={options} />;
// }

// export default LineChart;
