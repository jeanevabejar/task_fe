import React, { useState } from "react";
import TaskCheckBox from "./TaskCheckBox";
import DeleteTask from "./DeleteTask";
import DeleteCategory from "./DeleteCategory";

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
  const [editingCategory, setEditingCategory] = useState(null); // State to manage editing category
  const [editingTask, setEditingTask] = useState(null); // State to manage editing task
  return (
    <>
      <div className="display flex-col flex-wrap w-full h-[90vh] gap-6  p-5 custom-scrollbar">
        {categoryData ? (
          categoryData.map((category, index) => (
            <div
              key={category.id}
              className="display flex-col gap-4 border-2 min-w-[50%] min-h-[30vh] max-w-[50%] flex-wrap text-wrap"
            >
              <div className=" flex-row flex w-full min-h-[5vh] text-left p-4 border-dashed border-b-2 border-slate-950 gap-4">
                {editingCategory === category.id &&
                selectedCategory === category.id ? (
                  <>
                    <input
                      type="text"
                      placeholder={category.name}
                      onChange={(e) => handleCategoryChange(e)}
                    />
                    <button
                      className="btnstyle"
                      onClick={() => {
                        updateCategories();
                        setEditingCategory(null);
                      }}
                    >
                      edit
                    </button>
                  </>
                ) : (
                  <>
                    <h1>{category.name}</h1>
                    <button
                      className="btnstyle"
                      onClick={() => {
                        handleEditCategory(category.id);
                        setEditingCategory(category.id);
                      }}
                    >
                      edit
                    </button>
                    <DeleteCategory
                      categoryId={category.id}
                      deletingCategory={deletingCategory}
                    />
                  </>
                )}
              </div>

              <div
                key={index}
                className="flex flex-col w-full p-4 min-h-[25vh] gap-6 overflow-auto "
              >
                {taskData ? (
                  taskData
                    .filter((task) => task.category_id === category.id)
                    .map((task) => (
                      <>
                        <div
                          key={task.id}
                          className="  w-full flex flex-row gap-5"
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
                                className="btnstyle"
                                onClick={() => {
                                  updateTasks();
                                  setEditingTask(null);
                                }}
                              >
                                Edit
                              </button>
                            </>
                          ) : (
                            <>
                              {task.completed === true ? (
                                <h1 className="line-through italic capitalize">
                                  {task.todo}
                                </h1>
                              ) : (
                                <h1 className="capitalize">{task.todo}</h1>
                              )}

                              <button
                                className="btnstyle"
                                onClick={() => {
                                  handleEditTask(category.id, task.id);
                                  setEditingTask(task.id);
                                }}
                              >
                                Edit
                              </button>
                              <TaskCheckBox
                                task={task}
                                taskId={task.id}
                                categoryId={category.id}
                                handleCheckboxChange={handleCheckboxChange}
                              />
                              <DeleteTask
                                taskId={task.id}
                                categoryId={category.id}
                                deletingTask={deletingTask}
                              />
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
