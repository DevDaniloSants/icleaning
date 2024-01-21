# ICleaning

<p align="center">
  <img src="https://i.ibb.co/PwjF9mC/Captura-de-tela-2024-01-13-151716.png" alt="ICleaning">
</p>

> Projeto de uma empresa que realiza limpeza em residências enfrentava desafios no gerenciamentos de seus clientes e buscava uma solução eficiente para cadastrar e visualizar as informações.Este site consegue gerar no seu backend a rota mais rápida e eficiente para executar os serviços da empresa, além de ser possível filtrar dados.

## 💼 Tecnologias utilizadas

Para o desenvolvimento deste projeto utilizei as seguintes tecnologias:

- React
- JavaScript
- CSS Module
- PostgreSQL
- NodeJs

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- NODEJS 21.6.0
- PostgreSQL

## 🚀 Instalando ICleaning

Para instalar o ICleaning, siga estas etapas:

1. Clone o repositório.
2. Entre dentro da pasta backend, e no terminal execute o comando abaixo. Após isso verifique se todas as dependências foram instaladas corretamente.

```
npm install
```

4. É necessário criar um arquivo .env na raiz da pasta backend com as seguintes informações:

```
PORT =
DB_HOST =
DB_NAME =
DB_USER =
DB_PASSWORD =
DB_PORT =
```

4. Rodando o backend, após verificar que tudo está instalado.Verifique se todas as dependências foram instaladas corretamente

4.1 Para rodar em desenvolvimento

```
npm run dev
```

4.2 Para rodar em produção

```
npm start
```

6. Entre dentro da pasta frontend, e no terminal execute o comando abaixo. Após isso verifique se todas as dependências foram instaladas corretamente.

```
npm install
```

OBS:  A tabela de bando de dados é gerada automaticamente.
 
```
CREATE TABLE IF NOT EXISTS customer (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50),
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(16) NOT NULL,
    lat_x FLOAT8 NOT NULL,
    long_y FLOAT8 NOT NULL
);

```

## :child: Author

<table>
  <tr>
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/152008168?s=400&u=710379e70ac9c4490d3044ffd12a47092b993f76&v=4" width="100px;" alt="Foto de Danilo Santos no GitHub"/><br>
        <sub>
          <b>Danilo Santos</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
