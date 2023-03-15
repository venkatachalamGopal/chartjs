import React from "react";
import { LineChart } from "./chart/linechart";
import { Progress } from "./progress";
import { Illustration } from "./illustration";
import { ButtonComp } from "./buttonComp";
import { Develop } from "./develop";
import { DoughNut } from "./chart/doughnut";
import {AiTwotoneCalendar} from 'react-icons/ai'
import {TbCurrencyDollar} from 'react-icons/tb'
import {BiCalendar} from 'react-icons/bi'
import {TiMessage} from 'react-icons/ti'
import {IoMdNotifications} from 'react-icons/io'
import {BiMessageDetail} from 'react-icons/bi'
import{CgProfile}from 'react-icons/cg'
import {ProgressBar} from 'react-bootstrap'




export  const Home=()=>{

    return(

        <>
        <div className="head">
          <div>
            <input type="text" id="text" placeholder="Search...."/>
          </div>
          <div className="head-1">
          <div className="icon">
            <IoMdNotifications size="25px" />
            <BiMessageDetail size="25px"/>
            </div>
            <div className="profile"><span>Joe</span>
              <CgProfile size="25px"/>
              </div>
          </div>

        </div>
        <h3>DASHBOARD</h3>

        <div className="options">
          <div className="option py">
            <div>
              <div className="py-txt">EARNINGS (MONTHLY)</div>
              <div>$40,000</div>
            </div>
            <div className="icons1">
              <AiTwotoneCalendar size="20px" className="icons"/>
            </div>
          </div>
          <div className="option sy">
            <div>
              <div className="sy-txt">EARNINGS (ANNUAL)</div>
              <div>$215,000</div>
            </div>
            <div className="icons">
              <TbCurrencyDollar size="20px"/>
            </div>
          </div>
          <div className="option info">
            <div>
              <div className="info-tx">TASKS</div>
              <div>50%</div>
            </div>
            <div><ProgressBar now={20} variant="primary" /></div>
            <div className="icons">
              <BiCalendar size="20px"/>
            </div>
          </div>
          <div className="option warn">
            <div>
              <div className="warn-txt">PENDING REQUESTS</div>
              <div>18</div>
            </div>
            <div className="icons">
              <TiMessage size="20px"/>
            </div>
          </div>
          
        </div>

        <div className="summaBox">
          <div className="chart"><LineChart/></div>
          <div className="chart dough"><DoughNut/></div>
        </div>

        <div className="prog-illus">
          <div className="prog">
            <Progress /></div>
          <div><Illustration/></div>
        </div>
        {/* --------- Button compnent ----- */}
        <div className="btncomp">
          <div className="btnprog"><ButtonComp/></div>
          <div className="btnprog-1"><Develop/></div>
        </div>

        </>
    );
}