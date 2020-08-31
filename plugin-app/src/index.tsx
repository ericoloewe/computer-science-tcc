import React, { Suspense, StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Switch } from "react-router-dom";
import { Loader } from "./components/loader";
import { PrivateRoute, NonAuthRoute, ContextIntro } from "./components/router";
import { AppProviders } from "./contexts";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";

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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#282828",
    },
    secondary: indigo,
  },
});

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <AppProviders>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <Switch>
              <NonAuthRoute path="/login">
                <Login />
              </NonAuthRoute>
              <NonAuthRoute path="/login-redirect-spotify">
                <LoginRedirectSpotify />
              </NonAuthRoute>
              <NonAuthRoute exact path="/:access_token(access_token=.*)">
                <LoginRedirectSpotify />
              </NonAuthRoute>
              <NonAuthRoute path="/welcome">
                <Welcome />
              </NonAuthRoute>
              <PrivateRoute path="/new-context" exact>
                <Feeling />
              </PrivateRoute>
              <PrivateRoute path="/new-context/activity">
                <Activity />
              </PrivateRoute>
              <PrivateRoute path="/new-context/location">
                <Location />
              </PrivateRoute>
              <ContextIntro>
                <PrivateRoute path="/music-search">
                  <MusicSearch />
                </PrivateRoute>
                <PrivateRoute path="/gender">
                  <Gender />
                </PrivateRoute>
                <PrivateRoute path="/artists">
                  <Artists />
                </PrivateRoute>
                <PrivateRoute path="/logout">
                  <Logout />
                </PrivateRoute>
                <PrivateRoute path="/" exact>
                  <Home />
                </PrivateRoute>
              </ContextIntro>
            </Switch>
          </HashRouter>
        </ThemeProvider>
      </AppProviders>
    </Suspense>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
