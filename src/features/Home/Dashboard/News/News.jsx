import React from "react";
import "../../../../css/News.css";

function News(props) {
  return (
    <div className="news-container">
      <ol>
        {props.news.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default News;
