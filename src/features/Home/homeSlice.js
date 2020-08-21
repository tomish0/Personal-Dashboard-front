import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getTasksData } from "./Dashboard/Tasks/tasksSlice";
import { getNewsData } from "./Dashboard/News/newsSlice";
import { getWeatherData } from "./Dashboard/Weather/weatherSlice";

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
      newsTitle: "",
      newsDescription: "",
      newsLink: "",
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
      const {
        haveNewsData,
        newsTitle,
        newsDescription,
        newsLink,
      } = action.payload;
      const news = state.news;
      news.haveNewsData = haveNewsData;
      news.newsTitle = newsTitle;
      news.newsDescription = newsDescription;
      news.newsLink = newsLink;
    },
    addPhotos: (state, action) => {
      const { photos } = action.payload;
      state.photos = photos;
    },
    addTasks: (state, action) => {
      const { allTasks } = action.payload;
      state.allTasks = allTasks;
    },
  },
});

export const { addWeather, addNews, addPhotos, addTasks } = homeSlice.actions; // export reducers to be called in comps

// export the current store state
export const selectHome = (state) => state.home;

export default homeSlice.reducer; // export the slice to the store
