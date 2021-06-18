<h1 style="text-align: center">Documento de Arquitetura de Software</h1>
<br />
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/timeline-contratos/assets/icons/house.png">
</div>
<br />

## 1. Introdução
<p align="justify">Este documento tem como objetivo principal especificar de forma clara e concisa tópicos referentes ao Documento de Arquitetura que será desenvolvido para a ferramenta de visualização de uma linha do tempo de processos licitatórios.</p>

### 1.1 Finalidade
<p align="justify">O objetivo deste documento é capturar e comunicar as decisões arquiteturais significativas que foram tomadas no decorrer do processo de criação do software responsável por traçar a linha do tempo dos diferentes atos de um mesmo processo licitatório encontrado no Diário Oficial do Distrito Federal.</p>

### 1.2 Escopo
<p align="justify">O projeto “KnEDLe – Knowledge Extraction from Documents of Legal content” é financiado pela FAPDF (Fundação de Apoio à Pesquisa do Distrito Federal) através de uma parceria tripartite com a UnB (Universidade de Brasília) e Finatec (Fundação de Empreendimentos Científicos e Tecnológicos). Este projeto foi proposto com o intuito de empregar publicações oficiais como objeto de pesquisa e efetuar extração de conhecimento. O objetivo é desenvolver ferramentas inteligentes de extração de informação estruturada a partir de tais publicações, visando facilitar a busca e recuperação de informações, aumentando a transparência do governo e facilitando tarefas de auditoria e detecção de problemas relacionados ao emprego de recursos públicos.</p>

<p align="justify">Tendo em vista o propósito do projeto KnEDLe uma nova ferramenta será desenvolvida para agregar ainda mais, trata-se de uma visualização de uma linha do tempo de um processo licitatório para auxiliar na auditoria de processos. Neste documento serão detalhados os padrões arquitetônicos relacionados a essa ferramenta.</p>

### 1.3 Referências

 * <p align="justify">https://github.com/UnBArqDsw/2020.1_G13_iGado</p>

 * <p align="justify">https://unb-knedle.github.io/nido.html</p>

 * <p align="justify">Rocha, B. C. What the Flask? Pt-1 Introdução ao desenvolvimento web com Python. PythonClub. Disponível em: https://goo.gl/SfqDYX. Acesso em: 26 de maio de 2021.</p>

## 2. Representação Arquitetural

### 2.1 Visão Geral
<p align="justify">Esse é um documento informativo sobre a nova ferramenta do projeto KnEDLe, que está organizado no formato de tópicos e subtópicos sequenciais numerados. A ordem desses tópicos começa em 1 e termina em 6, sendo eles: Introdução; Representação Arquitetural; Metas e Restrições da Arquitetura; Visão de Casos de Uso; Visão da Implementação; Tamanho e Desempenho.</p>

### 2.2 Tecnologias
#### 2.2.1 Front End

 * <p align="justify"><strong>ReactJS</strong></p>
 <p align="justify">Por definição, React é uma biblioteca para criar interfaces. Resolve todo aquele amontoado de código com jQuery que tínhamos para manipular o DOM. </p>
 <p align="justify">Como definido por seus criadores, React é “uma biblioteca JavaScript declarativa, eficiente e flexível para a criação de interfaces de usuário (UI)”. Essa biblioteca surgiu em 2011, no Facebook, e passou a ser utilizada na interface do mural de notícias da rede social.</p>

 <p align="justify">Se há uma vantagem clara que o React traz é no modo como ele trabalha com o DOM (Document Object Model) e atualiza os componentes de acordo com seus estados.</p>

 <p align="justify">Em uma aplicação JavaScript tradicional, o programador deve se preocupar em descobrir quais dados mudaram para poder alterar o DOM e os estados dos elementos criados. Isso é muito trabalhoso e pouco eficiente.</p>

 <p align="justify">O que o React propõe é a criação do seu próprio DOM, mais eficiente, no qual os componentes vivem, o que é mais conhecido como Virtual DOM.</p>

 <p align="justify">Assim, toda vez que um componente é renderizado, o React atualiza o Virtual DOM de cada componente já renderizado e busca as mudanças. E como o Virtual DOM é leve, esse processo é muito rápido.</p>

#### 2.2.2 Back End
 * <p align="justify"><strong>Flask</strong></p>
 <p align="justify">Flask é um micro-framework de python, possui toda a flexibilidade da linguagem python e provê um modelo simples para desenvolvimento web.</p>
 <p align="justify">A vantagem do Flask em relação á outros frameworks que tem como base o Python, é a sua simplicidade, por se tratar de um micro-framework.</p>

 #### 2.2.3 Back End

 * <p align="justify"><strong>PostgreSQL</strong></p>
 <p align="justify"> É um sistema gerenciador de banco de dados open-source (código aberto) de objeto relacional que possui uma forte reputação de confiabilidade, robustez e desempenho. Será utilizado para armazenar os dados provenientes da API.</p>

## 3. Metas e Restrições da Arquitetura
### 3.1 Restrições
* <p align="justify">O software deve ser desenvolvido nas tecnologias definidas no tópico 2;
O software deve rodar nos navegadores mais populares entre os usuários, como Mozilla Firefox, Chrome, Safari e Microsoft Edge.</p>

* <p align="justify">O ambiente de desenvolvimento do software deve funcionar tanto em Windows, Linux e MacOS.</p>

* <p align="justify">Para utilizar o software é necessário ter internet.</p>

### 3.2 Metas
* <p align="justify">Usabilidade, no sentido de que o software deve ser de fácil uso, deve ser intuitivo e deve possuir uma alta aprendibilidade.</p>

* <p align="justify">Manutenibilidade, no sentido de que o código deve estar devidamente documentado, para ser tornar fácil sua futura manutenção ou modificação.</p>

## Histórico de Versõess

Data | Versão | Descrição | Autor(es) 
---- | ----------- | ------ | ---------
25/05/2021 | 1.0 | Adicionando tópicos | [@dansousamelo](http://github.com/dansousamelo)|
25/05/2021 | 1.0 | Adicionando tópicos 1 a 2.2.3 | [@dansousamelo](http://github.com/dansousamelo), [@guilherme-mendes](http://github.com/guilherme-mendes), [@Thais-ra](http://github.com/Thais-ra) e [@IanFPFerreira](http://github.com/IanFPFerreira)|