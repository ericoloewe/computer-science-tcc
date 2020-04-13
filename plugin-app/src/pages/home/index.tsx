import "./style.scss";

import React, { useState, useEffect } from "react";
import { Fab, Menu, MenuItem } from "@material-ui/core";
import { Favorite as FavoriteIcon, Add as AddIcon, FavoriteBorder as FavoriteBorderIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

import { ChooseWithActions, ChooseItem } from "../../components/choose-with-actions";
import { Layout } from "../shared/layout";
import { playlistService } from "../../services/playlist";

function PlaylistLink({ item, children }: { item: ChooseItem; children: any }) {
  return <Link to={`/playlist/${item.id}/feeling`}>{children}</Link>;
}

export default function () {
  const [playlists, setPlaylists] = useState([] as ChooseItem[]);

  async function fetchData() {
    const playlists = await playlistService.load();

    setPlaylists(playlists);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout className="home-page" pageTitle="Playlists" menuItems={CustomMenu()}>
      <ChooseWithActions
        items={playlists}
        actionIcon={<FavoriteBorderIcon />}
        selectedActionIcon={<FavoriteIcon />}
        linkComponent={PlaylistLink}
      />
      <Link to="/playlist/new">
        <Fab className="new-playlist-button" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </Layout>
  );
}

function CustomMenu() {
  return [
    <MenuItem onClick={(e) => alert("HERE")}>Profile</MenuItem>,
    <MenuItem>My account</MenuItem>,
    <MenuItem>Logout</MenuItem>,
  ];
}
