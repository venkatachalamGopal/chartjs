import React from 'react';
import {NavLink} from 'react-router-dom'


export const Nav=()=>{
    return(
        <div className='side'>
            <NavLink to="/home"      className="navi navlink">Home</NavLink>
            <NavLink to='/barchart' className="navi navlink">BarChart</NavLink>
            <NavLink to='/linechart' className="navi navlink">LineChart</NavLink>
            <NavLink to="/doughnut"  className="navi navlink">Doughnut</NavLink>
        </div>
    );
} 