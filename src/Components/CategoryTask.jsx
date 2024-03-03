import React, { useEffect, useState } from "react";
import {
  getCategory,
  showCategory,
  updateCategory,
} from "../Utils/Categoryservice";
import { getTask, showTask, updateTask } from "../Utils/Taskservice";
import CategoryTaskDisplay from "./CategoryTaskDisplay";

const CategoryTask = () => {
  const [taskInput, setTaskInput] = useState({
    todo: "",
  });

  const [categoryInput, setCategoryInput] = useState({
    name: "",
  });

  const [categoryData, setCategoryData] = useState();
  const [taskData, setTaskData] = useState();
  const [selectedTask, setSelectedTask] = useState();
  const [selectedCategory, setSelectedCategory] = useState();



  const getCategorys = async () => {
    try {
      const response = await getCategory();
      const ids = response.map((item) => item.id);
      showCategories(ids);
      getTasks(ids);
      // console.log(response)
    } catch (error) {
      console.log(error.message);
    }
  };

  const showCategories = async (ids) => {
    const categoryResponses = [];
    try {
      for (const categoryId of ids) {
        const response = await showCategory(categoryId);
        categoryResponses.push(response);
        console.log(response)
      }
      setCategoryData(categoryResponses);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getTasks = async (ids) => {
    const taskResponses = [];
    try {
      for (const categoryId of ids) {
        const response = await getTask(categoryId);
        taskResponses.push(response);
      }
      const combinedTasks = [].concat(...taskResponses);
      setTaskData(combinedTasks);
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
    console.log(selectedCategory, selectedTask);
  };

  const handleEditCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    console.log("sds", selectedCategory);
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
      if (taskInput.todo.trim() !== "") {
        // If taskInput is not empty, proceed with the update
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
        return response; // Return the response if needed
      } else {
        // If taskInput is empty, do nothing
        setSelectedCategory("");
        setSelectedTask("");
        console.log("Task input is empty. No update performed.");
      }
    } catch (error) {
      console.log(error.message);
    }
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
      if (categoryInput.name.trim() !== "") {
        // If categoryInput is not empty, proceed with the update
        const response = await updateCategory(selectedCategory, categoryInput);
        const updatedCategoryData = categoryData.map((category) => {
          if (category.id === selectedCategory) {
            return response; // Assuming response contains the updated category object
          }
          return category;
        });
        setCategoryData(updatedCategoryData);
        setSelectedCategory("");
        return response; // Return the response if needed
      } else {
        // If categoryInput is empty, do nothing
        setSelectedCategory("");
        console.log("Category input is empty. No update performed.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  

  return (
    <>
      <CategoryTaskDisplay
        selectedCategory={selectedCategory}
        selectedTas={selectedTask}
        handleEditTask={handleEditTask}
        handleEditCategory={handleEditCategory}
        handleTaskChange={handleTaskChange}
        handleCategoryChange={handleCategoryChange}
        updateTasks={updateTasks}
        updateCategories={updateCategories}
        categoryData={categoryData}
        taskData={taskData}
      />
    </>
  );
};

export default CategoryTask;
