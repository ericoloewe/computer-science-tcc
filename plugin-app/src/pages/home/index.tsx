import React from "react";
import logo from "./logo.svg";
import "./style.css";
import { Layout } from "../shared/layout";
import { Link } from "react-router-dom";

export default function () {
  return (
    <Layout className="home-page" pageTitle="Home">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Link className="App-link" to="/welcome">
            Go to welcome
          </Link>
          <Link className="App-link" to="/login">
            Go to login
          </Link>
          <Link className="App-link" to="/artists">
            Go to artists
          </Link>
          <Link className="App-link" to="/gender">
            Go to gender
          </Link>
          <Link className="App-link" to="/playlist-felling">
            Go to playlist-felling
          </Link>
        </header>
      </div>
    </Layout>
  );
}
