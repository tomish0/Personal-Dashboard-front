import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { domain } from "../../../../whichDomain/whichDomain";

export const getStock = createAsyncThunk(
  "user/add/requestStatus",
  async (data, thunkAPI) => {
    const url = `${domain}/stock`;
    console.log('getStock', data);
    axios({
      method: "post",
      data: data,
      url: url,
      // headers: { userid: userId },
    })
      .then((res) => {
          console.log(res);
          thunkAPI.dispatch(addStockData(res.data))
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
    stock: '',
  },
  reducers: {
    addStockData: (state, action) => {
      state.stock = action.payload;
    },
  },
});

export const {
    addStockData,
} = stockSlice.actions; // export reducers to be called in comps

// export the current store state
export const selectStockData = (state) => state.stock;

export default stockSlice.reducer; // export the slice to the store