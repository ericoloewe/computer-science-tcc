---
title: UNIVERSIDADE FEEVALE
---

ÉRICO DE SOUZA LOEWE

##### SISTEMA DE RECOMENDAÇÃO MUSICAL BASEADO EM CONTEXTO COMPORTAMENTAL E DE AMBIENTE

(Título Provisório)

###### Anteprojeto de Trabalho de Conclusão

Novo Hamburgo

2018

ÉRICO DE SOUZA LOEWE

##### SISTEMA DE RECOMENDAÇÃO MUSICAL BASEADO EM CONTEXTO COMPORTAMENTAL E DE AMBIENTE

(Título Provisório)

> Anteprojeto de Trabalho de Conclusão de Curso, apresentado como
> requisito parcial
>
> à obtenção do grau de Bacharel em
>
> Ciência da Computação pela
>
> Universidade Feevale

Orientador: Juliano Varella de Carvalho

Novo Hamburgo

2018

RESUMO
======

O resumo é construído na forma de um parágrafo único e não pode
ultrapassar 500 palavras. Todo resumo é uma apresentação concisa dos
pontos relevantes de um trabalho/documento.

Palavras-chave: No máximo 5 palavras-chave, separadas entre si por ponto
e finalizadas também pó ponto.

**OBSERVAÇÕES:**

**[Dicas para elaboração do resumo:]{.underline}**

**- Apresentar o assunto/tema a ser abordado;**

**- Destacar a área de atuação do trabalho e qual problemática ou
trabalho busca solucionar. Situar o trabalho, de forma específica,
dentro de uma área, projeto de pesquisa ou problema empresarial;**

**- Ressaltar o método do trabalho (caso já saiba, colocar no
anteprojeto).**

**- Destacar os objetivos do trabalho. Exemplos: "Sendo assim, este
trabalho tem como objetivo\...." , "Desta forma, este trabalho tem como
objetivo \...." , etc.**

SUMÁRIO

MOTIVAÇÃO
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...5

OBJETIVOS
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...8

METODOLOGIA
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\....9

CRONOGRAMA
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....10

BIBLIOGRAFIA
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....11

 MOTIVAÇÃO
=========

A tecnologia avançou muito nos últimos anos, principalmente quando
estamos falando de internet e armazenamento. (Muraro, 2009) O custo de
armazenar um arquivo vem cada vez ficando mais barato e tudo isso, tem
feito com que as pessoas tenham mais espaço de armazenamento, dando a
possibilidade de gerarem cada vez mais informações. (Universidade
Federal do Ceara, n.d.) A quantidade de aplicações disponíveis na
internet tem aumentado cada vez mais gerando cada vez mais dados e
opções para os usuários.

Diversas vezes o indivíduo possui dificuldades em realizar escolhas
entre as diversas alternativas daquilo que lhe e apresentado, e acaba
geralmente confiando nas escolhas que lhe são apresentadas através de
outras pessoas. (Resnick, Paul and Varian, 1997) A partir do aumento da
quantidade de informações disponíveis e do conhecimento da habilidade do
indivíduo de realizar escolhas a partir de sua experiencia pessoal,
surgem os sistemas de recomendação. Esses sistemas buscam filtrar a
grande massa de dados disponível, para auxiliar o indivíduo na escolha
das opções disponíveis.

Sistemas de recomendação (RecSys - *Recommender Systems*) são
implementações de softwares e técnicas, que apresentam sugestões de
itens que seriam de uso de um usuário. As sugestões são de acordo com
vários processos de decisão, como, que item comprar, que musica escutar
ou que noticia ler. No geral, sistemas de recomendação servem para dois
propósitos diferentes. Eles podem ser utilizados para estimular os
usuários a fazer alguma coisa como, comprar livros ou assistir algum
filme. Em contrapartida, os sistemas de recomendação podem ser
utilizados para lidar com a sobrecarga de informações, selecionando os
melhores itens de uma base maior. (Dietmar et al., 2010)

O auxílio que um sistema de recomendação prove pode ser bem específico
ou genérico. Isso vai depender do tipo de filtragem escolhida para
realizar a recomendação. Quando um sistema busca uma filtragem que leva
em consideração as preferências do usuário, elas podem ser obtidas
implicitamente por meio de um monitoramento de comportamento. No
entanto, um sistema de recomendação pode também obter explicitamente sua
preferência através de perguntas sobre suas preferências. (Dietmar et
al., 2010)

