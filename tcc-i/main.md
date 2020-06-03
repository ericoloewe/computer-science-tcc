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

[Figura 1 - Motor avançado de busca da ACM (próprio, 2020)
15](#_Ref40822595)

[Figura 2 - Resultado de busca dos proceedings no motor de busca da ACM
(próprio, 2020) 16](#_Ref40822631)

[Figura 3 - Resultado de busca dos journals no motor de busca da ACM
(próprio, 2020) 16](#_Ref40822641)

[Figura 4 - Etapas realizadas para filtrar os trabalhos encontrados no
motor de busca da ACM (próprio, 2020) 17](#_Ref40822414)

[Figura 5 - Filtro em cima dos trabalhos selecionados através do resumo
(próprio, 2020) 17](#_Ref40822493)

[Figura 6 - Procedimento de filtro realizado baseado nos trabalhos
encontrados no motor de busca da ACM (próprio, 2020) 18](#_Ref40822509)

[Figura 7 Fatores da preferência musical (próprio, 2020)
27](#_Toc42024460)

Lista de Tabelas

[Table 1 Relação das funcionalidades desenvolvidas em cada artigo
revisado (próprio, 2020) 28](#_Toc42024448)

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

[2.2 PROCURA NOS MOTORES DE BUSCA 15](#procura-nos-motores-de-busca)

[2.3 Os trabalhos 17](#os-trabalhos)

[2.3.1 The New Challenges when Modeling Context through Diversity over
Time in Recommender Systems
19](#the-new-challenges-when-modeling-context-through-diversity-over-time-in-recommender-systems)

[2.3.2 Prediction of music pairwise preferences from facial expressions
20](#prediction-of-music-pairwise-preferences-from-facial-expressions)

[2.3.3 Towards Intent-Aware Contextual Music Recommendation: Initial
Experiments
22](#towards-intent-aware-contextual-music-recommendation-initial-experiments)

[2.3.4 Quantitative Study of Music Listening Behavior in a Smartphone
Context
24](#quantitative-study-of-music-listening-behavior-in-a-smartphone-context)

[2.4 Tabela com tecnicas 28](#tabela-com-tecnicas)

[3 Modelagem do que será feito 30](#modelagem-do-que-será-feito)

[3.1 Contexto 30](#contexto)

[3.1.1 O que é o contexto comportamental?
30](#o-que-é-o-contexto-comportamental)

[3.1.2 O que é o contexto ambiente? 30](#o-que-é-o-contexto-ambiente)

[3.1.3 Como será obtido os contextos?
30](#como-será-obtido-os-contextos)

[3.2 Arquitetura do sistema 30](#arquitetura-do-sistema)

[4 CONCLUSÃO 31](#conclusão)

[Referências Bibliográficas 32](#referências-bibliográficas)

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
contexto será obtido, através da criação um plugin que permitirá ao
usuário escutar suas músicas enquanto são registrados os eventos do
contexto vivido naquele momento.

# Trabalhos relacionados

Os sistemas de recomendação musical iniciaram nos anos 90 e tem evoluído
muito desde então, ao ponto de que hoje existem diversos trabalhos
relacionados a esse assunto para área. Nesse capítulo será abordado os
diversos trabalhos encontrados a partir de uma revisão realizada sobre o
assunto.

## O protocolo de revisão

Essa revisão tem como foco encontrar trabalhos que abordam os sistemas
de recomendação, que a partir das músicas conhecidas pelo usuário, e do
contexto comportamental e de ambiente apresentado, buscam melhorar
assertividade das recomendações ao ouvinte.

Dado o foco da pesquisa e o conteúdo encontrado até o momento, foi feito
uma lista de interesses que serão abordados nessa revisão, deles:

  - Estudos realizados

  - Técnicas de recomendação utilizadas

  - Contextos utilizados para recomendação

A partir do escopo de revisão que esse trabalho está inserido, foi
definido certas palavras-chaves para auxiliar no desenvolvimento da
revisão, elas são:

  - RecSys

  - Machine Learning

  - Sistemas de recomendação musical

  - Context-aware

Para realizar a busca dos trabalhos relacionados ao foco de pesquisa da
revisão, por indicação dos orientadores desse trabalho, será utilizado o
motor de busca da ACM (<https://dl.acm.org/>), o qual permite realizar
pesquisas avançadas a partir da linguagem desenvolvida pela ACM e dos
filtros disponíveis na busca. (ACM, 2020)

Além das fontes, será desenvolvido uma *string* de busca, para filtrar
por estudos que estejam de acordo com o foco de pesquisa do trabalho.
Pois, existem muitos artigos e diversas áreas de pesquisa relacionadas
aos sistemas de recomendação musical, então, para realizar uma busca
mais voltada ao foco, será utilizada a seguinte *string* de busca:

*((“RecSys” OR “recommender systems”) AND (“machine learning”) AND
(“music” OR “musical”) AND (“behavioral context” OR “environmental
context” OR “context-aware”))*

Com os resultados da busca cada trabalho será analisado e esta análise
está dividida em quatro etapas. A leitura inicial, primeira etapa, será
feita no título de cada artigo, e serão mantidos àqueles que indicam uma
relação com essa pesquisa. A segunda etapa consistirá em realizar uma
leitura dos resumos desses trabalhos e manter àqueles adequados. A etapa
três realizará um filtro, baseando-se na leitura da introdução e
conclusão dos artigos. A última etapa é representada pela leitura total
dos artigos selecionados.

Após a leitura aprofundada em cima dos artigos selecionados, essa
revisão trará informações de cada publicação, visando entender o que já
foi desenvolvido e então definir o que esse trabalho poderá agregar
cientificamente à área de sistemas de recomendação. Ao final, será
desenvolvida uma tabela relacionando as funcionalidades existentes e o
uso delas nos trabalhos encontrados.

## PROCURA NOS MOTORES DE BUSCA

![Tela de celular com publicação numa rede social Descrição gerada
automaticamente](./pandoc/media/image1.png)

<span id="_Ref40822595" class="anchor"></span>Figura - Motor avançado de
busca da ACM (próprio, 2020)

No dia 07/05/2020 foi realizado a pesquisa no motor de busca apresentado
a partir da *string* de busca pré-definida anteriormente. As Figuras 1,
2 e 3 ilustram esse processo. Todos trouxeram resultados pertinentes ao
trabalho logo na primeira página da aplicação. A quantidade de
resultados apresentados na ACM foram 150 trabalhos relacionados a
*string* de busca.

![Tela de computador com texto preto sobre fundo branco Descrição gerada
automaticamente](./pandoc/media/image2.png)

<span id="_Ref40822631" class="anchor"></span>Figura - Resultado de
busca dos proceedings no motor de busca da ACM (próprio, 2020)

Buscando aumentar o foco da pesquisa, foram aplicados alguns filtros em
cima da busca. Procurando trazer somente os trabalhos mais atual
relacionado a área foi mantido somente os artigos publicados nos últimos
5 anos. Visando trazer um conteúdo mais técnico para o trabalho, foi
reduzido os tipos de publicações aceitas para *proceedings* e
*journals*. Após aplicado esses filtros, a quantidade de trabalhos
encontrados passou para 83. Então reduzindo a quantidade de trabalhos
relacionados se fez possível a revisão de todos no tempo hábil
disponível para desenvolver esse trabalho.

![Tela de computador com texto preto sobre fundo branco Descrição gerada
automaticamente](./pandoc/media/image3.png)

<span id="_Ref40822641" class="anchor"></span>Figura - Resultado de
busca dos journals no motor de busca da ACM (próprio, 2020)

A quantidade de trabalhos encontrados na ACM relacionados a *string* de
busca foi muito alta, isso aconteceu devido a plataforma possuir uma
grande comunidade relacionado a área de RecSys, com diversas
conferências e eventos relacionados a área. (ACM RECSYS COMMUNITY.,
2020)

## Os trabalhos

Com a busca realizada no dia 07/05/20 no motor da ACM a partir da
*string* de busca foram encontrados 83 trabalhos, sendo eles: 23 do tipo
*jornal* - os quais serão os primeiros a serem trazidos nessa pesquisa -
e 60 do tipo *proceeding*.

<span id="_Ref40822414" class="anchor"></span>Figura - Etapas realizadas
para filtrar os trabalhos encontrados no motor de busca da ACM (próprio,
2020)

Em cima dos 83 trabalhos encontrados, foi realizado um filtro baseado no
sistema estruturado anteriormente. Esse filtro é baseado em 3 etapas
(demonstradas na Figura 4), que visam direcionar esta pesquisa para a
revisão dos trabalhos que condizem com o objetivo descrito no protocolo.

<span class="chart">\[CHART\]</span>

<span id="_Ref40822493" class="anchor"></span>Figura - Filtro em cima
dos trabalhos selecionados através do resumo (próprio, 2020)

Baseado no conhecimento obtido dos trabalhos na segunda etapa, foi
realizado uma classificação deles em 4 tipos, que são: Trabalhos que
possuem relação com o foco de pesquisa da revisão; Trabalhos que
utilizam dos RecSys e contexto, mas que visam recomendar outros temas
além da música como notícias, filmes, produtos; Trabalhos que utilizam
dos RecSys e contexto, mas que não abordam a recomendação musical;
Trabalhos que utilizam dos RecSys musicais, mas que não utilizam o
contexto nas recomendações. Foi apresentado na forma de gráfico de pizza
na Figura 5 a relação entre os tipos e a quantidade de artigos
encontrados.

<span id="_Ref40822509" class="anchor"></span>Figura - Procedimento de
filtro realizado baseado nos trabalhos encontrados no motor de busca da
ACM (próprio, 2020)

O resultado do procedimento de filtro (apresentado na Figura 6) foram 4
trabalhos relacionados ao objetivo descrito no protocolo de revisão
desse trabalho. Será realizado uma análise nesses trabalhos nas próximas
seções. Onde, em cada seção/artigo, será realizado uma descrição do que
foi desenvolvido e no fim, será respondido as seguintes perguntas:

  - Qual o problema que ele resolveu?
    
      - Buscam obter uma recomendação personalizada pelo gosto do
        usuário?

  - Quais técnicas foram usadas?
    
      - Foi utilizada da recomendação colaborativa?
    
      - Quais foram os algoritmos utilizados na recomendação?

  - Qual a base de treinamento e teste?
    
      - Foi desenvolvida alguma aplicação para obter as bases?

  - Quais os contextos utilizados?
    
      - Foi analisado o comportamento? Quais aspectos?
    
      - Foi analisado o ambiente? Quais fatores?

  - Como é obtido o contexto?
    
      - O usuário pode auxiliar na definição do contexto?
    
      - É apresentado o contexto atual para o usuário?

  - Como foram relacionados os contextos com as recomendações?
    (REMOVIDO)

  - Foi avaliado o nível de satisfação do usuário com a música
    recomendada?

  - A recomendação atingiu as expectativas do usuário?
    
      - Quais foram os critérios de qualidade utilizados?
    
      - Quantidade de usuários utilizadas? (tamanho da base)
    
      - Quais foram as técnicas de avaliação usadas?

  - Tiveram outros resultados apresentados? Quais?

### The New Challenges when Modeling Context through Diversity over Time in Recommender Systems

Visando melhorar as recomendações musicais, é realizado um estudo sobre
o contexto em que o usuário está vivendo, através de análises da
evolução da diversidade através do tempo e do caminho percorrido pelo
usuário. Semelhante a estudos sobre e-commerce apresentados, onde o
nível de diversidade precisa ser alto no início da seção de navegação e
tende a diminuir gradualmente conforme a seção é encerrada.

Nesse trabalho foi apresentado um modelo chamado DANCE, para monitorar e
explorar a evolução da diversidade ao longo do tempo. No modelo foi
desenvolvido o conceito de contexto implicito, o qual ficou definido
como caracteristicas comuns compartilhadas aos items consultados durante
uma certa faxa de tempo. Foi definido tambem como a oposição do contexto
explicito, o qual é definido como uma situação dentre os fatores
conhecidos. O contexto implicito, se refere a uma sequencia de itens,
enquanto o explicito, inclue informações adicionais do usuario.

A principal métrica utilizada nesse trabalho foi a diversidade. A qual
pode ser obtida através de diversos tipos de dados (numéricos, binários,
texto, intervalos, ...), desde que seja possível calcular a semelhança
entre dois dados desse mesmo tipo. Através da diversidade, é obtido o
contexto implícito do usuário.

O modelo é capaz de detectar as mudanças de contexto comportamental a
partir das consultas do usuário, e cada subsequência de itens
consultados entre duas mudanças de contexto correspondem ao contexto
implícito. E com a obtenção do contexto é realizado a recomendação ao
usuário. O modelo do trabalho, não é apresentado o uso do contexto de
ambiente, é utilizado somente o *ip* do usuário, mas não está claro se é
utilizado como uma representação da posição geográfica onde o usuário se
encontra.

Não foi realizado nenhuma aplicação para obter a base de treinamento
desse trabalho. Foi utilizado uma base pronta que continha mais de
200.000 representações dos acessos de usuários em um sistema. Essa base
foi utilizada para validar a habilidade do modelo apresentado de obter o
contexto implícito através dos dados de acesso.

Ao final da revisão do artigo foi verificado que o trabalho não
apresenta dados e técnicas suficientes para ser considerado nesse
trabalho. Pois todas as informações do sistema desenvolvido estão em
outros artigos citados por esse. Então dado a falta de informações
apresentadas nesse trabalho, não serão respondidas as questões
pré-estabelecidas anteriormente.

### Prediction of music pairwise preferences from facial expressions

Essa pesquisa apresenta técnicas de como obter as preferências de um
usuário através de suas expressões faciais. Para isso, foi desenvolvido
uma aplicação, onde a preferência do usuário é obtida através da
observação do seu comportamento. Cada usuário devia ouvir ao menos 10
segundos de cada música em par apresentada e ao finalizar, poderia
escolher qual música era mais adequada para se ouvir no ambiente
pré-estabelecido que era seu trabalho. Nesse momento que é obtido os
dois contextos estudados na pesquisa revisada, quando o usuário escutava
as músicas, foi gravado suas expressões faciais através de uma câmera e
o tempo dedicado a ouvir cada música.

#### Qual o problema que ele resolveu?

Nesse trabalho, é apresentado uma abordagem para predizer a preferência
musical do usuário a partir das expressões faciais. Ela busca responder
a seguinte questão: É possível inferir (implicitamente) em pares as
preferências musicais de um usuário a partir de suas expressões faciais
demonstradas enquanto escuta suas músicas?

#### Quais técnicas foram usadas?

A principal técnica utilizada para predição das músicas foi gerando um
score a partir da comparação par a par em cima das escolhas do usuário
nas opções de músicas apresentadas. Essa comparação foi realizada como
um problema de regressão, onde eles predizem a pontuação numérica em
pares. E classificando o problema, onde foi predito uma pontuação em
pares como classe discreta alternativa (esquerda é preferida, direita é
preferida, igualmente preferidas).

A recomendação gerada foi personalizada por usuário e não foi utilizado
nenhum modelo colaborativo. Mas foi demonstrado o interesse no trabalho
em adicionar ao RecSys o filtro do tipo colaborativo.

Para realizar a predição da música desejada dado a expressão facial,
foram experimentados diversos algoritmos, e no fim, foi utilizado os
algoritmos *Random forest* e *Gradient Boosting* por apresentarem os
melhores resultados. Eles os escolheram, dado a principal base de
predição, que foi, o uso do tempo em que os usuários escutaram as
músicas e a diferença da duração entre duas músicas em par.

Para auxiliar no score em par, foi utilizado o *Spearman’s Rank
Correlation Coefficient* entre as diferentes durações (distribuições não
normais). Isso é, quanto maior a diferença entre as duas músicas, maior
a probabilidade de o usuário ter gostado da música que ele por mais
tempo.

Para obter os resultados, foi realizado a comparação da precisão das
preferências de predição dos modelos bases utilizando *Root Mean Squared
Error* (RMSE), precisão, *recall*, *F-measure* e acuracidade.

#### Qual a base de treinamento e teste?

A base dessa pesquisa foi gerada através do uso em um ambiente
controlado de uma aplicação desenvolvida para obter a base desse
trabalho. Foi utilizado um total de 75 usuários treinados para utilizar
a aplicação com uma média de idade de 29,8 anos.

#### Quais os contextos utilizados?

O principal contexto utilizado nesse trabalho foi as emoções dos
usuários obtidas através das expressões faciais dos usuários gravadas
durante os testes realizados. No fim, foi apresentado um outro contexto
comportamental, que é o tempo em que os usuários escutaram cada música.
Não foi apresentado nenhum tipo de contexto de ambiente.

#### Como é obtido o contexto?

Os dois contextos são obtidos enquanto o usuário está utilizando a
aplicação de teste para reproduzir músicas, as emoções são obtidas a
partir das expressões faciais produzidas, e o tempo que é gravado
enquanto ele escuta cada música. Não é apresentado o contexto atual ao
usuário, e não existe um formulário onde o usuário possa definir
explicitamente o contexto.

A preferência do usuário foi obtida através da observação do seu
comportamento em cima da aplicação. Cada usuário devia ouvir ao menos 10
segundos de cada música em par apresentada e ao finalizar, poderia
escolher qual música era mais adequada para se ouvir no ambiente
pré-estabelecido que era seu trabalho.

#### Foi avaliado o nível de satisfação do usuário com a música recomendada?

Não foi avaliado o nível de satisfação dos usuários.

#### A recomendação atingiu as expectativas do usuário?

Para obter os resultados, foi realizado a comparação da precisão das
preferências de predição dos modelos bases utilizando *Root Mean Squared
Error* (RMSE), precisão, *recall*, *F-measure* e acuracidade. A
precisão, *recall* e *F-measure* foram calculadas ponderando os
*scores* de cada classe pelo número de instancias verdadeiras de cada,
para explicar o desequilíbrio dela.

A base foi obtida através da aplicação obteve um total de 75 usuários
treinados para utilizar a aplicação com uma média de idade de 29,8 anos.

O principal critério de qualidade utilizado foi o tempo em que o usuário
escutou cada música, pois, quanto maior a diferença entre as duas
músicas, maior a probabilidade de o usuário ter gostado da música que
ele por mais tempo. Outro critério apresentado foi a sua avaliação das
músicas em par.

#### Tiveram outros resultados apresentados? Quais?

Não tiveram outros resultados apresentados.

### Towards Intent-Aware Contextual Music Recommendation: Initial Experiments

É apresentado técnicas e resultados no artigo revisado que buscam
estudar as intenções dos usuários demonstradas a partir do estudo
realizado em cima da API do Spotify e Youtube, que visa entender as
intenções dos usuários a partir das descrições das *playlists*. A partir
desse estudo, é gerado *playlists* especificas para cada atividade
relacionada as intenções dos usuários. Isso foi desenvolvido no sistema
de recomendação apresentado (AIR), que usa a API do Spotify para obter
suas melhores *playlist* relacionados a busca, delas é obtido as top 10
músicas com melhores scores, as quais são incluídas nas recomendações
futuras para cada atividade.

####  Qual o problema que ele resolveu?

É abordado 3 contribuições no artigo: Por primeiro, é estimado uma
distribuição empírica das intenções do ouvinte ao reproduzir um video no
Youtube. Na segunda é realizado um experimento semelhante ao da
primeira, porem utilizando o Spotify. E por último, é relatado os
resultados iniciais obtidos utilizando o modelo de intenções treinados
para melhorar as recomendações. O modelo apresentado, demonstra
melhorias promissoras na recomendação de músicas através das intenções
do usuário, ao invés de recomendações que dependem apenas de suas
atividades.

#### Quais técnicas foram usadas?

Dado o escopo desse trabalho, será apresentado somente as técnicas
utilizadas nas recomendações de áudio (Seção 2.2) apresentadas no artigo
revisado. Nessa seção, é apresentado a especificação de um algoritmo que
busca entender as intenções do usuário através dos títulos das
*playlists* disponibilizadas pelos usuários. A pesquisa não utilizou da
recomendação colaborativa.

As intenções foram obtidas através de diversos tipos de algoritmos de
*machine learning* como: *Logistic Regression*, *both fuzzy* e *hard
Clustering*, mas os melhores resultados foram obtidos utilizando o
*Random Forest classifier* (utilizando a implementação do *sklearn*).

#### Qual a base de treinamento e teste?

A base de intenções é montada a partir de testes realizados utilizando a
API do Spotify em Python em cima das *playlists* dispostas do usuário.
Não é apresentado nenhuma aplicação desenvolvida para obter as bases.

#### Quais os contextos utilizados?

Esse trabalho realizou a interpretação de contexto como intenções. O
principal atributo utilizado são as atividades que o usuário está
executando, o qual é obtido através de seu comportamento (buscas por
*playlists*).

#### Como é obtido o contexto?

Para obter o comportamento do usuário, foi avaliado durante um período
de teste as intenções dos usuários nas buscas por *playlists*, e a
partir delas, foi gerado uma playlist de acordo com suas intenções. Esse
comportamento é obtido de maneira implícita e o usuário não pode ajudar
na definição do contexto. Não é apresentado ao usuário o contexto atual
obtido através do seu comportamento.

#### Foi avaliado o nível de satisfação do usuário com a música recomendada?

Não foi avaliado o nível de satisfação dos usuários referente a música
recomendada.

#### A recomendação atingiu as expectativas do usuário?

Para validar as recomendações do sistema, foi realizado uma comparação
com o RecSys do Spotify (SPTF) e o criado no artigo revisado (AIR).
Nessa comparação foi pedido ao usuário para avaliar as duas *playlists*
geradas pelos sistemas. As *playlists* geradas automaticamente para cada
uma das 10 atividades foram agrupadas. Depois foram avaliadas por 1-3
avaliadores humanos. A avaliação tem como objetivo validar o quanto a
*playlist* se enquadrava na atividade estipulada.

A partir das avaliações realizadas, foram utilizadas 3 métricas para
estimar a qualidade das recomendações feitas a partir dos coeficientes
de correlação, elas são: Kendallτ, τ-AP e nMMR. Essas métricas são
importantes para avaliar numericamente a qualidade de cada playlist
recomendada. Ao final, foi analisado as avaliações e foi visto que não é
apresentado o tamanho da base utilizada nesse artigo.

#### Tiveram outros resultados apresentados? Quais?

Não tiveram outros resultados apresentados.

### Quantitative Study of Music Listening Behavior in a Smartphone Context

O artigo revisado apresentou diversos resultados quantitativos, que
foram obtidos através da classificação e computação dos dados de um
aplicativo, o qual foi desenvolvido para reproduzir músicas e registrar
o contexto de um usuário. Ele tem como principal objetivo responder as
seguintes questões:

1.  Em que medida podemos prever a música que um usuário prefere ouvir
    em diferentes contextos de atividade (ou seja, uso de música) da
    realidade?

2.  Em que medida podemos prever a atividade de um usuário a partir dos
    dados do sensor coletados dos smartphones em um contexto de um
    ouvinte musical da realidade?

3.  Como fatores pessoais, como dados demográficos, histórico musical,
    preferência musical de longo prazo e traços de personalidade, se
    correlacionam com a previsibilidade do uso de músicas e da atividade
    do usuário para diferentes usuários?

Cada pergunta investiga diferentes interações entre os fatores musicais,
pessoais e situacionais da audição musical. Especificamente é
considerado um conjunto fechado de 8 tipos de atividades, onde é
relacionado a dados diários obtidos pelos usuários durante um período de
3 semanas. O artigo não apresentou ou desenvolveu sistema de
recomendação musical, porém, trouxe diversas informações pertinentes a
esse trabalho.

####  Qual o problema que ele resolveu?

Nesse trabalho é apresentado diversas técnicas que buscam melhorar a
recomendação personalizadas a partir de diversos dados obtidos através
de sensores (implicitamente), ou através de perguntas realizadas ao
usuário. O artigo revisado tem como principal objetivo responder as
questões descritas anteriormente.

#### Quais técnicas foram usadas?

Nessa seção será apresentado o conteúdo divido nas 3 questões que o
artigo revisado busca resolver. Em nenhuma das questões é abordado a
filtragem colaborativa.

#####  Em que medida podemos prever a música que um usuário prefere ouvir em diferentes contextos de atividade (ou seja, uso de música) da realidade?

Essa seção do trabalho teve como principal objetivo classificar
(utilizando *auto-tagging*) a relação das preferências musicais x
contextos dos usuários. Antes de iniciar essa classificação, foi
realizado um filtro na base gerada pelos usuários e aplicando certos
critérios de qualidade sobraram 19 dos 48 usuários participantes do
teste.

Baseado nos 19 usuários restantes, foi realizado a criação das *tags* do
teste, que foi dividida em 2 esquemas de aprendizados, o personalizado e
o geral. Os algoritmos considerados para essa classificação foram o
linear e não linear, da *radial basis function* (RBF) e *support vector
machine* (SVM). Dado os problemas com dados negativos nas classificações
binarias, foi utilizado a técnica *EasyEnsemble* (mais especificamente a
*Beta weights*) para neutralizar os dados.

Por fim, para medir a precisão das *tags* criadas, foi utilizado o
*operating characteristic curve* (AUC) mais especificamente o *Pearson’s
linear correlation coefficient*. Buscando auxiliar a visualização da
valência-excitação das emoções no espaço, foi utilizado a técnica de
*Affective Norm for English Words* (ANEW). E no fim, para computar a
associação entre as músicas e as emoções, foi feito uso do GPR
(*Gaussian process regression*), mais especificamente o método
*isotropic rational quadratic covariance kernel* implementado pelo
*toolkit* *Gaussian process for machine learning* (GPML).

Como a experiencia da música é multidimensional, o artigo revisado busca
extrair os atributos das músicas, e visando auxiliar o processo de
classificação, foram utilizados o *MIRtoolbox* e o *PsySound toolbox* os
quais conseguem extrair os atributos musicais.

##### Em que medida podemos prever a atividade de um usuário a partir dos dados do sensor coletados dos smartphones em um contexto de um ouvinte musical da realidade?

O principal objetivo dessa seção do trabalho foi classificar as
atividades dos usuários (*user-activity*) e relacionar as 8 atividades
definidas com os dados obtidos dos sensores. Foram considerados os
mesmos 19 usuários obtidos na filtragem apresentada na seção anterior.

A partir do aplicativo desenvolvido, foi possível obter os dados dos
sensores utilizando o *Funf Open Sensing Framework*, e semelhante a
classificação dos dados musicais com o contexto, para classificar as
atividades dos usuários com os sensores foi utilizado o RBF e SVM.

##### Como fatores pessoais se correlacionam com a previsibilidade do uso de músicas e da atividade do usuário para diferentes usuários?

Dado os resultados obtidos nas seções anteriores, essa seção busca
determinar quais fatores do usuário são forte indicadores de desempenho
das duas tarefas. Foram considerados os mesmos 19 usuários obtidos na
filtragem apresentada na seção anterior.

Antes dos usuários passarem a utilizar o sistema, foi realizado algumas
perguntas a eles, validando e obtendo informações previas deles. Nessa
seção, foi utilizado o *Pearson’s linear correlation coefficient* e AUC
para determinar quais fatores dos usuários são indicadores de desempenho
das duas tarefas.

#### Qual a base de treinamento e teste?

A partir do aplicativo desenvolvido no artigo revisado, foi gerado uma
base de treinamento e teste. Ela foi dividida em 3 partes, sendo elas:
relação música x contexto, relação dos sensores x atividades e por
último os fatores extraídos dos usuários.

#### Quais os contextos utilizados?

O trabalho revisado utiliza dos contextos comportamentais e de ambiente,
e classificaram os fatores de uma preferência musical em 3 tipos
(usuário, música e contexto). Eles são:

<span id="_Toc42024460" class="anchor"></span>Figura Fatores da
preferência musical (próprio, 2020)

#### Como é obtido o contexto?

O contexto é obtido a partir do aplicativo desenvolvido, ele trouxe
diversas informações sobre o dia a dia dos usuários, essas informações
foram obtidas através de sensores e formulários que o usuário conseguia
responder. Não é apresentado o contexto atual para o usuário.

#### Foi avaliado o nível de satisfação do usuário com a música recomendada?

O artigo revisado não desenvolveu um sistema de recomendação.

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

## Tabela com tecnicas

Para relacionar os trabalhos revisados, foi criado uma tabela contendo
as funcionalidades encontradas nos artigos e, é feito uma relação delas,
visando facilitar a visão das funcionalidades entre as revisões feitas.

<span id="_Toc42024448" class="anchor"></span>Table Relação das
funcionalidades desenvolvidas em cada artigo revisado (próprio, 2020)

|                                                                   | 3.3.2 Prediction of music pairwise preferences from facial expressions | 3.3.3 Towards Intent-Aware Contextual Music Recommendation: Initial Experiments | 3.3.4 Quantitative Study of Music Listening Behavior in a Smartphone Context | Proposta desse trabalho |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------- |
| Tem foco no entendimento do contexto para recomendações musicais? | ✔                                                                      | ✔                                                                               | ❌                                                                            | ✔                       |
| Apresenta o desenvolvimento realizado no trabalho?                | ✔                                                                      | ✔                                                                               | ✔                                                                            | ✔                       |
| O trabalho foi validado em um caso real?                          | ❌                                                                      | ❌                                                                               | ✔                                                                            | ✔                       |
| Utiliza do contexto comportamental?                               | ✔                                                                      | ✔                                                                               | ✔                                                                            | ✔                       |
| Utiliza do contexto de ambiente?                                  | ❌                                                                      | ❌                                                                               | ✔                                                                            | ✔                       |
| Utiliza do contexto explicito?                                    | ❌                                                                      | ❌                                                                               | ✔                                                                            | ✔                       |
| Utiliza do contexto implícito?                                    | ✔                                                                      | ✔                                                                               | ✔                                                                            | ✔                       |
| Usa ACM?                                                          | ❌                                                                      | ✔                                                                               | ✔                                                                            |                         |
| Usa SVM?                                                          | ❌                                                                      | ✔                                                                               | ✔                                                                            | \-                      |

# Modelagem do que será feito

Recomendação dinâmica utilizando o feedback do usuário do contexto
atual.

Responder as perguntas:

\- como é possível capturar as ações do usuário e classifica-las como
contexto?

\- como é possível validar se as ações do usuário condiz com o contexto?

\- como é possível relacionar as músicas que o usuário gosta aos
contextos?

\- como é possível classificar o contexto para apresentar para usuário?

\- como é possível recomendar novas musicas a partir da relação de
contexto x musica?

## Contexto

Conforme o dicionário Michaelis contexto pode ser tido por:

> O conjunto de circunstâncias inter-relacionadas de cuja tessitura se
> depreende determinado fato ou situação; circunstância(s), conjuntura,
> situação.

Um sistema de recomendação busca encontrar os melhores itens para um
devido fim, onde geralmente se baseia em dados históricos para
produzi-las. Observa-se que, com o entendimento do contexto, ou conforme
a definição das “circunstâncias que levaram a certos fatos ou
situações”, é possível auxiliar as recomendações, aumentando o
número de dados disponíveis para realizar a classificação e filtro.

Figura 8 Apresentação dos contextos utilizados no trabalho (próprio,
2020)

### O que é o contexto comportamental?

Conforme o dicionário Michaelis contexto pode ser tido por:

> Qualquer ação ou reação do organismo ou parte dele

Unindo a definição do contexto com a definição acima, foi realizado um
estudo das possíveis ações a serem registradas em um sistema, as quais,
seria realizado um estudo, para gerar uma classificação e no futuro,
auxiliar na recomendação musical.

será utilizado:

Horário,

Humor,

Atividade,

ações sequenciais.

Quantidade de musicas escutadas no dia (tempo)

### O que é o contexto ambiente?

Será utilizado:

Localização

clima

### Como será obtido os contextos?

A partir da captura de dados de uma app.

Ele irá obter dados

implicitamente

\- localização

\- ações

\- tempo

\- clima

explicitamente.

\- localização

\- humor

\- atividade

## Arquitetura do sistema

# CONCLUSÃO

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

...............................................

PAGINAÇÃO: Segundo o livro do prof. Cléber Prodanov, as folhas do
trabalho são contadas a partir da folha de rosto (não contamos a capa),
mas nem todas receberão um número. Contamos, mas não numeramos, então, a
folha de rosto, o resumo, o abstract, as listas e o sumário. A numeração
é colocada no canto superior direito da folha, a 2cm da borda superior
da folha, em algarismos arábicos.

# Referências Bibliográficas

ACM. **Advanced Search**. Disponível em:
\<https://dl.acm.org/search/advanced\>. Acesso em: 5 maio. 2020. ACM
RECSYS COMMUNITY. **RecSys – ACM Recommender Systems**. Disponível em:
\<https://recsys.acm.org/\>. Acesso em: 28 abr. 2020. BHATNAGAR, V.
Collaborative filtering using data mining and analysis. \[s.l: s.n.\].
BORJA, K.; DIERINGER, S. Streaming or stealing? The complementary
features between music streaming and music piracy. **Journal of
Retailing and Consumer Services**, v. 32, p. 86–95, 2016. DIETMAR, J. et
al. **Recommendation system -An Introduction**. \[s.l: s.n.\]. v.
91ERIKSSON, M. et al. **Spotify Teardown**. \[s.l.\] MIT Press, 2019.
FALK, K. Practical Recommender Systems. \[s.l: s.n.\]. IFPI. **IFPI
Global Music Report 2019**. Disponível em:
\<https://www.ifpi.org/news/IFPI-GLOBAL-MUSIC-REPORT-2019\>. LUINI, B.
J. R.; WHITMAN, A. E.; DATE, P. **Streaming Audio: The FezGuys’ Guide**.
\[s.l: s.n.\]. MURARO, R. M. Os avanços tecnológicos e o futuro da
humanidadeQuerendo ser Deus, , 2009. NIWA, H. **Streaming Systems**.
\[s.l.\] O’Reilly Media, 2018. v. 134RESNICK, PAUL AND VARIAN, H. R.
Recommender Systems. **Communications of the ACM**, v. 40, n. 4, p.
56–58, 1997. RICCI, F.; ROKACH, L.; SHAPIRA, B. **Recommender Systems
Handbook**. \[s.l: s.n.\]. UNIVERSIDADE FEDERAL DO CEARA. **A
Magnetorresistência Gigante**. Disponível em:
\<https://seara.ufc.br/tintim-por-tintim/tecnologia/a-magnetorresistencia-gigante/\>.
Acesso em: 12 mar. 2020.
