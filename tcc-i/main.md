UNIVERSIdade FEEVALE

ÉRico De SOUZA loewe

Uso do KNN para recomendação de generos musicais atraves do contexto

Novo Hamburgo

2020

Érico De SOUZA LOEWE

USO DO KNN PARA RECOMENDAÇÃO DE GENEROS MUSICAIS ATRAVES DO CONTEXTO

Trabalho de Conclusão de Curso

apresentado como requisito parcial

à obtenção do grau de Bacharel em

Ciência da computação pela

Universidade Feevale

Orientador: Juliano Varella De Carvalho

Novo Hamburgo

2020

Agradecimentos

Gostaria de agradecer a todos os que, de alguma maneira, contribuíram
para a realização desse trabalho de conclusão, em especial:

Ao meu professor orientador, a minha família, aos amigos e às pessoas
que convivem comigo diariamente, minha gratidão, pelo apoio emocional -
nos períodos mais difíceis do trabalho.

Resumo

Sabe-se que as pessoas têm dificuldades em lidar com um grande volume de
informações, e com a internet e a evolução da tecnologia houve aumento
da quantidade disponível, trazendo a necessidade de os sistemas
evoluírem suas recomendações, surgindo os Sistemas de Recomendações
(*RecSys*). Esses sistemas são utilizados em diversos tipos de
aplicações, como por exemplo: vendas, seleção de um filme, na escolha
de uma música, que é um dos objetivos dessa pesquisa. Neste trabalho
será desenvolvido um sistema de recomendação musical baseado em
contexto comportamental e de ambiente, onde objetivo desse sistema será
coletar informações sobre o comportamento e tendência do usuário,
possibilitando o aperfeiçoamento das recomendações musicais de acordo
com o contexto vivenciado por ele.

Palavras-chave: *RecSys*. *Machine Learning*. Sistemas de recomendação
musical. Música. *Spotify*.

Abstract

Everybody knows people have difficulties in dealing with a large volume
of information. With the internet and the evolution of technology, there
was an increase of the available amount of information, bringing the
need for systems to improve their recommendations, arising the RecSys.
These systems are used in several types of applications such as sales,
selecting a movie and choosing a song, which one is one of the goals of
this research. In this work, a music recommender system based on
behavior and environmental context will be developed. The system purpose
is to collect information about the user’s behavior and environment,
enabling the improvement of music recommendations according to the
context experienced by him.

Keywords: RecSys. Machine Learning. Music Recommender System. Music.
Spotify.

Lista de Figuras

