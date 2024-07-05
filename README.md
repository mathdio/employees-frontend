# Página front-end de funcionários

## 💻 Sobre o projeto
Esse projeto é uma aplicação de página web que simula o consumo de uma API/banco de dados com as informações referentes aos funcionários de uma empresa.

## 🛠️ Tecnologias usadas

<a href="https://www.docker.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" /></a>
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" /></a>
<a href="https://reactrouter.com/en/main" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" /></a>

## Pré-requisitos
### Liberando portas de acesso da aplicação:
Para rodar a aplicação sem problemas, as portas 3000 e 5173 devem estar livres para serem usadas.

### 🐋 Instalação do Docker e Docker Compose:
É necessário instalar o Docker e o Docker Compose, pois a aplicação é executada em containers Docker. A versão do Docker utilizada nesse projeto foi a 27.0.3. [Aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04) é possível achar um guia de instalação do Docker. Já a versão do Docker Compose usada foi 2.5.0 e [aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) e na [documentação](https://docs.docker.com/compose/install/) há guias para instalação.


## 🏁 Executando o projeto
### Clonando o repositório do projeto:
O repositório pode ser clonado seguindo a [documentação](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) do GitHub.

### Criando e executando o container da aplicação:
Abra um terminal na raiz do respositório e execute o comando:
```
docker-compose up -d
```
Após a criação do container, ele deve estar em execução servindo como servidor do banco de dados simulado. Para se certificar que está funcionando, pode-se verificar no browser a url `http://localhost:3000/employees`. Ela deve estar retornando um arquivo json composto por um array de objetos no seguinte formato:
```
{
  "id": "1",
  "name": "João",
  "job": "Back-end",
  "admission_date": "2019-12-02T00:00:00.000Z",
  "phone": "5551234567890",
  "image": "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
}
```
### Executando o front-end:
Abra um terminal e execute o seguinte comando:
```
docker exec -it frontend-container npm run dev
```
O container deve entrar em execução no modo interativo e se ocorrer corretamente retornará a seguinte mensagem:
```
> employees-frontend@0.0.0 dev
> vite

Re-optimizing dependencies because vite config has changed

  VITE v5.3.2  ready in 191 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://172.25.0.2:5173/
  ➜  press h + enter to show help
```
Aqui a aplicação estará pronta para uso no browser, bastando acessar a url `http://localhost:5173`.

