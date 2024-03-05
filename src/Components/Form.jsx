import { useEffect, useState } from "react";
import { createTask } from "../Utils/Taskservice";
import { createCategory, getCategory } from "../Utils/Categoryservice";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const CreateCategories = () => {
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleCategorySubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createCategory(categoryName);
      setCategoryName("");
      Cookies.set("create", true);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="display absolute flex-col p-5 w-[35%] h-[50vh]  text-[1.5rem] justify-evenly bg-bg14 bg-set ">
      <h2 className="text-[2rem] display  w-[50%] h-[10vh] bg-bg2 bg-set">
        New Category</h2>
      {error && <p>Error: {error}</p>}
      <form
        onSubmit={handleCategorySubmit}
        className=" display flex-col w-full h-[20vh] gap-10 justify-start"
      >
        <input
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => handleCategoryNameChange(e)}
          className="p-2 w-[60%] h-[5vh] truncate border-2 rounded-xl outline-none bg-transparent border-black placeholder:text-gray-500  placeholder:italic"
        />
        <div className="display flex-row gap-5 w-full">
          <button
            type="submit"
            className=" w-[30%] h-[6vh] text-[1.5rem] truncate bg-bg4 bg-set hover:underline"
          >
            Add 
          </button>
          <button
            onClick={() => nav("/dashboard")}
            className=" w-[30%] h-[6vh] text-[1.5rem] truncate bg-bg4 bg-set hover:underline"
          >
            Cancel
          </button>
        </div>
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
  const nav = useNavigate();

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
      const response = await createTask(categoryId, taskData); 
      setTaskData({ todo: "" });
      Cookies.set("create", true);
     
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="display absolute flex-col p-5 w-[40%] h-[60vh]   top-[15%] bg-bg14 bg-set ">
      <h2 className=" w-[50%] h-[10vh] display text-[2rem] bg-bg4 bg-set"> New Task</h2>

      <form
        onSubmit={handleTaskSubmit}
        className=" display flex-col w-full h-[30vh] gap-4 "
      >
        <select
          value={taskData.categoryId}
          onChange={handleCategorySelectChange}
          className="w-[50%] h-[5vh] border-2 display text-[1.2rem] bg-yellow-200 border-black rounded-md"
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
          className="text-[1.5rem] p-2 w-[50%] h-[5vh] truncate border-2 rounded-md outline-none bg-transparent border-black placeholder:italic"
        />

        <button
          type="submit"
          className=" w-[30%] h-[4vh] text-[1.2rem] font-bold truncate bg-bg1 bg-set hover:bg-bg3 "
        >
          Create Task
        </button>
        <button
          onClick={() => nav("/dashboard")}
          className="w-[30%] h-[4vh] text-[1.2rem] font-bold truncate bg-bg1 bg-set hover:bg-bg3 bg-set"
        >
          Cancel
        </button>
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
};
