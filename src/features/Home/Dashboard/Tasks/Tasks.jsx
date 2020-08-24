import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTasks, addAllTasks, selectTasks } from "./tasksSlice";
import { selectLogin } from "../../../Login/loginSlice";
import { selectSignUp } from "../../../SignUp/signUpSlice";
import plusIcon from "../../../../Assets/Plus_button_small.png";
import BackButton from "../../../Button/BackButton";
import "../../../../css/Tasks.css";

function Tasks() {
  const dispatch = useDispatch();

  const loginData = useSelector(selectLogin);
  const signUpData = useSelector(selectSignUp);

  const taskData = useSelector(selectTasks);

  const task = { value: "", status: "" };

  var data = [...taskData.allTasks, task];

  const [allTasks, setAllTasks] = useState(data);

  const [changeMade, setChangeMade] = useState(false);

  const handleNewTaskStatus = (e, index) => {
    var id;
    taskData.newTaskIds.forEach((item) => {
      allTasks.forEach((i, index) => {
        if (item.currentIndex === index) {
          id = item.taskId;
        }
      });
    });
    setChangeMade(true);
    const correctIndex = index + 1;
    setAllTasks([
      ...allTasks.slice(0, index),
      {
        _id: !allTasks[index]._id && id ? id : allTasks[index]._id,
        value: allTasks[index].value,
        status: e.target.checked,
      },
      ...allTasks.slice(correctIndex),
    ]);
  };

  const handleNewTaskValue = (e, index) => {
    var id;
    taskData.newTaskIds.forEach((item) => {
      allTasks.forEach((i, index) => {
        if (item.currentIndex === index) {
          id = item.taskId;
        }
      });
    });
    setChangeMade(true);
    const correctIndex = index + 1;
    setAllTasks([
      ...allTasks.slice(0, index),
      {
        _id: !allTasks[index]._id && id ? id : allTasks[index]._id,
        value: e.target.value,
        status:
          allTasks[index].status.length === 0 ? false : allTasks[index].status,
      },
      ...allTasks.slice(correctIndex),
    ]);
  };

  useEffect(() => {
    if (changeMade) {
      var taskData = [...allTasks];
      var data = [];
      taskData.forEach((task) => {
        if (task.value.length > 0) {
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
      <BackButton link={'/Home'}/>
      <h1>Tasks</h1>
      <div className="tasks-plus-btn">
        {allTasks.map((item, index) => {
          return (
            <div className="each-task" key={index}>
              <input
                type="text"
                id={`id-${index}-value`}
                name="value"
                placeholder={`Task ${index + 1}...`}
                value={allTasks[index].value}
                onChange={(e) => handleNewTaskValue(e, index)}
              />
              <input
                type="checkbox"
                checked={item.status}
                id={`id-${index}-status`}
                name="status"
                value={allTasks[index].status}
                onChange={(e) => handleNewTaskStatus(e, index)}
              />
            </div>
          );
        })}
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
