import React from "react";
import News from "./News/News";
import Stock from "./Stock/Stock";
import Tasks from "./Tasks/Tasks";

function DashboardMain(props) {
  const { news, marketNews, allTasksData, stockData } = props;

  return (
    <div className="all-section-container">
      <div className="news-tasks-sections-container">
        <div className="two-news-container">
          <section>
            <h2>Top News</h2>
            <div className="content">
              <News news={news} />
            </div>
          </section>
          <section>
            <h2>Market News</h2>
            <div className="content">
              <News news={marketNews} />
            </div>
          </section>
        </div>
        <section className="tasks-section">
          <h2>Tasks</h2>
          <div className="content">
            <Tasks allTasksData={allTasksData} />
          </div>
        </section>
      </div>
      <section className="stock-section">
        <h2>US Stock Market</h2>
        <div className="content">
          <Stock stockData={stockData} />
        </div>
      </section>
    </div>
  );
}

export default DashboardMain;
