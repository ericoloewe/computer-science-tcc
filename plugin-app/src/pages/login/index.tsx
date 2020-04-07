import React from "react";
import "./style.scss";
import { Button, TextField } from "@material-ui/core";

export default function () {
  return (
    <article className="login-page">
      <img
        className="logo"
        src="https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png"
        alt="Spotify logo"
      />
      <section className="fields">
        <TextField id="standard-helperText" label="Email" />
        <TextField id="standard-helperText" label="Senha" type="password" />
      </section>
      <Button variant="contained" color="primary" href="/">
        Entrar
      </Button>
    </article>
  );
}
