import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { domain } from "../../../../whichDomain/whichDomain";

export const getPhoto = createAsyncThunk(
  "user/add/requestStatus",
  async (userId, thunkAPI) => {
    const url = `${domain}/photo`;
    axios({
      method: "get",
      url: url,
      headers: { userid: userId },
    })
      .then((res) => {
        thunkAPI.dispatch(addAllPhotos(res.data.photos));
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

export const addPhoto = createAsyncThunk(
  "user/add/requestStatus",
  async (data, thunkAPI) => {
    const url = `${domain}/photo`;
    axios({
      method: "post",
      url: url,
      data: data,
    })
      .then((res) => {
        console.log(res);
        thunkAPI.dispatch(addPhotoResult({ addSuccess: true, addFail: false }));
      })
      .catch((err) => {
        console.dir(err);
        thunkAPI.dispatch(addPhotoResult({ addSuccess: false, addFail: true }));
      });
  }
);

// redux toolkit slice of store with initial state & reducers included
export const photosSlice = createSlice({
  name: "photos",
  initialState: {
    allPhotos: [],
    newPhoto: "",
    addSuccess: false,
    addFail: false,
  },
  reducers: {
    addAllPhotos: (state, action) => {
      state.allPhotos = action.payload;
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
export const selectPhotos = (state) => state.photos;

export default photosSlice.reducer; // export the slice to the store
