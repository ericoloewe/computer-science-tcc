import "./style.scss";

import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Loader } from "../../components/loader";
import { Layout } from "../shared/layout";
import { useAuth } from "../../contexts/auth";

export default function () {
  const { logout } = useAuth();
  const history = useHistory();

  async function doLogout() {
    await logout();

    history.push(`/login`);
  }

  useEffect(() => {
    doLogout();
  });

  return (
    <Layout className="logout-page" pageTitle="Logout" hideDrawerButton={true}>
      <Loader />
      <Typography paragraph>Saindo do app...</Typography>
    </Layout>
  );
}
