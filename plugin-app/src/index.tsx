import React, { Suspense, StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch } from "react-router-dom";
import { Loader } from "./components/loader";
import { PrivateRoute, NonAuthRoute } from "./components/router";
import { AppProviders } from "./contexts";

const Home = React.lazy(() => import("./pages/home"));
const Welcome = React.lazy(() => import("./pages/welcome"));
const Login = React.lazy(() => import("./pages/login"));
const LoginRedirectSpotify = React.lazy(() => import("./pages/login-redirect-spotify"));
const Logout = React.lazy(() => import("./pages/logout"));
const Artists = React.lazy(() => import("./pages/artists"));
const Gender = React.lazy(() => import("./pages/gender"));
const Playlist = React.lazy(() => import("./pages/playlist"));
const PlaylistNew = React.lazy(() => import("./pages/playlist-new"));
const PlaylistFeeling = React.lazy(() => import("./pages/playlist-feeling"));
const PlaylistMusicSearch = React.lazy(() => import("./pages/playlist-music-search"));

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <AppProviders>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact={true} path="/playlist/new">
              <PlaylistNew />
            </PrivateRoute>
            <PrivateRoute path="/playlist/:playlistId/feeling">
              <PlaylistFeeling />
            </PrivateRoute>
            <PrivateRoute path="/playlist/:playlistId/music-search">
              <PlaylistMusicSearch />
            </PrivateRoute>
            <PrivateRoute path="/playlist/:playlistId">
              <Playlist />
            </PrivateRoute>
            <PrivateRoute path="/gender">
              <Gender />
            </PrivateRoute>
            <PrivateRoute path="/artists">
              <Artists />
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
        </BrowserRouter>
      </AppProviders>
    </Suspense>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
