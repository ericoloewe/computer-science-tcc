---
title: UNIVERSIDADE FEEVALE
---

ÉRICO DE SOUZA LOEWE

##### SISTEMA DE RECOMENDAÇÃO MUSICAL BASEADO EM CONTEXTO COMPORTAMENTAL E DE AMBIENTE

###### Anteprojeto de Trabalho de Conclusão

Novo Hamburgo

2018

ÉRICO DE SOUZA LOEWE

##### SISTEMA DE RECOMENDAÇÃO MUSICAL BASEADO EM CONTEXTO COMPORTAMENTAL E DE AMBIENTE

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

Sabe-se que as pessoas têm dificuldades em lidar com um grande volume de
informações, e com a internet e a evolução da tecnologia houve aumento
da quantidade disponível, trazendo a necessidade de os sistemas
evoluírem suas recomendações, surgindo os RecSys. Esses sistemas são
utilizados em diversos tipos de aplicações como vendas, seleção de um
filme e até mesmo na seleção de uma música, que é um dos objetivos dessa
pesquisa. Neste trabalho será desenvolvido um modelo de sistema de
recomendação baseado em contexto comportamental e de ambiente. O
objetivo desse sistema é coletar informações sobre o comportamento e
tendência do usuário, possibilitando o aperfeiçoamento das recomendações
musicais de acordo com o contexto vivenciado pelo usuário.

Palavras-chave: *RecSys.* *Machine Learning.* Sistemas de recomendação
musical. Música. Spotify.

 SUMÁRIO
=======

MOTIVAÇÃO
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...5

OBJETIVOS
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...9

METODOLOGIA
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....10

CRONOGRAMA
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...11

BIBLIOGRAFIA
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....12

 MOTIVAÇÃO
=========

A tecnologia avançou muito nos últimos anos, principalmente quando
aborda-se internet e armazenamento de dados (MURARO, 2009). O custo de
armazenar um arquivo vem ficando mais barato e tem feito com que as
pessoas tenham mais espaço de armazenamento, possibilitando a geração de
mais informações (Universidade Federal do Ceara, n.d.). A quantidade de
aplicações disponíveis na internet tem aumentado cada vez mais gerando
cada vez mais dados e opções para os usuários.

Diversas vezes o indivíduo possui dificuldades em realizar escolhas
entre as diversas alternativas daquilo que lhe é apresentado, e acaba
geralmente confiando nas escolhas que lhe são apresentadas através de
outras pessoas (Resnick, Paul and Varian, 1997). A partir do aumento da
quantidade de informações disponíveis e do conhecimento da habilidade do
indivíduo de realizar escolhas, a partir de sua experiência pessoal,
surgem os sistemas de recomendação. Esses sistemas buscam filtrar a
grande massa de dados disponível, para auxiliar o indivíduo na escolha
das opções disponíveis.

Sistemas de recomendação (RecSys - *Recommender Systems*) são
implementações de softwares e técnicas, que apresentam sugestões de
itens que seriam de uso de um usuário. As sugestões são de acordo com
vários processos de decisão, como, que item comprar, que música escutar
ou que notícia ler. No geral, sistemas de recomendação servem para dois
propósitos diferentes. Eles podem ser utilizados para estimular os
usuários a fazer alguma coisa como comprar livros ou assistir algum
filme. Em contrapartida, os sistemas de recomendação podem ser
utilizados para lidar com a sobrecarga de informações, selecionando os
melhores itens de uma base maior (Dietmar et al., 2010).

O auxílio que um sistema de recomendação provê pode ser bem específico
ou genérico. Isso vai depender do tipo de filtragem escolhida para
realizar a recomendação. Quando um sistema busca uma filtragem que leva
em consideração as preferências do usuário, elas podem ser obtidas
implicitamente, por meio de um monitoramento de comportamento. No
entanto, um sistema de recomendação pode também obter explicitamente sua
preferência através de perguntas (Dietmar et al., 2010).

