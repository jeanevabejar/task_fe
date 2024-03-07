import React from "react";
import RegisterForm from "../Components/RegisterForm";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const user = Cookies.get("token");
  const nav = useNavigate();
  return user ? (
    nav("/")
  ) : (
    <div className=" layersize display ">
      <div className=" display w-[50%] h-[50vh] rounded-2xl bg-white drop-shadow-2xl">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Signup;
