UNIVERSIdade FEEVALE

ÉRico De SOUZA loewe

SISTEMA DE RECOMENDAÇÃO MUSICAL BASEADO EM CONTEXTO COMPORTAMENTAL E DE
AMBIENTE

Novo Hamburgo

2019

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

2019

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

[Figura 2 -- Padrão MVC - separação em camadas 15](#_Toc123031991)

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

[2 Capítulo 2 13](#capítulo-2)

[2.1 Primeiro subtítulo do capítulo 13](#primeiro-subtítulo-do-capítulo)

[2.2 Segundo subtítulo do capítulo 14](#segundo-subtítulo-do-capítulo)

[2.2.1 Subtítulo de nível 3 14](#subtítulo-de-nível-3)

[2.2.2 Outro subtítulo de nível 3 14](#outro-subtítulo-de-nível-3)

[2.3 Terceiro subtítulo do capítulo 16](#terceiro-subtítulo-do-capítulo)

[3 CONCLUSÃO 17](#conclusão)

[Referências Bibliográficas 18](#referências-bibliográficas)

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

Capítulo 2
==========

Texto do capítulo. Criado somente para mostrar que a primeira página do
capítulo não vai o número de página, porém as demais devem ser
numeradas.

É necessário inserir uma quebra de sessão no final de cada capítulo.

Primeiro subtítulo do capítulo
------------------------------

O Brasil vive, há mais de uma década, uma experiência de redesenho de
seu sistema federativo. O sentido da mudança aponta rumo à
descentralização e ao fortalecimento da capacidade decisória das
instâncias subnacionais de governo. Ao nível internacional, têm tido
relevância as propostas freqüentemente associadas ao neoliberalismo,
tais como Estado Mínimo, desregulamentação, abertura econômica,
privatização e descentralização das políticas sociais. Ao mesmo tempo,
constata-se a existência de tentativas de avançar na consolidação das
novas democracias e, neste sentido, ganham espaço as discussões acerca
da cidadania e de qual deva ser a responsabilidade do Estado no
provimento das demandas sociais (RABELO, 1998).

Segundo Rabelo (1998), vários autores têm enfatizado o fato de que a
descentralização no Brasil tem se implantado de maneira
\'descoordenada\' ou \'caótica\'. Para Affonso (1998, p.4), por exemplo,

a descentralização decorreu, basicamente, do processo de
redemocratização desencadeado no bojo do aprofundamento da crise
econômica. O governo federal \[\...\] se opôs a ela o quanto pode e não
produziu um plano nacional para a descentralização, o que resultou num
processo inconcluso e eivado de conflitos.

A demanda democrática aparece como quarto fator a introduzir o
aparecimento do tema descentralização no centro das discussões políticas
(NOHLEN, 1987). A partir dos anos 80, junto com o processo de
redemocratização, aumentou a participação popular, crescendo também a
capacidade organização da sociedade e as formas de pressão por mais
participação. Essa demanda democrática abriu caminho para a defesa da
descentralização, para o aprofundamento da participação e da democracia
que, em conseqüência disso, se acentuaria. Sob esse aspecto, o "espaço
local, o poder local está no centro do conjunto de transformações que
envolvem a descentralização, a desburocratização e a participação"
(DOWBOR, 1994, p.75).

Segundo subtítulo do capítulo
-----------------------------

Exemplo de figura/gráfico no trabalho

[]{#_Toc515473980 .anchor}Figura 1 -- Estrutura de desenvolvimento em
duas camadas

![](./tcc-i/pandoc/media/image1.png)

Fonte:
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\....

Segundo o livro do Prof. Prodanov (2003, p.37), a identificação de
figuras e gráficos aparece na parte inferior, precedida da palavra
figura/gráfico, seguida de seu número de ordem de ocorrência no texto em
algarismos arábicos, assim como de título e/ou legenda explicativa e da
fonte, se necessário. As figuras e os gráficos ficam centralizados na
folha.

### Subtítulo de nível 3

texto

### Outro subtítulo de nível 3

Texto

#### Título 4

Texto

#### Título 4

Outro exemplo de figura\...

[]{#_Toc123031991 .anchor}Figura 2 -- Padrão MVC - separação em camadas

![](./tcc-i/pandoc/media/image2.png)

Fonte: ......................................

Exemplo de Tabela no Trabalho

[]{#_Toc515474000 .anchor}Tabela 1 -- Matrícula dos alunos do Centro de
Educação da FURG segundo o município.

+-----------------------+-----------+-----------------+---+
| Município             | Curso     | Total           |   |
+=======================+===========+=================+===+
|                       | Pedagogia | Educação Física |   |
+-----------------------+-----------+-----------------+---+
| Blumenau 230 130 360  |           |                 |   |
|                       |           |                 |   |
| Timbó 40 20 60        |           |                 |   |
|                       |           |                 |   |
| Indaial 30 10 40      |           |                 |   |
|                       |           |                 |   |
| Gaspar 20 10 30       |           |                 |   |
|                       |           |                 |   |
| Brusque 20 20 40      |           |                 |   |
|                       |           |                 |   |
| Outros 50 70 120      |           |                 |   |
+-----------------------+-----------+-----------------+---+
| **Total** 390 260 650 |           |                 |   |
+-----------------------+-----------+-----------------+---+

Fonte: Divisão acadêmica/ FURG. 1986.

De acordo com o que está exposto no livro do prof. Prodanov (2003,
p.37), as tabelas e quadros têm numeração independente e consecutiva. O
título é colocado na parte superior, precedido da palavra Tabela/Quadro
e de seu número de ordem em algarismos arábicos (alinhamento
justificado). Nas tabelas utilizam-se fios horizontais e verticais para
separar os títulos das colunas no cabeçalho e fechá-las na parte
inferior, evitando-se fios verticais para separar as colunas e fios
horizontais para separar as linhas. Já os quadros são fechados, com fios
para separar linhas e colunas.

Terceiro subtítulo do capítulo
------------------------------

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

ALMEIDA, Célia. Médicos e assistência médica: Estado, mercado ou
regulação? Uma falsa questão. **Cadernos de Saúde Pública,** Rio de
Janeiro, v.13, n. 4, p.45 -57, out./dez., 1997a.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_. Crise Econômica, Crise do Welfare State
e Reforma Sanitária. In.: GERSCHMAN, S. & WERNECK VIANNA, M. L. (orgs.).
**A miragem da pós-modernidade:** democracia e políticas sociais no
contexto da globalização. Rio de Janeiro: Fiocruz, 1997b. p.78 -- 97.

ALMEIDA, Maria Hermínia Tavares de. Federalismo e Políticas Sociais.
**Projeto Balanço e Perspectivas do Federalismo Fiscal no Brasil,** São
Paulo, FUNDAP, vol.6, n.1, p.22-27, jan., 1994.

AZEVEDO, Sérgio de. **Federalismo e Reforma do Estado:** resultados
preliminares de pesquisa. Disponível em:
\<<http://www.fundaj.gov.br/docs/eg/semi1.rtf>\>. Acesso em: 21 outubro
2000.

CONSTRUÇÃO do cérebro. **Veja**, São Paulo: v.29, n.12, p.84-89,
mar.1996.

COSTA, Cristina. **Sociologia:** Introdução à ciência da sociedade. 2
ed. São Paulo: Moderna, 2000. 257p.

GIANNOTTI, José. Em defesa da Universidade. **Folha de São Paulo**, São
Paulo, p.3, 13 jun. 2005.

MICROSOFT CORPORATION. Microsoft lança Windows Terminal Server. 1998.
Disponível em: \<<http://www...........................>\>. Acesso em:
25 mai. 2006.

PRODANOV, Cleber. **Manual de Metodologia Científica.** 3ª ed. Novo
Hamburgo: FEEVALE, 2003. 79p.