As recomendações personalizadas necessitam que o sistema conheça algo
sobre cada usuário da base. Todo sistema de recomendação deve
desenvolver e manter um *user model* ou *user profile*, que por exemplo,
contém as preferências dele. A existência de um *user model* é essencial
para qualquer sistema de recomendação (Dietmar et al., 2010).

Os sistemas de recomendação iniciaram com a \"*Usenet*\" da *Duke
University,* na década de 70, um sistema com uma distribuição global que
buscava divulgar novas notícias postadas e classificadas pelos seus
usuários. Em 1985, iniciaram-se as recomendações baseadas em conteúdo, a
partir de uma arquitetura para sistemas de informação de larga escala. A
Xerox teve sua grande participação em 1992, desenvolvendo o primeiro
sistema (Tapestry) designado a realizar a filtragem colaborativa. Em
1997, foi desenvolvido o primeiro sistema de recomendação de filmes
chamado Movielens. Até que em 2000, a Pandora iniciou o projeto genoma
musical, onde a recomendação passou a ser utilizada para facilitar as
escolhas de um usuário entre as diversas músicas existentes na época
(Bhatnagar, 2016).

Desde então, os sistemas de recomendação têm revolucionado o mercado de
aplicações de diversas formas, pois com eles, aumentam-se o número de
itens vendidos em sites de venda online, além dos sites conseguirem
vender itens mais diversificados. Eles têm melhorado a satisfação dos
usuários e, com isso, têm aumentado suas fidelidades na aplicação, e o
principal, os RecSys ajudam a entender melhor o que o usuários querem.
(Ricci et al., 2011)

Os *RecSys* têm evoluído muito desde o seu surgimento, isso acontece
dado o interesse acadêmico e comercial sobre a área, além dos benefícios
que ela pode trazer. Um caso famoso dos sistemas de recomendação foi o
*Netflix Prize*, uma competição feita pela Netflix, que ofereceu um
milhão a quem melhorasse o algoritmo de recomendação de seu sistema em
10%. A competição iniciou em 2006 e demorou 3 anos para alguém conseguir
resolver o problema deles de maneira satisfatória. Nesse caso o vencedor
utilizou um modelo híbrido de RecSys (Falk, 2019).

(Dietmar et al.2010) trazem em sua obra os 4 tipos de sistemas de
recomendação, sendo eles: recomendação colaborativa, que parte da ideia
de que se os usuários compartilharam dos mesmos interesses no passado,
eles continuarão tendo os mesmos interesses no futuro. Recomendação
baseada em conteúdo, onde o sistema aprende a recomendar itens que são
similares ao que o usuário gostou no passado, essa similaridade é
calculada baseada na relação das características dos itens a serem
comparados (Ricci et al., 2011).

O terceiro tipo é a recomendação baseada em conhecimento, a qual não
consegue depender somente do histórico de compra de um usuário, é
necessário um conteúdo mais estruturado e detalhado para ser gerada uma
recomendação, geralmente nesse tipo, é utilizado um conteúdo adicional
fornecido manualmente (conteúdo recente ao produto e usuário). E por
último, sistemas de recomendação híbridos onde a ideia é combinar as
diferentes técnicas, a fim de gerar uma boa e mais assertiva
recomendação (Dietmar et al., 2010).

Esses sistemas têm ajudado muito na venda de produtos *online*, porém,
um dos segmentos de mercado que apresentaram problemas, foram as vendas
de álbum ou faixas musicais *online*. Elas possibilitam as pessoas
baixarem ou receberem as faixas a partir de compras em lojas virtuais,
porém o preço de cada faixa ainda era muito caro, o que fazia com que
muitos usuários optassem pela pirataria. Desta forma, surgiu uma nova
maneira de anunciar os "produtos musicais" *online*, o *streaming*
musical (Borja & Dieringer, 2016).

