import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { checkDataCollection } from "../../homeSlice";
import { domain } from "../../../../whichDomain/whichDomain";

export const getStock = createAsyncThunk(
  "",
  async (data, thunkAPI) => {
    const url = `${domain}/stock`;
    axios({
      method: "post",
      data: data,
      url: url,
      // headers: { userid: userId },
    })
      .then((res) => {
        thunkAPI.dispatch(addStockData(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

export const getAllStocks = createAsyncThunk(
  "",
  async (data, thunkAPI) => {
    const url = `${domain}/stock/all`;
    axios({
      method: "get",
      url: url,
      // headers: { userid: userId },
    })
      .then((res) => {
        thunkAPI.dispatch(addAllStocks(res.data));
        thunkAPI.dispatch(checkDataCollection({ haveStockData: true }));

      })
      .catch((err) => {
        console.log(err);
      });
  }
);

// redux toolkit slice of store with initial state & reducers included
export const stockSlice = createSlice({
  name: "stock",
  initialState: {
    stock: {},
    allStocks: []
  },
  reducers: {
    addStockData: (state, action) => {
      state.stock = action.payload;
    },
    addAllStocks: (state, action) => {
      state.allStocks = action.payload
    }
  },
});

export const { addStockData, addAllStocks } = stockSlice.actions; // export reducers to be called in comps

// export the current store state
export const selectStockData = (state) => state.stock;

export default stockSlice.reducer; // export the slice to the store
