import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { checkDataCollection } from "../../homeSlice";
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
        res.data.forEach((item) => {
          delete item.userId;
        });
        console.log(res.data);
        thunkAPI.dispatch(
          addAllTasks(res.data)
        );
        thunkAPI.dispatch(checkDataCollection({ haveTasksData: true }));
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

export const postTasks = createAsyncThunk(
  "user/add/requestStatus",
  async (data, thunkAPI) => {
    const url = `${domain}/tasks`;
    // const state = thunkAPI.getState();
    // const allTasks = state.tasks.allTasks;
    axios({
      method: "post",
      url: url,
      data: data.data,
      headers: { userid: data.userId },
    })
      .then((res) => {
        thunkAPI.dispatch(addNewTaskIds(res.data));
        thunkAPI.dispatch(getTasksData(data.userId));
      })
      .catch((err) => {
        console.dir(err);
      });
  }
);

// redux toolkit slice of store with initial state & reducers included
export const tasksSlice = createSlice({
  name: "photos",
  initialState: {
    allTasks: [],
    newTaskIds: [],
  },
  reducers: {
    addAllTasks: (state, action) => {
      state.allTasks = action.payload;
    },
    addNewTaskIds: (state, action) => {
      state.newTaskIds = action.payload;
    },
  },
});

export const { addAllTasks, addNewTaskIds } = tasksSlice.actions; // export reducers to be called in comps

// export the current store state
export const selectTasks = (state) => state.tasks;

export default tasksSlice.reducer; // export the slice to the store
