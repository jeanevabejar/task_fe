import React, { useEffect, useState } from "react";
import {
  getCategory,
  showCategory,
  updateCategory,
  deleteCategory,
} from "../Utils/Categoryservice";
import { getTask, updateTask, deleteTask } from "../Utils/Taskservice";
import CategoryTaskDisplay from "./CategoryTaskDisplay";

const CategoryTask = () => {
  const [taskInput, setTaskInput] = useState({
    todo: "",
  });
  const [taskCompleted, setTaskCompleted] = useState({
    completed: false,
  });

  const [categoryInput, setCategoryInput] = useState({
    name: "",
  });

  const [categoryData, setCategoryData] = useState();
  const [taskData, setTaskData] = useState();
  const [selectedTask, setSelectedTask] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [dataFetched, setDataFetched] = useState(false);

  const getCategorys = async () => {
    try {
      const response = await getCategory();
      const ids = response.map((item) => item.id);
      showCategories(ids);
      getTasks(ids);
      console.log("get", response);
      setDataFetched(true);
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
        // console.log(response);
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
      setDataFetched(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEditTask = (categoryId, taskId) => {
    setSelectedCategory(categoryId);
    setSelectedTask(taskId);
  };

  const handleEditCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleTaskChange = (event) => {
    setTaskInput({
      ...taskInput,
      todo: event.target.value,
    });
  };

  const handleCheckboxChange = (taskId, categoryId) => {
    setTaskCompleted({
      completed: true,
    });

    updateTaskStatus(taskId, categoryId);
  };

  const updateTaskStatus = async (taskId, categoryId) => {
    try {
      const response = await updateTask(categoryId, taskCompleted, taskId);
      const updatedTaskData = taskData.map((task) => {
        if (task.id === taskId) {
          return response;
        }
        return task;
      });
      setTaskData(updatedTaskData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateTasks = async () => {
    try {
      if (taskInput.todo.trim() !== "") {
        const response = await updateTask(
          selectedCategory,
          taskInput,
          selectedTask
        );
        console.log("updatetask", response);
        const updatedTaskData = taskData.map((task) => {
          if (task.id === selectedTask) {
            return response;
          }
          return task;
        });
        setTaskData(updatedTaskData);
        setSelectedCategory("");
        setSelectedTask("");
      } else {
        setSelectedCategory("");
        setSelectedTask("");
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
  };

  const updateCategories = async () => {
    try {
      if (categoryInput.name.trim() !== "") {
        const response = await updateCategory(selectedCategory, categoryInput);
        console.log(response);
        const updatedCategoryData = categoryData.map((category) => {
          if (category.id === selectedCategory) {
            return response; // Assuming response contains the updated category object
          }
          return category;
        });
        setCategoryData(updatedCategoryData);
        setSelectedCategory("");
      } else {
        // If categoryInput is empty, do nothing
        setSelectedCategory("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const deletingTask = async (categoryId, taskId) => {
    try {
      const response = await deleteTask(categoryId, taskId);
      console.log(response);
      setDataFetched(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deletingCategory = async (categoryId) => {
    try {
      const response = await deleteCategory(categoryId);
      setDataFetched(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!dataFetched) {
      getTasks();
      getCategorys();
    }
  }, [taskData, categoryData, dataFetched]);

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
        handleCheckboxChange={handleCheckboxChange}
        deletingTask={deletingTask}
        deletingCategory={deletingCategory}
      />
    </>
  );
};

export default CategoryTask;
