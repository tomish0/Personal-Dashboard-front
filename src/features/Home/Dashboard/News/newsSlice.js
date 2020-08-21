import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addNews } from "../../homeSlice";

export const getNewsData = createAsyncThunk(
  "user/add/requestStatus",
  async (data, thunkAPI) => {
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
      var link = xmlDoc.getElementsByTagName("link")[2].childNodes[0].nodeValue;
      thunkAPI.dispatch(
        addNews({
          haveNewsData: true,
          newsTitle: title,
          newsDescription: description,
          newsLink: link,
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
