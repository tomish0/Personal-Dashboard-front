import { createSlice } from "@reduxjs/toolkit";

// redux toolkit slice of store with initial state & reducers included
export const homeSlice = createSlice({
  name: "home",
  initialState: {
    loadCompleted: false,
    haveWeatherData: false,
    haveNewsData: false,
    haveStockData: false,
    haveTasksData: false,
  },
  reducers: {
    checkDataCollection: (state, action) => {
      const {
        haveWeatherData,
        haveNewsData,
        haveStockData,
        haveTasksData,
      } = action.payload;
      state.haveWeatherData = haveWeatherData
        ? haveWeatherData
        : state.haveWeatherData;
      state.haveNewsData = haveNewsData ? haveNewsData : state.haveNewsData;
      state.haveStockData = haveStockData ? haveStockData : state.haveStockData;
      state.haveTasksData = haveTasksData ? haveTasksData : state.haveTasksData;

      if (
        state.haveWeatherData &&
        state.haveNewsData &&
        state.haveStockData &&
        state.haveTasksData
      ) {
        state.loadCompleted = true;
      }
    },
  },
});

export const { checkDataCollection } = homeSlice.actions; // export reducers to be called in comps

// export the current store state
export const selectHome = (state) => state.home;

export default homeSlice.reducer; // export the slice to the store
