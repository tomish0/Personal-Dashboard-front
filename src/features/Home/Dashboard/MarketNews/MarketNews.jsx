import React from "react";
import { useSelector } from "react-redux";
import { selectMarketNews } from "./marketNewsSlice";
import "../../../../css/News.css";

function MarketNews(props) {
  const marketNews = useSelector(selectMarketNews);

  return (
    <div className="market-news-container">
      <ol>
        {marketNews.marketNews.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link} target="_blank">
                {item.title}
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default MarketNews;
