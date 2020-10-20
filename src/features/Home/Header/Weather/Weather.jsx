import React from "react";
import cloudsIcon from "../../../../Assets/Clouds_icon.png";
import rainIcon from "../../../../Assets/Rain_icon.png";
import sunIcon from "../../../../Assets/Sun_icon.png";
import "../../../../css/Weather.css";

function WeatherLink(props) {
  const currentWeather = props.currentWeather;

  return (
    <div className="weather-container">
      <div>{currentWeather.temperature} °</div>
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
        alt="weather-icon"
      />
      <div>{currentWeather.location}</div>
    </div>
  );
}

export default WeatherLink;
