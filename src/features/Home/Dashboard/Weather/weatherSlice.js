import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addWeather } from "../../homeSlice";

export const getWeatherData = createAsyncThunk(
  "user/add/requestStatus",
  async (data, thunkAPI) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${
      data.latitude
    }&lon=${data.longtitude}&appid=${"d0a10211ea3d36b0a6423a104782130e"}`;
    axios({
      method: "get",
      url: url,
    })
      .then((res) => {
        const temp = (res.data.main.temp - 273.15).toFixed(0);
        const location = res.data.name;
        var icon;
        if (res.data.weather[0].main === "Rain") {
          icon = "Rain";
        }
        if (
          res.data.weather[0].main === "Sun" ||
          res.data.weather[0].main === "Clear"
        ) {
          icon = "Sun";
        }
        if (res.data.weather[0].main === "Clouds") {
          icon = "Clouds";
        }
        thunkAPI.dispatch(
          addWeather({
            haveWeatherData: true,
            temperature: temp,
            icon: icon,
            location: location,
          })
        );
      })
      .catch((err) => {
        console.dir(err);
      });
  }
);

// redux toolkit slice of store with initial state & reducers included
export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    temperature: "",
    location: "",
    icon: "",
  },
  reducers: {},
});

export const { addWeatherData } = weatherSlice.actions; // export reducers to be called in comps

// export the current store state
export const selectWeather = (state) => state.weather;

export default weatherSlice.reducer; // export the slice to the store
