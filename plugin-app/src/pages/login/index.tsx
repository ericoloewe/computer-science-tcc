import "./style.scss";

import React from "react";
import { Button } from "@material-ui/core";

import { SpotifyUtil } from "../../utils/spotify";

const spotifyLoginUrl = SpotifyUtil.createSpotifyAuthUrl();

export default function () {
  return (
    <article className="login-page">
      <img
        className="logo"
        src="https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png"
        alt="Spotify logo"
      />
      <section className="actions">
        <Button variant="contained" color="primary" href={spotifyLoginUrl}>
          Entrar
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href="https://www.spotify.com/signup/"
          target="_blank"
          rel="noopener"
        >
          Cadastre-se
        </Button>
      </section>
    </article>
  );
}
