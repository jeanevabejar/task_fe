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
      console.log("header user:", response.header);
      // Redirect or perform other actions after successful login
      nav("/"); // Example: Redirect to dashboard page
    } catch (error) {
      setError(error.message || "An error occurred while signing in.");
    }
  };

  return (
    <div className="flex flex-col text-center gap-8">
      <h1>Get Started</h1>
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
        <button type="submit" className="btnstyle  w-[70%] h-[4vh]">Signin</button>
      </form>
      <Link to="/signup">Don't have an account? Sign up</Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;