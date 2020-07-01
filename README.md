<div>

<h1>Aplicação criada no mega hack 3.0</h1> 

![Livro](./assets/livro.svg)

## Visão geral

<p>
  O projeto consiste em criar uma forma mais interativa de divulgar a leitura
  adaptando-se aos padrões da nossa época para chamar a atênção das pessoas
  da geração atual.
</p>

## Links de tecnologias bibliotecas e frameworks:

### **_Frontend_**

- [Html](https://developer.mozilla.org/en-US/docs/Web/HTML)

- [Css](https://www.hostinger.com.br/tutoriais/o-que-e-css-guia-basico-de-css/)

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### **_Backend_**

- [NodeJS](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [Knex](http://knexjs.org/)

- [Nodemon](https://www.npmjs.com/package/nodemon)

- [Docker](https://www.docker.com/)

- [Postgres](https://www.postgresql.org/)

- [NVM](https://www.hostinger.com.br/tutoriais/instalar-node-js-ubuntu/)

## Começar

### Em debian e derivados

### backend

#### Instalar o nodejs usando NVM

      1 - sudo apt install wget
      
      2 - wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
      
      3 - source ~/.profile
      
      4 - nvm ls-remote
      
      5 - nvm install v12.17.O

#### Instalar o docker

      1 - sudo apt install apt-transport-https  ca-certificates curl gnupg2 software-properties-common

      2 - curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
      
      1 - sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian/ $(lsb_release -cs) stable"
      
      4 - sudo apt update
      
      5 - sudo apt install docker-ce docker-ce-cli containerd.io
      
      6 - Em seguida, verifique se o serviço Docker foi iniciado corretamente com este comando
      
      7 - sudo systemctl start docker
      
      8 - E se você quiser que o Docker inicie na inicialização, execute o comando abaixo
      
      9 - sudo sytemctl enable docker
      
      10 - Em seguida, verifique o status do serviço
      
      11 - sudo systemctl status docker

#### Executar o backend  

      1 - Clone o repositório

      2 - Abra a pasta backend
      
      3 - Execute yarn ou npm run para baixar as dependências 
      
      4 - npm run dev ou yarn dev

#### Executar o frontend

      1 - Depois de ter clonado o repostório entre em frontend 
      
      2 - Execute o index.html no seu navegador
  