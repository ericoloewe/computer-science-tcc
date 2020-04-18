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

Este modelo de documento foi criado seguindo as especificações do Manual
de Metodologia Científica do professor Cleber Prodanov. Para isto foram
criados vários estilos, com a formatação apropriada para cada situação.
No texto são utilizados exemplos para cada um dos estilos. O sumário o
Word cria automaticamente e mantém atualizado com o clic direito do
mouse sobre ele e em seguida Atualizar Campo no menu suspenso que
aparece.

**Até 1993, o sistema de saúde brasileiro compreendia dois sub-sistemas:
o sub-sistema público de saúde e o sub-sistema da previdência social
(BRAGA, 1981). O sub-sistema de saúde pública era responsável pelas
medidas de caráter preventivo e pela elaboração da política nacional de
saúde. Já o sub-sistema de saúde previdenciária era responsável pela
atenção médica curativa (rede hospitalar e ambulatorial) à população
urbana segurada.**

O sub-sistema de saúde previdenciária até 1930 era principalmente
organizado através das Caixas de Aposentadorias e Pensões (CAPs). Depois
de 1930 ele se estruturava em torno dos Institutos de Aposentadorias e
Pensões (IAPs), que em 1967 são unificados através da formação do
Instituto Nacional de Previdência Social (INPS). Já o sub-sistema de
saúde pública organizava-se através das Secretarias ou Departamentos
Municipais e Estaduais de Saúde e do Ministério da Saúde, criado em 1953
(BRAGA, 1981).

\...\...\...\...\...\...\...\...\...\....

**Este trabalho está dividido em cinco capítulos. No primeiro capítulo é
abordada a discussão da literatura sobre a temática da descentralização.
No capítulo dois é realizado um histórico das principais políticas de
saúde no Brasil, enfocando principalmente o binômio
centralização/descentralização, ao longo dos diferentes períodos. No
terceiro capítulo é apresentada a legislação do SUS. No capítulo
seguinte é feita uma caracterização sócio-econômica do município de
Porto Alegre, para em seguida descrever o processo de municipalização
dos serviços e ações de saúde. No quinto e último capítulo, são
desenvolvidas algumas considerações acerca da descentralização da saúde
e seu principal ator, que neste caso, é a SMS**[^1] **de Porto Alegre.**

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

[^1]: Exemplo de nota de rodapé
