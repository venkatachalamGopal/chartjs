import React from "react"
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,Tooltip,Legend,
)
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    //   title: {
    //     display: true,
    //     text: 'Line Chart',
    //   },
    },
  };
const data={
    labels:["Direct","Social","Referal"],
    datasets:[
        {
            label:"",
            data:[55,15,30],
            backgroundColor:[
                '#4e73df',
                '#1cc88a',
                '#36b9cc',
            ],
            borderColor:[
                '#4e73df',
                '#1cc88a',
                '#36b9cc',
            ],
            borderWidth:1,
        }
    ]
}

export function DoughNut(){

    return (
        <>
            <div className="dough-head">
            <p className="titles">Revenue Sources :</p>
            <hr/>
            </div>
                <Doughnut data={data} options={options}/>
            </>
            )
}