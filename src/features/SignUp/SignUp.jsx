import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signUp, selectSignUp } from "./signUpSlice";
import Button from "../Button/Button";
import { useEffect } from "react";

function SignUp() {
  const dispatch = useDispatch();

  const signUpData = useSelector(selectSignUp);

  const [signUpDetails, setSignUpDetails] = useState({
    username: "",
    email: "",
    password: "",
    checkPassword: "",
  });

  const handleSignUpDetails = (e) => {
    setSignUpDetails({
      ...signUpDetails,
      [e.target.name]: e.target.value,
    });
  };

  const [preValidation, setPreValidation] = useState({
    usernameLength: false,
    emailLength: false,
    passwordLength: false,
    passwordMatch: false,
  });

  const [signUpFail, setSignUpFail] = useState(false);

  const handleSubmit = () => {
    var usernameLength = signUpDetails.username.length > 0 ? true : false;
    var emailLength =
      signUpDetails.email.length > 0 && signUpDetails.email.includes("@")
        ? true
        : false;
    var passwordLength = signUpDetails.password.length >= 8 ? true : false;
    var passwordMatch =
      signUpDetails.checkPassword === signUpDetails.password ? true : false;

    if (
      usernameLength &&
      emailLength &&
      passwordLength &&
      passwordMatch
    ) {
      var data = {
        username: signUpDetails.username,
        email: signUpDetails.email,
        password: signUpDetails.password,
      };
      dispatch(signUp(data));
    } else {
      setSignUpFail(true);
    }
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
          type="password"
          name="password"
          placeholder={"Password"}
          value={signUpDetails.password}
          onChange={handleSignUpDetails}
        />
        <input
          type="password"
          name="checkPassword"
          placeholder={"Confirm Password"}
          value={signUpDetails.checkPassword}
          onChange={handleSignUpDetails}
        />
      </div>
      <div className="fail-message">
        {signUpFail ? (
          <ul>
            {!preValidation.usernameLength ? (
              <li>Please provide a username</li>
            ) : null}
            {!preValidation.emailLength ? (
              <li>Your email must be a valid email</li>
            ) : null}
            {!preValidation.passwordLength ? (
              <li>Your password must be at least 8 characters long</li>
            ) : null}
            {!preValidation.passwordMatch ? (
              <li>Your password must match to the confirmed password</li>
            ) : null}
          </ul>
        ) : null}
        {signUpData.failedLogin.err ? (
          <div>Please fill in your details</div>
        ) : signUpData.failedLogin.username && signUpData.failedLogin.email ? (
          <div>Both the username and email are already taken</div>
        ) : signUpData.failedLogin.username ? (
          <div>The username is already taken</div>
        ) : signUpData.failedLogin.email ? (
          <div>This email is already taken </div>
        ) : null}
      </div>
      <div className="buttons-app-nav-position">
        <div className="buttons-app-nav">
          <Button btnMessage={"Register"} onClick={handleSubmit} />
          <div className="route-back">
            Already Registered?
            <Link to="/Login">
              <Button btnMessage={"Login"} className={"login-sign-up-route"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
