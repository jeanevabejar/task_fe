import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Utils/Authservice";

const Signin = () => {
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
    <div>
      <h1>Signin</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signin</button>
      </form>
      <Link to="/signup">Don't have an account? Sign up</Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Signin;