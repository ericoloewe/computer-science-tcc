import "./style.scss";

import React, { useState, useEffect } from "react";
import { Fab, MenuItem } from "@material-ui/core";
import { Favorite as FavoriteIcon, Add as AddIcon, FavoriteBorder as FavoriteBorderIcon } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";

import { ChooseWithActions, ChooseItem } from "../../components/choose-with-actions";
import { Layout } from "../shared/layout";
import { usePlaylist } from "../../contexts/playlist";

function PlaylistLink({ item, children }: { item: ChooseItem; children: any }) {
  return <Link to={`/playlist/${item.id}/feeling`}>{children}</Link>;
}

export default function () {
  const { loadAll } = usePlaylist();
  const history = useHistory();
  const [playlists, setPlaylists] = useState([] as ChooseItem[]);

  async function fetchData() {
    const playlists = await loadAll();

    setPlaylists(playlists);
  }

  async function logout() {
    history.push(`/logout`);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout className="home-page" pageTitle="Playlists" menuItems={CustomMenu(fetchData, logout)}>
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

function CustomMenu(refresh: () => Promise<void>, logout: () => Promise<void>) {
  return [
    <MenuItem key="refresh" onClick={() => refresh()}>
      Refresh
    </MenuItem>,
    <MenuItem key="logout" onClick={() => logout()}>
      Logout
    </MenuItem>,
  ];
}
