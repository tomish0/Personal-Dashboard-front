import React from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "./features/Login/loginSlice";
import { selectSignUp } from "./features/SignUp/signUpSlice";
import Authentication from "./features/Authentication/Authentication";
import Home from "./features/Home/Home";
import backgroundImage from "./Assets/Background.png";
import "./css/App.css";

function App() {
  const loginData = useSelector(selectLogin);
  const signUpData = useSelector(selectSignUp);

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {loginData.userId.length > 0 || signUpData.userId.length > 0 ? (
        <Home username={loginData.username} />
      ) : (
        <Authentication />
      )}
    </div>
  );
}

export default App;