O mercado musical tem evoluído muito desde seu início. No começo, seu
consumo foi aumentando cada vez mais com a evolução das tecnologias e
internet. Com o *streaming* musical, as pessoas passaram a consumir mais
os sistemas de *streaming*, diminuindo o consumo de pirataria *online*
(Eriksson et al., 2019). Em 2018 o lucro global da indústria musical
cresceu 9,7%. Nesse crescimento, o *streaming* pago possui boa parte
dele com um 34% do total (IFPI, 2019).

Os sistemas de *streaming* são um tipo de mecanismo de processamento de
dados projetado com um conjunto de dados infinitos em mente (Niwa,
2018). Esse mecanismo pode ser desenvolvido para processar muitos tipos
de mídia, tais como vídeos, fotos e áudio. Nesse trabalho será utilizado
o *streaming* de áudio, mais especificamente, o *streaming* disponível
nas *APIs* da ferramenta Spotify.

Dentro dos sistemas de *streaming*, existe o *streaming* de áudio que é
semelhante a transmissão de rádio tradicional, exceto que é utilizada a
internet para enviar e receber os áudios, ao invés de utilizar ondas
aéreas. Assim como o ato de ligar um rádio, o *streaming* de áudio é
reproduzido em tempo real, o que é muito mais conveniente do que baixar
uma música *online* e então consumi-la (Luini et al., 2002).

Portanto, de acordo com esse contexto, este trabalho procura construir
um sistema de recomendação musical, utilizando o contexto comportamental
do usuário e o contexto do ambiente onde ele está inserido. Esse
contexto será obtido, através da criação um *plugin* que permitirá ao
usuário escutar suas músicas enquanto são registrados os eventos do
contexto vivido naquele momento.

** **OBJETIVOS
==============

Objetivo geral

Desenvolver um sistema de recomendação musical, considerando o contexto
comportamental do usuário, bem como o contexto do ambiente onde ele
encontra-se.

Objetivos específicos

-   Investigar APIs de Serviços de *Streamings* Musicais.

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

Esse trabalho tem como natureza a pesquisa aplicada, pois através dos
conhecimentos estudados de *RecSys* será desenvolvido um sistema que
gerará as recomendações musicais personalizadas por usuário por meio do
contexto comportamental e ambiental, obtido através do *plugin* de
reprodução musical.

O método científico utilizado por esse trabalho é do tipo dedutivo, dado
que primeiro será realizado um estudo relacionado ao problema proposto,
para então se obter o entendimento de como ele poderá ser resolvido.
Esse estudo buscará entender a personalidade musical de cada usuário,
por meio dos dados obtidos e dos estudos de *Machine Learning* aplicados
sobre os dados, para então desenvolver um sistema de recomendação
baseado nos estudos realizados fazendo com que essa pesquisa tenha como
objetivo de estudo exploratório.

Serão utilizados 4 tipos de procedimentos técnicos nessa pesquisa.
Pesquisa bibliográfica, dado que será necessária uma base de
conhecimentos e estudos sobre os *RecSys*, suas técnicas e algoritmos.
Como será utilizada a *API* do Spotify para consultar as faixas e outras
utilidades, utilizaremos o procedimento técnico pesquisa documental. Com
o estudo realizado e os registros de contextos prontos, utilizaremos da
pesquisa experimental para avaliar a base disponível através dos
algoritmos de *RecSys*. Será feito uma pesquisa de avaliação do usuário
ouvinte para estudarmos o seu entendimento em relação ao que foi
recomendado, nesse caso será utilizado o procedimento técnico do tipo
levantamento.

A abordagem dessa pesquisa será do tipo quantitativa, pois o foco de
estudo desse trabalho será voltado para algoritmos de sistemas de
recomendação que buscam entender o gosto de um usuário e não diretamente
a estudos referentes a psicologia cognitiva. Então assim que as bases
estiverem prontas, será realizado um estudo em cima delas apresentando
estatisticamente diversos comportamentos e suas tendências.

