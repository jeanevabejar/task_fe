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

  const today = new Date().toISOString().split("T")[0]; 
  const filteredTasks = taskData.filter((task) => {
    const taskDate = new Date(task.created_at).toISOString().split("T")[0]; 
    return taskDate === today;
  });
  
  const sortedTasks = filteredTasks.sort((a, b) => {
    
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    
    return dateB - dateA; 
  });

  useEffect(() => {
    const interval = setInterval(() => {
      getTasks();
      getCategorys();
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="border-2 w-full h-[85vh] display flex-col gap-3">
        <h1 className="font-bold w-full text-center text-[5vh]">Today's Task</h1>
        {sortedTasks ? (
          sortedTasks.map((task) => (
            <div
              className="border-2 w-[90%] flex flex-row justify-between"
              key={task.id}
            >
              <h1>{task.todo}</h1>
              {/* <p>Date: {new Date(task.created_at).toLocaleDateString()}</p>  */}
              <h1>{task.completed === true ? "done" : "notdone"}</h1>
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
