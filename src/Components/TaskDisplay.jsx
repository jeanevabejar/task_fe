import React, { useEffect, useState } from "react";
import { getCategory } from "../Utils/Categoryservice";
import { getTask } from "../Utils/Taskservice";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";



const TaskDisplay = () => {
  const [taskData, setTaskData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const nav = useNavigate();
  const location = useLocation();

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
    if (!dataFetched ) {
      getTasks();
      getCategorys();
      
    }

  }, [taskData, categoryData, dataFetched]);

  return (
    <>
      <div className=" w-full h-[90vh] display flex-col gap-7 rounded-xl border ">
        <h1 className="w-full text-center text-[2.5rem] h-[20vh] display bg-bg4 bg-set ">
          Today's List
        </h1>
        <div className="w-full flex justify-evenly flex-wrap truncate">
          <button
            onClick={() => nav("category")}
            className=" bg-bg2  bg-set  w-[50%] h-[6vh]  text-[1.2rem] display truncate hover:bg-bg4 hover:text-red-500"
          >
            <IoMdAdd />
            category
          </button>
          <button
            onClick={() => nav("task")}
            className="bg-bg2  bg-set  w-[50%] h-[6vh]  text-[1.2rem] display truncate hover:bg-bg4 hover:text-red-500"
          >
            <IoMdAdd />
            task
          </button>
        </div>

        <div className=" h-[25vh] w-full  flex flex-col overflow-auto  custom-scrollbar">
          {sortedTasks ? (
            sortedTasks.map((task) => (
              <>
                <div
                  className="w-full flex flex-row justify-between p-2 flex-wrap "
                  key={task.id}
                >
                  <h1 className="text-[1.3rem] bg-bg1 bg-set capitalize">
                    {task.todo}
                  </h1>

                  {task.completed === true ? (
                    <h1 className="text-[1.2rem] text-green-700">"done"</h1>
                  ) : (
                    <h1 className="text-[1.2rem] bg-bg4 bg-set">to-do</h1>
                  )}
                </div>
              </>
            ))
          ) : (
            <span>No tasks created today</span>
          )}
        </div>
        <div className="h-[25vh] w-full overflow-auto custom-scrollbar">
          <div className="display flex-col p-4 gap-2 flex-wrap truncate ">
            <h1 className="display flex-row gap-2 text-[1.2rem] bg-set  border-b-2 border-dashed border-green-600">
              Completed Task
              <div className="bg-bg7 bg-set h-4 w-4 "></div>
            </h1>
            {taskData ? (
              taskData
                .filter((task) => task.completed === true)
                .map((task) => (
                  <>
                    <div className="w-full capitalize italic text-[1.3rem] ">
                      <h1 className="bg-bg6 bg-set bg-cover w-fit gap-2 flex  flex-row">
                        <div className="w-5 h-5 bg-bg11 bg-set "></div>
                        {task.todo}
                      </h1>
                    </div>
                  </>
                ))
            ) : (
              <span>No tasks created today</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDisplay;
