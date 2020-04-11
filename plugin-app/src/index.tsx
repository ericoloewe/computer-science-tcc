import React, { Suspense, StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Loader } from "./components/loader";

const Home = React.lazy(() => import("./pages/home"));
const Welcome = React.lazy(() => import("./pages/welcome"));
const Login = React.lazy(() => import("./pages/login"));
const Artists = React.lazy(() => import("./pages/artists"));
const Gender = React.lazy(() => import("./pages/gender"));
const Playlist = React.lazy(() => import("./pages/playlist"));
const PlaylistFeeling = React.lazy(() => import("./pages/playlist-feeling"));
const PlaylistMusicSearch = React.lazy(() => import("./pages/playlist-music-search"));

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Switch>
          <Route path="/playlist/:playlistId/feeling">
            <PlaylistFeeling />
          </Route>
          <Route path="/playlist/:playlistId/music-search">
            <PlaylistMusicSearch />
          </Route>
          <Route path="/playlist/:playlistId">
            <Playlist />
          </Route>
          <Route path="/gender">
            <Gender />
          </Route>
          <Route path="/artists">
            <Artists />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
