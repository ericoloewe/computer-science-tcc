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
18](#_Ref40822595)

[Figura 2 - Resultado de busca dos proceedings no motor de busca da ACM
(próprio, 2020) 19](#_Ref40822631)

[Figura 3 - Resultado de busca dos journals no motor de busca da ACM
(próprio, 2020) 19](#_Ref40822641)

[Figura 4 - Etapas realizadas para filtrar os trabalhos encontrados no
motor de busca da ACM (próprio, 2020) 20](#_Ref40822414)

[Figura 5 - Filtro em cima dos trabalhos selecionados através do resumo
(próprio, 2020) 20](#_Ref40822493)

[Figura 6 - Procedimento de filtro realizado baseado nos trabalhos
encontrados no motor de busca da ACM (próprio, 2020) 21](#_Ref40822509)

Lista de Tabelas

[Table 1 Relação das funcionalidades desenvolvidas em cada artigo
revisado (próprio, 2020) 27](#_Toc41243154)

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

[1 Introdução 11](#introdução)

[2 Sistemas de recomendação e contexto
15](#sistemas-de-recomendação-e-contexto)

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

[3.1 O protocolo de revisão 17](#o-protocolo-de-revisão)

[3.2 PROCURA NOS MOTORES DE BUSCA 18](#procura-nos-motores-de-busca)

[3.3 Os trabalhos 20](#os-trabalhos)

[3.3.1 The New Challenges when Modeling Context through Diversity over
Time in Recommender Systems
22](#the-new-challenges-when-modeling-context-through-diversity-over-time-in-recommender-systems)

[3.3.2 Prediction of music pairwise preferences from facial expressions
24](#prediction-of-music-pairwise-preferences-from-facial-expressions)

[3.3.3 Towards Intent-Aware Contextual Music Recommendation: Initial
Experiments
25](#towards-intent-aware-contextual-music-recommendation-initial-experiments)

[3.3.4 Quantitative Study of Music Listening Behavior in a Smartphone
Context
26](#quantitative-study-of-music-listening-behavior-in-a-smartphone-context)

[3.4 Tabela com tecnicas 27](#tabela-com-tecnicas)

[4 Modelagem do que será feito 30](#modelagem-do-que-será-feito)

[4.1 Contexto 30](#contexto)

[4.1.1 O que é o contexto comportamental?
30](#o-que-é-o-contexto-comportamental)

[4.1.2 O que é o contexto ambiente? 30](#o-que-é-o-contexto-ambiente)

[4.1.3 Como será obtido os contextos?
30](#como-será-obtido-os-contextos)

[4.2 Arquitetura do sistema 30](#arquitetura-do-sistema)

[5 CONCLUSÃO 31](#conclusão)

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

# Sistemas de recomendação e contexto

Texto

## Tipos de sistemas de recomendação

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

## Algoritmos de sistemas de recomendação

Texto

## Técnicas para avaliar OS RESULTADOS de um RecSys

Texto

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

<span id="_Ref40822595" class="anchor"></span>Figura 1 - Motor avançado
de busca da ACM (próprio, 2020)

No dia 07/05/2020 foi realizado a pesquisa no motor de busca apresentado
a partir da *string* de busca pré-definida anteriormente. As Figuras 1,
2 e 3 ilustram esse processo. Todos trouxeram resultados pertinentes ao
trabalho logo na primeira página da aplicação. A quantidade de
resultados apresentados na ACM foram 150 trabalhos relacionados a
*string* de busca.

![Tela de computador com texto preto sobre fundo branco Descrição gerada
automaticamente](./pandoc/media/image2.png)

<span id="_Ref40822631" class="anchor"></span>Figura 2 - Resultado de
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

<span id="_Ref40822641" class="anchor"></span>Figura 3 - Resultado de
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

<span id="_Ref40822414" class="anchor"></span>Figura 4 - Etapas
realizadas para filtrar os trabalhos encontrados no motor de busca da
ACM (próprio, 2020)

Em cima dos 83 trabalhos encontrados, foi realizado um filtro baseado no
sistema estruturado anteriormente. Esse filtro é baseado em 3 etapas
(demonstradas na Figura 4), que visam direcionar esta pesquisa para a
revisão dos trabalhos que condizem com o objetivo descrito no protocolo.

<span class="chart">\[CHART\]</span>

<span id="_Ref40822493" class="anchor"></span>Figura 5 - Filtro em cima
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

<span id="_Ref40822509" class="anchor"></span>Figura 6 - Procedimento de
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

Nesse trabalho foi desenvolvido um modelo chamado DANCE, para monitorar
e explorar a evolução da diversidade ao longo do tempo. No modelo foi
desenvolvido o conceito de contexto implicito, o qual ficou definido
como caracteristicas comuns compartilhadas aos items consultados durante
uma certa faxa de tempo. Foi definido tambem como a oposição do contexto
explicito, o qual é definido como uma situação dentre os fatores
conhecidos. O contexto implicito, se refere a uma sequencia de itens,
enquanto o explicito, inclue informações adicionais do usuario.

#### Qual o problema que ele resolveu?

Nesse trabalho é apresentado um modelo que busca melhorar as
recomendações musicais através do contexto que o usuário está vivendo.
É apresentado uma preocupação em trazer as melhores recomendações
baseadas nas particularidades de cada usuário.

#### Quais técnicas foram usadas?

Esse trabalho apresenta superficialmente as técnicas utilizadas para
realizar as recomendações.

#### Qual a base de treinamento e teste?

Não foi realizado nenhuma aplicação para obter a base de treinamento
desse trabalho. Foi utilizado uma base pronta que continha mais de
200.000 representações dos acessos de usuários em um sistema. Essa base
foi utilizada para validar a habilidade do modelo apresentado de obter o
contexto implícito através dos dados de acesso.

#### Quais os contextos utilizados?

A principal métrica utilizada nesse trabalho foi a diversidade. A qual
pode ser obtida através de diversos tipos de dados (numéricos, binários,
texto, intervalos, ...), desde que seja possível calcular a semelhança
entre dois dados desse mesmo tipo. Através da diversidade, é obtido o
contexto implícito do usuário.

O modelo é capaz de detectar as mudanças de contexto comportamental a
partir das consultas do usuário, e cada subsequência de itens
consultados entre duas mudanças de contexto correspondem ao contexto
implícito. E com a obtenção do contexto é realizado a recomendação ao
usuário.

No modelo do trabalho, não apresentado o uso do contexto de ambiente, é
utilizado somente o *ip* do usuário, mas não está claro se é utilizado
como uma representação da posição geográfica onde o usuário se encontra.

Como nesse trabalho o contexto é obtido através da diversidade
encontrada na diferença de certos atributos, é utilizados atributos que
não possuem relação direta com contexto, mas sim com a música. Para
obtenção da diversidade é utilizado: 7 atributos relacionados ao artista
da música. 6 atributos relacionados a música.

#### Como é obtido o contexto?

Nesse trabalho é realizado a obtenção do contexto de duas maneiras: De
maneira implícita e explicita. O modelo foi desenvolvido especificamente
para obtenção do contexto implícito do usuário. É definido uma noção
através das características comuns dos itens consultados durante um
certo espaço de tempo. O contexto explicito foi obtido diretamente do
usuário através de perguntas, e foi utilizado como validação do contexto
implícito obtido através do modelo.

O uso do contexto implícito foi dividido em 3 etapas: detectar o
contexto o mais rápido possível, utilizar o histórico para detectar
contextos semelhantes. Exploração de contextos semelhantes.

A validação da acuracidade do modelo, a comparação dos contextos foi
classificada em 4 possibilidades: O contexto implícito e explicito são
os mesmos. Os contextos são parcialmente os mesmos. Os contextos são
diferentes, mas o usuário concorda com o contexto obtido de forma
implícita. E por último, é quando os contextos são diferentes e o
usuário não entende o contexto obtido.

#### Foi avaliado o nível de satisfação do usuário com a música recomendada?

Não foi apresentado nenhuma avaliação desse tipo.

#### A recomendação atingiu as expectativas do usuário?

Essa métrica foi validada através da obtenção do contexto explicito
citado em 3.3.1.5, onde é apresentado as 4 percepções dos usuários em
relação ao contexto implícito obtido. Porém não é apresentado nenhum
resultado dessa avaliação.

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
preferencias musicais de um usuário a partir de suas expressões faciais
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

Texto

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

Texto

  - Foi utilizada da recomendação colaborativa?

  - Quais foram os algoritmos utilizados na recomendação?
    
    1.  #### Qual a base de treinamento e teste?

Texto

  - Foi desenvolvida alguma aplicação para obter as bases?
    
    1.  #### Quais os contextos utilizados?

Texto

  - Foi analisado o comportamento? Quais aspectos?

  - Foi analisado o ambiente? Quais fatores?
    
    1.  #### Como é obtido o contexto?

Texto

  - O usuário pode auxiliar na definição do contexto?

  - É apresentado o contexto atual para o usuário?
    
    1.  #### Foi avaliado o nível de satisfação do usuário com a música recomendada?

Texto

#### A recomendação atingiu as expectativas do usuário?

Texto

  - Quais foram os critérios de qualidade utilizados?

  - Quantidade de usuários utilizadas? (tamanho da base)

  - Quais foram as técnicas de avaliação usadas?
    
    1.  #### Tiveram outros resultados apresentados? Quais?

Texto

### Quantitative Study of Music Listening Behavior in a Smartphone Context

\- falar sobre 2 questões de pesquisa

\- parece que usaram os sensores “crus”, poderíamos utilizar algo como:
esta correndo, dormindo, caminhando

####  Qual o problema que ele resolveu?

Texto

  - Buscam obter uma recomendação personalizada pelo gosto do usuário?
    
    1.  #### Quais técnicas foram usadas?

Texto

  - Foi utilizada da recomendação colaborativa?

  - Quais foram os algoritmos utilizados na recomendação?
    
    1.  #### Qual a base de treinamento e teste?

Texto

  - Foi desenvolvida alguma aplicação para obter as bases?
    
    1.  #### Quais os contextos utilizados?

Texto

  - Foi analisado o comportamento? Quais aspectos?

  - Foi analisado o ambiente? Quais fatores?
    
    1.  #### Como é obtido o contexto?

Texto

  - O usuário pode auxiliar na definição do contexto?

  - É apresentado o contexto atual para o usuário?
    
    1.  #### Foi avaliado o nível de satisfação do usuário com a música recomendada?

Texto

#### A recomendação atingiu as expectativas do usuário?

Texto

  - Quais foram os critérios de qualidade utilizados?

  - Quantidade de usuários utilizadas? (tamanho da base)

  - Quais foram as técnicas de avaliação usadas?
    
    1.  #### Tiveram outros resultados apresentados? Quais?

Texto

## Tabela com tecnicas

Texto

<span id="_Toc41243154" class="anchor"></span>Table 1 Relação das
funcionalidades desenvolvidas em cada artigo revisado (próprio, 2020)

|                                                                   | 3.3.1 The New Challenges when Modeling Context through Diversity over Time in Recommender Systems | 3.3.2 Prediction of music pairwise preferences from facial expressions | 3.3.3 Towards Intent-Aware Contextual Music Recommendation: Initial Experiments | 3.3.4 Quantitative Study of Music Listening Behavior in a Smartphone Context | Proposta desse trabalho |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------- |
| Tem foco no entendimento do contexto para recomendações musicais? | ❌                                                                                                 |                                                                        |                                                                                 |                                                                              | ✔                       |
| Apresenta o desenvolvimento realizado no trabalho?                | ❌                                                                                                 |                                                                        |                                                                                 |                                                                              |                         |
| O trabalho foi validado em um caso real?                          | ❌                                                                                                 |                                                                        |                                                                                 |                                                                              |                         |
| Apresenta como o sistema chegou em tal recomendação ao usuário?   | ✔                                                                                                 | \-                                                                     | \-                                                                              | \-                                                                           | \-                      |
| Utiliza do contexto comportamental?                               | ✔                                                                                                 |                                                                        |                                                                                 |                                                                              |                         |
| Utiliza do contexto de ambiente?                                  | ❌                                                                                                 |                                                                        |                                                                                 |                                                                              |                         |
| Utiliza do contexto explicito?                                    | ✔                                                                                                 |                                                                        |                                                                                 |                                                                              |                         |
| Utiliza do contexto implícito?                                    | ✔                                                                                                 |                                                                        |                                                                                 |                                                                              |                         |

# Modelagem do que será feito

Texto

## Contexto

Texto

### O que é o contexto comportamental?

Texto

### O que é o contexto ambiente?

Texto

### Como será obtido os contextos?

Texto

## Arquitetura do sistema

Texto

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
