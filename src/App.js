import React from "react";
import Weather from "./Weather.js";
import WeatherTwo from "./WeatherTwo"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="title">
        <strong>
          Is it warmer in ... or ...?
        </strong>
      </div>
      <Weather defaultCity="New York" />
      <WeatherTwo defaultCity="San Francisco" />
      <footer>
        This project is created by Chiara Fornetti and is {" "}
      <a href="https://github.com/cfornetti/react-weather-app"
      target="blank"
      rel="noopener noreferrer"
      > open-sourced on GitHub
      </a> {" "}
      and is available on {" "}
      <a href="https://infallible-boyd-715bf0.netlify.app/"
      target="blank"
      rel="noopener noreferrer">
        Netflify
        </a>
      </footer>
      </div>
      </div>
  );
}
