import React from "react";
import { logout } from "../Utils/Authservice";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const nav = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await logout();
      nav("/signin");
      console.log("Is logout:", response); // Log the value
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <button
        onClick={handleLogout}
        className="btnstyle w-[10vw] h-[5vh] font-extrabold text-[2rem] display"
      >
        logout
      </button>
    </>
  );
};

export default Logout;
