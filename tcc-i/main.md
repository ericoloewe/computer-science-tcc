UNIVERSIdade FEEVALE

ÉRico De SOUZA loewe

SISTEMA DE RECOMENDAÇÃO MUSICAL BASEADO EM CONTEXTO COMPORTAMENTAL E DE
AMBIENTE

Novo Hamburgo

2020

Érico De SOUZA LOEWE

SISTEMA DE RECOMENDAÇÃO MUSICAL BASEADO EM CONTEXTO COMPORTAMENTAL E DE
AMBIENTE

> Trabalho de Conclusão de Curso
>
> apresentado como requisito parcial
>
> à obtenção do grau de Bacharel em
>
> Nome do Curso pela
>
> Universidade Feevale

Orientador: nome do professor orientador

Novo Hamburgo

2020

Agradecimentos

Gostaria de agradecer a todos os que, de alguma maneira, contribuíram
para a realização desse trabalho de conclusão, em especial:

Aos amigos e às pessoas que convivem comigo diariamente, minha gratidão,
pelo apoio emocional - nos períodos mais difíceis do trabalho.

Enfim, os demais agradecimentos que o aluno desejar fazer.

\* Folha de dedicatória ou de agradecimentos = elemento opcional. O
texto fica na parte inferior da página, respeitando as margens de 2cm da
borda direita e 8cm da borda esquerda da página (PRODANOV, 2003, p. 42).

Resumo

Sabe-se que as pessoas têm dificuldades em lidar com um grande volume de
informações, e com a internet e a evolução da tecnologia houve aumento
da quantidade disponível, trazendo a necessidade de os sistemas
evoluírem suas recomendações, surgindo os RecSys. Esses sistemas são
utilizados em diversos tipos de aplicações como vendas, seleção de um
filme e até mesmo na seleção de uma música, que é um dos objetivos dessa
pesquisa. Neste trabalho será desenvolvido um sistema de recomendação
baseado em contexto comportamental e de ambiente. O objetivo desse
sistema é coletar informações sobre o comportamento e tendência do
usuário, possibilitando o aperfeiçoamento das recomendações musicais de
acordo com o contexto vivenciado pelo usuário.

Palavras-chave: RecSys. Machine Learning. Sistemas de recomendação
musical. Música. Spotify.

Abstract

Tradução do Resumo para a língua inglesa.

Keywords: tradução das palavras-chave para a língua inglesa.

Lista de Figuras

