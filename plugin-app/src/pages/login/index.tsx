import React, { useState } from "react";
import "./style.scss";
import { Button, TextField } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

export default function () {
  const history = useHistory();
  const location = useLocation();
  const { login } = useAuth();
  const { from } = (location.state || { from: { pathname: "/" } }) as any;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function doLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await login(username, password);
    history.replace(from);
  }

  return (
    <article className="login-page">
      <img
        className="logo"
        src="https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png"
        alt="Spotify logo"
      />
      <form className="form" onSubmit={doLogin}>
        <section className="fields">
          <TextField
            id="standard-helperText"
            label="Email"
            onChange={(e) => setUsername(e.target.value)}
            type="email"
            value={username}
          />
          <TextField
            id="standard-helperText"
            label="Senha"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
          />
        </section>
        <section className="actions">
          <Button variant="contained" color="primary" type="submit">
            Entrar
          </Button>
          <Button variant="contained" color="secondary" href="https://www.spotify.com/signup/">
            Cadastre-se
          </Button>
        </section>
      </form>
    </article>
  );
}
