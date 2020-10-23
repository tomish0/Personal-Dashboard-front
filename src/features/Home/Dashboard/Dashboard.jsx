import React from "react";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import { selectWeather } from "../Header/Weather/weatherSlice";
import { selectTasks } from "./Tasks/tasksSlice";
import { selectNews } from "./News/newsSlice";
import { selectStockData } from "./Stock/stockSlice";
import { selectHome } from "../homeSlice";
import Header from "../Header/Header";
import DashboardMain from "./DashboardMain";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../../../css/Dashboard.css";

function Dashboard(props) {
  const tasksData = useSelector(selectTasks);
  const newsData = useSelector(selectNews);
  const stockData = useSelector(selectStockData);
  const weatherData = useSelector(selectWeather);
  const homeData = useSelector(selectHome);

  return (
    <div className="dashboard-container">
      <Header
        username={props.username}
        loadCompleted={homeData.loadCompleted}
        weatherData={weatherData}
      />
      {homeData.loadCompleted ? (
        <DashboardMain
          news={newsData.newsData}
          marketNews={newsData.marketNewsData}
          allTasksData={tasksData.allTasks}
          stockData={stockData}
        />
      ) : (
        <Loader type="Bars" color="#00BFFF" height={100} width={100} />
      )}
    </div>
  );
}

export default Dashboard;
