import React from "react";
import Humidity from "./Humidity.js";
import Wind from "./Wind.js";
import "./Weather.css";
export default function Weather() {
  let weatherData = {
    city: "Uxbridge",
    date: "Monday 10:32PM",
    description: "Cloudy",
    temperature: "22",
  };
  return (
    <div className="Weather">
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6 weather-temperature">
          <span>
            <img
              className="icon"
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
              alt="Weather Icon"
            />
          </span>
          <span className="temperature">{weatherData.temperature}</span>
          <span className="units">
            <a
              href="https://euphonious-strudel-280264.netlify.app/"
              className="celsius-link active"
            >
              °C
            </a>{" "}
            |
            <a
              href="https://euphonious-strudel-280264.netlify.app/"
              className="fahrenheit-link"
            >
              °F
            </a>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <Humidity value={67} />
            </li>
            <li>
              <Wind value={5} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
