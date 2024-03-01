import React from "react";
import { CreateForm, CreateTask } from "../Components/Form";

const Dashboard = () => {
  return (
    <div className="border-4 layersize flex justify-evenly flex-row">
      <div className="h-[90vh] w-[22%] display  border-2">
        Today task or urgent
      </div>
      <div className="h-[90vh] w-[22%] display border-2 ">Category</div>
      <div className="h-[90vh] w-[22%] display  border-2">Category</div>
      <div className="h-[90vh] w-[22%] display flex-col justify-evenly flex-wrap text-ellipsis overflow-hidden ">
        <CreateForm/>
        <CreateTask/>
         </div>
    </div>
  );
};

export default Dashboard;
