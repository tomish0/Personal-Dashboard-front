import React from "react";
import { useSelector } from "react-redux";
import { selectHome } from "../homeSlice";
import DateTime from "./DateTime/DateTime";
import Weather from "./Weather/Weather";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import "../../../css/Header.css";

function Header(props) {
  const homeData = useSelector(selectHome);

  return (
    <header>
      <div className="time-weather-container">
        <DateTime />
        {homeData.weather.haveWeatherData ? (
          <Weather currentWeather={homeData.weather} />
        ) : null}
      </div>
      <WelcomeMessage username={props.username} />
    </header>
  );
}

export default Header;
