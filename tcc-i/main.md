UNIVERSIdade FEEVALE

ÉRico De SOUZA loewe

SISTEMA DE RECOMENDAÇÃO MUSICAL BASEADO EM CONTEXTO COMPORTAMENTAL E DE
AMBIENTE

Novo Hamburgo

2020

Érico De SOUZA LOEWE

SISTEMA DE RECOMENDAÇÃO MUSICAL BASEADO EM CONTEXTO COMPORTAMENTAL E DE
AMBIENTE

Trabalho de Conclusão de Curso

apresentado como requisito parcial

à obtenção do grau de Bacharel em

Nome do Curso pela

Universidade Feevale

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
filme e também na escolha de uma música, que é um dos objetivos dessa
pesquisa. Neste trabalho será desenvolvido um sistema de recomendação
baseado em contexto comportamental e de ambiente. O objetivo desse
sistema é coletar informações sobre o comportamento e tendência do
usuário, possibilitando o aperfeiçoamento das recomendações musicais de
acordo com o contexto vivenciado por ele.

Palavras-chave: RecSys. Machine Learning. Sistemas de recomendação
musical. Música. Spotify.

Abstract

Tradução do Resumo para a língua inglesa.

Keywords: tradução das palavras-chave para a língua inglesa.

Lista de Figuras

