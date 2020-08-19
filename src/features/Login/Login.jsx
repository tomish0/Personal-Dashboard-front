import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import Button from "../Button/Button";
import "../../css/LoginSignUp.css";

function Login(props) {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const [loginFail, setLoginFail] = useState(false);

  const handleLoginDetails = (e) => {
    // dynamically add loginDetails from the form inputs
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const url = "http://localhost:5000/user/login";
    axios({
      method: "post",
      url: url,
      data: loginDetails,
    })
      .then((res) => {
        console.log(res);
        if (res.data.user === 0) {
          props.setAppOnline(true);
        } else {
          setLoginFail(true);
        }
      })
      .catch((err) => {
        console.dir(err);
        setLoginFail(true);
      });
  };

  return (
    <div onSubmit={handleSubmit} className="login-container">
      <div className="adjacent-input">
        <input
          type="text"
          name="username"
          placeholder={"Username"}
          value={loginDetails.username}
          onChange={handleLoginDetails}
        />
        <input
          type="text"
          name="password"
          placeholder={"Password"}
          value={loginDetails.password}
          onChange={handleLoginDetails}
        />
      </div>
      {loginFail ? <div>Your username or password is incorrect</div> : null}
      <Button btnMessage={"Login"} onClick={handleSubmit} />
      New to the challenge?
      <Link to="/Sign-Up">
        <Button btnMessage={"Sign Up"} className={"login-sign-up-route"} />
      </Link>
    </div>
  );
}

export default Login;
