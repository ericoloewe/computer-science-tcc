import React from "react";
import logo from "./logo.svg";
import "./style.css";
import { Layout } from "../shared/layout";

export function Welcome() {
  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome
          </p>
          <a href="/">Go home</a>
        </header>
      </div>
    </Layout>
  );
}
