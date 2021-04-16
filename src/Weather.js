import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo.js"
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
const[weatherData, setWeatherData] = useState({ready:false});
const [city, setCity]= useState (props.defaultCity)
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
        icon: response.data.weather[0].icon,
    });
}

function search(){
    const apiKey="d41ef9769dc7a581713400eb6cdff7f1"
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
}

    function handleSubmit(event){
        event.preventDefault();
        search()
    }

function handleCityChange(event){
setCity(event.target.value);
}

if (weatherData.ready) {
    return (
        <div className="Weather"> 
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-9">
            <input 
            type="search" 
            placeholder="Search for a city"
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
            />
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        </div>
        </form>
        <WeatherInfo data={weatherData} />
        </div>
    );
} else {
    search();
    return "Loading..."
}
}