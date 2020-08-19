import React, { useState } from "react";
import plusIcon from "../../../../Assets/Plus_button_small.png";
import Button from "../../../Button/Button";

import "../../../../css/Tasks.css";

function Tasks(props) {
  const task = { value: "", status: "" };
  const [allTasks, setAllTasks] = useState([task]);

  const handleNewTaskStatus = (e, index) => {
    const correctIndex = index + 1;
    setAllTasks([
      ...allTasks.slice(0, index),
      {
        value: allTasks[index].value,
        status: e.target.value,
      },
      ...allTasks.slice(correctIndex),
    ]);
  };

  const handleNewTaskValue = (e, index) => {
    const correctIndex = index + 1;
    setAllTasks([
      ...allTasks.slice(0, index),
      {
        value: e.target.value,
        status: allTasks[index].status,
      },
      ...allTasks.slice(correctIndex),
    ]);
  };

  return (
    <div className="tasks-container">
      <h1>Tasks</h1>
      <div className='tasks-plus-btn'>
        {allTasks.map((item, index) => {
          return (
            <div className="each-task" key={index}>
              <input
                type="text"
                id={`id-${index}-value`}
                name="value"
                placeholder={"Task..."}
                value={allTasks[index].value}
                onChange={(e) => handleNewTaskValue(e, index)}
              />
              <input
                type="checkbox"
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
          onClick={() => {
            const newArray = allTasks.concat(task);
            setAllTasks(newArray);
          }}
        />
      </div>
    </div>
  );
}

export default Tasks;
