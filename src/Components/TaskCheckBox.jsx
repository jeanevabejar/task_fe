import React from "react";

const TaskCheckBox = ({ task, taskId, categoryId, handleCheckboxChange }) => {
  return (
    <>
      <input
        className="min-w-[1.5rem] min-h-[1.5rem] appearance-none border-2 border-black checked:bg-bg7 bg-set rounded-sm" 
        type="checkbox"
        checked={task.completed === true}
        onChange={() => handleCheckboxChange(taskId, categoryId)}
      />
    </>
  );
};

export default TaskCheckBox;
