import React from "react";


const DeleteTask = ({ taskId, categoryId, deletingTask }) => {


  return (
    <>
      <button className="btnstyle" onClick={()=>deletingTask(categoryId, taskId)}>
        Del
      </button>
    </>
  );
};

export default DeleteTask;
