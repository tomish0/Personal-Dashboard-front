import React from "react";
import DateTime from "./DateTime/DateTime";
import Weather from "./Weather/Weather";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import "../../../css/Header.css";

function Header(props) {
  return (
    <header>
      {props.loadCompleted ? (
        <div className="time-weather-container">
          <DateTime />
          <Weather currentWeather={props.weatherData} />
        </div>
      ) : (
        <div style={{ height: "74px" }}></div>
      )}
      <WelcomeMessage username={props.username} />
    </header>
  );
}

export default Header;
