import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signUp, selectSignUp } from "./signUpSlice";
import Button from "../Button/Button";

function SignUp(props) {
  const dispatch = useDispatch();

  const signUpData = useSelector(selectSignUp) 

  const [signUpDetails, setSignUpDetails] = useState({
    username: "",
    email: "",
    password: "",
    checkPassword: "",
  });

  const handleSignUpDetails = (e) => {
    // dynamically add loginDetails from the form inputs
    setSignUpDetails({
      ...signUpDetails,
      [e.target.name]: e.target.value,
    });
  };

  // const [preValidation, setPreValidation] = useState({
  //   // state used to check password data is valid before being sent to db
  //   passwordLength: false,
  //   checkPasswordLength: false,
  //   matchPassword: false,
  // });

  // useEffect(() => {
  //   // useEffect used to check password data is 8 characters or more, plus two passwords match
  //   setPreValidation({
  //     ...preValidation,
  //     passwordLength: signUpDetails.password.length >= 8 ? true : false,
  //     checkPasswordLength:
  //       signUpDetails.checkPassword.length >= 8 ? true : false,
  //     matchPassword:
  //       signUpDetails.checkPassword === signUpDetails.password ? true : false,
  //   });
  // }, [signUpDetails]);

  const handleSubmit = () => {
    var data = {
      username: signUpDetails.username,
      email: signUpDetails.email,
      password: signUpDetails.password,
    };
    dispatch(signUp(data));
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
          name="checkPassword"
          placeholder={"Confirm password"}
          value={signUpDetails.checkPassword}
          onChange={handleSignUpDetails}
        />
      </div>
      <div className="error-messages">
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
          <div>
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
