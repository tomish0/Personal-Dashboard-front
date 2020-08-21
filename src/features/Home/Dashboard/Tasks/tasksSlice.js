import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addTasks } from "../../homeSlice";
import { domain } from "../../../../whichDomain/whichDomain";

export const getTasksData = createAsyncThunk(
  "user/add/requestStatus",
  async (userId, thunkAPI) => {
    const url = `${domain}/tasks`;
    axios({
      method: "get",
      url: url,
      headers: { userid: userId },
    })
      .then((res) => {
        console.log(res);
        thunkAPI.dispatch(addTasks(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

export const addTask = createAsyncThunk(
  "user/add/requestStatus",
  async (data, thunkAPI) => {
    const url = `${domain}/tasks`;
    axios({
      method: "post",
      url: url,
      data: data,
    })
      .then((res) => {
        console.log(res);
        // thunkAPI.dispatch(addPhotoResult({ addSucess: true, addFail: false }));
      })
      .catch((err) => {
        console.dir(err);
        // thunkAPI.dispatch(addPhotoResult({ addSucess: false, addFail: true }));
      });
  }
);

// redux toolkit slice of store with initial state & reducers included
export const tasksSlice = createSlice({
  name: "photos",
  initialState: {
    allTasks: [],
    addSuccess: false,
    addFail: false,
  },
  reducers: {
    addAllTasks: (state, action) => {
      state.allTasks = action.payload;
    },
  },
});

export const { addAllTasks } = tasksSlice.actions; // export reducers to be called in comps

// export the current store state
export const selectTasks = (state) => state.tasks;

export default tasksSlice.reducer; // export the slice to the store