As recomendações personalizadas necessitam que o sistema conheça algo
sobre cada usuário da base. Todo sistema de recomendação deve
desenvolver e manter um *user model* ou *user profile*, que por exemplo,
contém as preferências dele. A existência de um *user model* é essencial
para qualquer sistema de recomendação. (Dietmar et al., 2010)

Os sistemas de recomendação iniciaram com a \"*Usenet*\" da *Duke
University* na década de 70, um sistema com uma distribuição global que
buscava divulgar novas notícias postadas e classificadas pelos seus
usuários. Em 1985, iniciaram-se as recomendações baseadas em conteúdo, a
partir de uma arquitetura para sistemas de informação de larga escala. A
Xerox teve sua grande participação em 1992, desenvolvendo o primeiro
sistema (Tapestry) designado a realizar a filtragem colaborativa. Em
1997, foi desenvolvido o primeiro sistema de recomendação de filmes
chamado Movielens. Até que em 2000, a Pandora iniciou o projeto genoma
musical, onde a recomendação passou a ser utilizada para facilitar as
escolhas de um usuário entre as diversas músicas existentes na época.
(Bhatnagar, 2016)

Desde então, os sistemas de recomendação têm só revolucionado o mercado
de aplicações de diversas formas, pois com eles, tem se aumentando o
número de itens vendidos em sites de venda online, além dos sites
conseguirem vender itens mais diversificados a partir dos sistemas. Tem
melhorado a satisfação dos usuários e com isso, aumentando sua
fidelidade na aplicação, e o principal, os RecSys ajudam a entender
melhor o que o usuário quer. (Ricci et al., 2011)

Os RecSys têm evoluído muito desde o seu surgimento, isso acontece dado
o interesse acadêmico e comercial sobre a área dado os benefícios que
ela pode trazer. Um caso famoso dos sistemas de recomendação foi o
*Netflix Prize*, uma competição feita pela Netflix, que ofereceu um
milhão a quem melhorasse o algoritmo de recomendação de seu sistema em
10%. A competição iniciou em 2006 e demorou 3 anos para alguém conseguir
resolver o problema deles. Nesse caso o vencedor utilizou o modelo
híbrido de RecSys. (Falk, 2019)

(Dietmar et al., 2010) traz em sua obra os 4 tipos de sistemas de
recomendação, sendo eles: recomendação colaborativa que parte da ideia
de que se os usuários compartilharam dos mesmos interesses no passado,
eles irão continuar tendo os mesmos interesses no futuro. (Dietmar et
al., 2010) Recomendação baseada em conteúdo, onde o sistema aprende a
recomendar itens que são similares ao que o usuário gostou no passado,
essa similaridade e calculada baseada na relação das características dos
itens a serem comparados. (Ricci et al., 2011)

O terceiro tipo é a recomendação baseada em conhecimento a qual não
consegue depender somente do histórico de compra de um usuário, é
necessário um conteúdo mais estruturado e detalhado para ser gerado uma
recomendação, geralmente nesse tipo, é utilizado um conteúdo adicional
fornecido manualmente (conteúdo recente ao produto e usuário). E por
último, e não menos importante, sistemas de recomendação híbridos onde a
ideia é combinar as diferentes técnicas, buscando gerar uma boa e mais
assertiva recomendação. (Dietmar et al., 2010)

Os sistemas de recomendação têm ajudado muito na venda de produtos
online, porém, um dos segmentos de mercado que apresentaram problemas,
são as vendas de álbum ou faixas online. Elas possibilitam as pessoas
baixarem ou receberem as faixas a partir de uma compra em lojas
virtuais. Aonde muitos viram esse problema e criaram uma nova maneira de
anunciar os "produtos musicais" online, que é o streaming musical.

O mercado musical tem evoluído muito desde seu início, no início, seu
consumo foi a partir de partituras em 1929, e então veio os discos de 78
RPM e LPs em 1959, e em 1979 veio as fitas K7, 1999 veio os CDs, até que
então vieram os mp3's, com a popularização da internet, vieram a venda
de álbuns e musicas online. Que durou por muito tempo, mas ainda assim,
dada a dificuldade de se adquirir uma música, as pessoas ainda optavam
pelo download das faixas, o que mudou muito com o surgimento dos
streamings musicais. (Va, 2017)

