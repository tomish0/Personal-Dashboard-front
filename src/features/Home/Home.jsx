import React, { useState } from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import News from "./Dashboard/News/News";
import Sport from "./Dashboard/Sport/Sport";
import Photos from "./Dashboard/Photos/Photos";
import Tasks from "./Dashboard/Tasks/Tasks";
import Dashboard from "./Dashboard/Dashboard";

function Home(props) {
  const [currentNews, setCurrentNews] = useState({
    title: "",
    description: "",
    link: "",
  });

  const [home, setHome] = useState(true);

  return (
    <div>
      {!home ? <Link to="/Home" onClick={() => setHome(true)}>Back</Link> : null}
      <Switch>
        <Route path="/" exact component={Home}>
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/:a(login|signup)">
          <Redirect to="/Home" />
        </Route>
        <Route
          exact
          path="/News"
          component={() => <News currentNews={currentNews} />}
        />
        <Route exact path="/Sport" component={Sport} />
        <Route exact path="/Photos" component={Photos} />
        <Route exact path="/Tasks" component={() => <Tasks />} />
        <Dashboard
          currentNews={currentNews}
          setCurrentNews={setCurrentNews}
          username={props.username}
          setHome={setHome}
        />
      </Switch>
    </div>
  );
}

export default Home;
