import React from "react";

const TaskCheckBox = ({
  task,
  taskId,
  categoryId,
  handleCheckboxChange,
}) => {
 

  return (
    <>

      <input
        type="checkbox"
        checked={task.completed === true} 
        onChange={() => handleCheckboxChange(taskId, categoryId)} 
      />
    </>
  );
};

export default TaskCheckBox;
