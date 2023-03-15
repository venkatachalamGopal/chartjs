import React from "react";
import { Route,Routes} from 'react-router-dom'
import { Home } from "./home";
import{BarChart} from './chart/barchart'
import{LineChart} from './chart/linechart'



export const Rout=()=>{

    return (
        <div>
        <Routes>
        <Route path="/home" component={<Home/>} />
        <Route className="ta" path="/barchart" component={<BarChart/>} />
        <Route className="ta" path="/linechart" component={<LineChart/>} />
        </Routes>
        </div>
    );
}