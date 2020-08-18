import React, { useEffect, useState } from "react";
import axios from "axios";

function NewsLink(props) {


  useEffect(() => {
    async function getData() {
      try {
        const data = await axios(
          "https://cors-anywhere.herokuapp.com/http://feeds.bbci.co.uk/news/rss.xml"
        );
        const xmlData = data.data;
        var domParser = new DOMParser();
        var xmlDoc = domParser.parseFromString(xmlData, "text/xml");
        var title = xmlDoc.getElementsByTagName("title")[2].childNodes[0]
          .nodeValue;
        var description = xmlDoc.getElementsByTagName("description")[1]
          .childNodes[0].nodeValue;
        var link = xmlDoc.getElementsByTagName("link")[2].childNodes[0]
          .nodeValue;
        props.setCurrentNews({
          title: title,
          description: description,
          link: link,
        });
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

return <div>{props.currentNews.title}</div>;
}

export default NewsLink;
