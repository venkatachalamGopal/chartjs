import React from "react";
import {ProgressBar} from 'react-bootstrap'

export function Progress(){

    return(
        <>
        <p className="titles">Projects :</p>
        <hr/>
        <div className="progressContent">
        <div>
            <div className="progressBar">
                <p>Server Migration</p>
                <p>20%</p>
            </div>
            <ProgressBar now={20} variant="danger"/>
        </div>

        <div>
            <div className="progressBar">
                <p>Sales Tracking</p>
                <p>40%</p>
            </div>
            <ProgressBar now={40} variant="warning" />
        </div>

        <div>
            <div className="progressBar">
                <p>Customer Database</p>
                <p>60%</p>
            </div>
            <ProgressBar now={60} variant="primary"/>
        </div>

        <div>
            <div className="progressBar">
                <p>Payout Details</p>
                <p>80%</p>
            </div>
            <ProgressBar now={80} variant="info"/>
        </div>

        <div>
            <div className="progressBar">
                <p>Account Setup</p>
                <p>Complete!</p>
            </div>
            <ProgressBar now={100} variant="success" />
        </div>

        </div>
        
        </>
    );
}