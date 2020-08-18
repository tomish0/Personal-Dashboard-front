import React, { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Button from "../Button/Button";

function Authentication(props) {
  const [newUser, setNewUser] = useState(false);

  return (
    <div>
      <h1>Dev Challenge</h1>
      {!newUser ? (
        <div>
          <Login />
          <div>
            New to the challenge?
            <Button onClick={() => setNewUser(true)} btnMessage={"Sign Up"} />
          </div>
        </div>
      ) : (
        <div>
          <SignUp />
          <div>
            Already Registered?
            <Button onClick={() => setNewUser(false)} btnMessage={"Login"} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Authentication;
