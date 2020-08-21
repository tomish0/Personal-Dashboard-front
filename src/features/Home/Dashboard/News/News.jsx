import React from "react";
import { useSelector } from "react-redux";
import { selectHome } from "../../homeSlice";
import BackButton from "../../../Button/BackButton"
import "../../../../css/News.css"

function News() {
  const homeData = useSelector(selectHome);
  return (
    <div className='news-container'>
      <BackButton />
      <h1>News</h1>
      <h2>{homeData.news.newsTitle}</h2>
      <p>{homeData.news.newsDescription}</p>
      <a href={homeData.news.newsLink} target="_blank" rel="noopener noreferrer">BBC Article Link</a>
    </div>
  );
}

export default News;
