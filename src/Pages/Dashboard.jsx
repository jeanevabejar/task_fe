import React from "react";
import { CreateForm, CreateTask } from "../Components/Form";
import CategoryTask from "../Components/CategoryTask";
import TaskDisplay from '../Components/TaskDisplay';


const Dashboard = () => {
  return (
    <div className="border-4 layersize flex justify-evenly flex-row">
      <div className="h-[90vh] w-[22%] display  border-2">
        <TaskDisplay/>
      </div>
      <div className="h-[89vh] w-[44%] display  overflow-y-hidden custom-scrollbar ">
       <CategoryTask/>
      </div>
      <div className="h-[90vh] w-[22%] display flex-col justify-evenly flex-wrap text-ellipsis overflow-hidden ">
        <CreateForm />
        <CreateTask />
      </div>
    </div>
  );
};

export default Dashboard;
