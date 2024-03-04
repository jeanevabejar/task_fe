import React, { useEffect, useState } from "react";
import { getCategory } from "../Utils/Categoryservice";
import { getTask } from "../Utils/Taskservice";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const TaskDisplay = () => {
  const [taskData, setTaskData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const nav = useNavigate();

  const getCategorys = async () => {
    try {
      const response = await getCategory();
      const ids = response.map((item) => item.id);
      getTasks(ids);
      setCategoryData(response);
      setDataFetched(true);
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
    if (!dataFetched) {
      getTasks();
      getCategorys();
    }
  }, [taskData, categoryData, dataFetched]);

  return (
    <>
      <div className=" w-full h-[90vh] display flex-col gap-4 rounded-xl border">
        <h1 className="font-bold w-full text-center text-[8vh] h-[20vh] display ">
          Today's List
        </h1>
        <div className="w-full flex justify-evenly">
          <button
            onClick={() => nav("category")}
            className="btnstyle  w-[30%] h-[5vh] font-extrabold text-[1.5rem] display"
          >
             <IoMdAdd />category
          </button>
          <button
            onClick={() => nav("task")}
            className="btnstyle w-[30%] h-[5vh] font-extrabold text-[1.5rem] display "
          >
           <IoMdAdd />task
          </button>
        </div>

        <div className=" h-[50vh] w-full gap-3 flex flex-col p-3">
          {sortedTasks ? (
            sortedTasks.map((task) => (
              <>
                <div
                  className="border-2 w-full flex flex-row justify-between p-2"
                  key={task.id}
                >
                  <h1 className="font-bold text-[1.3rem] ">{task.todo}</h1>
                  <h1 className="text-[1.2rem]">
                    {task.completed === true ? "done" : "to-do"}
                  </h1>
                </div>
              </>
            ))
          ) : (
            <span>No tasks created today</span>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskDisplay;
