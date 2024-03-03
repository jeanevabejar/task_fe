import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { createTask } from "../Utils/Taskservice";
import { createCategory, getCategory } from "../Utils/Categoryservice";

export const CreateCategories = () => {
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    // Logic to fetch categories only when the component is mounted on /dashboard/category path
    if (location.pathname === "/dashboard/category") {
      handleCategorySelect();
    }
  }, [location.pathname]);

  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleCategorySubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createCategory(categoryName);
      setCategoryName("");
      console.log("Category created", response);
      console.log(categoryName)
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="display absolute flex-col p-2 w-[40%] h-[50vh] border-2  bg-white top-[15%]">
      <h2>Create Category</h2>
      {error && <p>Error: {error}</p>}
      <form
        onSubmit={handleCategorySubmit}
        className=" display flex-col w-[70%] h-[20vh] gap-10"
      >
        <input
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e)=>handleCategoryNameChange(e)}
          required
          className="p-2 w-full h-[4vh] truncate border-2 rounded-md outline-none"
        />

        <button
          type="submit"
          className="btnstyle w-[50%] h-[4vh] text-base truncate"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export const CreateTask = () => {
  const [taskData, setTaskData] = useState({
    todo: "",
  });
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [error, setError] = useState(null);



  const handleTaskInputChange = (event) => {
    setTaskData({
      ...taskData,
      todo: event.target.value,
    });
  };

  const handleCategorySelectChange = (event) => {
    setCategoryId(event.target.value);
    console.log(categoryId);
  };

  const handleCategorySelect = async () => {
    try {
      const categoriesData = await getCategory();
      // Log fetched categories to check if data is received
      setCategories(categoriesData);
      // console.log(categoriesData);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    handleCategorySelect();
  }, []);

  const handleTaskSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createTask(categoryId, taskData); // You need to provide categoryId here
      console.log(taskData);
      console.log(categoryId);
      setTaskData({ todo: ""});
      console.log("Task created", response);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="display absolute flex-col p-2 w-[40%] h-[50vh] border-2  bg-white top-[15%]">
      <h2>Create New Task</h2>
   
      <form
        onSubmit={handleTaskSubmit}
        className=" display flex-col w-[70%] h-[30vh] gap-4"
      >
        <select
          value={taskData.categoryId}
          onChange={handleCategorySelectChange}
          className="w-[50%] h-[4vh] border-2 display"
        >
          <option value="">Select category</option>
          {/* Map over categories to create select options */}
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="title"
          value={taskData.todo}
          onChange={handleTaskInputChange}
          placeholder="Task Title"
          required
          className="p-2 w-full h-[4vh] truncate border-2 rounded-md outline-none"
        />

        <button
          type="submit"
          className="btnstyle w-[50%] h-[4vh] text-base truncate"
        >
          Create Task
        </button>
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
};
