import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";


const DeleteTask = ({ taskId, categoryId, deletingTask }) => {


  return (
    <>
      <button  onClick={()=>deletingTask(categoryId, taskId)}>
      <RiDeleteBin5Line className="size-[1.5rem] hover:bg-bg11 bg-set" />
      </button>
    </>
  );
};

export default DeleteTask;
