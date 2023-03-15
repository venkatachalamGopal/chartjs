import React from "react";
import {Bar} from 'react-chartjs-2'
import{Chart as ChartJS,CategoryScale,
        LinearScale,BarElement,Title,Tooltip,Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,LinearScale,BarElement,
    Title,Tooltip,Legend
);

const data={
    labels:['Jan',"Feb","Mar","Apr","May"],
    datasets:[
        {
            label:"rice prize",
            data:[100,500,1000,15000,20000],
            backgroundColor:"rgba(255,99,132,0.5)"
        }
    ]
}


export function BarChart(){

    return (
        <>
        <Bar data={data} 
            options={{maintainAspectRatio:false}}
             
        />
        </>
    );
}