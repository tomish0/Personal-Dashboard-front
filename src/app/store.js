import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../features/Home/homeSlice";
import loginSlice from "../features/Login/loginSlice";
import signUpSlice from "../features/SignUp/signUpSlice";
import photosSlice from "../features/Home/Dashboard/Photos/photosSlice";
import newsSlice from "../features/Home/Dashboard/News/newsSlice";
import tasksSlice from "../features/Home/Dashboard/Tasks/tasksSlice";
import stockSlice from "../features/Home/Dashboard/Stock/stockSlice";
import weatherSlice from "../features/Home/Header/Weather/weatherSlice";

export default configureStore({
  reducer: {
    home: homeSlice,
    login: loginSlice,
    signUp: signUpSlice,
    photos: photosSlice,
    news: newsSlice,
    tasks: tasksSlice,
    stock: stockSlice,
    weather: weatherSlice,
  },
});
