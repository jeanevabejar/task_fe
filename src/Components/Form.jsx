import { useEffect, useState } from "react";
import { createTask } from "../Utils/Taskservice";
import { createCategory, getCategory } from "../Utils/Categoryservice";

export const CreateForm = () => {
  const [categoryName, setCategoryName] = useState("");
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
  });
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [error, setError] = useState(null);

  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleTaskInputChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCategorySelectChange = (event) => {
    setCategoryId(event.target.value);
    console.log(categoryId)
  };

  const handleCategorySelect = async () => {
    try {
      const categoriesData = await getCategory();
      // Log fetched categories to check if data is received
      setCategories(categoriesData);
     console.log(categoriesData); 
    } catch (error) {
      setError(error.message);
    }
  };

useEffect(()=>{
  handleCategorySelect();
},[])

  const handleCategorySubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createCategory(categoryName);
      setCategoryName("");
      console.log("Category created", response);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleTaskSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createTask(categoryId, taskData); // You need to provide categoryId here
      console.log(taskData)
      console.log(categoryId)
      setTaskData({ title: "", description: "" });
      console.log("Task created", response);
    } catch (error) {
      setError(error.message);
      console.log(taskData)
      console.log(categoryId)
    }
  };

  return (
    <div>
      <h2>Create New Category</h2>
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleCategorySubmit}>
        <label>
          Category Name:
          <input
            type="text"
            value={categoryName}
            onChange={handleCategoryNameChange}
            required
          />
        </label>
        <button type="submit">Create Category</button>
      </form>

      <h2>Create New Task</h2>
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleTaskSubmit}>
        <label>
          Task Title:
          <input
            type="text"
            name="title"
            value={taskData.title}
            onChange={handleTaskInputChange}
            required
          />
        </label>
        <label>
          Task Description:
          <input
            type="text"
            name="description"
            value={taskData.description}
            onChange={handleTaskInputChange}
            required
          />
        </label>
        <label>
          Select Category:
          <select value={taskData.categoryId} onChange={handleCategorySelectChange}>
            <option value="">Select a category</option>
            {/* Map over categories to create select options */}
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </label>


        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};
