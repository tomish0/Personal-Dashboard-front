import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { domain } from "../../../../whichDomain/whichDomain";
import { addMarketNews } from "../../homeSlice";

export const getMarketNewsData = createAsyncThunk("", async (na, thunkAPI) => {
  const url = `${domain}/market-news`;
  axios({
    method: "get",
    url: url,
    // headers: { userid: userId },
  })
    .then((res) => {
      console.log(res);
      const marketNewsData = [];
      res.data.forEach((item) => {
        if (item.category === "top news") {
          var data = {
            title: item.headline,
            link: item.url,
          };
          marketNewsData.push(data);
        }
      });
      thunkAPI.dispatch(addMarketNewsData(marketNewsData));
    })
    .catch((err) => {
      console.log(err);
    });
});

// redux toolkit slice of store with initial state & reducers included
export const marketNewsSlice = createSlice({
  name: "marketNews",
  initialState: {
    marketNews: [],
  },
  reducers: {
    addMarketNewsData: (state, action) => {
      state.marketNews = action.payload;
    },
  },
});

export const { addMarketNewsData } = marketNewsSlice.actions; // export reducers to be called in comps

// export the current store state
export const selectMarketNews = (state) => state.marketNews;

export default marketNewsSlice.reducer; // export the slice to the store
