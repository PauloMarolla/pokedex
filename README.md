## Inicialização do projeto

1.  Clonar o projeto do Github
2.  Acessar o diretório via terminal
3.  Executar o comando **yarn** ou **npm i**
4.  Executar o comando **yarn start** ou **npm start**

**Rotas da aplicação**

- **/**
- **/pokemon/id** (id ou nome)

## Arquitetura do código

Sempre que possível, não exportar o componente como default, e utilizar a desestruturação no import dos arquivos.
Utilização do Eslint e Prettier no padrão do create-react-app.

**/Components**

- Todos os componentes gerais da aplicação, uma pasta com o nome do componente, contendo sempre 2 arquivos, index.tsx e styles.ts
- **Index.tsx** sempre contendo as funcionalidades, tipagens e HTML do componente.

**/Hooks**

- Sempre alocar os próprios Hooks e contextos criados na aplicação nesta pasta, utilizando o profixo **use** para os nomes dos arquivos.
- Nestes arquivos, separar as funcionalidades envolvidas entre páginas que vão utilizar as mesmas informações, e / ou chamadas diretamente envolvidas com a Api da aplicação. assim deixando os componentes com menos informações, e separando o máximo a lógica dos componentes.

**/Pages**

- Na pasta pages, sempre utilizar os componentes que serão páginas completas para o usuário final (rotas), como /home, /user...
- Criar nomes de arquivos condizentes com o componente exportado dentro, nestes arquivos, podendo conter funcionalidades independentes, e todo o template HTML.

**/services**

- Normalemnte utilizado para serciços externos, como a instancia Axios com a baseUrl da Api, ou então, instancias de CMS...

**Routes**

- Arquivo com as rotas do projeto.
- Caso houver contextos gerais, envolver os **Providers** de maneira global, ou entre grupo de rotas específicas.

**App**

- Utilizar o arquivo Routes, e caso houver componentes gerais entre todas as aplicações já utilizar neste arquivo como: Modal, Pop-ups, Caixa de avisos e afins...

## Design system

**Figma**
[Design](https://www.figma.com/file/aFA3EvxzYjyoI3pwDvPff8/Desafio-LooqBox?node-id=0:1)
Rascunho do Design que criei no Figma, algumas correções foram feitas direto no código.

## Bibliotecas utilizadas

1.  react-router-dom
2.  react-toastify
3.  node-sass
4.  react-icons
5.  axios

**Demais recursos**

7.  Eslint
8.  Prettier
9.  Typescript
10. Yarn
