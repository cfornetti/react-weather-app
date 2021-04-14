import React from "react";
import Weather from "./Weather.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York" />
      <footer>
        This project is created by Chiara Fornetti and is {" "}
      <a href="https://github.com/cfornetti/react-weather-app"
      target="blank"
      > open-sourced on GitHub
      </a> {" "}
      and is available on {" "}
      <a href="https://infallible-boyd-715bf0.netlify.app/"
      target="blank">Netflify</a>
      </footer>
      </div>
      </div>
  );
}
