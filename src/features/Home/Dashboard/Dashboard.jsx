import React from "react";
import { Link } from "react-router-dom";
import WeatherLink from "./Weather/WeatherLink";
import NewsLink from "./News/NewsLink";
import SportLink from "./Sport/SportLink";
import PhotosLink from "./Photos/PhotosLink";
import TasksLink from "./Tasks/TasksLink";
import ClothesLink from "./Clothes/ClothesLink";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import "../../../css/Dashboard.css";

function Dashboard(props) {
  return (
    <div className="dashboard-container">
      <WelcomeMessage username={props.username} />
      <div className="grid-container">
        <section>
          <div className="route-link">
            <h2>Weather</h2>
            <WeatherLink />
          </div>
        </section>
        <section>
          <Link to="/News" className="route-link">
            <h2>News</h2>
            <NewsLink
              currentNews={props.currentNews}
              setCurrentNews={props.setCurrentNews}
            />
          </Link>
        </section>
        <section>
          <Link to="/Sport" className="route-link">
            <h2>Sport</h2>
            <SportLink />
          </Link>
        </section>
        <section>
          <Link to="/Photos" className="route-link">
            <h2>Photos</h2>
            <PhotosLink />
          </Link>
        </section>
        <section>
          <Link to="/Tasks" className="route-link">
            <h2>Tasks</h2>
            <TasksLink />
          </Link>
        </section>
        <section>
          <div className="route-link">
            <h2>Clothes</h2>
            <ClothesLink />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
