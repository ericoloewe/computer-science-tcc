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
pesquisa. Neste trabalho será desenvolvido um sistema de recomendação
baseado em contexto comportamental e de ambiente. O objetivo desse
sistema é coletar informações sobre o comportamento e tendência do
usuário, possibilitando o aperfeiçoamento das recomendações musicais de
acordo com o contexto vivenciado pelo usuário.

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

Sistemas de recomendação (RecSys - *Recommender Systems*) são
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
desenvolver e manter um *user model* ou *user profile*, que por exemplo,
contém as preferências dele. A existência de um *user model* é essencial
para qualquer sistema de recomendação (DIETMAR et al., 2010).

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
(BHATNAGAR, 2016).

Desde então, os sistemas de recomendação têm revolucionado o mercado de
aplicações de diversas formas, pois com eles, aumentam-se o número de
itens vendidos em sites de venda online, além dos sites conseguirem
vender itens mais diversificados. Eles têm melhorado a satisfação dos
usuários e, com isso, têm aumentado suas fidelidades na aplicação, e o
principal, os RecSys ajudam a entender melhor o que o usuários querem.
(RICCI; ROKACH; SHAPIRA, 2011)

Os *RecSys* têm evoluído muito desde o seu surgimento, isso acontece
dado o interesse acadêmico e comercial sobre a área, além dos benefícios
que ela pode trazer. Um caso famoso dos sistemas de recomendação foi o
*Netflix Prize*, uma competição feita pela Netflix, que ofereceu um
milhão a quem melhorasse o algoritmo de recomendação de seu sistema em
10%. A competição iniciou em 2006 e demorou 3 anos para alguém conseguir
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

Esses sistemas têm ajudado muito na venda de produtos *online*, porém,
um dos segmentos de mercado que apresentaram problemas, foram as vendas
de álbum ou faixas musicais *online*. Elas possibilitam as pessoas
baixarem ou receberem as faixas a partir de compras em lojas virtuais,
porém o preço de cada faixa ainda era muito caro, o que fazia com que
muitos usuários optassem pela pirataria. Desta forma, surgiu uma nova
maneira de anunciar os "produtos musicais" *online*, o *streaming*
musical (BORJA; DIERINGER, 2016).

O mercado musical tem evoluído muito desde seu início. No começo, seu
consumo foi aumentando cada vez mais com a evolução das tecnologias e
internet. Com o *streaming* musical, as pessoas passaram a consumir mais
os sistemas de *streaming*, diminuindo o consumo de pirataria *online*
(ERIKSSON et al., 2019). Em 2018 o lucro global da indústria musical
cresceu 9,7%. Nesse crescimento, o *streaming* pago possui boa parte
dele com um 34% do total (IFPI, 2019).

Os sistemas de *streaming* são um tipo de mecanismo de processamento de
dados projetado com um conjunto de dados infinitos em mente (NIWA,
2018). Esse mecanismo pode ser desenvolvido para processar muitos tipos
de mídia, tais como vídeos, fotos e áudio. Nesse trabalho será utilizado
o *streaming* de áudio, mais especificamente, o *streaming* disponível
nas *APIs* da ferramenta Spotify.

Dentro dos sistemas de *streaming*, existe o *streaming* de áudio que é
semelhante a transmissão de rádio tradicional, exceto que é utilizada a
internet para enviar e receber os áudios, ao invés de utilizar ondas
aéreas. Assim como o ato de ligar um rádio, o *streaming* de áudio é
reproduzido em tempo real, o que é muito mais conveniente do que baixar
uma música *online* e então consumi-la (LUINI; WHITMAN; DATE, 2002).

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
gerará as recomendações musicais personalizadas por usuário, por meio do
contexto comportamental e ambiental, obtido através do *plugin* de
reprodução musical.

O método científico utilizado por esse trabalho é do tipo dedutivo, dado
que primeiro será realizada uma pesquisa bibliográfica relacionada ao
problema proposto, para então se obter o entendimento de como ele poderá
ser resolvido. Essa pesquisa buscará estudar o funcionamento dos
sistemas de recomendação musicais, por meio dos resultados apresentados
nessa pesquisa, fazendo com que ela tenha como objetivo um estudo
exploratório.

Serão utilizados 4 tipos de procedimentos técnicos nessa pesquisa.
Pesquisa bibliográfica, dado que será necessária uma base de
conhecimentos e estudos sobre os *RecSys*, suas técnicas e algoritmos.
Como será utilizada a *API* de algum serviço de *streaming* musical para
consultar as faixas e outras utilidades, utilizaremos o procedimento
técnico pesquisa documental.

Com o estudo realizado e os registros de contextos definidos, será
utilizado da pesquisa experimental, para avaliar a base disponível
através da aplicação liberada aos usuários. Será realizada uma pesquisa
de avaliação do usuário ouvinte para estudarmos o seu entendimento em
relação ao que foi recomendado. Nesse caso será utilizado o procedimento
técnico do tipo levantamento. Para realizar ambos procedimentos, será
necessário realizar um estudo de técnicas para avaliar os resultados de
um RecSys.

Tendo as técnicas de avaliação a serem utilizadas definidas, elas serão
desenvolvidas no sistema, permitindo que os usuários consigam contribuir
com sua recomendação através de suas avaliações. Essa pesquisa,
apresentará no final os resultados estatísticos obtidos pelas
recomendações do sistema e suas avaliações, apresentando, por exemplo, a
quantidade de acertos e erros (a partir da perspectiva do usuário)
obtidos nas recomendações, fazendo com que, essa pesquisa tenha uma
abordagem do tipo quantitativa.

Ao final, esse trabalho procura responder a seguinte questão: Com base
nas músicas conhecidas pelo usuário, é possível aperfeiçoar as
recomendações de um sistema, aplicando os conhecimentos de RecSys e
utilizando dados de contexto comportamental e de ambiente?

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
  Desenvolver tela de avaliação de playlist                                                                        
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
