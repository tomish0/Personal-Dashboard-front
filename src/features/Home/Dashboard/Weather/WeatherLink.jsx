import React, { useEffect, useState } from "react";
import cloudsIcon from "../../../../Assets/Clouds_icon.png";
import rainIcon from "../../../../Assets/Rain_icon.png";
import sunIcon from "../../../../Assets/Sun_icon.png";
import axios from "axios";

function WeatherLink(props) {
  const [currentWeather, setCurrentWeather] = useState({
    temperature: "",
    icon: "",
    location: "",
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
    navigator.geolocation.getCurrentPosition(async function (position) {
      let geolocation = {
        latitude: position.coords.latitude,
        longtitude: position.coords.longitude,
      };
      var latitude = geolocation.latitude.toFixed(3);
      var longtitude = geolocation.longtitude.toFixed(3);
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=${"d0a10211ea3d36b0a6423a104782130e"}`;
      axios({
        method: "get",
        url: url,
      })
        .then((res) => {
          console.log(res);
          const temp = (res.data.main.temp - 273.15).toFixed(0);
          const location = res.data.name;
          var icon;
          if (res.data.weather[0].main === "Rain") {
            icon = "Rain";
          }
          if (
            res.data.weather[0].main === "Sun" ||
            res.data.weather[0].main === "Clear"
          ) {
            icon = "Sun";
          }
          if (res.data.weather[0].main === "Clouds") {
            icon = "Clouds";
          }
          setCurrentWeather({
            temperature: temp,
            icon: icon,
            location: location,
          });
        })
        .catch((err) => {
          console.dir(err);
        });
    });
  } 
    return function cleanup() {
      mounted = false
    }
  }, []);

  return (
    <div>
      <div>{currentWeather.temperature}</div>
      <div>{currentWeather.location}</div>
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
  );
}

export default WeatherLink;
