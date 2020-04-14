import React from "react";
import "./style.scss";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function () {
  return (
    <article className="welcome-page">
      <section className="description">
        <Typography variant="h4" component="h4">
          Bem vindo!
        </Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </section>
      <Button variant="contained" color="primary" {...{ component: Link, to: `/` }}>
        Continuar
      </Button>
    </article>
  );
}