Para avaliar o estudo, será desenvolvido um sistema que permitirá ao
usuário criar uma nova *playlist*, onde o sistema consultará os
contextos relacionados as músicas escutadas pelo usuário, gerando uma
nova lista de músicas recomendadas. A avaliação de contexto será feita
enquanto o usuário estiver ouvindo as músicas e editando a *playlist*,
possibilitando que o sistema identifique e altere (caso julgue
necessário) as músicas no meio da edição. Ao final da edição, será
enviado uma avaliação para o usuário, a qual vai permitir que o sistema
tenha conhecimento dos gostos do usuário. Ao final, será apresentado
nessa pesquisa diversos comportamentos e tendências dos usuários
encontradas a partir desse sistema.

CRONOGRAMA
==========

Trabalho de Conclusão I

  -------------------------------------------------------------------------------------------- ------- ----- ----- -----
  Etapa                                                                                        Meses               
                                                                                               Mar     Abr   Mai   Jun
  Anteprojeto                                                                                                      
  Pesquisa bibliográfica sobre técnicas e algoritmos utilizados por sistemas de recomendação                       
  Investigar APIs de Serviços de *Streamings* Musicais                                                             
  Definir contexto comportamental e de ambiente                                                                    
  Liberação da aplicação para obter os dados necessários.                                                          
  Estudar técnicas para avaliar os resultados                                                                      
  Elaborar TCC I                                                                                                   
  -------------------------------------------------------------------------------------------- ------- ----- ----- -----

Trabalho de Conclusão II

  ----------------------------------------- ------- ----- ----- -----
  Etapa                                     Meses               
                                            Ago     Set   Out   Nov
  Organizar dados obtidos                                       
  Definir técnica para avaliar resultados                       
  Desenvolver sistema de recomendação                           
  Análise dos resultados                                        
  Elaborar TCC II                                               
  ----------------------------------------- ------- ----- ----- -----

BIBLIOGRAFIA
============

Bhatnagar, V. (2016). Collaborative filtering using data mining and
analysis. In *Collaborative Filtering Using Data Mining and Analysis*.
https://doi.org/10.4018/978-1-5225-0489-4Borja, K., & Dieringer, S.
(2016). Streaming or stealing? The complementary features between music
streaming and music piracy. *Journal of Retailing and Consumer
Services*, *32*, 86--95.
https://doi.org/10.1016/j.jretconser.2016.06.007Dietmar, J., Zanker, M.,
Felfernig, A., & Friedrich, G. (2010). Recommendation system -An
Introduction. In *Cambridge University Press* (Vol. 91).Eriksson, M.,
Fleischer, R., Johansson, A., Snickars, P., & Vonderau, P. (2019).
Spotify Teardown. In *Spotify Teardown*. MIT Press.
https://doi.org/10.7551/mitpress/10932.001.0001Falk, K. (2019).
*Practical Recommender Systems*.IFPI. (2019). *IFPI Global Music Report
2019*. https://www.ifpi.org/news/IFPI-GLOBAL-MUSIC-REPORT-2019Luini, B.
J. R., Whitman, A. E., & Date, P. (2002). *Streaming Audio: The FezGuys'
Guide*.Muraro, R. M. (2009). *Os avanços tecnológicos e o futuro da
humanidade*. Querendo ser Deus.Niwa, H. (2018). Streaming Systems. In
*Development* (Vol. 134, Issue 4). O'Reilly Media.Resnick, Paul and
Varian, H. R. (1997). Recommender Systems. *Communications of the ACM*,
*40*(4), 56--58.Ricci, F., Rokach, L., & Shapira, B. (2011). Recommender
Systems Handbook. In *Recommender Systems Handbook*.
https://doi.org/10.1007/978-0-387-85820-3Universidade Federal do Ceara.
(n.d.). *A Magnetorresistência Gigante*. Retrieved March 12, 2020, from
https://seara.ufc.br/tintim-por-tintim/tecnologia/a-magnetorresistencia-gigante/
