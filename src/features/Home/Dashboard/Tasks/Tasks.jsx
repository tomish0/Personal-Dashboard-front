import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask, addNewTask, deleteTask } from "./tasksSlice";
import { selectLogin } from "../../../Login/loginSlice";
import { selectSignUp } from "../../../SignUp/signUpSlice";
import TasksTable from "./TasksTable";
import "../../../../css/Tasks.css";

function Tasks(props) {
  const { allTasksData } = props;

  const dispatch = useDispatch();

  const loginData = useSelector(selectLogin);
  const signUpData = useSelector(selectSignUp);

  const task = { task: "", priority: "Low", status: false };

  const [newTask, setNewTask] = useState(task);

  const [allTasks, setAllTasks] = useState(allTasksData);

  useEffect(() => {
    setAllTasks(allTasksData);
  }, [allTasksData]);

  const handleNewTask = (e) => {
    setNewTask({
      task: e.target.value,
      priority: newTask.priority,
      status: newTask.status,
    });
  };

  const handleNewPriority = (e) => {
    setNewTask({
      task: newTask.task,
      priority: e.target.value,
      status: newTask.status,
    });
  };

  const handleAddNewTask = () => {
    var priority = newTask.priority;
    var taskObject = newTask;
    if (newTask.task.length > 0) {
      handlePriorityPosition(allTasks, priority, taskObject);
      const userId =
        loginData.userId.length > 0 ? loginData.userId : signUpData.userId;
      var data = {
        userId: userId,
        taskData: newTask,
      };
      dispatch(addNewTask(data));
      setNewTask(task);
    }
  };

  const handleOldPriority = (e, index) => {
    const priority = e.target.value;
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
    var newTask = allTasks.slice(index, index + 1);
    var taskObject = { ...newTask[0] };
    var newArray = removeTaskFromLocalState(index)
    handlePriorityPosition(newArray, priority, taskObject);
    dispatch(updateTask(taskObject));
  };

  const handlePriorityPosition = (newArray, priority, taskObject) => {
    if (priority === "High") {
      taskObject.priority = "High";
      setAllTasks(() => [taskObject, ...newArray]);
    }
    if (priority === "Medium") {
      taskObject.priority = "Medium";
      const lowIndex = allTasks.findIndex((item) => {
        return item.priority === "Low";
      });
      if (lowIndex !== -1) {
        var highPriorityTasks = newArray.slice(0, lowIndex);
        var lowPriorityTasks = newArray.slice(lowIndex);
        setAllTasks(() => [
          ...highPriorityTasks,
          taskObject,
          ...lowPriorityTasks,
        ]);
      } else {
        setAllTasks(() => [...newArray, taskObject]);
      }
    }
    if (priority === "Low") {
      taskObject.priority = "Low";
      setAllTasks(() => [...newArray, taskObject]);
    }
  };

  const handleTaskComplete = (index) => {
    const userId =
      loginData.userId.length > 0 ? loginData.userId : signUpData.userId;
    var data = {
      userId: userId,
      taskDBId: allTasks[index]._id,
    };
    dispatch(deleteTask(data));
    var newArray = removeTaskFromLocalState(index)
    setAllTasks(() => [...newArray]);

  };

  const removeTaskFromLocalState = (index) => {
    var topPriorityTasks = allTasks.slice(0, index);
    var bottomPriorityTasks = allTasks.slice(index + 1);
    var newArray = [...topPriorityTasks, ...bottomPriorityTasks];
    return newArray
  }

  return (
    <div className="tasks-container">
      <TasksTable
        allTasks={allTasks}
        handleNewTask={handleNewTask}
        handleAddNewTask={handleAddNewTask}
        handleNewPriority={handleNewPriority}
        handleOldPriority={handleOldPriority}
        handleTaskComplete={handleTaskComplete}
        newTask={newTask}
      />
    </div>
  );
}

export default Tasks;
