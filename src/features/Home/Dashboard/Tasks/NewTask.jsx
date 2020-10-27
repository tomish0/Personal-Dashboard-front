import React from "react";
import Button from "../../../Button/Button"

function NewTask(props) {
  const {
    handleNewTask,
    handleNewPriority,
    newTask,
    handleAddNewTask
  } = props;

  return (
    <tr className="new-task">
      <td>
        <input
          type="text"
          name="value"
          placeholder={`New Task...`}
          value={newTask.task}
          onChange={(e) => handleNewTask(e)}
        />
      </td>
      <td>
        <select
          className="drop-down"
          onChange={(e) => handleNewPriority(e)}
          value={newTask.priority}
        >
          <option value={"High"}>High</option>
          <option value={"Medium"}>Medium</option>
          <option value={"Low"}>Low</option>
        </select>
      </td>
      <td className="button-cell-container">
        <Button btnMessage={"Add"} onClick={handleAddNewTask} />
      </td>
    </tr>
  );
}

export default NewTask;
