import React from "react";
import { logout } from "../Utils/Authservice";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const nav = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await logout();
      nav("/signin");
      // console.log("Is logout:", response); // Log the value
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <button
        onClick={handleLogout}
        className=" w-[10vw] h-[6vh]  text-[2.5rem] display truncate bg-bg8 bg-set hover:bg-bg2 bg-cover"
      >
        Logout
      </button>
    </>
  );
};

export default Logout;
