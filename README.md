# Timeline Contratos

## Sobre
Tendo em vista o propósito do projeto KnEDLe uma nova ferramenta será desenvolvida para agregar ainda mais, trata-se de uma visualização de uma linha do tempo de um processo licitatório para auxiliar na auditoria de processos.

## Instalação 
**Linguagens**: Python, utilizando o microframework Flask e React<br>
**Tecnologias**: Docker, docker-compose<br>

### Instalação do Docker e do Docker-compose
Para instalar o docker e o docker-compose, tanto para Linux quanto para MacOS, basta seguir a documentação do [Docker](https://docs.docker.com/).
* Como instalar [Docker Engine](https://docs.docker.com/engine/install/)
* Como instalar [Docker Desktop para Mac](https://docs.docker.com/docker-for-mac/install/)
* Como instalar [Docker Engine para Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
* Como instalar [Docker-Compose](https://docs.docker.com/compose/install/)

Após instalar o docker e o docker-compose, basta entrar na pasta geral do projeto
```
$cd timeline-contratos
```
E executar o comando
```
$docker-compose up --build
```
> Às vezes pode ser necessário executar o comando como administrador, adicionando a palavra ```sudo``` antes dele
Após a finalização da build, a API estará rodando e pode ser testada através da rota
```
http://localhost:3000/
