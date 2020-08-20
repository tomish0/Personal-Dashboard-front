import React from "react";
import cloudsIcon from "../../../../Assets/Clouds_icon.png";
import rainIcon from "../../../../Assets/Rain_icon.png";
import sunIcon from "../../../../Assets/Sun_icon.png";
import "../../../../css/WeatherLink.css";

function WeatherLink(props) {
  const currentWeather = props.currentWeather;

  return (
    <div className="weather-link-container">
      <div className="current-weather-container">
        <div>{currentWeather.temperature} degrees</div>
        <img
          src={
            currentWeather.icon === "Rain"
              ? rainIcon
              : currentWeather.icon === "Clouds"
              ? cloudsIcon
              : currentWeather.icon === "Sun"
              ? sunIcon
              : null
          }
        />
      </div>
      <div>{currentWeather.location}</div>
    </div>
  );
}

export default WeatherLink;
