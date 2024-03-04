import React from "react";

const TaskCheckBox = ({ task, taskId, categoryId, handleCheckboxChange }) => {
  return (
    <>
      <input
        className="w-[1.5rem] h-[1.5rem] appearance-none border-2 border-black checked:bg-green-100" 
        type="checkbox"
        checked={task.completed === true}
        onChange={() => handleCheckboxChange(taskId, categoryId)}
      />
    </>
  );
};

export default TaskCheckBox;
