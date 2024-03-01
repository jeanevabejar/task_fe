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
  
      // Redirect or perform other actions after successful registration
      nav("/signin"); // Redirect to signin page after registration
    } catch (error) {
      setError(error.message || "An error occurred while signing up.");
    }
  };

  return (
    <div className="flex flex-col text-center gap-8">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 display w-[100%] h-[30vh]">
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
        <button type="submit" className="btnstyle  w-[70%] h-[4vh]">Signup</button>
      </form>
      <Link to="/signin">Already have an account? Sign in</Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default RegisterForm;