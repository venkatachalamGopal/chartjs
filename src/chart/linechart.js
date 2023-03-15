import React from "react";
import {Line} from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,LineElement,
    Tooltip

} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,LineElement,
    Tooltip
);

const options = {
    responsive: true,
    maintainAspectRatio:true,
    // plugins: {
    //   // legend: {
    //   //   position: 'top',
    //   // },
    //   // title: {
    //   //   display: true,
    //   //   text: 'Line Chart',
    //   // },
    // },
  };
  const data = {
    labels:['January', 'March', 'May', 'July','Sep','Nov'],
    datasets: [
        {
        label: 'Earnings',
        data: [0,5000,10000,15000,20000,40000],
        borderColor: 'rgb(53, 162, 235)',
      }
    ],
  };

export function LineChart(){



    return(
        <>
        <p className="titles">Earnings Overview :</p>
        <hr/>
        <Line options={{}} data={data} />
        </>
    );
}