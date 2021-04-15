import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
const[weatherData, setWeatherData] = useState({ready:false});
function handleResponse(response){
    console.log (response.data);
    setWeatherData({
        ready:true,
        temperature:response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        city: response.data.name,
        description: response.data.weather[0].description,
        date: new Date (response.data.dt * 1000),
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
    })
}
if (weatherData.ready) {
    return (
        <div className="Weather"> 
        <form>
        <div className="row">
            <div className="col-9">
            <input 
            type="search" 
            placeholder="Search for a city"
            className="form-control"
            autoFocus="on" 
            />
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>
                <FormattedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">
            {weatherData.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img 
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
                />
            <div className="float-left">
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                </ul>
            </div>
            </div>
        </div>
    )
} else {
    const apiKey="d41ef9769dc7a581713400eb6cdff7f1"
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
}
}