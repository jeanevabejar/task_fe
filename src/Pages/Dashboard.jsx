import React from "react";
import { CreateCategories, CreateTask } from "../Components/Form";
import CategoryTask from "../Components/CategoryTask";
import TaskDisplay from "../Components/TaskDisplay";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../Components/Logout";
import Cookies from "js-cookie";

const Dashboard = () => {
  const location = useLocation();
  const email = Cookies.get("current_user");
  const [username] = email.split("@");


  return (
    <div className="resetsize display  ">
      <div className=" border layersize flex justify-evenly items-center relative flex-row">
      <div className="h-[90vh] w-[22%] display shadow-xl">
        <TaskDisplay />
      </div>
      <div className="h-[89vh] w-[44%] display overflow-y-hidden custom-scrollbar ">
        <CategoryTask />
      </div>
      <div className="h-[90vh] w-[22%] display flex-col justify-evenly flex-wrap text-ellipsis overflow-hidden  border-2 bg-white">
        <h1 className="font-extrabold text-[5rem]">{username}</h1>
        <Logout />
        
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
