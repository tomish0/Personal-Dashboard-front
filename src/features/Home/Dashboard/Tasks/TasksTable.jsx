import React from "react";
import NewTask from "./NewTask";
import EachTask from "./EachTask";

function TasksTable(props) {
  const {
    allTasks,
    handleNewTask,
    handleNewPriority,
    handleOldPriority,
    handleTaskComplete,
    newTask,
    handleAddNewTask
  } = props;

  return (
    <table>
      <tbody>
        <tr>
          <th>Task</th>
          <th>Priority</th>
          <th>Status</th>
        </tr>
        {allTasks.map((item, index) => {
          return (
            <EachTask
              key={index}
              index={index}
              allTasks={allTasks}
              handleNewTask={handleNewTask}
              handleOldPriority={handleOldPriority}
              handleTaskComplete={handleTaskComplete}
            />
          );
        })}
        <NewTask
          handleNewTask={handleNewTask}
          handleNewPriority={handleNewPriority}
          newTask={newTask}
          handleAddNewTask={handleAddNewTask}
        />
      </tbody>
    </table>
  );
}

export default TasksTable;
