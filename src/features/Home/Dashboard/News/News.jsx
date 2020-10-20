import React from "react";

function News(props) {
  return (
    <div className="news-link-container">
      {props.news.map((item, index) => {
        return (
          <div key={index}>
            <h4>{item.title}</h4>
            <a href={item.link} target="_blank">
              Article
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default News;
