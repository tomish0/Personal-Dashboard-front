import React, { useState } from "react";
import Authentication from "./features/Authentication/Authentication";
import Home from "./features/Home/Home";
import backgroundImage from "./Assets/Background.png";
import "./css/App.css";

function App() {
  const [appOnline, setAppOnline] = useState(false);

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {appOnline ? (
        <Home username={"Swapnil"} />
      ) : (
        <Authentication setAppOnline={setAppOnline} />
      )}
    </div>
  );
}

export default App;
