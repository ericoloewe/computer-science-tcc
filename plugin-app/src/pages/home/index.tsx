import React from "react";
import logo from "./logo.svg";
import "./style.css";
import { Layout } from "../shared/layout";

export function Home() {
  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="/welcome">
            Go to welcome
          </a>
        </header>
      </div>
    </Layout>
  );
}