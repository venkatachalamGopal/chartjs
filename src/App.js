import './App.css';
import{Routes,Route} from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { LineChart } from './chart/linechart';
import { DoughNut } from './chart/doughnut';
import {BarChart} from './chart/barchart'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";



import {Home} from './home'



export const graphcontext=React.createContext();

function App() {

    const navigate=useNavigate();

  return (
    <div className='app'>

    <div className='navBtn'>
    <Button className="Btns" onClick={()=>navigate('/')} >Dashboard</Button>
    <Button className="Btns" onClick={()=>navigate('/linechart')}>linechart</Button>
    <Button className="Btns" onClick={()=>navigate('/doughnut')} >Doughnut</Button>
    <Button className="Btns" onClick={()=>navigate('/barchart')} >Barchart</Button>

    </div>

    <div>
    <Routes>
    <Route path="/"element={<Home/>} />
    <Route path="/linechart"element={<LineChart/>} />
    <Route path="/doughnut"element={<DoughNut/>} />
    <Route path="/barchart"element={<BarChart/>} />
    </Routes>
    </div>


    
    </div>
    );
}

export default App;
