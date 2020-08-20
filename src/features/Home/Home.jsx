import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "../Login/loginSlice";
import { selectSignUp } from "../SignUp/signUpSlice";
import {getData} from "./homeSlice"
import News from "./Dashboard/News/News";
import Sport from "./Dashboard/Sport/Sport";
import Photos from "./Dashboard/Photos/Photos";
import Tasks from "./Dashboard/Tasks/Tasks";
import Dashboard from "./Dashboard/Dashboard";

function Home(props) {
  const dispatch = useDispatch();


const loginData = useSelector(selectLogin)
const signUpData = useSelector(selectSignUp)

  const [currentNews, setCurrentNews] = useState({
    title: "",
    description: "",
    link: "",
  });

  useEffect(() => {
    const userId = loginData.userId.length > 0 ? loginData.userId : signUpData.userId;

    dispatch(getData(userId));
  }, []);

  return (
    <div>
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
        />
      </Switch>
    </div>
  );
}

export default Home;
