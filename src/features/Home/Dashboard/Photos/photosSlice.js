import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPhoto = createAsyncThunk(
  "user/add/requestStatus",
  async (userId, thunkAPI) => {
    console.log(userId);
    const url = "http://localhost:5000/photo";
    axios({
      method: "get",
      url: url,
      data: userId,
      headers: { userid: userId },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

export const addPhoto = createAsyncThunk(
  "user/add/requestStatus",
  async (data, thunkAPI) => {
    const url = "http://localhost:5000/photo";
    axios({
      method: "post",
      url: url,
      data: data,
    })
      .then((res) => {
        console.log(res);
        thunkAPI.dispatch(addPhotoResult({ addSucess: true, addFail: false }));
      })
      .catch((err) => {
        console.dir(err);
        thunkAPI.dispatch(addPhotoResult({ addSucess: false, addFail: true }));
      });
  }
);

// redux toolkit slice of store with initial state & reducers included
export const photosSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
    newPhoto: "",
    addSuccess: false,
    addFail: false,
  },
  reducers: {
    addAllPhotos: (state, action) => {
      state.photos = action.payload;
    },
    addNewPhoto: (state, action) => {
      state.newPhoto = action.payload;
    },
    addPhotoResult: (state, action) => {
      const { addSuccess, addFail } = action.payload;
      state.addSuccess = addSuccess;
      state.addFail = addFail;
    },
  },
});

export const {
  addAllPhotos,
  addNewPhoto,
  addPhotoResult,
} = photosSlice.actions; // export reducers to be called in comps

// export the current store state
export const selectPhotos = (state) => state.login;

export default photosSlice.reducer; // export the slice to the store
