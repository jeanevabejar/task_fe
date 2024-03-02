import React, { useEffect, useState } from "react";
import { getCategory, showCategory } from "../Utils/Categoryservice";
import { getTask, showTask } from "../Utils/Taskservice";
import UpdateTask from "./UpdateTask";

const CategoryTask = () => {
  const [categoryData, setCategoryData] = useState();
  const [taskData, setTaskData] = useState();
  const categoryResponses = [];
  const taskResponses = [];

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
        console.log("idc", categoryId);
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

  return (
    <>
    <div className="display flex-col flex-wrap w-full h-[90vh] gap-6  p-5 custom-scrollbar">
      {categoryData ? (
        categoryData.map((category, index) => (
          <div
            key={category.id}
            className="display flex-col gap-4 border-2 min-w-[50%] min-h-[30vh] max-w-[50%] truncate"
          >
            <h1 className="w-full min-h-[5vh] text-left p-4 border-dashed border-b-2 border-slate-950">
              {category.name}
            </h1>
            <div key={index} className=" w-full p-4 min-h-[25vh] gap-3 ">
              {taskData ? (
                taskData
                  .filter((task) => task.category_id === category.id)
                  .map((task, index) => (
                    <>
                      <div
                        key={task.id}
                        className="  w-full flex flex-row gap-4"
                      >
                        <h1>Title:</h1>
                        <h1 className="capitalize">{task.title}</h1>
                      </div>
                      <div
                        key={index}
                        className="w-full flex flex-row gap-4 border-dashed border-b-2 border-slate-950 pb-1"
                      >
                        <h1>Description:</h1>
                        <p className="capitalize">{task.description}</p>
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
    {/* <UpdateTask/>  #for modal later*/}
    </>
  );
};

export default CategoryTask;
