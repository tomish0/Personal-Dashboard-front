import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { domain } from "../../../../whichDomain/whichDomain";
import { checkDataCollection } from "../../homeSlice";

export const getNewsData = createAsyncThunk("", async (na, thunkAPI) => {
  const url = `${domain}/news`;
  axios({
    method: "get",
    url: url,
    // headers: { userid: userId },
  })
    .then((res) => {
      const newsData = [];
      const marketNewsData = [];
      res.data.forEach((item) => {
        var data = {
          title: item.headline,
          link: item.url,
        };
        if (item.category === "top news") {
          newsData.push(data);
        } else {
          marketNewsData.push(data);
        }
      });
      thunkAPI.dispatch(addNewsData({ newsData, marketNewsData }));
      thunkAPI.dispatch(checkDataCollection({ haveNewsData: true }));
    })
    .catch((err) => {
      console.log(err);
    });
});

// redux toolkit slice of store with initial state & reducers included
export const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsData: [],
    marketNewsData: [],
  },
  reducers: {
    addNewsData: (state, action) => {
      const { newsData, marketNewsData } = action.payload;
      state.newsData = newsData;
      state.marketNewsData = marketNewsData;
    },
  },
});

export const { addNewsData } = newsSlice.actions; // export reducers to be called in comps

// export the current store state
export const selectNews = (state) => state.news;

export default newsSlice.reducer; // export the slice to the store
