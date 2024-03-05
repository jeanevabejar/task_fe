import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function App() {
  const nav = useNavigate();
  const email = Cookies.get("current_user");
  const [username] = email.split("@");

  return (
    <div className=" display flex-col gap-28 resetsize">
      <div className="display flex-row gap-4 w-[50%]">
        <h1 className="capitalize text-8xl">Hello, </h1>
        <h1 className="capitalize text-7xl bg-bg5 bg-set h-[20vh] w-[40%] display">{username}</h1>
      </div>

      <button
        onClick={() => nav("dashboard")}
        className=" w-[20%] h-[15vh] text-[2rem] bg-bg3 bg-set hover:italic"
      >
        Dashboard
      </button>
    </div>
  );
}

export default App;
