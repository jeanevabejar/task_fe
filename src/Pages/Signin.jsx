import React from "react";
import LoginForm from "../Components/LoginForm";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const user = Cookies.get("token");
  const nav = useNavigate();

  return (
    user ? (
     nav("/")
    ) : (
      <div className="layersize display">
        <div className="display w-[50%] h-[50vh] rounded-2xl bg-white drop-shadow-2xl"> 
          <LoginForm/>
        </div>
      </div>
    )
  );
  
};

export default Signin;