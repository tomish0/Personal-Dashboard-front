import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addNews } from "../../homeSlice";

export const getNewsData = createAsyncThunk(
  "user/add/requestStatus",
  async (na, thunkAPI) => {
    try {
      const data = await axios(
        "https://cors-anywhere.herokuapp.com/http://feeds.bbci.co.uk/news/rss.xml"
      );
      const xmlData = data.data;
      var domParser = new DOMParser();
      var xmlDoc = domParser.parseFromString(xmlData, "text/xml");
      var xmlTitles = xmlDoc.getElementsByTagName("title");
      var xmlLinks = xmlDoc.getElementsByTagName("link");
      var newsData = [];
      for (var i = 2; i < 10; i++) {
        var newsObj = {
          title: xmlTitles[i].childNodes[0].nodeValue,
          link: xmlLinks[i].childNodes[0].nodeValue,
        };
        newsData.push(newsObj)
      }
      thunkAPI.dispatch(
        addNews({
          haveNewsData: true,
          newsData: newsData
        })
      );
    } catch (err) {
      console.log(err);
    }
  }
);

// redux toolkit slice of store with initial state & reducers included
export const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsTitle: "",
    newsDescription: "",
    newsLink: "",
  },
  reducers: {
    addNewsData: (state, action) => {
      const { newsTitle, newsDescription, newsLink } = action.payload;
      state.newsTitle = newsTitle;
      state.newsDescription = newsDescription;
      state.newsLink = newsLink;
    },
  },
});

export const { addNewsData } = newsSlice.actions; // export reducers to be called in comps

// export the current store state
export const selectNews = (state) => state.news;

export default newsSlice.reducer; // export the slice to the store
