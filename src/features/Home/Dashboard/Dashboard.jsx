import React from "react";
import { useSelector } from "react-redux";
import { selectHome } from "../homeSlice";
import News from "./News/News";
import Stock from "./Stock/Stock";
import MarketNews from "./MarketNews/MarketNews";
import Tasks from "./Tasks/Tasks";
import Header from "../Header/Header";
import "../../../css/Dashboard.css";

function Dashboard(props) {
  const homeData = useSelector(selectHome);

  return (
    <div className="dashboard-container">
      <Header username={props.username} />
      <div className="all-section-container">
        <div className="news-tasks-sections-container">
          <div className="two-news-container">
            <section>
              <h2>BBC News</h2>
              <div className="content">
                <News news={homeData.news.newsData} />
              </div>
            </section>
            <section>
              <h2>Market News</h2>
              <div className="content">
                <MarketNews />
              </div>
            </section>
          </div>
          <section className='tasks-section'>
            <h2>Tasks</h2>
            <div className="content">
              <Tasks />
            </div>
          </section>
        </div>
        <section>
          <h2>US Stock Market</h2>
          <div className="content">
            <Stock />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
