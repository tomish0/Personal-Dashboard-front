import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../features/Home/homeSlice";
import loginSlice from "../features/Login/loginSlice";
import signUpSlice from "../features/SignUp/signUpSlice";
import photosSlice from "../features/Home/Dashboard/Photos/photosSlice"

export default configureStore({
  reducer: {
    home: homeSlice,
    login: loginSlice,
    signUp: signUpSlice,
    photosSlice: photosSlice,
  },
});
