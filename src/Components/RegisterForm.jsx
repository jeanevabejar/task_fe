import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../Utils/Authservice";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(email, password, passwordConfirmation);
      console.log("Registered user:", response.data);
      console.log("header user:", response.header['authorization']);
      nav("/signin");
    } catch (error) {
      setError(error.message || "An error occurred while signing up.");
    }
  };

  return (
    <div className=" display flex-col text-center w-[50%] h-[70vh]">
      <h1 className="text-[2rem] display bg-bg4 h-[9vh] bg-set bg-no-repeat bg-center w-full ">Signup</h1>
      <form onSubmit={handleSubmit} className="flex-col gap-4 display w-[100%] h-[30vh]">
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          className="authinput"
        />
        <button type="submit" className="btnstyle  w-[70%] h-[5vh] hover:bg-bg2 bg-set hover:border-none hover:shadow-none">Signup</button>
      </form>
      <Link to="/signin" className="hover:italic hover:underline hover:text-green-500">Already have an account? Sign in</Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default RegisterForm;