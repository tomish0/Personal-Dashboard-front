import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTasks, addAllTasks, selectTasks } from "./tasksSlice";
import { selectLogin } from "../../../Login/loginSlice";
import { selectSignUp } from "../../../SignUp/signUpSlice";
import plusIcon from "../../../../Assets/Plus_button_small.png";
import TasksTable from "./TasksTable";
import "../../../../css/Tasks.css";

function Tasks() {
  const dispatch = useDispatch();

  const loginData = useSelector(selectLogin);
  const signUpData = useSelector(selectSignUp);

  const taskData = useSelector(selectTasks);

  const task = { task: "", priority: "Medium", status: false };

  var data = [...taskData.allTasks, task];

  const [allTasks, setAllTasks] = useState(data);

  const [changeMade, setChangeMade] = useState(false);

  const handleNewTask = (e, index) => {
    setChangeMade(true);
    const correctIndex = index + 1;
    setAllTasks([
      ...allTasks.slice(0, index),
      {
        _id: allTasks[index]._id,
        task: e.target.value,
        priority: allTasks[index].priority,
        status: false,
      },
      ...allTasks.slice(correctIndex),
    ]);
  };

  const handleNewPriority = (e, index) => {
    const priority = e.target.value;
    setChangeMade(true);
    const correctIndex = index + 1;
    setAllTasks([
      ...allTasks.slice(0, index),
      {
        _id: allTasks[index]._id,
        task: allTasks[index].task,
        priority: priority,
        status: false,
      },
      ...allTasks.slice(correctIndex),
    ]);
    var allTasksCopy = allTasks;
    var newTask = allTasksCopy.slice(index, index + 1);
    var taskObject = newTask[0];
    allTasksCopy.splice(index, 1);
    if (priority === "High") {
      taskObject.priority = "High";
      setAllTasks(() => [taskObject, ...allTasksCopy]);
    }
    if (priority === "Medium") {
      const lowIndex = allTasksCopy.findIndex((item) => {
        return item.priority === "Low";
      });
      taskObject.priority = "Medium";
      allTasksCopy.splice(lowIndex, 0, taskObject);
      setAllTasks(() => [...allTasksCopy]);
    }
    if (priority === "Low") {
      taskObject.priority = "Low";
      setAllTasks(() => [...allTasksCopy, taskObject]);

    }
  };

  const handleNewStatus = (e, index) => {
    setChangeMade(true);
    const correctIndex = index + 1;
    setAllTasks([
      ...allTasks.slice(0, index),
      {
        _id: allTasks[index]._id,
        task: allTasks[index].task,
        priority: allTasks[index].priority,
        status: e.target.checked,
      },
      ...allTasks.slice(correctIndex),
    ]);
  };

  useEffect(() => {
    if (changeMade) {
      var taskData = [...allTasks];
      var data = [];
      taskData.forEach((task) => {
        if (task.length > 0) {
          data.push(task);
        }
      });
      dispatch(addAllTasks(data));
    }
  }, [dispatch, allTasks, changeMade]);

  useEffect(() => {
    const userId =
      loginData.userId.length > 0 ? loginData.userId : signUpData.userId;
    return () => {
      dispatch(postTasks(userId));
    };
  }, [dispatch, loginData.userId, signUpData.userId]);

  return (
    <div className="tasks-container">
      <div className="tasks-plus-btn">
        <TasksTable
          allTasks={allTasks}
          handleNewTask={handleNewTask}
          handleNewPriority={handleNewPriority}
          handleNewStatus={handleNewStatus}
        />
        <img
          src={plusIcon}
          alt="icon-plus"
          onClick={() => {
            const newArray = allTasks.concat(task);
            setChangeMade(false);
            setAllTasks(newArray);
          }}
        />
      </div>
    </div>
  );
}

export default Tasks;
