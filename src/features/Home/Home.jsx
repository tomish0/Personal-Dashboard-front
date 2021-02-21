import React, {useEffect, useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {selectLogin} from '../Login/loginSlice';
import {selectSignUp} from '../SignUp/signUpSlice';
import {getNewsData} from './Dashboard/News/newsSlice';
import {getWeatherData} from './Header/Weather/weatherSlice';
import {getTasksData} from './Dashboard/Tasks/tasksSlice';
import {getAllStocks} from './Dashboard/Stock/stockSlice';
import Dashboard from './Dashboard/Dashboard';

function Home(props) {
  const dispatch = useDispatch();

  const loginData = useSelector(selectLogin);
  const signUpData = useSelector(selectSignUp);

  const [navigatorErr, setNavigatorErr] = useState(false);

  useEffect(() => {
    const userId = loginData.userId.length > 0 ? loginData.userId : signUpData.userId;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        var geolocation = {
          latitude: position.coords.latitude,
          longtitude: position.coords.longitude
        };
        var data = {
          userId: userId,
          weather: {
            latitude: geolocation.latitude.toFixed(3),
            longtitude: geolocation.longtitude.toFixed(3)
          }
        };
        dispatch(getWeatherData(data.weather));
        dispatch(getNewsData());
        dispatch(getTasksData(data.userId));
        dispatch(getAllStocks());
      },
      () => {
        setNavigatorErr(true);
      },
      {timeout: 10000}
    );
  }, [dispatch, loginData.userId, signUpData.userId]);

  return (
    <Switch>
      <Route path="/" exact component={Home}>
        <Redirect to="/Home" />
      </Route>
      <Route exact path="/:a(login|sign-up)">
        <Redirect to="/Home" />
      </Route>
      <Dashboard username={props.username} navigatorErr={navigatorErr} />
    </Switch>
  );
}

export default Home;