[Figura 1 - Motor avançado de busca da ACM (próprio, 2020)
16](#_Ref40822595)

[Figura 2 - Resultado de busca dos proceedings no motor de busca da ACM
(próprio, 2020) 17](#_Ref40822631)

[Figura 3 - Resultado de busca dos journals no motor de busca da ACM
(próprio, 2020) 18](#_Ref40822641)

[Figura 4 - Etapas realizadas para filtrar os trabalhos encontrados no
motor de busca da ACM (próprio, 2020) 18](#_Ref40822414)

[Figura 5 - Filtro em cima dos trabalhos selecionados através do resumo
(próprio, 2020) 19](#_Ref40822493)

[Figura 6 - Procedimento de filtro realizado baseado nos trabalhos
encontrados no motor de busca da ACM (próprio, 2020) 19](#_Ref40822509)

[Figura 7 Fatores da preferência musical (próprio, 2020)
28](#_Toc42382774)

[Figura 8 Apresentação dos contextos utilizados no trabalho (próprio,
2020) 34](#_Toc42382775)

Lista de Quadros

[Quadro 1 Relação das funcionalidades desenvolvidas em cada artigo
revisado. Acima é listado os trabalhos revisados, e a esquerda as
funcionalidades encontradas. Foi utilizado 3 símbolos: (i) ✔ caso
possua; (ii)❌ caso não possua; (iii)❓ caso não apresente ainda (próprio,
2020) 30](#_Ref42381546)

Lista de Abreviaturas e Siglas

| BSC     | Balanced Scorecard                                        |
| ------- | --------------------------------------------------------- |
| CAPF    | Custo Anual por Funcionário                               |
| CAPT    | Custo Anual por Teclado                                   |
| CAPU    | Custo Anual por Usuário                                   |
| CEO     | Chief of Executive Office                                 |
| CIA/FVG | Centro de Informática Aplicada da Fundação Getúlio Vargas |
| CIO     | Chief of Information Office                               |
| CO      | Contexto Organizacional                                   |
| COBIT   | Control Objectives for Information and related Technology |
| ERP     | Enterprise Resource Planning                              |
| FCS     | Fatores Críticos de Sucesso                               |
| FGV     | Fundação Getúlio Vargas                                   |
| ISACA   | Information Systems Audit and Control Association         |
| MIT     | Massachusetts Institute of Technology                     |
| PEE     | Planejamento Estratégico Empresarial                      |
| PETI    | Panejamento Estratégico da Tecnologia da Informação       |
| RH      | Recursos Humanos                                          |
| ROE     | Return On Expectation                                     |
| ROI     | Return On Investiment                                     |
| SI      | Sistemas de Informação                                    |
| SLA     | Service Level Agreements                                  |
| SLM     | Service Level Managements                                 |

Sumário

[1 Introdução 10](#introdução)

[2 Trabalhos relacionados 14](#trabalhos-relacionados)

[2.1 O protocolo de revisão 14](#o-protocolo-de-revisão)

[2.2 PROCURA NOS MOTORES DE BUSCA 16](#procura-nos-motores-de-busca)

[2.3 ETAPAS DA REVISÃO DOS TRABALHOS
18](#etapas-da-revisão-dos-trabalhos)

[2.3.1 Trabalhos selecionados 19](#trabalhos-selecionados)

[2.4 FUNCIONALIDADES DOS TRABALHOS INVESTIGADOS
30](#funcionalidades-dos-trabalhos-investigados)

[3 Modelagem do “Nome do trabalho” (TODO)
33](#modelagem-do-nome-do-trabalho-todo)

[3.1 Contexto 33](#contexto)

[3.1.1 O que é o contexto comportamental?
34](#o-que-é-o-contexto-comportamental)

[3.1.2 O que é o contexto ambiente? 34](#o-que-é-o-contexto-ambiente)

[3.1.3 Como será obtido os contextos?
35](#como-será-obtido-os-contextos)

[3.2 Arquitetura do sistema 35](#arquitetura-do-sistema)

[4 CONCLUSÃO 36](#conclusão)

[Referências Bibliográficas 37](#referências-bibliográficas)

# Introdução

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

Os sistemas de recomendação iniciaram com a "Usenet" da Duke University,
na década de 70, um sistema com uma distribuição global que buscava
divulgar novas notícias postadas e classificadas pelos seus usuários. Em
1985, iniciaram-se as recomendações baseadas em conteúdo, a partir de
uma arquitetura para sistemas de informação de larga escala. A Xerox
teve sua grande participação em 1992, desenvolvendo o primeiro sistema
(Tapestry) designado a realizar a filtragem colaborativa. Em 1997, foi
desenvolvido o primeiro sistema de recomendação de filmes chamado
Movielens. Até que em 2000, a Pandora iniciou o projeto genoma musical,
onde a recomendação passou a ser utilizada para facilitar as escolhas de
um usuário entre as diversas músicas existentes na época (BHATNAGAR,
2016).

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
recomendação, sendo eles: recomendação colaborativa, recomendação
baseada em conteúdo, recomendação baseada em conhecimento, e sistemas de
recomendação híbridos.

Na recomendação baseada em conteúdo, o sistema aprende a recomendar
itens que são similares ao que o usuário gostou no passado, essa
similaridade e calculada baseada na relação das características dos
itens a serem comparados. Por exemplo, no caso de usuário avaliar
positivamente um filme do gênero comedia, então, o sistema pode
registrar essa ação e futuramente recomendar outros filmes desse mesmo
gênero. (RICCI; ROKACH; SHAPIRA, 2011)

A recomendação colaborativa parte da ideia de que se os usuários
compartilharam dos mesmos interesses no passado, eles irão continuar
tendo os mesmos interesses no futuro. Por exemplo, os usuários A e B tem
um histórico de compras bem semelhante e o usuário A comprou um novo
livro que o usuário B nem chegou a ver, nesse tipo de recomendação, a
ideia e que o sistema sugira este livro para o usuário B. (DIETMAR et
al., 2010)

Diferente da recomendação colaborativa ou baseada em conteúdo, a
recomendação baseada em aprendizado não consegue depender somente do
histórico de compra de um usuário, e necessário um conteúdo mais
estruturado e detalhado para ser gerado uma recomendação, geralmente
nesse tipo, e utilizado um conteúdo adicional fornecido manualmente
(conteúdo recente ao produto e usuário). (DIETMAR et al., 2010)

E por último, e não menos importante, (DIETMAR et al., 2010) traz em sua
obra o modelo híbrido de recomendação, onde a ideia e combinar as
diferentes técnicas, buscando gerara uma boa e mais assertiva
recomendação. (DIETMAR et al., 2010)

Esses sistemas têm ajudado muito na venda de produtos online, porém, um
dos segmentos de mercado que apresentaram problemas, foram as vendas de
álbum ou faixas musicais online. Elas possibilitam as pessoas baixarem
ou receberem as faixas a partir de compras em lojas virtuais, porém o
preço de cada faixa ainda era muito caro, o que fazia com que muitos
usuários optassem pela pirataria. Desta forma, surgiu uma nova maneira
de anunciar os “produtos musicais” online, o streaming musical (BORJA;
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
contexto será obtido através da criação de um *plugin* que permitirá ao
usuário escutar suas músicas enquanto são registrados os eventos do
contexto vivido naquele momento.

# Trabalhos relacionados

Os sistemas de recomendação musical iniciaram nos anos 90 e têm evoluído
muito desde então, ao ponto de que hoje existem diversos trabalhos
relacionados a esse assunto para área. Nesse capítulo serão abordados
alguns trabalhos encontrados, a partir de uma revisão bibliográfica
realizada sobre o assunto.

## O protocolo de revisão

Essa revisão tem como foco encontrar trabalhos que abordam os sistemas
de recomendação, que a partir das músicas conhecidas pelo usuário, e do
contexto comportamental e de ambiente apresentado, buscam melhorar
assertividade das recomendações ao ouvinte.

Dado o foco da pesquisa e o conteúdo encontrado até o momento, foi feita
uma lista de interesses que serão abordados nessa revisão:

  - Estudos realizados

  - Técnicas de recomendação utilizadas

  - Contextos utilizados para recomendação

A partir do escopo de revisão que esse trabalho está inserido, foram
definidas certas palavras-chaves para auxiliar no desenvolvimento da
revisão, elas são:

  - RecSys

  - Machine Learning

  - Sistemas de recomendação musical

  - Context-aware (TODO: COLOCAR SIGNIFICADO)

Para realizar a busca dos trabalhos relacionados será utilizado o motor
de busca da ACM (<https://dl.acm.org/>), o qual permite realizar
pesquisas avançadas a partir da linguagem desenvolvida pela ACM e dos
filtros disponíveis na busca (ACM, 2020). Esse motor de busca foi
escolhido por conter diversos trabalhos de excelência na área da
computação.

Foi desenvolvida uma *string* de busca para filtrar por estudos que
estejam de acordo com o foco de pesquisa do trabalho. Existem muitos
artigos e diversas áreas de pesquisa relacionadas aos sistemas de
recomendação musical, então, para realizar uma busca mais assertiva, foi
utilizada a seguinte *string* de busca:

((“RecSys” OR “recommender systems”) AND (“machine learning”) AND
(“music” OR “musical”) AND (“behavioral context” OR “environmental
context” OR “context-aware”))

Com os resultados da busca cada trabalho foi analisado e esta análise
foi dividida em quatro etapas. A leitura inicial, primeira etapa, foi
feita no título de cada artigo, e foram mantidos àqueles que indicam uma
relação com essa pesquisa. A segunda etapa consistiu em realizar uma
leitura dos resumos desses trabalhos e manter àqueles adequados. A etapa
três realizou um filtro, baseando-se na leitura da introdução e
conclusão dos artigos. A última etapa é representada pela leitura total
dos artigos selecionados.

Após a leitura aprofundada em cima dos artigos selecionados, essa
revisão trouxe informações de cada publicação, onde foi possível
entender o que já foi desenvolvido e então definir o que esse trabalho
poderá agregar cientificamente à área de sistemas de recomendação. Ao
final, foi desenvolvida uma tabela relacionando as funcionalidades
existentes e o uso delas nos trabalhos encontrados.

## PROCURA NOS MOTORES DE BUSCA

No dia 07/05/2020 foi realizada a pesquisa no motor de busca ACM
utilizando a *string* de busca pré-definida anteriormente. As Figuras 1,
2 e 3 ilustram esse processo. A quantidade de resultados apresentados na
ACM foram 150 trabalhos relacionados a *string* de busca.

![Tela de celular com publicação numa rede social Descrição gerada
automaticamente](./pandoc/media/image1.png)

<span id="_Ref40822595" class="anchor"></span>Figura 1 - Motor avançado
de busca da ACM (próprio, 2020)

Buscando aumentar o foco da pesquisa, foram aplicados alguns filtros em
cima da busca. Procurando trazer somente os trabalhos mais atuais
relacionados à área, foram mantidos somente os artigos publicados nos
últimos 5 anos. Visando trazer um conteúdo mais técnico para o
trabalho, foram reduzidos os tipos de publicações aceitas para
*proceedings* e *journals*. Após aplicados esses filtros, a quantidade
de trabalhos encontrados passou para 83.

![Tela de computador com texto preto sobre fundo branco Descrição gerada
automaticamente](./pandoc/media/image2.png)

<span id="_Ref40822631" class="anchor"></span>Figura 2 - Resultado de
busca dos proceedings no motor de busca da ACM (próprio, 2020)

Um dos principais motivos que levou essa revisão ser realizada através
da ACM ao invés de outras plataformas de busca como IEEE, é devido ela
possui uma grande comunidade relacionado a área de RecSys, com diversas
conferências e eventos relacionados a área. (ACM RECSYS COMMUNITY.,
2020)

![Tela de computador com texto preto sobre fundo branco Descrição gerada
automaticamente](./pandoc/media/image3.png)

<span id="_Ref40822641" class="anchor"></span>Figura 3 - Resultado de
busca dos journals no motor de busca da ACM (próprio, 2020)

## ETAPAS DA REVISÃO DOS TRABALHOS

Com a busca realizada no dia 07/05/20, no motor da ACM, a partir da
*string* de busca foram encontrados 83 trabalhos, sendo eles: 23 do tipo
*journal* e 60 do tipo *proceeding*.

<span id="_Ref40822414" class="anchor"></span>Figura 4 - Etapas
realizadas para filtrar os trabalhos encontrados no motor de busca da
ACM (próprio, 2020)

Em cima dos 83 trabalhos encontrados, foi realizado um filtro baseado em
3 etapas (demonstradas na Figura 4), que visam direcionar esta pesquisa
para a revisão dos trabalhos que condizem com o objetivo descrito no
protocolo.

Baseado no conhecimento obtido dos trabalhos na segunda etapa, foi
realizadoa uma classificação deles em 4 tipos, que são: Trabalhos que
possuem relação com o foco de pesquisa da revisão; Trabalhos que
utilizam dos RecSys e contexto, mas que visam recomendar outros temas
além da música como notícias, filmes e, produtos; Trabalhos que
utilizam dos RecSys e contexto, mas que não abordam a recomendação
musical; Trabalhos que utilizam dos RecSys musicais, mas que não
utilizam o contexto nas recomendações. Foi apresentado na forma de
gráfico de pizza na A Figura 5 mostra a relação entre os tipos e a
quantidade de artigos encontrados.

<span class="chart">\[CHART\]</span>

<span id="_Ref40822493" class="anchor"></span>Figura 5 - Filtro em cima
dos trabalhos selecionados através do resumo (próprio, 2020)

###  Trabalhos selecionados

O resultado do procedimento de filtro (apresentado na Figura 6) foi de 4
trabalhos relacionados ao objetivo descrito no protocolo de revisão
desse trabalho.

<span id="_Ref40822509" class="anchor"></span>Figura 6 - Procedimento de
filtro realizado baseado nos trabalhos encontrados no motor de busca da
ACM (próprio, 2020)

Foi realizado uma revisão nesses trabalhos a qual foi apresentada nas
próximas seções. Onde, em cada seção/artigo, foi realizado um breve do
que foi desenvolvido e no fim, foi respondido as seguintes perguntas:

##### Qual o problema que ele resolveu?

  - Buscam obter uma recomendação personalizada pelo gosto do usuário?

##### Quais técnicas foram usadas?

  - Foi utilizada alguma recomendação colaborativa?

  - Quais foram os algoritmos utilizados na recomendação?

##### Qual a base de treinamento e teste?

  - Foi desenvolvida alguma aplicação para obter as bases?

##### Quais os contextos utilizados?

  - Foi analisado o comportamento? Quais aspectos?

  - Foi analisado o ambiente? Quais fatores?

##### Como é obtido o contexto?

  - O usuário pode auxiliar na definição do contexto?

  - É apresentado o contexto atual para o usuário?

##### A recomendação atingiu as expectativas do usuário?

  - Quais foram os critérios de qualidade utilizados?

  - Quantidade de usuários utilizada? (tamanho da base)

  - Quais foram as técnicas de avaliação usadas?

##### Tiveram outros resultados apresentados? Quais?

#### The New Challenges when Modeling Context through Diversity over Time in Recommender Systems

Foi realizado a revisão do trabalho e então verificado que o trabalho
não apresenta dados e técnicas suficientes para serem consideradas
nesse trabalho. Pois todas as informações do sistema desenvolvido estão
em outros artigos citados por esse. Então dado a falta de informações
apresentadas nesse trabalho, não serão respondidas as questões
pré-estabelecidas anteriormente.

#### Prediction of music pairwise preferences from facial expressions

Essa pesquisa apresenta técnicas de como obter as preferências de um
usuário através de suas expressões faciais. Para isso, foi desenvolvida
uma aplicação onde a preferência do usuário é obtida através da
observação do seu comportamento. Cada usuário devia ouvir ao menos 10
segundos de cada música em par apresentada e ao finalizar, poderia
escolher qual música era mais adequada para se ouvir no ambiente
pré-estabelecido que era seu trabalho. É nesse momento que é obtido os
dois contextos estudados no artigo revisado, que são: (i) as expressões
faciais gravadas através de uma câmera; (ii) o tempo dedicado a ouvir
cada música.

#### Qual o problema que ele resolveu?

Nesse trabalho é apresentada uma abordagem para predizer a preferência
musical do usuário a partir das expressões faciais. Ela busca responder
a seguinte questão: É possível inferir (implicitamente), em pares, as
preferências musicais de um usuário a partir de suas expressões faciais
demonstradas enquanto escuta suas músicas?

#### Quais técnicas foram usadas?

A principal técnica utilizada para predição das músicas foi a de gerar
um *score,* a partir da comparação par a par em cima das escolhas do
usuário, nas opções de músicas apresentadas. Essa comparação foi
realizada como: (i) um problema de regressão, onde eles predizem a
pontuação numérica em pares; (ii) um problema de classificação, onde foi
predito uma pontuação em pares como classe discreta alternativa (o
usuário preferiu a da esquerda, direita ou ambas).

A recomendação gerada foi personalizada por usuário e não foi utilizado
o modo colaborativo, mas foi demonstrado o interesse nos trabalhos
futuros em adicionar ao RecSys esse modelo.

Para realizar a predição da música desejada, dada a expressão facial,
foram experimentados diversos algoritmos, e no fim, foi utilizado os
algoritmos *Random Forest* e *Gradient Boosting* por apresentarem os
melhores resultados. Eles os escolheram, dado a principal base de
predição, que foi, o uso do tempo em que os usuários escutaram as
músicas e a diferença da duração entre duas músicas em par.

Para auxiliar no *score* em par, foi utilizado o *Spearman’s Rank
Correlation Coefficient* entre as diferentes durações (distribuições não
normais). Isso é, quanto maior a diferença entre as duas músicas, maior
a probabilidade de o usuário ter gostado da música que ele escutou por
mais tempo.

Para obter os resultados, foi realizada a comparação da precisão das
preferências de predição dos modelos bases utilizando *Root Mean Squared
Error* (RMSE), precisão, *recall*, *F-measure* e acuracidade.

#### Qual a base de treinamento e teste?

A base dessa pesquisa foi gerada através do uso em um ambiente
controlado de uma aplicação desenvolvida. Foi utilizado um total de 75
usuários para utilizar a aplicação, com uma média de idade de 29,8 anos.

#### Quais os contextos utilizados?

O principal contexto utilizado nesse trabalho foi as emoções dos
usuários, obtidas através das expressões faciais dos usuários gravadas
durante os testes realizados. No fim, foi apresentado um outro contexto
comportamental, que é o tempo em que os usuários escutaram cada música.
Não foi apresentado nenhum tipo de contexto de ambiente.

#### Como é obtido o contexto?

Os dois contextos são obtidos enquanto o usuário está utilizando a
aplicação de teste para reproduzir músicas. As emoções são obtidas a
partir das expressões faciais produzidas, e o tempo que é gravado
enquanto ele escuta cada música. Não é apresentado o contexto atual ao
usuário, e não existe um formulário onde o usuário possa definir
explicitamente o contexto.

A preferência do usuário foi obtida através da observação do seu
comportamento em cima da aplicação. Cada usuário devia ouvir ao menos 10
segundos de cada música em par apresentada e ao finalizar, poderia
escolher qual música era mais adequada para se ouvir no ambiente
pré-estabelecido que era seu trabalho.

#### A recomendação atingiu as expectativas do usuário?

Para obter os resultados, foi realizado a comparação da precisão das
preferências de predição dos modelos, utilizando *Root Mean Squared
Error* (RMSE), precisão, *recall*, *F-measure* e acuracidade. A
precisão, *recall* e *F-measure* foram calculadas, ponderando os
*scores* de cada classe pelo número de instâncias verdadeiras de cada.

Para validar a qualidade da recomendação proposta, foi utilizado o tempo
em que o usuário escutou cada música, pois, quanto maior a diferença
entre as duas músicas, maior a probabilidade de o usuário ter gostado da
música que ele ouviu por mais tempo. Outro critério apresentado foi a
sua avaliação das músicas em par.

#### Tiveram outros resultados apresentados? Quais?

Não tiveram outros resultados apresentados.

#### Towards Intent-Aware Contextual Music Recommendation: Initial Experiments

O artigo apresenta técnicas e resultados que buscam estudar as intenções
dos usuários ao buscar uma música para escutar, as quais são obtidas
através do título e descrição das *playlists* reproduzidas. Para
demonstrar as técnicas, foi realizado um estudo em cima da API do
Spotify e Youtube. A partir desse estudo, são geradas *playlists*
especificas para cada atividade relacionada às intenções dos usuários. E
no fim é realizado uma avaliação comparativa dela com a gerada pelo
método do Spotify (SPTF).

Para gerar as *playlists*, foi desenvolvido um método para realizar a
recomendação chamado *Activity-aware Intent Recommendation* (AIR), que
usa a API do Spotify para obter suas melhores *playlist* relacionados a
busca, delas é obtido as top 10 músicas com melhores *scores*, as quais
são incluídas nas recomendações futuras para cada atividade (Dirigir,
Trabalhar, Cozinhar, ...).

####  Qual o problema que ele resolveu?

São abordadas 3 contribuições no artigo: (i) é estimado uma distribuição
empírica das intenções do ouvinte ao reproduzir um vídeo no Youtube;
(ii) é realizado um experimento semelhante ao da primeira, porém
utilizando o Spotify; (iii) são relatados os resultados iniciais
obtidos, utilizando o modelo de intenções treinados para melhorar as
recomendações. O modelo apresentado demonstra melhorias promissoras na
recomendação de músicas através das intenções do usuário, ao invés de
recomendações que dependem apenas de suas atividades.

#### Quais técnicas foram usadas?

Dado o escopo desse trabalho, serão apresentadas somente as técnicas
utilizadas nas recomendações de áudio. O artigo apresenta a
especificação de um algoritmo que busca entender as intenções do
usuário através dos títulos das *playlists* disponibilizadas por ele. A
pesquisa não utilizou da recomendação colaborativa.

As intenções foram obtidas através de diversos tipos de algoritmos de
*machine learning* como: *Logistic Regression*, *Both Fuzzy* e H*ard
Clustering*, mas os melhores resultados foram obtidos utilizando o
*Random Forest Classifier* (utilizando a implementação do *sklearn*).
Não foi apresentado os algoritmos utilizados para realizar a
recomendação musical.

#### Qual a base de treinamento e teste?

A base de intenções é montada a partir de testes realizados utilizando a
API do Spotify em Python, em cima das *playlists* dispostas do usuário.
Não é apresentada nenhuma aplicação desenvolvida para obter as bases.

#### Quais os contextos utilizados?

Esse trabalho não busca entender o contexto em si. Ele apenas busca
entender uma de suas características, que são as intenções do usuário,
ao procurar por uma *playlist* e, a partir das intenções obtidas,
procura gerar playlists relacionadas as atividades as quais o usuário
está executando. O principal atributo utilizado para predizer suas
intenções, é a descrição da *playlist* encontrada em sua busca.

#### Como é obtido o contexto?

Para obter o comportamento do usuário foi avaliado durante um período de
teste as intenções dos usuários nas buscas por *playlists* e, a partir
delas, foi gerado uma *playlist* de acordo com suas intenções. Esse
comportamento é obtido de maneira implícita e o usuário não pode ajudar
na definição do contexto. Não é apresentado ao usuário o contexto atual
obtido através do seu comportamento.

#### A recomendação atingiu as expectativas do usuário?

Para validar as recomendações do sistema, foi realizada uma comparação
com o RecSys do Spotify (SPTF) e o criado no artigo revisado (AIR).
Nessa comparação foi pedido ao usuário para avaliar as duas *playlists*
geradas pelos sistemas. As *playlists* geradas automaticamente para cada
uma das 10 atividades foram agrupadas. Depois foram avaliadas por 1-3
avaliadores humanos. A avaliação tem como objetivo validar o quanto a
*playlist* se enquadrava na atividade estipulada.

A partir das avaliações realizadas, foram utilizadas 3 métricas para
estimar a qualidade das recomendações feitas a partir dos coeficientes
de correlação, elas são: (i) coeficiente de correlação de Kendallτ; (ii)
τ-AP para calcular a relevância das recomendações; (iii) uma variação do
*Mean Reciprocal Rank* (nMMR). Essas métricas são importantes para
avaliar numericamente a qualidade de cada *playlist* recomendada. Não é
apresentado o tamanho da base utilizada nesse artigo.

#### Tiveram outros resultados apresentados? Quais?

Não tiveram outros resultados apresentados.

#### Quantitative Study of Music Listening Behavior in a Smartphone Context

O artigo revisado apresentou diversos resultados quantitativos, que
foram obtidos através da classificação e computação dos dados de um
aplicativo, o qual foi desenvolvido para reproduzir músicas e registrar
o contexto de um usuário. Ele tem como principal objetivo responder as
seguintes questões:

1.  Em que medida podemos prever a música que um usuário prefere ouvir
    em diferentes contextos de atividade (ou seja, uso de música) da
    vida real?

2.  Em que medida podemos prever a atividade de um usuário a partir dos
    dados do sensor coletados dos *smartphones*, em um contexto de um
    ouvinte musical da vida real?

3.  Como fatores pessoais (dados demográficos, histórico musical,
    preferência musical de longo prazo e traços de personalidade) se
    correlacionam com a previsibilidade do uso de músicas e da atividade
    do usuário para diferentes usuários?

Cada pergunta investiga relações entre os fatores musicais, pessoais e
situacionais da escuta musical. Especificamente é considerado um
conjunto fechado de 8 tipos de atividades, atividades estas relacionadas
a dados diários obtidos pelos 48 usuários durante um período de 3
semanas. O artigo não apresentou ou desenvolveu sistema de recomendação
musical, porém, trouxe diversas informações pertinentes a esse trabalho.

####  Qual o problema que ele resolveu?

Nesse trabalho são apresentadas diversas técnicas que buscam melhorar a
recomendação personalizada, a partir de diversos dados obtidos por meio
de sensores (implicitamente), ou através de perguntas realizadas ao
usuário. O artigo revisado tem como principal objetivo responder as
questões descritas anteriormente.

#### Quais técnicas foram usadas?

Essa seção está dividida nas 3 questões que o artigo revisado busca
resolver. Em nenhuma das questões é abordado a filtragem colaborativa.

#####  Em que medida podemos prever a música que um usuário prefere ouvir em diferentes contextos de atividade (ou seja, uso de música) da vida real?

Essa seção do trabalho teve como principal objetivo classificar
(utilizando *auto-tagging*) a relação das preferências musicais x
contextos dos usuários. Antes de iniciar essa classificação, foi
realizado um filtro na base gerada pelos usuários e aplicando certos
critérios de qualidade sobraram 19 dos 48 usuários participantes do
teste.

Baseado nos 19 usuários restantes, foi realizada a criação das *tags* do
teste, que foram divididas em 2 esquemas de aprendizados: o
personalizado e o geral. Os algoritmos considerados para essa
classificação foram o linear e não linear, da *radial basis function*
(RBF) e *support vector machine* (SVM). Dado os problemas com dados
negativos nas classificações binárias, foi utilizada a técnica
*EasyEnsemble* (mais especificamente a *Beta weights*) para neutralizar
os dados.

Por fim, para medir a precisão das *tags* criadas, foi utilizado o
*operating characteristic curve* (AUC), mais especificamente o
*Pearson’s linear correlation coefficient*. Buscando auxiliar a
visualização da valência-excitação das emoções no espaço, foi utilizada
a técnica de *Affective Norm for English Words* (ANEW). E no fim, para
computar a associação entre as músicas e as emoções, foi feito uso do
GPR (*Gaussian Process Regression*), mais especificamente o método
*isotropic rational quadratic covariance kernel* implementado pelo
*toolkit* *Gaussian Process for Machine Learning* (GPML).

Como a experiência da música é multidimensional, o artigo revisado busca
extrair os atributos das músicas, e visa auxiliar o processo de
classificação, foram utilizados o *MIRtoolbox* e o *PsySound toolbox,*
os quais conseguem extrair os atributos musicais.

##### Em que medida podemos prever a atividade de um usuário a partir dos dados do sensor coletados dos *smartphones* em um contexto de um ouvinte musical da vida real?

O principal objetivo dessa seção do trabalho foi classificar as
atividades dos usuários (*user-activity*) e relacionar as 8 atividades
definidas com os dados obtidos dos sensores. Foram considerados os
mesmos 19 usuários obtidos na filtragem apresentada na seção anterior.

A partir do aplicativo desenvolvido, foi possível obter os dados dos
sensores utilizando o *Funf Open Sensing Framework*, e semelhante a
classificação dos dados musicais com o contexto, para classificar as
atividades dos usuários com os sensores foram utilizadas as técnicas de
RBF e SVM.

##### Como fatores pessoais se correlacionam com a previsibilidade do uso de músicas e da atividade do usuário para diferentes usuários?

Com os resultados obtidos nas seções anteriores, essa seção busca
determinar quais fatores do usuário são forte indicadores de desempenho
das duas tarefas. Foram considerados os mesmos 19 usuários obtidos na
filtragem apresentada na seção anterior.

Antes dos usuários passarem a utilizar o sistema, foram realizadas
algumas perguntas a eles, validando e obtendo informações prévias deles.
Nessa seção foi utilizado o *Pearson’s linear correlation coefficient* e
AUC para determinar quais fatores dos usuários são indicadores de
desempenho das duas tarefas.

#### Qual a base de treinamento e teste?

A partir do aplicativo desenvolvido, foram geradas uma base de
treinamento e teste. Elas foram divididas em 3 partes, sendo elas: (i)
relação música x contexto; (ii) relação dos sensores x atividades; (iii)
e por último, os fatores extraídos dos usuários.

#### Quais os contextos utilizados?

O trabalho revisado utiliza dos contextos comportamentais e de ambiente,
e classificaram os fatores de uma preferência musical em 3 tipos
(usuário, música e contexto). Eles são:

<span id="_Toc42382774" class="anchor"></span>Figura 7 Fatores da
preferência musical (próprio, 2020)

#### Como é obtido o contexto?

O contexto é obtido a partir do aplicativo desenvolvido, ele trouxe
diversas informações sobre o dia a dia dos usuários, essas informações
foram obtidas através de sensores e formulários que o usuário conseguia
responder. Não é apresentado o contexto atual para o usuário.

#### A recomendação atingiu as expectativas do usuário?

Como artigo revisado não desenvolveu um sistema de recomendação. Apenas
disponibilizou diversos dados estatísticos que auxiliariam o
desenvolvimento de um RecSys. Por isso não foi definido nenhum critério
de qualidade ou técnicas de avaliação das recomendações. A base foi
obtida através do aplicativo desenvolvido nesse trabalho, ela continha
48 usuários, que a partir de uma filtragem dos dados efetuada, passou
para 19 nas respostas das questões.

#### Tiveram outros resultados apresentados? Quais?

Não tiveram outros resultados apresentados.

## FUNCIONALIDADES DOS TRABALHOS INVESTIGADOS

Para relacionar os trabalhos revisados, foi criada uma tabela contendo
as funcionalidades encontradas nos artigos.

<span id="_Ref42381546" class="anchor"></span>Quadro 1 Relação das
funcionalidades desenvolvidas em cada artigo revisado. Acima é listado
os trabalhos revisados, e a esquerda as funcionalidades encontradas. Foi
utilizado 3 símbolos: (i) ✔ caso possua; (ii)❌ caso não possua; (iii)❓
caso não apresente ainda (próprio, 2020)

|                                                                         | 3.3.2 Prediction of music pairwise preferences from facial expressions | 3.3.3 Towards Intent-Aware Contextual Music Recommendation: Initial Experiments | 3.3.4 Quantitative Study of Music Listening Behavior in a Smartphone Context | Proposta desse trabalho |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------- |
| Tem foco no entendimento do contexto para recomendações musicais?       | ✔                                                                      | ✔                                                                               | ❌                                                                            | ✔                       |
| O trabalho foi/será validado em um caso real?                           | ❌                                                                      | ❌                                                                               | ✔                                                                            | ✔                       |
| Utiliza do contexto comportamental?                                     | ✔                                                                      | ✔                                                                               | ✔                                                                            | ✔                       |
| Utiliza do contexto de ambiente?                                        | ❌                                                                      | ❌                                                                               | ✔                                                                            | ✔                       |
| Utiliza do contexto explicito?                                          | ❌                                                                      | ❌                                                                               | ✔                                                                            | ✔                       |
| Utiliza do contexto implícito?                                          | ✔                                                                      | ✔                                                                               | ✔                                                                            | ✔                       |
| Realiza recomendações do tipo dinâmicas?                                | ❌                                                                      | ❌                                                                               | ❌                                                                            | ✔                       |
| Utiliza da técnica de avaliação *operating characteristic curve* (AUC)? | ❌                                                                      | ✔                                                                               | ✔                                                                            | ❓                       |
| Utiliza do *F-measure?*                                                 | ✔                                                                      | ❌                                                                               | ❌                                                                            | ❓                       |
| *Utiliza do Root Mean Squared Error?*                                   |                                                                        | ❌                                                                               | ❌                                                                            | ❓                       |
| Utiliza a métrica do *Mean Reciprocal Rank?*                            | ❌                                                                      | ✔                                                                               | ❌                                                                            | ❓                       |
| Utiliza a métrica do coeficiente de correlação de Kendall               | ❌                                                                      | ✔                                                                               | ❌                                                                            | ❓                       |
| Utiliza do algoritmo *support vector machine* (SVM) para classificação? | ❌                                                                      | ✔                                                                               | ✔                                                                            | ❓                       |
| Utiliza do algoritmo *radial basis function* (RBF) para classificação?  | ❌                                                                      | ❌                                                                               | ✔                                                                            | ❓                       |
| Utiliza o algoritmo *Random Forest* para recomendação*?*                | ✔                                                                      | ❌                                                                               | ❌                                                                            | ❓                       |
| Utiliza o algoritmo *Gradient Boosting* para recomendação*?*            | ✔                                                                      | ❌                                                                               | ❌                                                                            | ❓                       |

No Quadro 1, foram apresentadas as relações das funcionalidades dos 3
artigos revisados e desse trabalho, relações quais podem ser utilizadas
no desenvolvimento do sistema de recomendação. Nas últimas linhas, foram
colocados pontos de interrogação, devido ao trabalho estar em
desenvolvimento e não se ter conhecimento das técnicas que serão
utilizadas.

# Modelagem do “Nome do trabalho” (TODO)

A partir da revisão feita, foi possível conhecer diversos tipos de
sistemas e modelos que utilizam do contexto para realizar as
recomendações musicais, tornando possível entender certas lacunas que
não foram analisadas ou compreendidas nessa área de pesquisa.

![https://www.draw.io/?open=G1dyaagzgXcSN6kipAXEccoFrPgTvvjhUs\&local-data=%7B%22type%22%3A%22Drive%22%2C%22id%22%3A%221dyaagzgXcSN6kipAXEccoFrPgTvvjhUs%22%2C%22lastModifiedDate%22%3A%222020-06-05T02%3A05%3A36.505Z%22%2C%22pageId%22%3A%22c8m2vXLdxm1UY1WbSgt9%22%2C%22layers%22%3A%5B0%5D%7D](./pandoc/media/image6.png)

Figura 8 Modelo desenvolvido para demonstrar a recomendação dinâmica
(próprio, 2020)

Com isso, foi possível entender e desenvolver um modelo de sistemas de
recomendação que utiliza do contexto para realizar as recomendações, ele
será apresentado nesse trabalho, recomendação dinâmica utilizando o
feedback do usuário do contexto atual.

## Contexto

Conforme o dicionário Michaelis (EDITORA MELHORAMENTOS LTDA, 2020)
contexto pode ser tido por:

> O conjunto de circunstâncias inter-relacionadas de cuja tessitura se
> depreende determinado fato ou situação; circunstância(s), conjuntura,
> situação.

Um sistema de recomendação busca encontrar os melhores itens para um
devido fim, onde geralmente se baseia em dados históricos para
produzi-las. Observa-se que, com o entendimento do contexto, ou conforme
a definição das “circunstâncias que levaram a certos fatos ou
situações”, é possível auxiliar as recomendações, aumentando o
número de dados disponíveis para realizar a classificação e filtro.

<span id="_Toc42382775" class="anchor"></span>Figura 9 Apresentação dos
contextos utilizados no trabalho (próprio, 2020)

É apresentado na Figura 9, uma visão macro dos contextos que serão
considerados nesse trabalho. Nas próximas seções, será detalhado melhor
cada item dessa figura, além de, apresentar o processo desenvolvido para
capturar cada contexto.

### O que é o contexto comportamental?

Conforme o dicionário Michaelis (EDITORA MELHORAMENTOS LTDA, 2020)
comportamento pode ser tido por:

> Qualquer ação ou reação do organismo ou parte dele

Unindo a definição do contexto com a definição acima, foi realizado um
estudo das possíveis ações a serem registradas em um sistema, as quais,
seria realizado um estudo, para gerar uma classificação e no futuro,
auxiliar na recomendação musical. Esse estudo trouxe a seguinte lista de
ações:

  - Pausar / Tocar música

  - Passar / Voltar \(n\) músicas

  - Aumentar / Abaixar o volume

  - Escolher musica / artista / gênero

  - Abrir / Fechar o app

  - Definir tempo da música

  - Definir a atividade

  - Definir o humor

  - Quantidade de músicas escutadas no dia (tempo)

### O que é o contexto ambiente?

Conforme o dicionário Michaelis (EDITORA MELHORAMENTOS LTDA, 2020)
ambiente pode ser tido por:

> Conjunto de condições físicas, biológicas e químicas que rodeiam os
> seres vivos e as coisas

Com essa definição, foi estudado sensores e informações que pudessem
representar essas condições. E desse estudo, foi encontrado 3 possíveis
contextos que podem ser representados na aplicação, que são:
Localização; Clima; Reprodução musical em grupo / individual.

### Como será obtido os contextos?

Os contexto do sistemas serão obtidos, a partir da captura de dados de
sensores, *API’s* e eventos de um app. A lista de ações, pode ser obtida
através das possíveis ações a serem executadas pelo usuário demonstradas
na Figura 10.

![https://www.draw.io/?open=G1dyaagzgXcSN6kipAXEccoFrPgTvvjhUs\&local-data=%7B%22type%22%3A%22Drive%22%2C%22id%22%3A%221dyaagzgXcSN6kipAXEccoFrPgTvvjhUs%22%2C%22lastModifiedDate%22%3A%222020-06-07T19%3A38%3A01.600Z%22%2C%22pageId%22%3A%22CdkkQKYaVUET6wdkgj3H%22%2C%22layers%22%3A%5B0%5D%7D](./pandoc/media/image7.png)

Figura 10 Lista de ações que auxiliarão o entendimento do contexto de
ambiente e comportamento do usuário do aplicação (próprio, 2020)

São poucas as ações que auxiliam no entendimento do contexto que podem
ser obtidas implicitamente, isso devido as limitações dos sensores e
dados disponíveis na aplicação desenvolvida, por isso, o sistema
desenvolvido nesse trabalho, contara com informações disposta de maneira
explicita e implícita, sendo elas:

##### Informações adquiridas de maneira implícita: 

  - localização

  - ações em cima dos componentes do app

  - tempo

  - clima

  - músicas / gênero / artistas preferidas (os)

##### Informações adquiridas de maneira explicita: 

  - localização

  - humor

  - atividade

  - músicas / gênero / artistas preferidas (os)

## Arquitetura do sistema

Para validar o modelo de sistema de recomendação, será desenvolvido uma
aplicação, a qual ira ser distribuída aos usuários, que participarem do
questionário, feito para obter informações sobre os usuários. As etapas
do desenvolvimento desse sistema foram apresentadas na Figura 11.

Figura 11 Etapas do desenvolvimento do sistema de recomendação musical
(próprio, 2020)

As perguntas colocadas no questionário, serão voltadas a conhecer melhor
os usuários que utilizarão o sistema, sendo assim, será colocado
perguntas que entendam suas preferencias, atividades, entre outros.
Essas perguntas são:

##### Você acredita que as recomendações musicais realizadas via software poderiam ser melhoradas?

##### Você acredita que o contexto poderia melhorar essas recomendações? 

##### Em quais atividades costuma ouvir música?

##### Em quais lugares costuma ouvir músicas?

##### Com quais humores você costuma ouvir música?

##### Das condições abaixo, quais acredita que deva influenciar mais na música que gostaria de ouvir?

  - Humor

  - Atividades

  - Localização

  - Clima

  - Tempo

  - Grupo / Individual

  - Outro

##### Das ações abaixo, quais acredita que deva demonstrar mais o desgosto ou gosto de uma música?

  - Pausar / Tocar música

  - Passar / Voltar N músicas

  - Aumentar / Abaixar volume

  - Escolher música / artista / gênero

  - Abrir / Fechar o app

  - Definir tempo da música

  - Outra

##### As músicas que você escuta sozinho, são diferentes das que escuta com os amigos?

##### Quanto tempo por dia você dedica para escutar música?

##### Quais são os gêneros musicais que gosta de escutar?

##### Gostaria de participar de uma pesquisa que visa melhorar a recomendação musical?

##### Dicas e sugestões?

### Como o trabalho vai capturar as ações do usuário e enviá-las ao sistema?

A partir do momento que o usuário utilizar a aplicação, será registrado
suas ações, através de eventos disponíveis em seus componentes, é
demonstrado na Figura 12 o processo para realizar esse registro.

![https://www.draw.io/?open=G1dyaagzgXcSN6kipAXEccoFrPgTvvjhUs\&local-data=%7B%22type%22%3A%22Drive%22%2C%22id%22%3A%221dyaagzgXcSN6kipAXEccoFrPgTvvjhUs%22%2C%22lastModifiedDate%22%3A%222020-06-07T19%3A48%3A39.750Z%22%2C%22pageId%22%3A%22OW\_eq1zldgSTVgG6IYEs%22%2C%22layers%22%3A%5B0%5D%7D](./pandoc/media/image8.png)

Figura 12 Fluxo para realizar o registro e análise das ações executadas
pelo usuário (próprio, 2020)

### Como o trabalho vai validar se as ações do usuário condizem com o contexto?

As ações do usuário são o que irão demonstrar o gosto do usuário, em
cima das músicas recomendadas. A partir do questionário realizado, será
possível entender melhor os usuários que irão utilizar a aplicação
desenvolvida. E com isso, desenvolver a avaliação da importância de uma
ação em cima do contexto.

![https://www.draw.io/?open=G1dyaagzgXcSN6kipAXEccoFrPgTvvjhUs\&local-data=%7B%22type%22%3A%22Drive%22%2C%22id%22%3A%221dyaagzgXcSN6kipAXEccoFrPgTvvjhUs%22%2C%22lastModifiedDate%22%3A%222020-06-08T00%3A09%3A10.073Z%22%2C%22pageId%22%3A%22Su-HV9\_zTKp8CvkJRCf5%22%2C%22layers%22%3A%5B0%5D%7D](./pandoc/media/image9.png)

Figura 13 Fluxo feito para avaliar se as ações condizem com o contexto
(próprio, 2020)

### Como o trabalho vai relacionar as músicas que o usuário gosta aos contextos?

Texto

### Como o trabalho vai classificar o contexto para apresentar para usuário?

Texto

### Como o trabalho vai recomendar novas músicas a partir da relação de contexto x música?

Texto

# CONCLUSÃO

Nesse trabalho foi realizado uma revisão em cima dos trabalhos da ACM,
de RecSys musical que utilizam o contexto do usuário, nela foi possível
verificar, que poucos trabalhos buscam unir, a recomendação musical com
o contexto do usuário. Sendo assim, esse trabalho vai buscar desenvolver
um RecSys musical, o qual irá analisar o contexto do usuário em tempo
real, para realizar novas recomendações a ele. E no fim, será realizado
uma comparação do resultado, com os obtidos no Spotify.

# Referências Bibliográficas

ACM. **Advanced Search**. Disponível em:
\<https://dl.acm.org/search/advanced\>. Acesso em: 5 maio. 2020. ACM
RECSYS COMMUNITY. **RecSys – ACM Recommender Systems**. Disponível em:
\<https://recsys.acm.org/\>. Acesso em: 28 abr. 2020. BHATNAGAR, V.
**Collaborative filtering using data mining and analysis**. \[s.l:
s.n.\]. BORJA, K.; DIERINGER, S. Streaming or stealing? The
complementary features between music streaming and music piracy.
**Journal of Retailing and Consumer Services**, v. 32, p. 86–95, 2016.
DIETMAR, J. et al. **Recommendation system -An Introduction**. \[s.l:
s.n.\]. v. 91EDITORA MELHORAMENTOS LTDA. **Sobre o dicionário |
Michaelis On-line**. Disponível em: \<https://michaelis.uol.com.br/\>.
Acesso em: 6 jun. 2020. ERIKSSON, M. et al. **Spotify Teardown**.
\[s.l.\] MIT Press, 2019. FALK, K. **Practical Recommender Systems**.
\[s.l: s.n.\]. IFPI. **IFPI Global Music Report 2019**. Disponível em:
\<https://www.ifpi.org/news/IFPI-GLOBAL-MUSIC-REPORT-2019\>. LUINI, B.
J. R.; WHITMAN, A. E.; DATE, P. **Streaming Audio: The FezGuys’ Guide**.
\[s.l: s.n.\]. MURARO, R. M. **Os avanços tecnológicos e o futuro da
humanidade**Querendo ser Deus, , 2009. NIWA, H. **Streaming Systems**.
\[s.l.\] O’Reilly Media, 2018. v. 134RESNICK, PAUL AND VARIAN, H. R.
Recommender Systems. **Communications of the ACM**, v. 40, n. 4, p.
56–58, 1997. RICCI, F.; ROKACH, L.; SHAPIRA, B. **Recommender Systems
Handbook**. \[s.l: s.n.\]. UNIVERSIDADE FEDERAL DO CEARA. **A
Magnetorresistência Gigante**. Disponível em:
\<https://seara.ufc.br/tintim-por-tintim/tecnologia/a-magnetorresistencia-gigante/\>.
Acesso em: 12 mar. 2020.
