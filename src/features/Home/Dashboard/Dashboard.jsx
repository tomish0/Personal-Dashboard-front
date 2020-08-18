import React from "react";
import { Link } from "react-router-dom";
import WeatherLink from "./Weather/WeatherLink";
import NewsLink from "./News/NewsLink";
import SportLink from "./Sport/SportLink";
import PhotosLink from "./Photos/PhotosLink";
import TasksLink from "./Tasks/TasksLink";
import ClothesLink from "./Clothes/ClothesLink";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";


function Dashboard(props) {
  return (
    <div>
      <WelcomeMessage username={props.username} />
      <div className="route-link">
        <WeatherLink />
      </div>
      <Link to="/News" className="route-link">
        <NewsLink currentNews={props.currentNews} setCurrentNews={props.setCurrentNews} />
      </Link>
      <Link to="/Sport" className="route-link">
        <SportLink />
      </Link>
      <Link to="/Photos" className="route-link">
        <PhotosLink />
      </Link>
      <Link to="/Tasks" className="route-link">
        <TasksLink />
      </Link>
      <Link to="/Clothes" className="route-link">
        <ClothesLink />
      </Link>
    </div>
  );
}

export default Dashboard;
