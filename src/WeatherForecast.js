import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast (){
    function handleResponse(response){
        console.log(response.data);
    }
    
    let apiKey="d41ef9769dc7a581713400eb6cdff7f1"
    let longitude = props.coordinates.lon;
    let latitudine= props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitudine}&lon=${longitude}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
        <div className="row">
        <div className="col">
        <div className="WeatherForecast-day">Friday</div>
        <WeatherIcon code="01d" size={35} />
        <div className="WeatherForecast-temperature">
         <span className="WeatherForecast-temperature-max">30
         </span>
         /
         <span className="WeatherForecast-temperature-min">02
         </span>
         </div>
    </div>
</div>
</div>
    )
}