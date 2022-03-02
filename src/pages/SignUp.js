import React, { useState } from "react";
import Button from "@mui/material/Button";
import "../App.css";
import Home from "./Home";
import { useNavigate } from "react-router";

const SignUp = () => {
  const history = useNavigate();
  const [firstName, setFirstName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handleFirstNameChange = (event) => {
    console.log(event.target.value);
    setFirstName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  function onSubmit() {
    let fromData = {
      first_name: firstName,
      email: email,
      password: password,
    };
    console.log(fromData);
    window.localStorage.setItem("UserFromData", JSON.stringify(fromData));
    history("/login");
    return fromData;
  }

  return (
    <div className="signup">
      <Home />
      <div className="form-group-lg">
        <h2>Create your personal account</h2>

        <p>
          <label>Username</label>
          <br />
          <input
            className="form-control"
            type="text"
            name="first_name"
            required
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </p>
        <p>
          <label>Email address</label>
          <br />
          <input
            className="form-control"
            type="email"
            name="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input
            className="form-control"
            type="password"
            name="password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </p>
      </div>
      <Button
        className="sub_btn"
        id="sub_btn"
        type="submit"
        onClick={() => onSubmit()}
      >
        Register
      </Button>
    </div>
  );
};

export default SignUp;
