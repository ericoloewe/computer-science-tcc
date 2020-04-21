import "./style.scss";

import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Loader } from "../../components/loader";
import { Layout } from "../shared/layout";
import { useAuth } from "../../contexts/auth";

export default function () {
  const { saveToken } = useAuth();
  const { push } = useHistory();

  function saveTokenIfNeedAndRedirect() {
    // eslint-disable-next-line
    saveToken(location.href);

    push(`/`);
  }

  useEffect(() => {
    saveTokenIfNeedAndRedirect();
  });

  return (
    <Layout className="login-redirect-spotify-page" pageTitle="Login ✔" hideDrawerButton={true}>
      <Loader />
      <Typography paragraph>Login realizado com sucesso!</Typography>
      <Typography paragraph>Redirecionando para home...</Typography>
    </Layout>
  );
}
