import React from "react";

export default function WeatherForecastDay(props){
    return (
        <div className="WeatherForecast-day">{forecast[0].dt}</div>
        <WeatherIcon code="{forecast[0].weather[0].icon}" size={35} />
        <div className="WeatherForecast-temperature">
         <span className="WeatherForecast-temperature-max">{Math.round(forecast[0].temp.max)}°
         </span>
         /
         <span className="WeatherForecast-temperature-min">{Math.round(forecast[0].temp.min)}°
         </span>
         </div>
    )
}