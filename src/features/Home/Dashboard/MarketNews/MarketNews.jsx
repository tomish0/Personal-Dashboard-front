import React from "react";
import "../../../../css/News.css";

function MarketNews(props) {
  const { marketNews } = props;

  return (
    <div className="market-news-container">
      <ol>
        {marketNews.map((item, index) => {
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
