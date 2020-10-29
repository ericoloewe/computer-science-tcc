import "./style.scss";

import React, { useState, useEffect } from "react";
import { Button, GridList, GridListTile, ListSubheader, GridListTileBar, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

import { Layout } from "../shared/layout";
import { Loader } from "../../components/loader";
import { useAuth } from "../../contexts/auth";
import { SpotifyUtil } from "../../utils/spotify";

const lorsUri = process.env.REACT_APP_LORS_HOST || "https://lors.azurewebsites.net";
const spotifySearchEndpoint = `${SpotifyUtil.getApiUrl()}/search`;

export default function () {
  const { requestService } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [genre, setGenre] = useState("");
  const [playlists, setPlaylists] = useState<any[]>([]);

  async function loadRecommendation() {
    const {
      data: { genre },
    } = await requestService.get({
      url: lorsUri,
      params: {
        uri: "spotify:user:4i3jdhv6vubcjdpwsn38iv8u4",
        feeling: "alegre",
        activity: "trabalhando",
        location: "casa",
      },
    });

    setGenre(genre);

    const {
      data: { playlists },
    } = await requestService.get({
      url: spotifySearchEndpoint,
      params: {
        q: genre,
        type: "playlist",
      },
    });

    setPlaylists(playlists?.items);
    setIsLoading(false);
  }

  useEffect(() => {
    loadRecommendation(); // eslint-disable-next-line
  }, []);

  return (
    <Layout className="recommendation-page" pageTitle="Temos algumas recomendações para você:" hideDrawerButton={true}>
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <GridList cellHeight={300} className="list">
            <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
              <ListSubheader component="div">
                O seu estilo no momento é: <strong>{genre}</strong>
              </ListSubheader>
            </GridListTile>
            {playlists.map((tile) => (
              <GridListTile key={tile.uri}>
                <a href={tile.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                  <img className="tile-image" src={tile.images[0].url} alt={tile.name} />
                  <GridListTileBar title={tile.name} subtitle={<span>by: {tile.owner.display_name}</span>} />
                </a>
              </GridListTile>
            ))}
          </GridList>
        )}
        <Button className="submit-button" variant="contained" color="primary" {...{ component: Link, to: `/` }}>
          Seguir para home
        </Button>
      </Container>
    </Layout>
  );
}
