import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";


const DeleteCategory = ({categoryId, deletingCategory}) => {
    return (
        <>
          <button  onClick={()=> deletingCategory(categoryId)}>
          <RiDeleteBin5Line className="size-[1.5rem] hover:bg-bg11 bg-set" />
          </button>
        </>
      );
}

export default DeleteCategory