import React, { useEffect, useState } from "react";
import { getCategory } from "../Utils/Categoryservice";
import { getTask } from "../Utils/Taskservice";

const TaskDisplay = () => {
  const [taskData, setTaskData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  const getCategorys = async () => {
    try {
      const response = await getCategory();
      const ids = response.map((item) => item.id);
      getTasks(ids);
      console.log(categoryData);
      setCategoryData(response);
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
      console.log(taskData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCategorys();
    getTasks();
  }, []);

  const today = new Date().toISOString().split("T")[0]; // Get today's date in 'YYYY-MM-DD' format

  // Filter tasks created today
  const filteredTasks = taskData.filter((task) => {
    const taskDate = new Date(task.created_at).toISOString().split("T")[0]; // Extract date from created_at
    return taskDate === today;
  });

  return (
    <>
      <div className="border-2 w-full display flex-col">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div
              className="border-2 w-[90%] flex flex-row justify-between"
              key={task.id}
            >
              {categoryData ? (
                categoryData
                  .filter((category) => category.id === task.category_id)
                  .map((category) => (
                    <h1 key={category.id}> {category.name}</h1>
                  ))
              ) : (
                <h1>No data</h1>
              )}
              <h1>{task.todo}</h1>
              {/* <p>Date: {new Date(task.created_at).toLocaleDateString()}</p>  */}
              <p>
                {new Date(task.created_at).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </p>
            </div>
          ))
        ) : (
          <span>No tasks created today</span>
        )}
      </div>
    </>
  );
};

export default TaskDisplay;
