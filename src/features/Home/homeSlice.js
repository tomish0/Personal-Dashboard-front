import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk(
  "user/add/requestStatus",
  async (data, thunkAPI) => {

    thunkAPI.dispatch(haveData())
  }
);

// redux toolkit slice of store with initial state & reducers included
export const homeSlice = createSlice({
  name: "home",
  initialState: {
    weather: {},
    news: [],
    sport: [],
    photos: [],
    tasks: [],
    clothes: [],
    haveData: false,
  },
  reducers: {
    haveWeather: (state, action) => {
      state.weather = action.payload;
    },
    addNews: (state, action) => {
      const { news } = action.payload;
      state.news = news;
    },
    addSport: (state, action) => {
      const { sport } = action.payload;
      state.sport = sport;
    },
    addPhotos: (state, action) => {
      const { photos } = action.payload;
      state.photos = photos;
    },
    addTasks: (state, action) => {
      const { tasks } = action.payload;
      state.tasks = tasks;
    },
    addClothes: (state, action) => {
      const { clothes } = action.payload;
      state.clothes = clothes;
    },
    haveData: (state) => {
      state.haveData = true;
    },
  },
});

export const { haveWeather, haveData } = homeSlice.actions; // export reducers to be called in comps

// export the current store state
export const selectHome = (state) => state.home;

export default homeSlice.reducer; // export the slice to the store
