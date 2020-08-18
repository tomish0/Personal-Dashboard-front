import React, { useState } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";

import News from "./Dashboard/News/News";
import Sport from "./Dashboard/Sport/Sport";
import Photos from "./Dashboard/Photos/Photos";
import Tasks from "./Dashboard/Tasks/Tasks";
import Clothes from "./Dashboard/Clothes/Clothes";
import Dashboard from "./Dashboard/Dashboard";

function Home(props) {
  const [linkClicked, setLinkClicked] = useState(false);

  const [currentNews, setCurrentNews] = useState({
    title: "",
    description: "",
    link: "",
  });
  
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home}>
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/News" component={News} />
        <Route exact path="/Sport" component={Sport} />
        <Route exact path="/Photos" component={Photos} />
        <Route exact path="/Tasks" component={Tasks} />
        <Route exact path="/Clothes" component={Clothes} />
        <Dashboard
          currentNews={currentNews}
          setCurrentNews={setCurrentNews}
          username={props.username}
        />
      </Switch>
    </div>
  );
}

export default Home;
