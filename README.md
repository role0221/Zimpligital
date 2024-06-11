# Zimpligital

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Stack

```bash
Language: Typescript
Framework: Nest.js 
DataBase: Postgresql
API-Documentation: Swagger  # use Swagger for testing api or you can use postman
``` 

## Installation

```bash
$ yarn install
```

## Create FileName -> .env.development

```bash
# Set Env.
APP_PORT=3800
APP_TITLE="Zimpligital"
NODE_ENV=development

DB_PORT=5432
DB_HOST=localhost
DB_USER=postgres
DB_PASS=123456789
DB_NAME=postgres
```

## Run Docker DB

```bash

docker run --name my_postgres -e POSTGRES_PASSWORD=123456789 -p 5432:5432 -d postgres

```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).