import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getTasksData } from "./Dashboard/Tasks/tasksSlice";
import { getNewsData } from "./Dashboard/News/newsSlice";
import { getWeatherData } from "./Header/Weather/weatherSlice";

export const getData = createAsyncThunk(
  "user/add/requestStatus",
  async (data, thunkAPI) => {
    thunkAPI.dispatch(getNewsData(data.userId));
    thunkAPI.dispatch(getWeatherData(data.weather));
    // thunkAPI.dispatch(getTasksData(data.userId));
  }
);

// redux toolkit slice of store with initial state & reducers included
export const homeSlice = createSlice({
  name: "home",
  initialState: {
    weather: {
      haveWeatherData: false,
      temperature: "",
      location: "",
      icon: "",
    },
    news: {
      haveNewsData: false,
      newsData: [],
    },
    photos: [],
    allTasks: [],
  },
  reducers: {
    addWeather: (state, action) => {
      const { haveWeatherData, temperature, location, icon } = action.payload;
      const weather = state.weather;
      weather.haveWeatherData = haveWeatherData;
      weather.temperature = temperature;
      weather.location = location;
      weather.icon = icon;
    },
    addNews: (state, action) => {
      const { haveNewsData, newsData } = action.payload;
      const news = state.news;
      news.haveNewsData = haveNewsData;
      news.newsData = newsData;
    },
    addPhotos: (state, action) => {
      const { photos } = action.payload;
      state.photos = photos;
    },
    addTasks: (state, action) => {
      state.allTasks = action.payload;
    },
  },
});

export const { addWeather, addNews, addPhotos, addTasks } = homeSlice.actions; // export reducers to be called in comps

// export the current store state
export const selectHome = (state) => state.home;

export default homeSlice.reducer; // export the slice to the store
