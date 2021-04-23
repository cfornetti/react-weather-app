import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import Weather from "./Weather";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast (props){
    let [loaded, setLoaded]=useState (false);
    let [forecast, setForecast]=useState (null);

    function handleResponse(response){
        setForecast(response.data.daily)
        setLoaded(true);
    }
    
if (loaded){
    return (
        <div className="WeatherForecast">
        <div className="row">
        <div className="col">
        <WeatherForecastDay data={forecast[0]}/>;
         </div>
</div>
</div>
);
} else {
    let apiKey="d41ef9769dc7a581713400eb6cdff7f1"
    let longitude = props.coordinates.lon;
    let latitudine= props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitudine}&lon=${longitude}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse);

    return null;
}
}