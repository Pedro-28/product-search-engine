# Web Scraper de Produtos

Este é um projeto Full Stack desenvolvido com as seguintes tecnologias:

- Frontend:
  - Vite
  - TypeScript
  - Axios
  - Tailwind CSS

- Backend:
  - Fastify
  - TypeScript
  - Prisma
  - Puppeteer
  - Dotenv

O objetivo desse projeto é realizar scraping de produtos nos sites do Mercado Livre e Buscapé e disponibilizar essas informações através de uma API REST.

## Requisitos

- Node.js 16 ou superior
- Yarn (ou npm)

## Como Executar o Projeto

1. Clone o repositório em sua máquina local
2. Execute o comando `cd server && npm install` na raiz do projeto para instalar as dependências do backend
2. Execute o comando `cd web && npm install` na raiz do projeto para instalar as dependências do frontend
4. Crie um arquivo `.env` no diretório /server com as seguintes variáveis de ambiente:
   ```sh
    DATABASE_URL="postgresql://db_user:db_password@db_host:db_port/db_name"
    PORT="porta-que-esta_rodando_o_projeto"
    ORIGIN_URL="url_do_frontend_permitida"
   ```
5. Execute o comando `cd server && npm run dev` na raiz do projeto para instalar as dependências do backend
5. Execute o comando `cd web && npm run dev` na raiz do projeto para instalar as dependências do frontend

## Subindo o banco de dados

Caso deseje, você pode usar o arquivo `docker-compose.yml` na pasta backend para subir um banco de dados PostgreSQL. Para isso, é necessário ter o Docker e o Docker Compose instalados em sua máquina. Caso já possua, basta executar o seguinte comando para subir um banco de dados:

   ```sh
      cd server && docker-compose up -d
   ```
 ## Rotas do Backend
 ### Rotas de produtos
 <details>
   <summary><strong>GET /product/:productName/mercadolivre</strong> - obtém produtos através do nome do produto no mercado livre</summary><br/>
      
   Corpo da requisição:
   
   ```bash
      Não possui corpo da requisição, apenas o nome do produto na url.
   ```
   
   Resposta:

   ```bash
   {
      "products": [
         {
            "id": "id_da_produto",
            "description": "descricao_do_produto",
            "category": "categoria_do_produto",
            "price": "preco_do_produto",
            "imageLink": "url_da_imagem_do_produto",
            "website": "nome_do_site_onde_foi_raspado_o_produto",
            "websiteLink": "url_da_pagina_do_produto",
         },
         ...
      ]
   }
   ```
</details>

<details>
   <summary><strong>GET /product/:productName/buscape</strong> - obtém produtos através do nome do produto no buscape</summary><br/>
      
   Corpo da requisição:
   
   ```bash
      Não possui corpo da requisição, apenas o nome do produto na url.
   ```
   
   Resposta:

   ```bash
   {
      "products": [
         {
            "id": "id_da_produto",
            "description": "descricao_do_produto",
            "category": "categoria_do_produto",
            "price": "preco_do_produto",
            "imageLink": "url_da_imagem_do_produto",
            "website": "nome_do_site_onde_foi_raspado_o_produto",
            "websiteLink": "url_da_pagina_do_produto",
         },
         ...
      ]
   }
   ```
</details>

### Rotas de categorias

<details>
   <summary><strong>GET /category/:categoryName/mercadolivre</strong> - obtém produtos através do nome da categoria no mercado livre</summary><br/>
      
   Corpo da requisição:
   
   ```bash
      Não possui corpo da requisição, apenas o nome da categoria na url.
   ```
   
   Resposta:

   ```bash
   {
      "products": [
         {
            "id": "id_da_produto",
            "description": "descricao_do_produto",
            "category": "categoria_do_produto",
            "price": "preco_do_produto",
            "imageLink": "url_da_imagem_do_produto",
            "website": "nome_do_site_onde_foi_raspado_o_produto",
            "websiteLink": "url_da_pagina_do_produto",
         },
         ...
      ]
   }
   ```
</details>

<details>
   <summary><strong>GET /category/:categoryName/buscape</strong> - obtém produtos através do nome da categoria no buscape</summary><br/>
      
   Corpo da requisição:
   
   ```bash
      Não possui corpo da requisição, apenas o nome da categoria na url.
   ```
   
   Resposta:

   ```bash
   {
      "products": [
         {
            "id": "id_da_produto",
            "description": "descricao_do_produto",
            "category": "categoria_do_produto",
            "price": "preco_do_produto",
            "imageLink": "url_da_imagem_do_produto",
            "website": "nome_do_site_onde_foi_raspado_o_produto",
            "websiteLink": "url_da_pagina_do_produto",
         },
         ...
      ]
   }
   ```
</details>
