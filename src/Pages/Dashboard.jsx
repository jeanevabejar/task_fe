import React, { useEffect } from "react";
import { CreateCategories, CreateTask } from "../Components/Form";
import CategoryTask from "../Components/CategoryTask";
import TaskDisplay from "../Components/TaskDisplay";
import { useLocation } from "react-router-dom";
import UserDisplay from "../Components/UserDisplay";



const Dashboard = () => {
  const location = useLocation();


  return (
    <div className="resetsize display bg-bg12 ">
      <div className=" border layersize flex justify-evenly items-center relative flex-row bg-white bg-opacity-50 ">
      <div className="h-[90vh] w-[22%] display shadow-xl bg-bg13">
        <TaskDisplay />
      </div>
      <div className="h-[89vh] w-[44%] display overflow-y-hidden custom-scrollbar ">
        <CategoryTask />
      </div>
      <div className="h-[90vh] w-[22%] display flex-col justify-evenly flex-wrap text-ellipsis overflow-hidden  border-2 shadow-xl bg-white">
        <UserDisplay/>
      </div>
      {location.pathname === "/dashboard/category" ? (
        <CreateCategories />
      ) : null}
      {location.pathname === "/dashboard/task" ? <CreateTask /> : null}
    </div>
    </div>
    
  );
};

export default Dashboard;
