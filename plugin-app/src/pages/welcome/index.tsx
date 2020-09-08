import React from "react";
import "./style.scss";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function () {
  return (
    <article className="welcome-page">
      <section className="description">
        <Typography variant="h1" component="h1">
          Bem vindo ao experimento musical!
        </Typography>
        <Typography component="p">
          Este é um experimento que sera utilizado em um Trabalho de Conclusão do curso de Ciência da Computação da
          Universidade Feevale. Ele foi criado com a intenção de obter informações sobre o gosto musical dos usuarios
          que utilizarem.
        </Typography>
        <Typography variant="h2" component="h2">
          Como ira funcionar o experimento?
        </Typography>
        <iframe
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          height="315"
          src="https://www.youtube.com/embed/h8KZlMD84w0"
          title="Como ira funcionar o experimento?"
          width="560"
        ></iframe>
        <Typography component="p">
          O objetivo desse experimento é obter informações referentes ao contexto atual do usuario, isso é, informações
          referentes ao seu humor, atividades e local.
        </Typography>
        <Typography variant="h3" component="h3">
          De quanto em quanto tempo sera obtido as informações?
        </Typography>
        <Typography component="ul">
          <li>De 30 em 30 minutos, sera feito perguntas relacionadas ao cotexto que você esta vivendo no momento</li>
          <li>
            De 1 em 1 hora, sera atualizado a seção, solicitando ao usuario que faça login novamente na aplicação.
          </li>
        </Typography>
      </section>
      <Button variant="contained" color="primary" {...{ component: Link, to: `/login` }}>
        Continuar
      </Button>
    </article>
  );
}
