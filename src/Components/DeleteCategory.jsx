import React from 'react'

const DeleteCategory = ({categoryId, deletingCategory}) => {
    return (
        <>
          <button className="btnstyle" onClick={()=> deletingCategory(categoryId)}>
            Del
          </button>
        </>
      );
}

export default DeleteCategory