import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "../App.css";
import Home from "./Home";

const Login = () => {
  const [findUser, setFindUser] = useState([]);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  useEffect(() => {
    let ExitingUSer = window.localStorage.getItem("UserFromData");
    let ExitingUSer1 = JSON.parse(ExitingUSer);
    console.log(ExitingUSer1, typeof ExitingUSer1);
    setFindUser([ExitingUSer1]);
  }, []);

  function onSubmit() {
    // let res = [
    //   { first_name: "aaa", email: "aaaa@gmail.com", password: "aaaa" },
    // ];
    let flag = findUser?.find(
      (x) => x.email === email && x.password === password
    );
    if (flag) {
      console.log("match");
      alert("Great you just Logged In ");
      window.location.replace("http://localhost:3000/dashboard");
    } else {
      console.log("not match");
      alert("opps your email and password not match");
    }
  }
  return (
    <div className="login">
      <Home />
      <center>
        <h2> Login</h2>
      </center>
      <div className="form-group-lg">
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
      </div>
      <div className="form-group-lg">
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
      </div>
      <br />
      <Button className="sub_btn" type="submit" onClick={() => onSubmit()}>
        Login
      </Button>
    </div>
  );
};

export default Login;
