import React, { useEffect, useState } from "react";
import { getCategory, showCategory } from "../Utils/Categoryservice";
import { getTask, showTask } from "../Utils/Taskservice";

const CategoryTask = () => {
  const [categoryIds, setCategoryIds] = useState([]);
  const [categoryData, setCategoryData] = useState();
  const [taskData, setTaskData] = useState();
  const categoryResponses = [];
  const taskResponses = [];

  const getCategorys = async () => {
    try {
      const response = await getCategory();
      const ids = response.map((item) => item.id);
      setCategoryIds(ids);
      await showCategories(ids);
    } catch (error) {
      console.log(error.message);
    }
  };

  const showCategories = async (ids) => {
    try {
      for (const categoryId of ids) {
        const response = await showCategory(categoryId);
        categoryResponses.push(response);
        // console.log("Category", categoryResponses);
        // console.log("Category1", categoryData);
        // console.log("Category show", response);
      }
      setCategoryData(categoryResponses);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getTasks = async () => {
    try {
      for (const categoryId of categoryIds) {
        const response = await getTask(categoryId);
        const ids = response.map((item) => item.id);
        await showTasks(ids, categoryId);
        // console.log("task get", response);
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
        // console.log("task show", response);
        // console.log(categoryId);
        // console.log("taskData", taskResponses);
        // console.log("taskData1", taskData);
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
    <div>
      {categoryData ? (
        categoryData.map((category) => <h1 key={category.id}>{category.name}</h1>)
      ) : (
        <p>No category data available</p>
      )}
      {taskData ? (
        taskData.map((task) => <h1 key={task.id}>{task.title}</h1>)
      ) : (
        <p>No category data available</p>
      )}
    </div>
  );
};

export default CategoryTask;
