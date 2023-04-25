# SpotSat API

Esta é uma API REST para a plataforma de Georreferenciamento SpotSat, desenvolvida com Node.js, framework Express.js e TypeScript, utilizando uma arquitetura em camadas. A API permite que o usuário crie uma conta, faça login e visualize e manipule seus polígonos com os métodos CRUD básicos.

## Índice

- Instalação
- Como usar
- Documentação
- Ferramentas utilizadas
- Licença

## Instalação

Para instalar a API, clone esse repositório e importe o projeto no seu editor de texto de preferência (IDE). Certifique-se de ter o Node.js instalado em sua máquina. Rode o comando "npm i" para instalar as dependências.

## Como usar

Você pode testar as rotas da API através de alguma ferramenta como Thunderclient ou Postman. A URL padrão da API é a http://localhost:4000

## Documentação

### Rota Usuário (/users)

| Método | Rota    | Descrição              |
| ------ | ------- | ---------------------- |
| POST   | /create | Cria um novo usuário   |
| POST   | /login  | Faz o login do usuário |

### Rota Polígonos (/shapes)

| Método | Rota | Descrição                               |
| ------ | ---- | --------------------------------------- |
| POST   | /    | Cria um novo polígono                   |
| GET    | /    | Busca todos os polígonos do usuário     |
| GET    | /:id | Busca um polígono específico do usuário |
| PUT    | /:id | Edita um polígono                       |
| DELETE | /:id | Deleta um polígono                      |

## Ferramentas Utilizadas

- Node.js
- TypeScript
- Express.js
- PostgreSQL
- Prisma ORM
- Bcrypt
- Jest
- Docker

## License

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
