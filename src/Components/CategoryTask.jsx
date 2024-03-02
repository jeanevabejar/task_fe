import React, { useEffect, useState } from "react";
import {
  getCategory,
  showCategory,
  updateCategory,
} from "../Utils/Categoryservice";
import { getTask, showTask, updateTask } from "../Utils/Taskservice";

const CategoryTask = () => {
  const [categoryData, setCategoryData] = useState();
  const [taskData, setTaskData] = useState();
  const categoryResponses = [];
  const taskResponses = [];

  const [selectedTask, setSelectedTask] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [taskInput, setTaskInput] = useState({
    todo: "",
  });

  const [categoryInput, setCategoryInput] = useState({
    name: "",
  });

  const getCategorys = async () => {
    try {
      const response = await getCategory();
      const ids = response.map((item) => item.id);
      showCategories(ids);
      getTasks(ids);
    } catch (error) {
      console.log(error.message);
    }
  };

  const showCategories = async (ids) => {
    try {
      for (const categoryId of ids) {
        const response = await showCategory(categoryId);
        categoryResponses.push(response);
      }
      setCategoryData(categoryResponses);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getTasks = async (ids) => {
    try {
      for (const categoryId of ids) {
        const response = await getTask(categoryId);
        const ids = response.map((item) => item.id);
        showTasks(ids, categoryId);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const showTasks = async (ids, categoryId) => {
    try {
      for (const taskId of ids) {
        const response = await showTask(categoryId, taskId);
        taskResponses.push(response);
      }
      setTaskData(taskResponses);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTasks();
    getCategorys();
  }, []);

  const handleEditTask = (categoryId, taskId) => {
    setSelectedCategory(categoryId);
    setSelectedTask(taskId);
    console.log(categoryId, taskId);
  };

  const handleTaskChange = (event) => {
    setTaskInput({
      ...taskInput,
      todo: event.target.value,
    });
    console.log(taskInput);
  };

  const updateTasks = async () => {
    try {
      const response = await updateTask(
        selectedCategory,
        taskInput,
        selectedTask
      );
      const updatedTaskData = taskData.map((task) => {
        if (task.id === selectedTask) {
          return response; // Assuming response contains the updated task object
        }
        return task;
      });
      setTaskData(updatedTaskData);
      setSelectedCategory("");
      setSelectedTask("");
      return response; // Return the response
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEditCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    console.log("sds", selectedCategory);
  };

  const handleCategoryChange = (event) => {
    setCategoryInput({
      ...categoryInput,
      name: event.target.value,
    });
    console.log(categoryInput);
  };

  const updateCategories = async () => {
    try {
      const response = await updateCategory(selectedCategory, categoryInput);
      const updatedCategoryData = categoryData.map((category) => {
        if (category.id === selectedCategory) {
          return response; // Assuming response contains the updated task object
        }
        return category;
      });
      setCategoryData(updatedCategoryData);
      setSelectedCategory("");
      return response; // Return the response
    } catch (error) {
      console.log(error.message);
    }
  };

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
                {selectedCategory === category.id ? (
                  <>
                    <input
                      type="text"
                      placeholder={category.name}
                      onChange={(e) => handleCategoryChange(e)}
                    />
                    <button className="btnstyle" 
                    onClick={updateCategories}>
                      edit
                    </button>
                  </>
                ) : (
                  <>
                    <h1>{category.name}</h1>
                    <button
                      className="btnstyle"
                      onClick={() => handleEditCategory(category.id)}
                    >
                      edit
                    </button>
                  </>
                )}
              </div>

              <div key={index} className=" w-full p-4 min-h-[25vh] gap-3 ">
                {taskData ? (
                  taskData
                    .filter((task) => task.category_id === category.id)
                    .map((task) => (
                      <>
                        <div
                          key={task.id}
                          className="  w-full flex flex-row gap-4"
                        >
                          {selectedTask === task.id ? (
                            <>
                              <input
                                type="text"
                                placeholder={task.todo}
                                onChange={(e) => handleTaskChange(e)}
                              />
                              <button
                                className="btnstyle"
                                onClick={updateTasks}
                              >
                                Edit
                              </button>
                            </>
                          ) : (
                            <>
                              <h1 className="capitalize">{task.todo}</h1>
                              <button
                                className="btnstyle"
                                onClick={() =>
                                  handleEditTask(category.id, task.id)
                                }
                              >
                                Edit
                              </button>
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

export default CategoryTask;
