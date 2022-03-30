<img src="https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge&logo=appveyor&color=%3Cblue%3E"> <img src="https://img.shields.io/github/issues/UnB-KnEDLe/timeline-contratos?style=for-the-badge&logo=appveyor&color=%3Cblue%3E"> <img src="https://img.shields.io/github/issues-closed/UnB-KnEDLe/timeline-contratos?color=blue&style=for-the-badge"> <img src="https://img.shields.io/github/stars/UnB-KnEDLe/timeline-contratos?style=for-the-badge&logo=appveyor&color=%3Cblue%3E"> <img src="https://img.shields.io/github/forks/UnB-KnEDLe/timeline-contratos?style=for-the-badge&logo=appveyor&color=%3Cblue%3E">
</br>
</br>
<p align="center"><img src="https://user-images.githubusercontent.com/48137972/157878107-81c8898d-8bd8-4838-a788-28dab929dbaa.png"></p>

## Sobre
<p align="justify">Tendo em vista o propósito do projeto KnEDLe uma nova ferramenta será desenvolvida para agregar ainda mais, trata-se de uma visualização de uma linha do tempo de um processo licitatório para auxiliar na auditoria de processos.</p>

## Instalação 
**Linguagens**: Python, utilizando o microframework Flask e React.js<br>
**Tecnologias**: Docker, docker-compose<br>

### Instalação do Docker e do Docker-compose
Para instalar o docker e o docker-compose, tanto para Linux quanto para MacOS, basta seguir a documentação do [Docker](https://docs.docker.com/).
* Como instalar [Docker Engine](https://docs.docker.com/engine/install/)
* Como instalar [Docker Desktop para Mac](https://docs.docker.com/docker-for-mac/install/)
* Como instalar [Docker Engine para Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
* Como instalar [Docker-Compose](https://docs.docker.com/compose/install/)

Após instalar o docker e o docker-compose, basta entrar na pasta geral do projeto
```
$ cd timeline-contratos
```
E executar o comando
```
$ docker-compose up --build
```
> Às vezes pode ser necessário executar o comando como administrador, adicionando a palavra ```sudo``` antes dele
Após a finalização da build, a API estará rodando e pode ser testada através da rota
```
http://localhost:3000/timeline
