import React from "react";
import Logout from "./Logout";
import Cookies from "js-cookie";

const UserDisplay = () => {
  const email = Cookies.get("current_user");
  const [username] = email.split("@");

  return (
    <div className=" display flex-col layersize gap-20">
      <div className="w-full display flex-col ">
        <div className=" w-[70%] h-[20vh]  bg-bg9 bg-set"></div>
        <h1 className=" capitalize font-extrabold text-[5rem]">{username}</h1>
      </div>
      <Logout />
    </div>
  );
};

export default UserDisplay;
