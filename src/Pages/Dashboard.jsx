import React from "react";
import { CreateCategories, CreateTask } from "../Components/Form";
import CategoryTask from "../Components/CategoryTask";
import TaskDisplay from "../Components/TaskDisplay";

const Dashboard = () => {
  return (
    <div className="border-4 layersize flex justify-evenly relative flex-row">
      <div className="h-[90vh] w-[22%] display ">
        <TaskDisplay />
      </div>
      <div className="h-[89vh] w-[44%] display  overflow-y-hidden custom-scrollbar ">
        <CategoryTask />
      </div>
      <div className="h-[90vh] w-[22%] display flex-col justify-evenly flex-wrap text-ellipsis overflow-hidden  border-2"></div>
      <CreateCategories />
      <CreateTask />
    </div>
  );
};

export default Dashboard;
