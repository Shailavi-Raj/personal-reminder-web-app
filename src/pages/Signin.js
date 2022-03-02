import React from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SignUp from "./SignUp";
import { Routes, Route } from "react-router-dom";

const Signin = () => {
  return (
    <div className="signin">
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default Signin;
