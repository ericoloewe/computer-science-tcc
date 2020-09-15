import React from "react";
import "./style.scss";
import { Button, Typography, Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function () {
  return (
    <Container className="welcome-page">
      <Grid container spacing={1}>
        <Grid container item className="description">
          <Typography variant="h1" component="h1">
            Bem-vindo ao experimento musical!
          </Typography>
          <Typography component="p">
            Este é um experimento que será utilizado em um Trabalho de Conclusão do curso de Ciência da Computação da
            Universidade Feevale. Ele foi criado com a intenção de obter informações sobre o gosto musical dos usuários
            que utilizarem.
          </Typography>
          <Typography variant="h2" component="h2">
            Como irá funcionar o experimento?
          </Typography>
          <iframe
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="youtube-video"
            frameBorder="0"
            height="315"
            src="https://www.youtube.com/embed/h8KZlMD84w0"
            title="Como irá funcionar o experimento?"
            width="560"
          ></iframe>
          <Typography component="p">
            O objetivo desse experimento é obter informações referentes ao contexto atual do usuário, isso é,
            informações referentes ao seu humor, atividades e localização.
          </Typography>
          <Typography variant="h3" component="h3">
            De quanto em quanto tempo serão obtidas as informações?
          </Typography>
          <Typography component="ul">
            <li>
              De 30 em 30 minutos serão feitas perguntas relacionadas ao contexto que você está vivendo no momento
            </li>
            <li>
              De 1 em 1 hora será atualizada a sessão, solicitando ao usuario que faça login novamente na aplicação.
            </li>
          </Typography>
        </Grid>
        <Grid container item>
          <Button className="submit-button" variant="contained" color="primary" {...{ component: Link, to: `/login` }}>
            Continuar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
