import React from "react";
import './Weather.css';

export default function Weather() {
    return (
        <div classname="Weather"> 
        <h1> New York</h1>
        <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="Mostly Cloudy"
                />
            6° C
            </div>
        </div>
        </div>
    )
}