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
        var taskData = [];
        res.data.forEach((task) => {
          if (task.priority === "High") {
            taskData.unshift(task);
          }
          if (task.priority === "Medium") {
            const lowIndex = taskData.findIndex((item) => {
              return item.priority === "Low";
            });
            if (lowIndex === -1) {
              taskData.push(task);
            } else {
              taskData.splice(lowIndex, 0, task);
            }
          }
          if (task.priority === "Low") {
            taskData.push(task);
          }
        });
        thunkAPI.dispatch(addAllTasks(taskData));
        thunkAPI.dispatch(checkDataCollection({ haveTasksData: true }));
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

export const addNewTask = createAsyncThunk("", async (data, thunkAPI) => {
  const url = `${domain}/tasks/add`;
  axios({
    method: "post",
    url: url,
    data: data.taskData,
    headers: { userid: data.userId },
  })
    .then((res) => {
      thunkAPI.dispatch(getTasksData(data.userId));
    })
    .catch((err) => {
      console.dir(err);
    });
});

export const updateTask = createAsyncThunk("", async (data, thunkAPI) => {
  const url = `${domain}/tasks/update`;
  axios({
    method: "post",
    url: url,
    data: data,
    headers: { userid: data.userId },
  })
    .then((res) => {
      thunkAPI.dispatch(getTasksData(data.userId));
    })
    .catch((err) => {
      console.dir(err);
    });
});

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
  },
});

export const { addAllTasks, addNewTaskIds } = tasksSlice.actions; // export reducers to be called in comps

// export the current store state
export const selectTasks = (state) => state.tasks;

export default tasksSlice.reducer; // export the slice to the store
