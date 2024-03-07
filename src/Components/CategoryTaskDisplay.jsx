import React, { useState } from "react";
import TaskCheckBox from "./TaskCheckBox";
import DeleteTask from "./DeleteTask";
import DeleteCategory from "./DeleteCategory";
import { VscEdit } from "react-icons/vsc";

const CategoryTaskDisplay = ({
  selectedCategory,
  selectedTask,
  handleEditCategory,
  handleEditTask,
  handleCategoryChange,
  handleTaskChange,
  updateTasks,
  updateCategories,
  categoryData,
  taskData,
  handleCheckboxChange,
  deletingTask,
  deletingCategory,
}) => {
  const [editingCategory, setEditingCategory] = useState(null); 
  const [editingTask, setEditingTask] = useState(null); 

  return (
    <>
      <div className="display flex-col flex-wrap w-full h-[90vh] gap-6  p-5 custom-scrollbar ">
        {categoryData ? (
          categoryData.sort((a, b) => b.id - a.id).map((category, index) => (
            <div
              key={category.id}
              className="display flex-col gap-[0.5rem]  min-w-[50%] min-h-[40vh] max-w-[50%] max-h-[40vh] text-wrap bg-bg15 bg-set p-5 custom-scrollbar"
            >
              <div className=" flex-row flex w-full min-h-[5vh] text-left p-4 border-dashed border-b-2 border-black gap-4 justify-between truncate ">
                {editingCategory === category.id &&
                selectedCategory === category.id ? (
                  <>
                    <input
                      className="w-[60%] h-[5vh] p-2 text-[1.5rem] bg-transparent"
                      type="text"
                      placeholder={category.name}
                      onChange={(e) => handleCategoryChange(e)}
                    />
                    <button
                      onClick={() => {
                        updateCategories();
                        setEditingCategory(null);
                      }}
                    >
                      <VscEdit className="size-[1.5rem]" />
                    </button>
                  </>
                ) : (
                  <>
                    <h1 className="text-[2rem]">{category.name}</h1>
                    <div className="w-[20%] flex justify-between ">
                      <button
                        onClick={() => {
                          handleEditCategory(category.id);
                          setEditingCategory(category.id);
                        }}
                      >
                        <VscEdit className="size-[1.5rem] hover:bg-bg10 bg-set" />
                      </button>
                      <DeleteCategory
                        categoryId={category.id}
                        deletingCategory={deletingCategory}
                      />
                    </div>
                  </>
                )}
              </div>

              <div
                key={index}
                className="flex flex-col w-full p-4 min-h-[20vh] gap-6 overflow-auto custom-scrollbar "
              >
                {taskData ? (
                  taskData
                    .filter((task) => task.category_id === category.id)
                    .map((task) => (
                      <>
                        <div
                          key={task.id}
                          className="  w-full flex flex-row  gap-5  justify-between "
                        >
                          {editingTask === task.id ||
                          selectedTask === task.id ? (
                            <>
                              <input
                                type="text"
                                placeholder={task.todo}
                                onChange={(e) => handleTaskChange(e)}
                              />
                              <button
                                onClick={() => {
                                  updateTasks();
                                  setEditingTask(null);
                                }}
                              >
                                <VscEdit className="size-[1.5rem] " />
                              </button>
                            </>
                          ) : (
                            <>
                              <div className="display flex-row truncate gap-1  ">
                                <TaskCheckBox
                                  task={task}
                                  taskId={task.id}
                                  categoryId={category.id}
                                  handleCheckboxChange={handleCheckboxChange}
                                />
                                {task.completed === true ? (
                                  <>
                                    <h1 className="line-through italic capitalize text-[1.2rem] truncate ">
                                      {task.todo}
                                    </h1>
                                  </>
                                ) : (
                                  <h1 className="capitalize  text-[1.2rem] truncate">
                                    {task.todo}
                                  </h1>
                                )}
                              </div>

                              <div className=" w-[20%] flex justify-between">
                                <button
                                  onClick={() => {
                                    handleEditTask(category.id, task.id);
                                    setEditingTask(task.id);
                                  }}
                                >
                                  <VscEdit className="size-[1.5rem] hover:bg-bg10 bg-set" />
                                </button>

                                <DeleteTask
                                  taskId={task.id}
                                  categoryId={category.id}
                                  deletingTask={deletingTask}
                                />
                              </div>
                            </>
                          )}
                        </div>
                      </>
                    ))
                ) : (
                  <p>No task data available</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No category data available</p>
        )}
      </div>
    </>
  );
};

export default CategoryTaskDisplay;
