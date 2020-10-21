import React from "react";

function TasksTable(props) {
  const { allTasks, handleNewTask, handleNewPriority, handleNewStatus } = props;
  
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
            <tr className="each-task" key={index}>
              <td>
                <input
                  type="text"
                  id={`id-${index}-value`}
                  name="value"
                  placeholder={`Task ${index + 1}...`}
                  value={allTasks[index].task}
                  onChange={(e) => handleNewTask(e, index)}
                />
              </td>
              <td>
                <select
                  className="drop-down"
                  onChange={(e) => handleNewPriority(e, index)}
                  value={allTasks[index].priority}
                >
                  <option value={"High"}>High</option>
                  <option value={"Medium"}>Medium</option>
                  <option value={"Low"}>Low</option>
                </select>
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.status}
                  id={`id-${index}-status`}
                  name="status"
                  value={allTasks[index].status}
                  onChange={(e) => handleNewStatus(e, index)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TasksTable;