[Figura 1 - Motor avançado de busca da ACM (próprio, 2020)
18](#_Ref40822595)

[Figura 2 - Resultado de busca dos proceedings no motor de busca da ACM
(próprio, 2020) 19](#_Ref40822631)

[Figura 3 - Resultado de busca dos journals no motor de busca da ACM
(próprio, 2020) 20](#_Ref40822641)

[Figura 4 - Etapas realizadas para filtrar os trabalhos encontrados no
motor de busca da ACM (próprio, 2020) 20](#_Ref40822414)

[Figura 5 - Filtro em cima dos trabalhos selecionados através do resumo
(próprio, 2020) 21](#_Ref40822493)

[Figura 6 - Procedimento de filtro realizado baseado nos trabalhos
encontrados no motor de busca da ACM (próprio, 2020) 21](#_Ref40822509)

[Figura 7 Fatores da preferência musical (próprio, 2020)
31](#_Toc54642170)

[Figura 8 – Representação gráfica da classificação do algoritmo KNN
sobre um plano x1 e x2. No plano, os pontos amarelos são a representação
da classe A, roxos classe B e vermelho é o ponto de teste ***(JOSÉ,
2018)*** 36](#_Ref52742150)

[Figura 9 Apresentação dos contextos utilizados no trabalho (próprio,
2020) 38](#_Ref42447869)

[Figura 10 Etapas do desenvolvimento do sistema de recomendação musical
(próprio, 2020) 41](#_Ref42452795)

[Figura 11 Tela introdutória da aplicação (próprio, 2020)
46](#_Toc54642174)

[Figura 12 Tela de login da aplicação (próprio, 2020) 47](#_Toc54642175)

[Figura 13 Tela de preenchimento do contexto (próprio, 2020)
48](#_Toc54642176)

[Figura 14 Tela da lista de dispositivos do Spotify (próprio, 2020)
49](#_Toc54642177)

[Figura 15 Tela principal, a qual apresenta a música sendo reproduzida
ao usuário (próprio, 2020) 50](#_Toc54642178)

[Figura 16 Tela de busca de músicas que encaixem melhor no momento
(próprio, 2020) 51](#_Toc54642179)

[Figura 17 Console do *Realtime Database* do Firebase (próprio, 2020)
53](#_Ref53931970)

[Figura 18 Visão macro das etapas para transformar os eventos
registrados no firebase na tabela que sera rodado o KNN (próprio, 2020)
55](#_Toc54642181)

[Figura 19 Representação dos eventos salvos no Firebase (próprio, 2020)
55](#_Toc54642182)

[Figura 20 Representação das listas geradas na etapa “Separa contexto”
(próprio, 2020) 56](#_Toc54642183)

[Figura 21 Representação das listas geradas na etapa “separa contexto
das músicas” (próprio, 2020) 56](#_Toc54642184)

[Figura 22 Representação da tabela na etapa “separa contexto das
músicas” (próprio, 2020) 57](#_Toc54642185)

[Figura 23 *head()* do *dataframe* criado a partir da variável
*genreTable* (próprio, 2020) 58](#_Ref53955795)

[Figura 24 Visão macro do sistema LORS (próprio, 2020)
59](#_Toc54642187)

Lista de Quadros

[Quadro 1 Relação das funcionalidades desenvolvidas em cada artigo
revisado 33](#_Ref42381546)

[Quadro 2 Perguntas e respostas disponibilizadas a um certo público
através dos formulários do Google. (próprio, 2020) 42](#_Ref48857312)

[Quadro 3 Lista de ações possíveis nos eventos (próprio, 2020)
54](#_Toc54642190)

Lista de Abreviaturas e Siglas

<table>
<thead>
<tr class="header">
<th>LORS</th>
<th>Loewe’s Recommender System</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>RecSys</p>
<p>SVM</p>
<p>AUC</p>
<p>RBF</p>
<p>GPML</p>
<p>GPR</p>
<p>AIR</p>
<p>SPTF</p></td>
<td><p>Recommender Systems</p>
<p>Support Vector Machine</p>
<p>Operating Characteristic Curve</p>
<p>Radial Basis Function</p>
<p>Gaussian Process for Machine Learning</p>
<p>Gaussian Process Regression</p>
<p>Activity-aware Intent Recommendation</p>
<p>RecSys do Spotify</p></td>
</tr>
<tr class="even">
<td></td>
<td></td>
</tr>
</tbody>
</table>

Sumário

[1 Introdução 12](#introdução)

[2 Trabalhos relacionados 16](#trabalhos-relacionados)

[2.1 Levantamento bibliográfico inicial
16](#levantamento-bibliográfico-inicial)

[2.2 O protocolo de revisão 17](#o-protocolo-de-revisão)

[2.3 PROCURA NOS MOTORES DE BUSCA 18](#procura-nos-motores-de-busca)

[2.4 ETAPAS DA REVISÃO DOS TRABALHOS
20](#etapas-da-revisão-dos-trabalhos)

[2.4.1 Trabalhos selecionados 21](#trabalhos-selecionados)

[2.5 FUNCIONALIDADES DOS TRABALHOS INVESTIGADOS
32](#funcionalidades-dos-trabalhos-investigados)

[2.6 Conclusões dos trabalhos revisados
35](#conclusões-dos-trabalhos-revisados)

[3 Modelagem do “*Loewe’s Recommender system*” 36](#_Toc54642200)

[3.1 O Algoritmo KNN 36](#o-algoritmo-knn)

[3.2 Contexto 37](#contexto)

[3.2.1 O que é o contexto comportamental?
38](#o-que-é-o-contexto-comportamental)

[3.2.2 O que é o contexto de ambiente?
39](#o-que-é-o-contexto-de-ambiente)

[3.2.3 Como serão obtidos os contextos?
39](#como-serão-obtidos-os-contextos)

[3.2.4 O que são as ações do usuário?
40](#o-que-são-as-ações-do-usuário)

[3.3 pesquisa com usuários sobre recomendação musical
40](#pesquisa-com-usuários-sobre-recomendação-musical)

[3.3.1 Pré-teste do questionário 44](#pré-teste-do-questionário)

[3.3.2 Resultados do questionário 44](#resultados-do-questionário)

[3.4 Desenvolvimento Do plugin 45](#desenvolvimento-do-plugin)

[3.4.1 Telas da aplicação 46](#telas-da-aplicação)

[3.4.2 Tecnologias utilizadas no desenvolvimento
51](#tecnologias-utilizadas-no-desenvolvimento)

[3.5 Distribuição da aplicação e coleta de dados
52](#distribuição-da-aplicação-e-coleta-de-dados)

[3.5.1 Pré-teste 52](#pré-teste)

[3.5.2 Hospedagem 52](#hospedagem)

[3.5.3 Coleta do Firebase 53](#coleta-do-firebase)

[4 SISTEMA LORS 54](#sistema-lors)

[4.1.1 Preparação dos dados para o KNN
54](#preparação-dos-dados-para-o-knn)

[4.1.2 Testes com KNN 58](#testes-com-knn)

[*4.2* Modelagem do sistema *LORS* 59](#modelagem-do-sistema-lors)

[4.2.1 Como o trabalho vai relacionar as músicas que o usuário gosta aos
contextos? 59](#resultados-do-experimento)

[4.2.2 Como o trabalho vai recomendar novas músicas a partir da relação
de contexto x música? 60](#_Toc54642222)

[4.3 roteiro 60](#_Toc54642223)

[5 CONCLUSÃO 61](#conclusão)

[Referências Bibliográficas 62](#referências-bibliográficas)

# Introdução

A tecnologia avançou muito nos últimos anos, principalmente quando
aborda-se internet e armazenamento de dados (MURARO, 2009). O custo de
armazenar um arquivo vem ficando mais barato e tem feito com que as
pessoas tenham mais espaço de armazenamento, possibilitando a geração de
mais informações (UNIVERSIDADE FEDERAL DO CEARA, \[s.d.\]). A quantidade
de aplicações disponíveis na internet tem aumentado cada vez mais e
consecutivamente gerando mais dados e opções para os usuários.

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
implementações de *softwares* e técnicas, que apresentam sugestões de
itens que seriam de uso de um usuário. As sugestões são de acordo com
vários processos de decisão, como, que item comprar, que música escutar
ou que notícia ler. No geral, sistemas de recomendação servem para dois
propósitos diferentes: (i) podem ser utilizados para estimular os
usuários a fazer alguma coisa como comprar livros ou assistir algum
filme ou (ii) os sistemas de recomendação podem ser utilizados para
lidar com a sobrecarga de informações, selecionando os melhores itens de
uma base maior (DIETMAR et al., 2010).

O auxílio que um sistema de recomendação provê pode ser bem específico
ou genérico. Isso vai depender do tipo de filtragem escolhida para
realizar a recomendação. Quando um sistema busca uma filtragem que leva
em consideração as preferências do usuário, elas podem ser obtidas
implicitamente, por meio de um monitoramento de comportamento. No
entanto, um sistema de recomendação pode também obter explicitamente sua
preferência através de perguntas (DIETMAR et al., 2010).

As recomendações personalizadas necessitam que o sistema conheça algo
sobre cada usuário da base. Todo sistema de recomendação deve
desenvolver e manter um *user model* ou *user profile*, que por exemplo,
contém as preferências dele. A existência de um *user model* é essencial
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
principal, os *RecSys* ajudam a entender melhor o que os usuários
querem. (RICCI; ROKACH; SHAPIRA, 2011)

Os *RecSys* têm evoluído muito desde o seu surgimento, isso acontece
dado o interesse acadêmico e comercial sobre a área, além dos benefícios
que ela pode trazer. Um caso famoso dos sistemas de recomendação foi o
Netflix Prize, uma competição feita pela Netflix, que ofereceu um milhão
a quem melhorasse o algoritmo de recomendação de seu sistema em 10%. A
competição iniciou em 2006 e demorou 3 anos para alguém conseguir
resolver o problema deles de maneira satisfatória. Nesse caso o vencedor
utilizou um modelo híbrido de *RecSys* (FALK, 2019).

Dietmar diz que existem 4 tipos de sistemas de recomendação, sendo eles:
recomendação colaborativa, recomendação baseada em conteúdo,
recomendação baseada em conhecimento, e sistemas de recomendação
híbridos (DIETMAR et al., 2010).

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

Após ser realizado a revisão bibliográfica, será analisado os algoritmos
e estratégias de recomendação de cada artigo. E então, será desenvolvido
o sistema de recomendação desse trabalho, utilizando apenas um dos
algoritmos levantados.

## Levantamento bibliográfico inicial

Antes do início da revisão, foi encontrado diversos trabalhos
relacionados através de: (i) busca genérica no Google Scholar; (ii)
indicação dos avaliadores desse trabalho. Deles, foram selecionados 2
para serem revisados nesse trabalho.

Realizado a busca genérica no Google Scholar em busca de trabalhos
relacionados ao tema desse trabalho, na busca, foi priorizado os
trabalhos em portugues, para dar uma visão clara e rápida do assunto. E
nessa busca foi encontrado o seguinte trabalho: “Desenvolvimento de um
Sistema de Recomendação Musical Sensível ao Contexto”.

O trabalho teve como objetivo desenvolver o modelo de um sistema
sensível ao contexto, utilizando das técnicas clássicas de
recomendação, aplicando uma camada de extra de filtragem colaborativa.
Nessa camada, ele utiliza do algoritmo K-Vizinhos Mais Próximos (KNN)
para realiza-la, o qual é o mais amplamente utilizado para esse tipo de
recomendação conforme (ALIAGA, 2018) (fazer apud Bobadilla et al.
(2013)), e é um algoritmo *lazy*, isso é, não gera um modelo que precisa
de treinamento.

No trabalho, foram escolhidos 10 usuários para realizar o teste, tendo
um contexto comum que era “Estudar” para atividade e “BR” para cultura.
Foram realizados 240 testes para compilar os dados do experimento, e no
fim, foi apresentado os resultados do experimento realizado “Com
contexto” e “Sem contexto”, onde o trabalho obteve uma precisão de 50%
na taxa de aceitação das recomendações realizadas.

As indicações dos avaliadores foram analisadas e foi verificado que
apenas uma apresentava o algoritmo utilizado, que é: “Effective
Nearest-Neighbor Music Recommendations”. A qual apresenta uma técnica
hibrida de recomendação, que utiliza de uma combinação do KNN, fatoração
de matriz e um pequeno conjunto heurístico.

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

  - *Context-aware* (Cientes de contexto)

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

Com os resultados da busca cada trabalho foi analisado, e esta análise
foi dividida em quatro etapas: (i) a leitura inicial foi feita no título
de cada artigo, e foram mantidos àqueles que indicam uma relação com
essa pesquisa; (ii) consistiu em realizar uma leitura dos resumos desses
trabalhos e manter àqueles adequados; (iii) aplicou-se um filtro,
baseando-se na leitura da introdução e conclusão dos artigos e por fim;
(iv) leitura total dos artigos selecionados.

Após a leitura aprofundada em cima dos artigos selecionados, essa
revisão trouxe informações de cada publicação, onde foi possível
entender o que já foi desenvolvido e então definir o que esse trabalho
poderá agregar cientificamente à área de sistemas de recomendação. Ao
final, foi desenvolvida uma tabela relacionando as funcionalidades
existentes e o uso delas nos trabalhos encontrados, a qual será
apresentada nas próximas seções.

## PROCURA NOS MOTORES DE BUSCA

No dia 07/05/2020 foi realizada a pesquisa no motor de busca ACM
utilizando a *string* de busca pré-definida anteriormente. As Figuras 1,
2 e 3 ilustram esse processo. A figura 1 apresenta a string de busca
desenvolvida no motor de busca da ACM, e a figura 2 e 3 apresentam
respectivamente os resultados das buscas por *proceedings* e *journals*.
A quantidade de resultados apresentados na ACM foram 150 trabalhos
relacionados a *string* de busca.

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
realizada uma classificação deles em 4 tipos, que são: Trabalhos que
possuem relação com o foco de pesquisa da revisão; Trabalhos que
utilizam dos RecSys e contexto, mas que visam recomendar outros temas
além da música como notícias, filmes e, produtos; Trabalhos que
utilizam dos RecSys e contexto, mas que não abordam a recomendação
musical; Trabalhos que utilizam dos RecSys musicais, mas que não
utilizam o contexto nas recomendações. Foi apresentado na forma de
gráfico de pizza na A Figura 5 abaixo apresenta a relação entre os
tipos e a quantidade de artigos encontrados.

<span class="chart">\[CHART\]</span>

<span id="_Ref40822493" class="anchor"></span>Figura 5 - Filtro em cima
dos trabalhos selecionados através do resumo (próprio, 2020)

###  Trabalhos selecionados

O resultado do procedimento de filtro apresentado na Figura 6 abaixo,
resultou em 4 trabalhos relacionados ao objetivo descrito no protocolo
de revisão desse trabalho.

<span id="_Ref40822509" class="anchor"></span>Figura 6 - Procedimento de
filtro realizado baseado nos trabalhos encontrados no motor de busca da
ACM (próprio, 2020)

Foi realizado uma revisão nesses trabalhos a qual foi apresentada nas
próximas seções. Onde, em cada seção/artigo, foi apresentado um breve
resumo do que foi desenvolvido e no fim, foi respondido as seguintes
perguntas:

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

Foi realizada a revisão do trabalho e então verificado que ele não
apresenta dados e técnicas suficientes para serem consideradas nessa
pesquisa, pois todas as informações do sistema desenvolvido estão em
outros artigos citados por esse. Dada a falta de informações
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
procura gerar *playlists* relacionadas as atividades as quais o usuário
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

Neste trabalho serão apresentadas diversas técnicas que buscam melhorar
a recomendação personalizada, a partir de diversos dados obtidos por
meio de sensores (implicitamente), ou através de perguntas realizadas ao
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
determinar quais fatores do usuário são fortes indicadores de desempenho
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
(usuário, música e contexto). Eles são apresentados na Figura 7 abaixo.

<span id="_Toc54642170" class="anchor"></span>Figura 7 Fatores da
preferência musical (próprio, 2020)

#### Como é obtido o contexto?

O contexto é obtido a partir do aplicativo desenvolvido, ele trouxe
diversas informações sobre o dia a dia dos usuários, essas informações
foram obtidas através de sensores e formulários que o usuário conseguia
responder. Não é apresentado o contexto atual para o usuário.

#### A recomendação atingiu as expectativas do usuário?

Como o artigo revisado não desenvolveu um sistema de recomendação.
Apenas disponibilizou diversos dados estatísticos que auxiliariam o
desenvolvimento de um *RecSys*. Por isso, não foi definido nenhum
critério de qualidade ou técnicas de avaliação das recomendações. A
base foi obtida através do aplicativo desenvolvido nesse trabalho, ela
continha 48 usuários, que a partir de uma filtragem dos dados efetuada,
passou para 19 nas respostas das questões.

#### Tiveram outros resultados apresentados? Quais?

Não tiveram outros resultados apresentados.

## FUNCIONALIDADES DOS TRABALHOS INVESTIGADOS

Para relacionar os trabalhos revisados, foi criada uma tabela contendo
as funcionalidades encontradas nos artigos revisados nas seções
anteriores.

O Quadro 1 abaixo apresenta a relação das funcionalidades dos 3 artigos
revisados e da proposta deste trabalho, focando em comparar apenas as
funcionalidades utilizadas no desenvolvimento do sistema de
recomendação, nem todas as funcionalidades puderam ter um comparativo
completo, devido ao trabalho estar em desenvolvimento, onde só teremos
esta resposta após avaliação das técnicas que serão utilizadas, onde
temos a seguinte legenda de símbolos: ✔ caso possua, ❌ caso não possua e
❓ caso não seja possível concluir o comparativo (próprio, 2020).

<span id="_Ref42381546" class="anchor"></span>Quadro 1 Relação das
funcionalidades desenvolvidas em cada artigo revisado

|                                                                           | (TKALČIČ et al., 2019) | (VOLOKHIN; AGICHTEIN, 2018) | (YANG; TENG, 2015) | (ALIAGA, 2018) | (LUDEWIG et al., 2018) | Proposta deste trabalho |
| ------------------------------------------------------------------------- | ---------------------- | --------------------------- | ------------------ | -------------- | ---------------------- | ----------------------- |
| Tem foco no entendimento do contexto para recomendações musicais?         | ✔                      | ✔                           | ❌                  | ✔              | ❌                      | ✔                       |
| O trabalho foi/será validado em um caso real?                             | ❌                      | ❌                           | ✔                  | ✔              | ✔                      | ✔                       |
| Utiliza do contexto comportamental?                                       | ✔                      | ✔                           | ✔                  | ✔              | ❌                      | ✔                       |
| Utiliza do contexto de ambiente?                                          | ❌                      | ❌                           | ✔                  | ✔              | ❌                      | ✔                       |
| Utiliza do contexto explicito?                                            | ❌                      | ❌                           | ✔                  | ✔              | ❌                      | ✔                       |
| Utiliza do contexto implícito?                                            | ✔                      | ✔                           | ✔                  | ✔              | ❌                      | ✔                       |
| Utiliza do algoritmo *K-Nearest Neighbors* (*KNN*) para classificação?    | ❌                      | ❌                           | ❌                  | ✔              | ✔                      | ✔                       |
| Utiliza do algoritmo *Support Vector Machine* (*SVM*) para classificação? | ❌                      | ✔                           | ✔                  | ❌              | ❌                      | ❌                       |
| Utiliza do algoritmo *Radial Basis Function* (*RBF*) para classificação?  | ❌                      | ❌                           | ✔                  | ❌              | ❌                      | ❌                       |
| Utiliza o algoritmo *Random Forest* para classificação*?*                 | ✔                      | ❌                           | ❌                  | ❌              | ❌                      | ❌                       |
| Utiliza o algoritmo *Gradient Boosting* para classificação*?*             | ✔                      | ❌                           | ❌                  | ❌              | ❌                      | ❌                       |

## Conclusões dos trabalhos revisados

Após a revisão dos 3 trabalhos estudados em relação a proposta deste
trabalho, foi identificado que nenhum deles apresentou o algoritmo
utilizado na recomendação. Foram apresentados algoritmos de
classificação (*KNN, SVM*, *Random Forest, etc.*), de avaliação de
resultados (*AUC*, *Root Mean Squared Error, Mean Reciprocal Rank*,
etc.), porem em nenhum momento foi apresentado algoritmos de
recomendação como algoritmos de *Matrix Factorization* (*SVD*,
*Neighborhood* *SVD*, *Deep-Learning MF*, etc.) ou algoritmos de *Tensor
Factorization* (*Tensor Decomposition*, *Nonnegative Tensor
Factorization*, etc.), os quais são os algoritmos utilizados para
realizar a recomendações nos *RecSys*.

Os algoritmos escolhidos para realizar a classificação foram os mais
utilizados nos trabalhos, o KNN e SVM, os quais apareceram em 2 artigos.
Porem o uso do SVM foi descartado, devido a seu algoritmo tradicional,
estar mais voltado a uma grande divisão das classes dos *datasets*.
(geralmente utilizado para a classificação de classes binarias).
(RÄTSCH, 2004) Sobrando somente o algoritmo KNN para ser testado no
sistema desenvolvido nesse trabalho.

# COLETA DO CONTEXTO DOS USUARIOS

A partir da revisão bibliográfica realizada, foi possível conhecer
alguns sistemas e modelos que utilizam do contexto para realizar as
recomendações musicais, tornando possível entender certas lacunas que
não foram analisadas nessa área de pesquisa.

Com isso, foi possível entender e desenvolver um modelo de sistemas de
recomendação chamado *LORS* (*Loewe’s Recommender System*), que utiliza
de uma análise recorrente do contexto, para realizar as recomendações
dinâmicas às mudanças do contexto. Esse modelo será apresentado com mais
detalhes no capítulo a seguir.

## Contexto

Conforme o dicionário Michaelis (EDITORA MELHORAMENTOS LTDA, 2020)
contexto pode ser definido por:

> O conjunto de circunstâncias inter-relacionadas de cuja tessitura se
> depreende determinado fato ou situação; circunstância(s), conjuntura,
> situação.

Um sistema de recomendação busca encontrar os melhores itens para um
devido fim, onde geralmente se baseia em dados históricos para
produzi-las. Observa-se que, com o entendimento do contexto, ou conforme
a definição das “circunstâncias que levaram a certos fatos ou
situações”, é possível auxiliar as recomendações, aumentando o
número de dados disponíveis para realizar uma classificação e/ou
filtro. A Figura 9 apresenta uma visão macro dos contextos que serão
considerados neste trabalho.

<span id="_Ref42447869" class="anchor"></span>Figura 9 Apresentação dos
contextos utilizados no trabalho (próprio, 2020)

### O que é o contexto comportamental?

Conforme o dicionário Michaelis (EDITORA MELHORAMENTOS LTDA, 2020)
comportamento pode ser tido por:

> Qualquer ação ou reação do organismo ou parte dele.

A partir da definição de contexto, foi realizado um levantamento das
possíveis ações a serem registradas em um sistema baseado no *app*
Spotify, as quais, serão colocadas no questionário, e o seu resultado
será utilizado como peso para cada ação e no futuro, auxiliar na
recomendação musical. Esse estudo trouxe a seguinte lista de ações:

  - Pausar / Tocar música

  - Passar / Voltar \(n\) músicas

  - Escolher música / artista / gênero

  - Definir tempo da música

  - Definir a atividade

  - Definir o humor

### O que é o contexto de ambiente?

Conforme o dicionário Michaelis (EDITORA MELHORAMENTOS LTDA, 2020)
ambiente pode ser tido por:

> Conjunto de condições físicas, biológicas e químicas que rodeiam os
> seres vivos e as coisas.

Com essa definição, foram pesquisados sensores e informações que
pudessem representar essas condições. A partir da análise dos contextos
levantados, foi identificado 3 possíveis contextos de ambiente que podem
ser representados na aplicação, que são: (i) Localização; (ii) Clima e;
(iii) Reprodução musical em grupo / individual.

### Como serão obtidos os contextos?

Os contextos no *LORS* serão obtidos a partir da captura de formularios
e eventos de um app. Na aplicação, será obtido contexto de duas
maneiras: (i) explicitamente, onde o usuário irá cadastrar o que está
fazendo. Ex.: emoções, atividades e localização. (ii) implicitamente, a
qual será obtido através das ações do usuário realizadas no aplicativo.
Ex.: ações sobre os componentes do app, localização.

São poucas as ações que auxiliam no entendimento do contexto e que podem
ser obtidas implicitamente, isso devido as limitações dos sensores e
dados disponíveis na aplicação desenvolvida, por isso, o sistema que
será desenvolvido neste trabalho, contará com informações dispostas de
maneira explicita e implícita, sendo elas:

##### Informações adquiridas de maneira implícita: 

  - localização

  - ações sobre os componentes do app

  - tempo

  - clima

  - músicas / gênero / artistas preferidas(os)

##### Informações adquiridas de maneira explicita: 

  - localização

  - humor

  - atividade

  - músicas / gênero / artistas preferidas(os)

### O que são as ações do usuário?

As ações do usuário trazem diversas informações referentes ao contexto
que ele está vivendo, elas auxiliam no entendimento do seu contexto e na
validação da acuracidade das recomendações feitas. São elas que
demonstrarão ao sistema, o gosto ou não do usuário, em cima das músicas
recomendadas. Cada ação terá um nível de importância, a qual será obtida
através das respostas do questionário. As possíveis ações a serem
executadas pelo usuário estão listadas na seção 3.1.1.

## Pesquisa com usuários sobre recomendação musical

Para validar o modelo de sistema de recomendação foi desenvolvida uma
aplicação, a qual foi distribuída aos usuários que participaram do
questionário previamente realizado, onde foram obtidas informações sobre
esses usuários. As etapas do desenvolvimento do *LORS* são apresentadas
na Figura 11.

<span id="_Ref42452795" class="anchor"></span>Figura 10 Etapas do
desenvolvimento do sistema de recomendação musical (próprio, 2020)

As perguntas aplicadas no questionário permitiram conhecer melhor os
usuários que utilizarão a aplicação, sendo assim, foram utilizadas
perguntas que permitam entender suas preferências, atividades, dentre
outros fatores. As perguntas do questionário estão listadas no Quadro 2:

<span id="_Ref48857312" class="anchor"></span>Quadro Perguntas e
respostas disponibilizadas a um certo público através dos formulários do
Google. (próprio, 2020)

| Pergunta                                                                                     | Possíveis respostas                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1\. Qual o aplicativo / reprodutor de música você utiliza atualmente?                        | Spotify, Deezer, Youtube Music, TIDAL, Apple Music, Google Play Music, Rádio Outro, qual?                                                                                                                                                                                 |
| 2\. Você acha que as recomendações musicais realizadas via software poderiam ser melhoradas? | Sim, não                                                                                                                                                                                                                                                                  |
| 3\. Você acredita que o contexto poderia melhorar essas recomendações?                       | Sim, não                                                                                                                                                                                                                                                                  |
| 4\. Em quais atividades você costuma ouvir música?                                           | Acordando, Assistindo a filmes / séries / novelas, Comendo, Correndo, Dirigindo, Estudando, Jogando, Lazer, Lendo, Indo dormir, Passeando, Praticando exercícios, Trabalhando, Treinando, Outro, qual?                                                                    |
| 5\. Em quais lugares você costuma ouvir músicas?                                             | Academia, Bar, Biblioteca, Casa, Com os amigos, Escola, Festa, Praia, Restaurante, Trabalho, Outro, qual?                                                                                                                                                                 |
| 6\. Você costuma ouvir música quando está:                                                   | Aborrecido, Alegre, Amoroso, Ansioso, Apavorado, Assustado, Constrangido, Culpado, Deprimido, Desapontado, Excitado, Envergonhado, Em pânico, Feliz, Frustrado, Furioso, Inseguro, Irado, Irritado, Humilhado, Magoado, Nervoso, Orgulhoso, Triste, Zangado, Outro, qual? |
| 7\. O que costuma te influenciar na escolha da música?                                       | Atividades, Clima, Grupo / Individual, Horário do dia, Humor, Localização, Outro, Qual?                                                                                                                                                                                   |
| 8\. O que você faz quando gosta ou não de uma música?                                        | Abrir / Fechar o app, Aumentar / Abaixar volume, Definir tempo da música, Escolher música / artista / gênero, Pausar / Tocar música, Passar / Voltar n músicas, Outra, qual?                                                                                              |
| 9\. As músicas que você escuta sozinho são diferentes das que escuta com os amigos?          | Sim, não                                                                                                                                                                                                                                                                  |
| 10\. Quanto tempo por semana você escuta música?                                             | Menos que 5 horas, de 5 a 10 horas, de 11 a 30 horas, de 31 a 50 horas, mais que 50 horas                                                                                                                                                                                 |
| 11\. Quais são os gêneros musicais que gosta de escutar?                                     | Alternativa, Blues, Clássica, Country, Dance, Eletrônica, Folk, Funk, Hip Hop, Latina, MPB, Jazz, Pop, Reggae, R\&B, Rock, Soundtrack, Vocal                                                                                                                              |
| 12\. Gostaria de participar de uma pesquisa que visa melhorar a recomendação musical?        | Sim, não                                                                                                                                                                                                                                                                  |
| 13\. Sua idade                                                                               |                                                                                                                                                                                                                                                                           |
| 14\. Dicas e sugestões?                                                                      |                                                                                                                                                                                                                                                                           |

### Pré-teste do questionário

Com as perguntas do questionário definidas, foi realizada uma validação
para garantir que elas faziam sentido. O pré-teste foi feito enviando o
questionário para 5 pessoas, as quais tinham a responsabilidade de
analisar as perguntas e avaliar a dificuldade de entendimento de cada
uma das perguntas. Isso foi feito para garantir que o público que
receberia o questionário posteriormente - o qual não está dentro do
contexto do trabalho - conseguiria responder as perguntas com completa
compreensão delas.

### Resultados do questionário

Com um alcance maior do que 1000 pessoas, sendo 800 funcionários da CWI
que possuem acesso ao Slack, 200 pessoas alcançadas através do Instagram
e demais divulgações que tiveram, o questionário teve uma adesão de 222
respostas. O público respondente tinha entre 14 e 71 anos e um gosto
musical bem diversificado, foram obtidos em torno de 60 estilos
musicais, sendo o mais votado o Rock, com 181 marcações.

O questionário foi aberto no dia 6 de julho de 2020, nesse dia foi
realizada uma publicação no Instagram para apresentá-lo ao público, e no
decorrer, foi enviado a outras redes sociais, como WhatsApp, Slack
(empresarial), Twitter e Facebook. O seu fechamento foi realizado no dia
18 de julho de 2020, somando o total de 12 dias em que o ele ficou
aberto.

Dos dispositivos ou aplicativos utilizados para realizar a reprodução
das músicas, com 168 respostas, o Spotify foi o mais escolhido das
opções, em segundo lugar ficou o Youtube com 103 respostas (variadas
entre 86 no Youtube Music, e 17 tratando sobre o Youtube clássico).

A pergunta “Você acha que as recomendações musicais realizadas via
software poderiam ser melhoradas?” trouxe uma visão da opinião se existe
espaço para esse trabalho evoluir as técnicas de recomendação musical, e
a “Você acredita que o contexto poderia melhorar essas recomendações?”
se existe espaço para o contexto do usuário evoluir essas técnicas. Com
95% para a primeira e 96% para a segunda pergunta de respostas marcadas
como “sim”, foi possível verificar que esse trabalho tem espaço para
agregar qualidade às recomendações musicais.

Para aperfeiçoar a visão do trabalho das características possuem maior
importância, foi realizado as perguntas “Em quais atividades você
costuma ouvir música?”, “Em quais lugares você costuma ouvir músicas?” e
“Você costuma ouvir música quando está:”. Com elas, foi possível
conhecer de novas características (a partir do campo “outro”), e foi
possível obter de características que mais influenciam os usuários na
escolha de uma música.

## Desenvolvimento Do plugin

Para obter os dados dos usuários, foi desenvolvido uma aplicação web que
utilizava do SDK Web do Spotify para reprodução das músicas e captura
dos eventos gerados pelo usuário. Ela pode ser acessada através do link
<https://ericoloewe.github.io/computer-science-tcc/>.

![](./pandoc/media/image6.png)

<span id="_Toc54642174" class="anchor"></span>Figura Tela introdutória
da aplicação (próprio, 2020)

### Telas da aplicação

A aplicação foi dividida em 5 telas, e ela inicia com a tela apresentada
na fig11, a qual apresenta instruções para os usuários de como utilizar
a aplicação. A segunda tela, é representada na fig12, a qual
disponibiliza opções de login no Spotify.

![](./pandoc/media/image7.png)

<span id="_Toc54642175" class="anchor"></span>Figura Tela de login da
aplicação (próprio, 2020)

A fig13 apresenta o cadastro do contexto na aplicação. O processo é
dividido em 3 etapas: (i) “Como você está se sentindo nesse momento?”;
(ii) “O que você está fazendo nesse momento?”; (iii) “Onde você está
nesse momento?”. A partir dessas perguntas, é possível entender o
contexto atual do usuário naquele período. As perguntas são realizadas a
cada 30min.

![](./pandoc/media/image8.png)

<span id="_Toc54642176" class="anchor"></span>Figura Tela de
preenchimento do contexto (próprio, 2020)

Para realizar a reprodução musical, é necessário exigir do Spotify que
reproduza as músicas no plugin. Para isso, foi criado a tela apresentada
na fig14, a qual possui um botão “USAR PLUGIN PARA TOCAR MÚSICAS” que ao
ser pressionado, habilita a reprodução no plugin.

![](./pandoc/media/image9.png)

<span id="_Toc54642177" class="anchor"></span>Figura Tela da lista de
dispositivos do Spotify (próprio, 2020)

Por fim, foi desenvolvido a tela principal, que é apresentado na fig15.
Nessa tela, é realizado toda interação do usuário no período em que ele
está ouvindo as músicas, as possíveis interações estão listadas abaixo.

  - Gostar da música

  - Não gostar da música

  - Passar / Voltar música

  - Buscar música

  - Pausar / Tocar música

![](./pandoc/media/image10.png)

<span id="_Toc54642178" class="anchor"></span>Figura Tela principal, a
qual apresenta a música sendo reproduzida ao usuário (próprio, 2020)

Ao clicar no botão “gostei”, é salvo a informação de que o usuário
gostou da música naquele contexto. Ao clicar no botão “não gostei” é
salvo a informação que o usuário não gostou e é levado o usuário a tela
de busca de música fig16, para o usuário apresentar uma música se
identifique melhor naquele momento.

![](./pandoc/media/image11.png)

<span id="_Toc54642179" class="anchor"></span>Figura Tela de busca de
músicas que encaixem melhor no momento (próprio, 2020)

A ação de buscar música, irá levar para a tela apresentada na fig16, a
qual possibilita o usuário apresentar uma música que se enquadre melhor
no contexto que ele está vivendo. Ao selecionar as músicas e clicar em
próximo, é salvo as informações de sua relação com o contexto vivido.

### Tecnologias utilizadas no desenvolvimento

Para desenvolver a aplicação web, foi utilizado a *library React* que
auxilia na construção de componentes e interfaces. Para estilizar os
componentes e páginas do React, foi utilizado o framework Material ui, o
qual possui estilos prontos baseados no Material (interface do Android).

Inicialmente, para persistir os eventos do usuário, foi utilizado o
*Google Analytics* (uma ferramenta específica para eventos). Porém,
devido à falta de customização da ferramenta, foi trocado para o
*Realtime Database* do Firebase (*Realtime DB*), o qual possui uma vasta
opção de customização, e tornaria possível a adição do *timestamp* a
cada evento. Com ela foi possível persistir os eventos em um formato
NoSQL.

No início, para enviar o evento a plataforma, foi utilizado o GTM
(Google Tag Manager) para fazer esse intermédio, porém, devido a algumas
limitações da ferramenta, foi removido essa dependência e enviado os
eventos diretamente do *Javascript*.

## Distribuição da aplicação e coleta de dados

A aplicação foi disponibilizada no período do dia 28/09 até o dia 02/10
através de um e-mail com instruções de como utilizar a aplicação, que
foi enviado para os 144 usuários que participaram do questionário e
optaram por participar da pesquisa. Assim, ela irá salvar os dados que
serão utilizados como teste no modelo de classificação desenvolvido
nesse trabalho.

### Pré-teste

Com a aplicação finalizada e hospedada, foi enviado inicialmente para o
professor orientador para validar o desenvolvimento feito. Com isso, foi
encontrado certos ajustes a serem feitos antes de ser divulgado a
aplicação. Então, foi corrigido a aplicação, enviado para mais 5
pessoas testarem e novamente foi encontrado alguns pontos a serem
corrigidos. Por fim, foi enviado o e-mail para um grupo supervisionado
de 8 pessoas, para validar sua aceitação e entendimento do funcionamento
da aplicação.

### Hospedagem

A aplicação foi publicada na ferramenta disponível no Github chamada
*Github Pages*. Essa é uma ferramenta gratuita, que possibilita a
publicação de páginas estáticas. O link final de acesso a aplicação
ficou: <https://ericoloewe.github.io/computer-science-tcc/>

Os eventos das músicas foram salvos em outra plataforma chamada
Firebase. Ela é uma ferramenta paga, porém, para o trabalho foi
utilizado a versão gratuita, que suporta o acesso de até 100 usuários
simultâneos. Demais eventos como “quantidade de usuários acessando o
*app*” foram salvos utilizando as aplicações GTM e Google Analytics.

### Coleta do Firebase

Ao final do experimento, foi exportado os eventos dos usuários em um
JSON através do console do *Realtime Database* do Firebase. A Figura 17
apresenta o console, a estrutura de dados dos eventos e o botão de
exportar do *Realtime DB*.

![](./pandoc/media/image12.png)

<span id="_Ref53931970" class="anchor"></span>Figura Console do
*Realtime Database* do Firebase (próprio, 2020)

Com o JSON e a estrutura de dados pronta, foi realizado alguns estudos
em *python* para adquirir o conhecimento necessário para obter os dados
necessários do Spotify e rodar o algoritmo KNN nos dados obtidos. Os
primeiros testes do algoritmo foram realizados utilizando a base de íris
disponível no *sklearn*, e então, após obter o conhecimento do
funcionamento do algoritmo no *python*, foi aplicado o mesmo sobre a
base extraída e preparada do JSON.

# SISTEMA LORS

Com a estrutura dos dados pronta e o levantamento dos dados dos
usuários, foi feito um tratamento dos dados e realizado um estudo das
técnicas de recomendação levantadas nos trabalhos anteriores. Com isso,
foi modelado o sistema LORS, que utiliza de uma análise recorrente do
contexto, para realizar as recomendações dinâmicas às mudanças do
contexto. Serão apresentadas mais informações das etapas de modelagem e
desenvolvimento do sistema nas seções a seguir.

## O Algoritmo KNN

O *k-Nearest Neighbor* (KNN) é um método de classificação que busca os k
pontos dos dados de treino mais pertos do ponto de teste, e então, uma
classe é atrelada a esse ponto através de uma votação majoritária dos k
pontos vizinhos. (T.M. COVER, 1967) Na fig8 é exemplificado graficamente
o funcionamento do algoritmo.

![Image for post](./pandoc/media/image13.png)

<span id="_Ref52742150" class="anchor"></span>Figura – Representação
gráfica da classificação do algoritmo KNN sobre um plano x1 e x2. No
plano, os pontos amarelos são a representação da classe A, roxos classe
B e vermelho é o ponto de teste ***(JOSÉ, 2018)***

Como é apresentado na Fig8 o algoritmo funciona através da disposição
das características x1 e x2 sobre um plano, e atribuindo classes a eles
(no caso: classe A e classe B), então, a partir da predição do ponto de
teste é encontrado a classe que o representa. (TODO\_REF)

Para rodar o algoritmo de classificação nesse trabalho será utilizado a
implementação da biblioteca em *python* do *scikit-learn.* A qual se
encontra na classe *KNeighborsClassifier* do modulo *sklearn.neighbors.*
(PEDREGOSA et al., 2011)

### Preparação dos dados para o KNN

Para salvar os eventos da aplicação, foi criado uma lista chamada
*events*, essa lista é composta pela lista de usuários, onde cada
usuário possui a lista de eventos dentro. Cada eventos é composto pela
seguinte estrutura: (i) *action*, ação realizada pelo usuário,
apresentadas no quadro3; (ii) *createdDateTime*, data da execução do
evento; (iii) *value*, valores do evento separados por “;”.

<span id="_Toc54642190" class="anchor"></span>Quadro Lista de ações
possíveis nos eventos (próprio, 2020)

| Action                        | Descrição                                     |
| ----------------------------- | --------------------------------------------- |
| CHANGE\_MUSIC\_TIME           | Altera o tempo da música durante a reprodução |
| CHANGE\_TO\_NEXT\_MUSIC       | PREENCHER ⬇                                   |
| CHANGE\_TO\_PREVIOUS\_MUSIC   |                                               |
| CHOOSE\_ACTIVITY              |                                               |
| CHOOSE\_FEELING               |                                               |
| CHOOSE\_FEELING\_TO\_BE\_LIKE |                                               |
| CHOOSE\_LOCATION              |                                               |
| HATED\_MUSIC                  |                                               |
| HIDE\_DETAILS                 |                                               |
| LIKED\_ARTIST                 |                                               |
| LIKED\_GENRE                  |                                               |
| LIKED\_MUSIC                  |                                               |
| LOAD\_LOCATION                |                                               |
| PAUSE\_MUSIC                  |                                               |
| PLAY\_MUSIC                   |                                               |
| RESTART\_MUSIC                |                                               |
| SHOW\_DETAILS                 |                                               |

A fig18 apresenta as etapas de preparação dos dados desde o carregamento
dos dados do arquivo. Na etapa “Carrega JSON” foi realizado o
carregamento do arquivo a partir da biblioteca padrão do python “open”.
Para a interpretação, foi utilizado a biblioteca *json*, que possibilita
transformar o conteúdo *string* em um dicionário. Do dicionário, foi
obtido os usuários e seus eventos e transformado em outro dicionário
*users*, cujo a *key* é o id do usuário e o conteúdo sua lista de
eventos.

![Diagrama Descrição gerada automaticamente](./pandoc/media/image14.jpg)

<span id="_Toc54642181" class="anchor"></span>Figura Visão macro das
etapas para transformar os eventos registrados no firebase na tabela que
sera rodado o KNN (próprio, 2020)

Na segunda etapa “Separa Contexto”, representada na fig19, é realizado a
quebra dos eventos de cada usuário por seus contextos. Criando assim,
uma relação de cada contexto, com as músicas reproduzidas, que é
representado na fig20.

![Uma imagem contendo Interface gráfica do usuário Descrição gerada
automaticamente](./pandoc/media/image15.jpg)

<span id="_Toc54642182" class="anchor"></span>Figura Representação dos
eventos salvos no Firebase (próprio, 2020)

Na fig21 é representada a etapa “Separa contexto das músicas”, pois na
reprodução das músicas, é gerado os eventos separadamente, e nessa
etapa, é criado uma relação da música escutada, com os eventos
registrados, gerando no fim, uma tabela semelhante a fig22 das músicas e
seus contextos.

![Tela de computador com texto preto sobre fundo branco Descrição gerada
automaticamente](./pandoc/media/image16.jpg)

<span id="_Toc54642183" class="anchor"></span>Figura Representação das
listas geradas na etapa “Separa contexto” (próprio, 2020)

Para criar essa relação é realizado um loop em cima dos eventos de cada
contexto, e criado uma lista chamada *musicTable*, a qual é preenchida
com os seguintes valores: *uri*, *like*, *hate* e *restart* relacionados
ao contexto da música e *feeling*, *activity* e *location* relacionados
ao contexto do usuário. Os contextos *like*, *hate* e *restart* são
representados pelo número de vezes que cada um aconteceu durante a
reprodução.

![Diagrama Descrição gerada automaticamente](./pandoc/media/image17.jpg)

<span id="_Toc54642184" class="anchor"></span>Figura Representação das
listas geradas na etapa “separa contexto das músicas” (próprio, 2020)

Nas próximas duas etapas “busca informações das músicas” e “busca
informações dos artistas (gênero)”, é realizado uma busca nas API’s do
Spotify, utilizando os uris da música e artistas, para no fim obter os
gêneros musicais. Devido a uma limitação do Spotify, essa busca é
realizada de 50 em 50 uris. O resultado dessas buscas é um dicionário
chamado *artistsMap* que possui a relação dos uris com os dados de cada
artista.

![Tabela Descrição gerada automaticamente](./pandoc/media/image18.jpg)

<span id="_Toc54642185" class="anchor"></span>Figura Representação da
tabela na etapa “separa contexto das músicas” (próprio, 2020)

Após a busca dos dados ao Spotify, foi obtido a lista dos gêneros das
músicas através dos artistas, e então adicionados à lista de músicas
*musicTable* representada na Figura 22. Foi separado os gêneros um por
linha e no fim, removido a música, pois ela iria atrapalhar o resultado
do algoritmo. Com isso, foi criado a lista *genreTable* e deixado de
usar o *musicTable*.

Com a tabela completa, foi realizado um tratamento dos valores dos
eventos que eram múltiplos, isso é, continham mais de uma informação nos
mesmos eventos através do “;”. Nesse tratamento, foi quebrado os valores
dos eventos um a um.

![](./pandoc/media/image19.png)

<span id="_Ref53955795" class="anchor"></span>Figura *head()* do
*dataframe* criado a partir da variável *genreTable* (próprio, 2020)

No fim, foi utilizado a lib *preprocessing* do *sklearn* para
transformar as características e classes de cada evento da tabela em
números inteiros, isso é necessário para rodar o algoritmo KNN. O
resultado da tabela é apresentado na Figura 23.

### Taxonomia dos gêneros

...

### Testes com KNN

No final, o *genreTable* foi transformado em um *data frame* da *lib*
pandas. Então foi realizado a separação da coluna gênero da tabela, com
isso, obtido as variáveis X (características) e y (classes). As duas são
utilizadas na função *train\_test\_split* para obter as características
de treino (*X\_train*), características de teste (*X\_test*), classes de
treino (*y\_train*) e classes de teste (*y\_test*). O tamanho da base de
teste pode ser informado para o *train\_test\_split* através do
parâmetro *test\_size*, que nesse caso foi 0,3.

Para rodar o KNN, foi utilizado a classe *KNeighborsClassifier* da lib
*sklearn.neighbors*, nela, pode ser informado o número de vizinhos
levados em consideração a partir do parâmetro *n\_neighbors*, que nesse
caso foi 3.

Iniciando a classe, obtemos a variável *model*, com ela, informamos os
dados de treino (*X\_train*, *y\_train*) através do método *fit*, o qual
suporta 2 parâmetros: (i) dados de treino; (ii) valores alvo. Rodando o
*fit*, já é possível utilizar o modelo criado para predizer os próximos
alvos, que no *sklearn* é rodado através do método *predict*, passando
os valores para realizar a predição (*X\_test*), que tem como retorno a
classe que se adequa melhor ao modelo.

No fim, é realizado um teste através do método *score* na performance da
predição do algoritmo e modelo informado ao *sklearn*. Esse método,
recebe por parâmetro as características de teste retiradas do modelo
(*X\_test*) e as classes de teste retiradas do modelo (*y\_test*) e
retorna à acurácia do modelo gerado. O qual obteve uma média de 0,15 nos
testes realizados.

## Modelagem do sistema *LORS*

O sistema LORS foi desenvolvido para através do conhecimento do contexto
dos usuários, aperfeiçoar as recomendações musicais do Spotify. Nele é
realizado a predição do gênero musical baseando-se no contexto e o
histórico de músicas reproduzidas, e entregue o resultado através de
uma API, a qual pode ser consumida por qualquer usuário que utilize o
plugin Web desenvolvido nesse trabalho.

![Diagrama Descrição gerada automaticamente](./pandoc/media/image20.jpg)

<span id="_Toc54642187" class="anchor"></span>Figura 24 Visão macro do
sistema LORS (próprio, 2020)

### POC (Proof of Concept)

Inicialmente foi desenvolvido uma POC em *python* utilizando o *Jupyter
Notebook*. Nela foi utilizado somente os dados do usuário que teve mais
registros salvos na base. Todo tratamento e preparação dos dados
apresentados na seção 4.1.2 foi realizado nessa POC.

Para aperfeiçoar o uso algoritmo foram realizados testes do KNN, que
visavam: (i) escolher o melhor número de vizinhos (*k*) para rodar o
algoritmo; (ii) avaliar o score do modelo; (iii) analisar a matriz de
confusão obtida no modelo.

### Recomendação de novas músicas

... KNN =\> gênero =\> musicas do genero

### Servidor

Com a logica desenvolvida na POC, foi realizado uma exportação do código
para scripts *python*. Então foi desenvolvido um servidor utilizando a
lib *Flask* e integrado o algoritmo KNN exportado à rota. Foi criado uma
rota do tipo GET / que recebe 4 parâmetros: (i) uri, o id do Spotify do
usuário; (ii) feeling, o sentimento registrado; (iii) *activity*, a
atividade registrada; (iv) *location*, a localização registrada. A rota
tem como retorno o gênero resultado da predição e o *score* do modelo.

### Hospedagem

Na fig24

### Resultado da recomendação

... tela

### Resultados do experimento

... score, matriz confusão

### Como o trabalho vai relacionar as músicas que o usuário gosta aos contextos?

A cada 30 minutos será solicitado ao usuário uma atualização de
contexto, isso é, será aberto um formulário, o qual possibilita o
preenchimento do humor, atividades e localização atual do usuário. Essas
informações serão salvas e relacionadas as próximas músicas reproduzidas
ou salvas pelo usuário.

# CONCLUSÃO

Nesse trabalho foi realizado uma revisão em cima dos trabalhos da *ACM*,
de *RecSys* musical que utilizam o contexto do usuário, nela foi
possível verificar, que poucos trabalhos buscam unir, a recomendação
musical com o contexto do usuário. Sendo assim, esse trabalho vai buscar
desenvolver um *RecSys* musical, o qual irá analisar o contexto do
usuário em tempo real, para realizar novas recomendações a ele. E por
fim, será realizado uma comparação do resultado, com os obtidos no
*Spotify*.

# Referências Bibliográficas

ACM. **Advanced Search**. Disponível em:
\<https://dl.acm.org/search/advanced\>. Acesso em: 5 maio. 2020. ACM
RECSYS COMMUNITY. **RecSys – ACM Recommender Systems**. Disponível em:
\<https://recsys.acm.org/\>. Acesso em: 28 abr. 2020. ALIAGA, W. K.
DESENVOLVIMENTO DE UM SISTEMA DE RECOMENDACÃO MUSICAL SENSÍVEL AO
CONTEXTO. 2018. BHATNAGAR, V. Collaborative filtering using data mining
and analysis. \[s.l: s.n.\]. BORJA, K.; DIERINGER, S. Streaming or
stealing? The complementary features between music streaming and music
piracy. **Journal of Retailing and Consumer Services**, v. 32, p. 86–95,
2016. DIETMAR, J. et al. **Recommendation system -An Introduction**.
\[s.l: s.n.\]. v. 91EDITORA MELHORAMENTOS LTDA. **Sobre o dicionário |
Michaelis On-line**. Disponível em: \<https://michaelis.uol.com.br/\>.
Acesso em: 6 jun. 2020. ERIKSSON, M. et al. **Spotify Teardown**.
\[s.l.\] MIT Press, 2019. FALK, K. Practical Recommender Systems. \[s.l:
s.n.\]. IFPI. **IFPI Global Music Report 2019**. Disponível em:
\<https://www.ifpi.org/news/IFPI-GLOBAL-MUSIC-REPORT-2019\>. JOSÉ, I.
**KNN (K-Nearest Neighbors) \#1**. Disponível em:
\<https://medium.com/brasil-ai/knn-k-nearest-neighbors-1-e140c82e9c4e\>.
Acesso em: 4 out. 2020. LUDEWIG, M. et al. Effective nearest-neighbor
music recommendations. **ACM International Conference Proceeding
Series**, 2018. LUINI, B. J. R.; WHITMAN, A. E.; DATE, P. **Streaming
Audio: The FezGuys’ Guide**. \[s.l: s.n.\]. MURARO, R. M. Os avanços
tecnológicos e o futuro da humanidadeQuerendo ser Deus, , 2009. NIWA, H.
**Streaming Systems**. \[s.l.\] O’Reilly Media, 2018. v. 134PEDREGOSA,
F. et al. Scikit-learn: Machine Learning in {P}ython. **Journal of
Machine Learning Research**, v. 12, p. 2825–2830, 2011. RÄTSCH, G. A
brief introduction into machine learning. **21st Chaos Communication
Congress**, p. 1–6, 2004. RESNICK, PAUL AND VARIAN, H. R. Recommender
Systems. **Communications of the ACM**, v. 40, n. 4, p. 56–58, 1997.
RICCI, F.; ROKACH, L.; SHAPIRA, B. **Recommender Systems Handbook**.
\[s.l: s.n.\]. T.M. COVER, P. E. H. Nearest Neighbor Pattern
Classfication. v. I, p. 1–28, 1967. TKALČIČ, M. et al. Prediction of
music pairwise preferences from facial expressions. **International
Conference on Intelligent User Interfaces, Proceedings IUI**, v. Part
F1476, p. 150–159, 2019. UNIVERSIDADE FEDERAL DO CEARA. **A
Magnetorresistência Gigante**. Disponível em:
\<https://seara.ufc.br/tintim-por-tintim/tecnologia/a-magnetorresistencia-gigante/\>.
Acesso em: 12 mar. 2020. VOLOKHIN, S.; AGICHTEIN, E. Towards
intent-aware contextual music recommendation: Initial experiments.
**41st International ACM SIGIR Conference on Research and Development in
Information Retrieval, SIGIR 2018**, p. 1045–1048, 2018. YANG, Y. H.;
TENG, Y. C. Quantitative study of music listening behavior in a
smartphone context. **ACM Transactions on Interactive Intelligent
Systems**, v. 5, n. 3, 2015.
