import React, { Suspense, StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Switch } from "react-router-dom";
import { Loader } from "./components/loader";
import { PrivateRoute, NonAuthRoute } from "./components/router";
import { AppProviders } from "./contexts";

const routeBasename = process.env.REACT_APP_ROUTE_BASENAME || "";

const Home = React.lazy(() => import("./pages/home"));
const Welcome = React.lazy(() => import("./pages/welcome"));
const Login = React.lazy(() => import("./pages/login"));
const LoginRedirectSpotify = React.lazy(() => import("./pages/login-redirect-spotify"));
const Logout = React.lazy(() => import("./pages/logout"));
const Artists = React.lazy(() => import("./pages/artists"));
const Gender = React.lazy(() => import("./pages/genre"));
const Feeling = React.lazy(() => import("./pages/feeling"));
const Activity = React.lazy(() => import("./pages/activity"));
const Location = React.lazy(() => import("./pages/location"));
const MusicSearch = React.lazy(() => import("./pages/music-search"));

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <AppProviders>
        <HashRouter basename={routeBasename}>
          <Switch>
            <PrivateRoute path="/new-context/activity">
              <Activity />
            </PrivateRoute>
            <PrivateRoute path="/new-context/feeling">
              <Feeling />
            </PrivateRoute>
            <PrivateRoute path="/new-context/music-search">
              <MusicSearch />
            </PrivateRoute>
            <PrivateRoute path="/new-context/gender">
              <Gender />
            </PrivateRoute>
            <PrivateRoute path="/new-context/artists">
              <Artists />
            </PrivateRoute>
            <PrivateRoute path="/new-context/location">
              <Location />
            </PrivateRoute>
            <NonAuthRoute path="/login">
              <Login />
            </NonAuthRoute>
            <NonAuthRoute path="/login-redirect-spotify">
              <LoginRedirectSpotify />
            </NonAuthRoute>
            <PrivateRoute path="/logout">
              <Logout />
            </PrivateRoute>
            <NonAuthRoute path="/welcome">
              <Welcome />
            </NonAuthRoute>
            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </HashRouter>
      </AppProviders>
    </Suspense>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
