import React from "react";
import Button from "../../../Button/Button";

function EachTask(props) {
  const {
    index,
    allTasks,
    handleOldPriority,
    handleTaskComplete,
  } = props;
  return (
    <tr className="each-task">
      <td>{allTasks[index].task}</td>
      <td>
        <select
          className="drop-down"
          onChange={(e) => handleOldPriority(e, index)}
          value={allTasks[index].priority}
        >
          <option value={"High"}>High</option>
          <option value={"Medium"}>Medium</option>
          <option value={"Low"}>Low</option>
        </select>
      </td>
      <td>
        <Button
          btnMessage={"Completed"}
          onClick={() => handleTaskComplete(index)}
        />
      </td>
    </tr>
  );
}

export default EachTask;
