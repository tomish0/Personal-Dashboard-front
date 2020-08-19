import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import Button from "../Button/Button";

function SignUp(props) {
  const [signUpDetails, setSignUpDetails] = useState({
    username: "",
    email: "",
    password: "",
    passwordCopy: "",
  });

  const [signUpFail, setSignUpFail] = useState({
    username: false,
    email: false,
    err: false,
  });

  const handleSignUpDetails = (e) => {
    // dynamically add loginDetails from the form inputs
    setSignUpDetails({
      ...signUpDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const url = "http://localhost:5000/user/sign-up";
    var data = {
      username: signUpDetails.username,
      email: signUpDetails.email,
      password: signUpDetails.password,
    };
    axios({
      method: "post",
      url: url,
      data: data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.resUsername === 1) {
          setSignUpFail({ username: true });
        }
        if (res.data.resEmail === 1) {
          setSignUpFail({ email: true });
        }
        if (res.data.resUsername === 1 && res.data.resEmail === 1) {
          setSignUpFail({ username: true, email: true });
        }
        if (res.data.username) {
          props.setAppOnline(true);
        }
      })
      .catch((err) => {
        console.dir(err);
        setSignUpFail({ ...signUpFail, err: true });
      });
  };

  return (
    <div onSubmit={handleSubmit} className="sign-up-container">
      <div className="adjacent-input">
        <input
          type="text"
          name="username"
          placeholder={"Username"}
          value={signUpDetails.username}
          onChange={handleSignUpDetails}
        />
        <input
          type="text"
          name="email"
          placeholder={"Email"}
          value={signUpDetails.email}
          onChange={handleSignUpDetails}
        />
      </div>
      <div className="adjacent-input">
        <input
          type="text"
          name="password"
          placeholder={"Password"}
          value={signUpDetails.password}
          onChange={handleSignUpDetails}
        />
        <input
          type="text"
          name="passwordCopy"
          placeholder={"Confirm password"}
          value={signUpDetails.passwordCopy}
          onChange={handleSignUpDetails}
        />
      </div>
      {signUpFail.err ? (
        <div>Please fill in your details</div>
      ) : signUpFail.username && signUpFail.email ? (
        <div>Both the username and email are already taken</div>
      ) : signUpFail.username ? (
        <div>The username is already taken</div>
      ) : signUpFail.email ? (
        <div>This email is already taken </div>
      ) : null}
      <Button btnMessage={"Sign Up"} onClick={handleSubmit} />
      Already Registered?
      <Link to="/Login">
        <Button btnMessage={"Login"} className={"login-sign-up-route"} />
      </Link>
    </div>
  );
}

export default SignUp;
