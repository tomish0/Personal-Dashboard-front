import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "../Login/loginSlice";
import { selectSignUp } from "../SignUp/signUpSlice";
import { getNewsData } from "./Dashboard/News/newsSlice";
import { getWeatherData } from "./Header/Weather/weatherSlice";
import { getTasksData } from "./Dashboard/Tasks/tasksSlice";
import Dashboard from "./Dashboard/Dashboard";

function Home(props) {
  const dispatch = useDispatch();

  const loginData = useSelector(selectLogin);
  const signUpData = useSelector(selectSignUp);

  useEffect(() => {
    const userId =
      loginData.userId.length > 0 ? loginData.userId : signUpData.userId;

    navigator.geolocation.getCurrentPosition(async function (position) {
      try {
        var geolocation = {
          latitude: position.coords.latitude,
          longtitude: position.coords.longitude,
        };
        var data = {
          userId: userId,
          weather: {
            latitude: geolocation.latitude.toFixed(3),
            longtitude: geolocation.longtitude.toFixed(3),
          },
        };
        await dispatch(getNewsData());
        await dispatch(getWeatherData(data.weather));
        await dispatch(getTasksData(data.userId));
      } catch (err) {
        console.log(err);
      }
    });
  }, [dispatch, loginData.userId, signUpData.userId]);

  return (
      <Switch>
        <Route path="/" exact component={Home}>
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/:a(login|signup)">
          <Redirect to="/Home" />
        </Route>
        <Dashboard
          username={props.username}
        />
      </Switch>
  );
}

export default Home;
