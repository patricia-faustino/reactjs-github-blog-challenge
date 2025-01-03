# ReactJS GitHub Blog Challenge

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Styled Components
- React Router
- Context API
- Axios
- date-fns
- react-markdown

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/patricia-faustino/reactjs-github-blog-challenge.git
   ```

2. Navegue até o diretório do projeto:
    ```sh
    cd reactjs-github-blog-challenge
    ```

3. Instale as dependências:
    ```sh
    npm install
    ```

4. Inicie o servidor de desenvolvimento:
    ```sh
    npm run dev
    ```

## Estrutura do Projeto: 

    reactjs-github-blog-challenge/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── contexts/
    │   ├── pages/
    │   ├── styles/
    │   ├── App.tsx
    │   ├── main.tsx
    │   ├── Router.tsx
    │   └── vite-env.d.ts
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    └── README.md

## Funcionalidades
- Listagem de Issues:
   A aplicação lista as issues disponíveis no repositório do GitHub. Cada issue possui um título, descrição, data de criação e um link para a issue no GitHub.

- Buscar Issues:
   O usuário pode buscar issues por palavras-chave. A busca é realizada na API do GitHub e os resultados são exibidos na aplicação.

- Exibir Detalhes da Issue:
   Ao clicar em uma issue, o usuário é redirecionado para uma página de detalhes onde pode ver a descrição completa da issue.

- Navegação:
   A aplicação utiliza o React Router para navegação entre as páginas de listagem de issues e detalhes da issue.

## Conceitos Utilizados

- Estados
- Context API
- React Router
- Axios para requisições HTTP
- date-fns para manipulação de datas
- react-markdown para renderização de Markdown
- Styled Components para estilização
- Imutabilidade do estado
- Listas e chaves no ReactJS
- Propriedades
- Componentização
  
Feito com ♥ por Patricia Faustino durante o Ignite da Rocketseat.
