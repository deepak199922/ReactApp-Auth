import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        loginData
      );
      const { success, message } = response.data;
      if (success) {
        console.log("login successfully");
      } else {
        console.log("login failed", message);
      }
    } catch (error) {
      console.log(error);
    }

    setLoginData({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handlechange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlechange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Not registered yet</p>
      <Link to="/registration">Register here</Link>
    </div>
  );
};

export default LoginPage;
