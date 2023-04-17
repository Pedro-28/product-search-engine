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
2. Execute o comando `npm install` no diretório /server e no /web para instalar as dependências
3. Crie um arquivo `.env` no diretório /server com as seguintes variáveis de ambiente:
  ```sh
    - DATABASE_URL="postgresql://user:password@localhost:3306/db_name"
    - PORT="porta-que-esta_rodando_o_projeto"
    - ORIGIN_URL="url_do_frontend_permitida"
   ```
4. Execute o comando `npm run dev` no diretório /server e no /web para iniciar o servidor e o cliente



