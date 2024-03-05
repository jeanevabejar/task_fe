import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Utils/Authservice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      console.log("Registered user:", response.data);
      nav("/"); 
    } catch (error) {
      setError(error.message || "An error occurred while signing in.");
    }
  };

  return (
    <div className="flex flex-col text-center gap-8 w-[50%]">
      <h1 className="text-[1.8rem] bg-bg2 bg-set h-[8vh] display">Get Started</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 display w-[100%] h-[20vh]">
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="authinput"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="authinput"
        />
        <button type="submit" className="text-[1.2rem] w-[50%] h-[5vh] hover:bg-bg1 bg-set btnstyle hover:border-none hover:shadow-none ">Sign in</button>
      </form>
      <Link to="/signup" className=" hover:italic hover:underline hover:text-red-500">Don't have an account? Sign up</Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;