\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--

Sistemas de Recomendação

\- conceito

\- histórico

\- Exemplos de uso

\- Sistemas de Recomendação para Streaming

\- Vantagens/desvantagens

Serviços de Streaming Musicais

\- conceito

\- histórico

\- exemplos

\- mais utilizado a partir de alguma estatística

\- O que faltam nos sistemas de recomendação musicais para serviços de
streaming

\- Formula a tua questão de pesquisa

\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--

Atualmente, o Spotify não consegue captar um sentimento tão bem, devido
a não levar em consideração as ações que os usuários estão tomando
naquele momento.

A ideia desse projeto e que com ele, possamos evoluir a recomendação
musical para algo mais voltado ao sentimento que o usuário está sentindo
no momento em que está ouvindo a música.

**\
OBJETIVOS**

Objetivo geral

Desenvolver um sistema de recomendação musical, considerando o contexto
comportamental do usuário, bem como o contexto do ambiente onde ele
encontra-se.

Objetivos específicos

-   Investigar APIs de Serviços de Streamings Musicais.

-   Selecionar a API a ser utilizada no sistema de recomendação.

-   Definir os contextos de ambiente a serem utilizados no sistema.

-   Definir os contextos comportamentais do usuário a serem utilizados
    no sistema.

-   Criar a infraestrutura necessária para o armazenamento e
    relacionamento das músicas com os contextos comportamentais e de
    ambiente do usuário.

-   Criar um protótipo do sistema de recomendação.

-   Avaliar o sistema de recomendação com usuários voluntários.

 METODOLOGIA
===========

**OBSERVAÇÕES:**

1)  **Entende-se por metodologia a forma, a maneira como a pesquisa será
    realizada. É o caminho para se chegar no conhecimento, na resposta
    ao problema de pesquisa. São os passos da pesquisa.**

2)  **Apresentamos o universo a ser pesquisado (pessoas, coisas,
    fenômenos\....), o método, as técnicas de coleta de dados a serem
    utilizadas (pesquisa bibliográfica, documental, de campo, de
    laboratório, entrevista, questionário, testes, formulários, etc), a
    forma de análise e interpretação dos dados.**

 CRONOGRAMA
==========

Trabalho de Conclusão I

  ------- ------- ----- ----- -----
  Etapa   Meses               
          Mar     Abr   Mai   Jun
                              
  ------- ------- ----- ----- -----

Trabalho de Conclusão II

  ------- ------- ----- ----- -----
  Etapa   Meses               
          Ago     Set   Out   Nov
                              
  ------- ------- ----- ----- -----

OBSERVAÇÕES: 
============

- O cronograma é a etapa do trabalho em que o pesquisador define o cronograma da pesquisa, determinando fases a serem cumpridas e os prazos para a realização das tarefas. 
==========================================================================================================================================================================

- Construímos em forma de quadro, como no modelo acima. BIBLIOGRAFIA
====================================================================

Usar normas conforme Manual de Metodologia Científica da Feevale = livro
prof. Prodanov. .

**OBSERVAÇÕES:**

**- Ordem alfabética**

**- Devem entrar todos os títulos utilizados na estruturação do
anteprojeto de pesquisa.**

**OBSERVAÇÕES GERAIS:**

**- Início de parágrafo = 1,5.**

**- Folha A4, letra Times New Roman, tamanho 12 no texto normal. Nos
títulos pode-se utilizar letra maior (14) e em letra maiúscula.**

**- Espaçamento entre título e texto = dois espaços 1,5.**

**- Espaçamento entre parágrafos = 6,0 pontos depois.**

**- Espaçamento, no sumário, entre um título e outro = 6,0 pontos
depois.**

**- Margens: superior = 3cm**

**Inferior = 2cm**

**Esquerda = 3cm**

**Direita = 2cm**

**- O anteprojeto deve conter em torno de 11 páginas no total.**

**- Alinhamento no texto justificado. Os títulos, contudo, são
centralizados.**
