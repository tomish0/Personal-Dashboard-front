import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { domain } from "../../whichDomain/whichDomain";

export const signUp = createAsyncThunk(
  "user/add/requestStatus",
  async (data, thunkAPI) => {
    const url = `${domain}/user/sign-up`;
    axios({
      method: "post",
      url: url,
      data: data,
    })
      .then((res) => {
        if (res.data.resUsername === 1) {
          thunkAPI.dispatch(failedSignUp({ username: true }));
        }
        if (res.data.resEmail === 1) {
          thunkAPI.dispatch(failedSignUp({ email: true }));
        }
        if (res.data.resUsername === 1 && res.data.resEmail === 1) {
          thunkAPI.dispatch(failedSignUp({ username: true, email: true }));
        }
        if (res.data.username) {
          thunkAPI.dispatch(
            addUserIdUsername({
              userId: res.data.userId,
              username: res.data.username,
            })
          );
        }
      })
      .catch((err) => {
        thunkAPI.dispatch(failedSignUp({ err: true }));
      });
  }
);

// redux toolkit slice of store with initial state & reducers included
export const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    userId: "",
    username: "",
    failedLogin: { username: false, email: false, err: false },
  },
  reducers: {
    addUserIdUsername: (state, action) => {
      const { userId, username } = action.payload;
      state.userId = userId;
      state.username = username;
    },
    failedSignUp: (state, action) => {
      const { username, email, err } = action.payload;
      state.failedLogin.username = username;
      state.failedLogin.email = email;
      state.failedLogin.err = err;
    },
  },
});

export const { addUserIdUsername, failedSignUp } = signUpSlice.actions; // export reducers to be called in comps

// export the current store state
export const selectSignUp = (state) => state.signUp;

export default signUpSlice.reducer; // export the slice to the store