[Figura 1 -- Estrutura de desenvolvimento em duas camadas
14](#_Toc515473980)

[Figura 2 -- Padrão MVC - separação em camadas 15](#_Toc515473981)

\* As listas (de figuras, de tabelas e de abreviaturas e siglas,) devem
ser apresentadas conforme aparecem no trabalho (na ordem), com cada item
designado pelo seu nome/título específico e do respectivo número da
página. Elaborar uma lista própria para cada tipo. Espaço entre linhas =
1,5, [sem]{.underline} o espaçamento antes e depois (6ptos).

Lista de Tabelas

[Tabela 1 -- Matrícula dos alunos do Centro de Educação da FURG segundo
o município. 15](#_Toc515474000)

Lista de Abreviaturas e Siglas

  BSC       Balanced Scorecard
  --------- -----------------------------------------------------------
  CAPF      Custo Anual por Funcionário
  CAPT      Custo Anual por Teclado
  CAPU      Custo Anual por Usuário
  CEO       Chief of Executive Office
  CIA/FVG   Centro de Informática Aplicada da Fundação Getúlio Vargas
  CIO       Chief of Information Office
  CO        Contexto Organizacional
  COBIT     Control Objectives for Information and related Technology
  ERP       Enterprise Resource Planning
  FCS       Fatores Críticos de Sucesso
  FGV       Fundação Getúlio Vargas
  ISACA     Information Systems Audit and Control Association
  MIT       Massachusetts Institute of Technology
  PEE       Planejamento Estratégico Empresarial
  PETI      Panejamento Estratégico da Tecnologia da Informação
  RH        Recursos Humanos
  ROE       Return On Expectation
  ROI       Return On Investiment
  SI        Sistemas de Informação
  SLA       Service Level Agreements
  SLM       Service Level Managements

Sumário

[1 Introdução 11](#introdução)

[2 Sistemas de recomendação 15](#sistemas-de-recomendação-e-contexto)

[2.1 Tipos de sistemas de recomendação
15](#tipos-de-sistemas-de-recomendação)

[2.1.1 Sistemas de recomendação baseado em conteúdo
15](#sistemas-de-recomendação-baseado-em-conteúdo)

[2.1.2 Sistemas de recomendação colaborativo
15](#sistemas-de-recomendação-colaborativo)

[2.1.3 Sistemas de recomendação baseado em aprendizado
15](#sistemas-de-recomendação-baseado-em-aprendizado)

[2.1.4 Sistemas de recomendação híbridos
15](#sistemas-de-recomendação-híbridos)

[2.2 Algoritmos de sistemas de recomendação
16](#algoritmos-de-sistemas-de-recomendação)

[2.3 Técnicas para avaliar OS RESULTADOS de um RecSys
16](#técnicas-para-avaliar-os-resultados-de-um-recsys)

[3 Trabalhos relacionados 17](#trabalhos-relacionados)

[3.1 Os trabalhos 17](#os-trabalhos)

[3.1.1 Improving Context-Aware Music Recommender Systems: Beyond the
Pre-filtering Approach
17](#improving-context-aware-music-recommender-systems-beyond-the-pre-filtering-approach)

[3.1.2 Context-Aware Mobile Music Recommendation for Daily Activities
17](#context-aware-mobile-music-recommendation-for-daily-activities)

[3.1.3 Musical serendipity: designing for contextual music
recommendation and discovery
17](#musical-serendipity-designing-for-contextual-music-recommendation-and-discovery)

[3.1.4 Recommender system handbook 18](#recommender-system-handbook)

[3.1.5 Desenvolvimento de um Sistema de Recomendação Musical Sensível ao
Contexto
18](#desenvolvimento-de-um-sistema-de-recomendação-musical-sensível-ao-contexto)

[3.2 Tabela com tecnicas 18](#tabela-com-tecnicas)

[4 Modelagem do que será feito 19](#modelagem-do-que-será-feito)

[4.1 Contexto 19](#contexto)

[4.1.1 O que é o contexto comportamental?
19](#o-que-é-o-contexto-comportamental)

[4.1.2 O que é o contexto ambiente? 19](#o-que-é-o-contexto-ambiente)

[4.1.3 Como será obtido os contextos?
19](#como-será-obtido-os-contextos)

[4.2 Arquitetura do sistema 19](#arquitetura-do-sistema)

[5 CONCLUSÃO 20](#conclusão)

[Referências Bibliográficas 21](#referências-bibliográficas)

O sumário é elemento obrigatório, em que se apresentam os títulos e
subtítulos (ou seções), seguidos de sua paginação. É recomendável
(PRODANOV, 2003, p.32) que não se ultrapassem cinco níveis de
subtítulos. Deixar um espaço maior para separar cada título =\> por
exemplo, espaçamento antes e depois = 6 pts. Este sumário foi elaborado
automaticamente pelo Word. Para atualizá-lo, basta clicar com o botão
direito, escolher Atualizar Campo e depois Atualizar o Índice Inteiro.

Introdução
==========

A tecnologia avançou muito nos últimos anos, principalmente quando
aborda-se internet e armazenamento de dados (MURARO, 2009). O custo de
armazenar um arquivo vem ficando mais barato e tem feito com que as
pessoas tenham mais espaço de armazenamento, possibilitando a geração de
mais informações (UNIVERSIDADE FEDERAL DO CEARA, \[s.d.\]). A quantidade
de aplicações disponíveis na internet tem aumentado cada vez mais
gerando cada vez mais dados e opções para os usuários.

Diversas vezes o indivíduo possui dificuldades em realizar escolhas
entre as diversas alternativas daquilo que lhe é apresentado, e acaba
geralmente confiando nas escolhas que lhe são apresentadas através de
outras pessoas (RESNICK, PAUL AND VARIAN, 1997). A partir do aumento da
quantidade de informações disponíveis e do conhecimento da habilidade do
indivíduo de realizar escolhas, a partir de sua experiência pessoal,
surgem os sistemas de recomendação. Esses sistemas buscam filtrar a
grande massa de dados disponível, para auxiliar o indivíduo na escolha
das opções disponíveis.

Sistemas de recomendação (RecSys - Recommender Systems) são
implementações de softwares e técnicas, que apresentam sugestões de
itens que seriam de uso de um usuário. As sugestões são de acordo com
vários processos de decisão, como, que item comprar, que música escutar
ou que notícia ler. No geral, sistemas de recomendação servem para dois
propósitos diferentes. Eles podem ser utilizados para estimular os
usuários a fazer alguma coisa como comprar livros ou assistir algum
filme. Em contrapartida, os sistemas de recomendação podem ser
utilizados para lidar com a sobrecarga de informações, selecionando os
melhores itens de uma base maior (DIETMAR et al., 2010).

O auxílio que um sistema de recomendação provê pode ser bem específico
ou genérico. Isso vai depender do tipo de filtragem escolhida para
realizar a recomendação. Quando um sistema busca uma filtragem que leva
em consideração as preferências do usuário, elas podem ser obtidas
implicitamente, por meio de um monitoramento de comportamento. No
entanto, um sistema de recomendação pode também obter explicitamente sua
preferência através de perguntas (DIETMAR et al., 2010).

As recomendações personalizadas necessitam que o sistema conheça algo
sobre cada usuário da base. Todo sistema de recomendação deve
desenvolver e manter um user model ou user profile, que por exemplo,
contém as preferências dele. A existência de um user model é essencial
para qualquer sistema de recomendação (DIETMAR et al., 2010).

Os sistemas de recomendação iniciaram com a \"Usenet\" da Duke
University, na década de 70, um sistema com uma distribuição global que
buscava divulgar novas notícias postadas e classificadas pelos seus
usuários. Em 1985, iniciaram-se as recomendações baseadas em conteúdo, a
partir de uma arquitetura para sistemas de informação de larga escala. A
Xerox teve sua grande participação em 1992, desenvolvendo o primeiro
sistema (Tapestry) designado a realizar a filtragem colaborativa. Em
1997, foi desenvolvido o primeiro sistema de recomendação de filmes
chamado Movielens. Até que em 2000, a Pandora iniciou o projeto genoma
musical, onde a recomendação passou a ser utilizada para facilitar as
escolhas de um usuário entre as diversas músicas existentes na época
(BHATNAGAR, 2016).

Desde então, os sistemas de recomendação têm revolucionado o mercado de
aplicações de diversas formas, pois com eles, aumentam-se o número de
itens vendidos em sites de venda online, além dos sites conseguirem
vender itens mais diversificados. Eles têm melhorado a satisfação dos
usuários e, com isso, têm aumentado suas fidelidades na aplicação, e o
principal, os RecSys ajudam a entender melhor o que os usuários querem.
(RICCI; ROKACH; SHAPIRA, 2011)

Os RecSys têm evoluído muito desde o seu surgimento, isso acontece dado
o interesse acadêmico e comercial sobre a área, além dos benefícios que
ela pode trazer. Um caso famoso dos sistemas de recomendação foi o
Netflix Prize, uma competição feita pela Netflix, que ofereceu um milhão
a quem melhorasse o algoritmo de recomendação de seu sistema em 10%. A
competição iniciou em 2006 e demorou 3 anos para alguém conseguir
resolver o problema deles de maneira satisfatória. Nesse caso o vencedor
utilizou um modelo híbrido de RecSys (FALK, 2019).

(DIETMAR et al., 2010) trazem em sua obra os 4 tipos de sistemas de
recomendação, sendo eles: recomendação colaborativa, que parte da ideia
de que se os usuários compartilharam dos mesmos interesses no passado,
eles continuarão tendo os mesmos interesses no futuro. Recomendação
baseada em conteúdo, onde o sistema aprende a recomendar itens que são
similares ao que o usuário gostou no passado, essa similaridade é
calculada baseada na relação das características dos itens a serem
comparados (RICCI; ROKACH; SHAPIRA, 2011).

O terceiro tipo é a recomendação baseada em conhecimento, a qual não
consegue depender somente do histórico de compra de um usuário, é
necessário um conteúdo mais estruturado e detalhado para ser gerada uma
recomendação, geralmente nesse tipo, é utilizado um conteúdo adicional
fornecido manualmente (conteúdo recente ao produto e usuário). E por
último, sistemas de recomendação híbridos onde a ideia é combinar as
diferentes técnicas, a fim de gerar uma boa e mais assertiva
recomendação (DIETMAR et al., 2010).

Esses sistemas têm ajudado muito na venda de produtos online, porém, um
dos segmentos de mercado que apresentaram problemas, foram as vendas de
álbum ou faixas musicais online. Elas possibilitam as pessoas baixarem
ou receberem as faixas a partir de compras em lojas virtuais, porém o
preço de cada faixa ainda era muito caro, o que fazia com que muitos
usuários optassem pela pirataria. Desta forma, surgiu uma nova maneira
de anunciar os "produtos musicais" online, o streaming musical (BORJA;
DIERINGER, 2016).

O mercado musical tem evoluído muito desde seu início. No começo, seu
consumo foi aumentando cada vez mais com a evolução das tecnologias e
internet. Com o streaming musical, as pessoas passaram a consumir mais
os sistemas de streaming, diminuindo o consumo de pirataria online
(ERIKSSON et al., 2019). Em 2018 o lucro global da indústria musical
cresceu 9,7%. Nesse crescimento, o streaming pago possui boa parte dele
com um 34% do total (IFPI, 2019).

Os sistemas de streaming são um tipo de mecanismo de processamento de
dados projetado com um conjunto de dados infinitos em mente (NIWA,
2018). Esse mecanismo pode ser desenvolvido para processar muitos tipos
de mídia, tais como vídeos, fotos e áudio. Nesse trabalho será utilizado
o streaming de áudio, mais especificamente, o streaming disponível nas
APIs da ferramenta Spotify.

Dentro dos sistemas de streaming, existe o streaming de áudio que é
semelhante a transmissão de rádio tradicional, exceto que é utilizada a
internet para enviar e receber os áudios, ao invés de utilizar ondas
aéreas. Assim como o ato de ligar um rádio, o streaming de áudio é
reproduzido em tempo real, o que é muito mais conveniente do que baixar
uma música online e então consumi-la (LUINI; WHITMAN; DATE, 2002).

Portanto, de acordo com esse contexto, este trabalho procura construir
um sistema de recomendação musical, utilizando o contexto comportamental
do usuário e o contexto do ambiente onde ele está inserido. Esse
contexto será obtido, através da criação um plugin que permitirá ao
usuário escutar suas músicas enquanto são registrados os eventos do
contexto vivido naquele momento.

Sistemas de recomendação e contexto
===================================

Texto

Tipos de sistemas de recomendação
---------------------------------

(DIETMAR et al., 2010) trazem em sua obra os 4 tipos de sistemas de
recomendação, sendo eles: recomendação colaborativa, recomendação
baseada em conteúdo, recomendação baseada em conhecimento, e sistemas de
recomendação híbridos.

### Sistemas de recomendação baseado em conteúdo

Na recomendação baseada em conteúdo, o sistema aprende a recomendar
itens que são similares ao que o usuário gostou no passado, essa
similaridade e calculada baseada na relação das características dos
itens a serem comparados. Por exemplo, no caso de usuário avaliar
positivamente um filme do gênero comedia, então, o sistema pode
registrar essa ação e futuramente recomendar outros filmes desse mesmo
gênero. (RICCI; ROKACH; SHAPIRA, 2011)

### Sistemas de recomendação colaborativo

A recomendação colaborativa parte da ideia de que se os usuários
compartilharam dos mesmos interesses no passado, eles irão continuar
tendo os mesmos interesses no futuro. Por exemplo, os usuários A e B tem
um histórico de compras bem semelhante e o usuário A comprou um novo
livro que o usuário B nem chegou a ver, nesse tipo de recomendação, a
ideia e que o sistema sugira este livro para o usuário B. (DIETMAR et
al., 2010)

### Sistemas de recomendação baseado em aprendizado

Diferente da recomendação colaborativa ou baseada em conteúdo, a
recomendação baseada em aprendizado não consegue depender somente do
histórico de compra de um usuário, e necessário um conteúdo mais
estruturado e detalhado para ser gerado uma recomendação, geralmente
nesse tipo, e utilizado um conteúdo adicional fornecido manualmente
(conteúdo recente ao produto e usuário). (DIETMAR et al., 2010)

### Sistemas de recomendação híbridos

E por último, e não menos importante, (DIETMAR et al., 2010) traz em sua
obra o modelo híbrido de recomendação, onde a ideia e combinar as
diferentes técnicas, buscando gerara uma boa e mais assertiva
recomendação. (DIETMAR et al., 2010)

Algoritmos de sistemas de recomendação
--------------------------------------

Texto

Técnicas para avaliar OS RESULTADOS de um RecSys
------------------------------------------------

Texto

Trabalhos relacionados
======================

Os sistemas de recomendação musical iniciaram nos anos 90 e tem evoluído
muito desde então, ao ponto de que hoje existem diversos trabalhos
relacionados a esse assunto para área. Nesse capítulo será abordado os
diversos trabalhos encontrados a partir de uma revisão realizada sobre o
assunto.

O protocolo de revisão
----------------------

Essa revisão tem como foco encontrar trabalhos que abordam os sistemas
de recomendação, que a partir das músicas conhecidas pelo usuário, e do
contexto comportamental e de ambiente apresentado, buscam melhorar
assertividade das recomendações ao ouvinte.

Dado o foco da pesquisa e o conteúdo encontrado até o momento, foi feito
uma lista de interesses que serão abordados nessa revisão, deles:

-   Estudos realizados

-   Técnicas de recomendação utilizadas

-   Contextos utilizados para recomendação

A partir do escopo de revisão que esse trabalho está inserido, foi
definido certas palavras-chaves para auxiliar no desenvolvimento da
revisão, elas são:

-   RecSys

-   Machine Learning

-   Sistemas de recomendação musical

-   Context-aware

Para realizar a busca dos trabalhos relacionados ao foco de pesquisa da
revisão, será utilizado do Google Scholar
(<https://scholar.google.com/>) para realizar a procura dos artigos em
diversas plataformas de busca e artigos publicados online.

Além das fontes, será desenvolvido uma *string* de busca, para filtrar
por estudos que estejam de acordo com o foco de pesquisa do trabalho.
Pois, existem muitos artigos e diversas áreas de pesquisa relacionadas
aos sistemas de recomendação musical, então, para realizar uma busca
mais voltada ao foco, será utilizada a seguinte *string* de busca:

(("recsys" or "recommender systems" or "machine learning") and ("music"
or "musical" or "song" or "playlist") and ("context" or "context-aware"
or "hci" or "human computer interaction"))

Os trabalhos
------------

### Improving Context-Aware Music Recommender Systems: Beyond the Pre-filtering Approach

Nesse artigo é apresentado uma técnica a partir da *factorization
machines* para extrair informações do contexto usuário a partir do nome
da *playlist.*

### Context-Aware Mobile Music Recommendation for Daily Activities

Nesse artigo é apresentado técnicas para coletar informações sobre o
contexto a partir de um dispositivo mobile e recomendar *playlist* que
irão suprir o desejo do usuário no curto prazo. Apresentam um modelo
probabilístico para integrar a informação contextual com a análise do
conteúdo da música. Por último é apresentado resultados mostrando uma
melhora nos resultados a partir do modelo proposto.

### Musical serendipity: designing for contextual music recommendation and discovery

É apresentado sugestões de como incluir as informações de contexto -
principalmente a localização - nas recomendações musicais interativas,
através dos vários conceitos e protótipos apresentados.

Foram apresentados dois protótipos nesse trabalho, Sounds of Helsinki
(Artigo II) e OUTMedia (Artigo IV). Foi proposta uma plataforma para
vários conceitos de serviço de música com reconhecimento de contexto
(Artigo III). Além disso, foi apresentado dois artigos avaliando os
serviços musicais atuais por suas explicações e transparência (Artigo I)
e o modo que eles envolvem o contexto em suas interações com os sistemas
de recomendação e suas tarefas (background jobs) de descoberta (Artigo
V).

O argumento fundamental e pontapé inicial para essa tese é que
envolvendo os fatores de contexto, aí então a **diversidade cultural
poderia ser fomentada**, com o contexto também é possível oferecer mais
recomendações de músicas fora do convencional do que em canais como
rádios e novos lançamentos, o que pode trazer melhores oportunidades de
descobertas inesperadas.

Possui um capítulo para definição clara do que é contexto.

### Recommender system handbook

Neste livro é apresentado um capítulo tratando sobre os sistemas de
recomendação na área musical (Capitulo 13 - Music Recommender Systems),
nele é abordado recomendações baseadas no conteúdo, modelo hibrido de
recomendação, geração automática de playlist, data-sets e avaliação, mas
o principal tópico que sera utilizado nesse trabalho, é a recomendação a
partir do contexto.

### Desenvolvimento de um Sistema de Recomendação Musical Sensível ao Contexto

Tabela com tecnicas
-------------------

Texto

Modelagem do que será feito
===========================

Texto

Contexto
--------

Texto

### O que é o contexto comportamental?

Texto

### O que é o contexto ambiente?

Texto

### Como será obtido os contextos?

Texto

Arquitetura do sistema
----------------------

Texto

CONCLUSÃO
=========

Pode-se afirmar que está havendo em Porto Alegre uma situação paradoxal.
Ao mesmo tempo em que se percebe um avanço no cumprimento das diretrizes
norteadoras do Sistema Único de Saúde, tais como, a integralidade da
atenção à saúde (preventivo e curativo), a universalidade da cobertura e
do atendimento, a gratuidade e a descentralização das ações e serviços,
verifica-se também a obstaculização permanente do processo em função da
insuficiência de recursos. Ao mesmo tempo em que são repassadas novas
atribuições e poderes ao município de Porto Alegre, não há o repasse de
recursos financeiros na mesma proporção para fazer frente ao processo de
municipalização. Além disso, as negociações para se aumentar os recursos
financeiros sempre ocorrem de maneira conflitiva, principalmente entre o
Estado e o Município. Desse modo, o melhor andamento do processo de
municipalização em Porto Alegre fica na dependência da contrapartida de
recursos do Estado e da União.

\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....

PAGINAÇÃO: Segundo o livro do prof. Cléber Prodanov, as folhas do
trabalho são contadas a partir da folha de rosto (não contamos a capa),
mas nem todas receberão um número. Contamos, mas não numeramos, então, a
folha de rosto, o resumo, o abstract, as listas e o sumário. A numeração
é colocada no canto superior direito da folha, a 2cm da borda superior
da folha, em algarismos arábicos.

Referências Bibliográficas {#referências-bibliográficas .Título-1---sem-numeração}
==========================

BHATNAGAR, V. **Collaborative filtering using data mining and
analysis**. \[s.l: s.n.\]. BORJA, K.; DIERINGER, S. Streaming or
stealing? The complementary features between music streaming and music
piracy. **Journal of Retailing and Consumer Services**, v. 32, p.
86--95, 2016. DIETMAR, J. et al. **Recommendation system -An
Introduction**. \[s.l: s.n.\]. v. 91ERIKSSON, M. et al. **Spotify
Teardown**. \[s.l.\] MIT Press, 2019. FALK, K. **Practical Recommender
Systems**. \[s.l: s.n.\]. IFPI. **IFPI Global Music Report 2019**.
Disponível em:
\<https://www.ifpi.org/news/IFPI-GLOBAL-MUSIC-REPORT-2019\>. LUINI, B.
J. R.; WHITMAN, A. E.; DATE, P. **Streaming Audio: The FezGuys' Guide**.
\[s.l: s.n.\]. MURARO, R. M. **Os avanços tecnológicos e o futuro da
humanidade**Querendo ser Deus, , 2009. NIWA, H. **Streaming Systems**.
\[s.l.\] O'Reilly Media, 2018. v. 134RESNICK, PAUL AND VARIAN, H. R.
Recommender Systems. **Communications of the ACM**, v. 40, n. 4, p.
56--58, 1997. RICCI, F.; ROKACH, L.; SHAPIRA, B. **Recommender Systems
Handbook**. \[s.l: s.n.\]. UNIVERSIDADE FEDERAL DO CEARA. **A
Magnetorresistência Gigante**. Disponível em:
\<https://seara.ufc.br/tintim-por-tintim/tecnologia/a-magnetorresistencia-gigante/\>.
Acesso em: 12 mar. 2020.
