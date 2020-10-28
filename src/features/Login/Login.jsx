import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {login, selectLogin} from './loginSlice'
import Button from "../Button/Button";
import "../../css/LoginSignUp.css";

function Login(props) {
  const dispatch = useDispatch();

  const loginData = useSelector(selectLogin) 

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleLoginDetails = (e) => {
    // dynamically add loginDetails from the form inputs
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(login(loginDetails));
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
          type="password"
          name="password"
          placeholder={"Password"}
          value={loginDetails.password}
          onChange={handleLoginDetails}
        />
      </div>
      {loginData.failedLogin ? <div className='fail-message'>Your username or password is incorrect</div> : null}
      <div className="buttons-app-nav-position">
        <div className="buttons-app-nav">
          <Button btnMessage={"Login"} onClick={handleSubmit} />
          <div className="route-back">
            New to the Dashboard?
            <Link to="/Sign-Up">
              <Button
                btnMessage={"Sign Up"}
                className={"login-sign-up-route"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
