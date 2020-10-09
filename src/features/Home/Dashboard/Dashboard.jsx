import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectHome } from "../homeSlice";
import WeatherLink from "./Weather/WeatherLink";
import NewsLink from "./News/NewsLink";
import StockLink from "./Stock/StockLink";
import PhotosLink from "./Photos/PhotosLink";
import TasksLink from "./Tasks/TasksLink";
import ClothesLink from "./Clothes/ClothesLink";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import "../../../css/Dashboard.css";

function Dashboard(props) {
  const homeData = useSelector(selectHome);

  return (
    <div className="dashboard-container">
      <WelcomeMessage username={props.username} />
      {homeData.weather.haveWeatherData && homeData.news.haveNewsData ? (
        <div className="grid-container">
          <section>
            <div className="route-link">
              <h2>Weather</h2>
              <div className="link-container">
                <WeatherLink currentWeather={homeData.weather} />
              </div>
            </div>
          </section>
          <section>
            <Link to="/News" className="route-link">
              <h2>News</h2>
              <div className="link-container">
                <NewsLink currentNews={homeData.news} />
              </div>
            </Link>
          </section>
          <section>
            <Link to="/Stock" className="route-link">
              <h2>Stock</h2>
              <div className="link-container">
                <StockLink />
              </div>
            </Link>
          </section>
          <section>
            <Link to="/Photos" className="route-link">
              <h2>Photos</h2>
              <div className="link-container">
                <PhotosLink />
              </div>
            </Link>
          </section>
          <section>
            <Link to="/Tasks" className="route-link">
              <h2>Tasks</h2>
              <div className="link-container">
                <TasksLink />
              </div>
            </Link>
          </section>
        </div>
      ) : null}
    </div>
  );
}

export default Dashboard;
