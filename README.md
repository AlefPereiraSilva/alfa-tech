# Landing Page

Landing Page responsiva e utilizando Web Components.

## Funcionalidades Obrigatórias Atendidas

-**Estrutura Git:**Histórico organizado com as branches `main` e `develop`. -**Cabeçalho & Slogan:** Componentes dedicados a criar uma identidade visual. -**Formulário de Contato:** Validação e comportamento dinâmico. -**Integração com API:** Busca automática de endereço consumindo a API ViaCep.

## Estrutura de Pastas do Projeto

O projeto está organizado por pastas:

- `assets/` — Ícones e imagens do projeto.
- `css/` — Estilização separada por escopo (base, layout) unificados no `main.css`.
- `js/`
  - `components/` — Web Components reutilizáveis (`site-header`, `site-home`, `site-contato`, `site-footer`).
  - `services/` — Lógica de requisição assíncrona (`buscarCep.js`) e manipulação do formulário (`consultaCep_form.js`).
- `pages/` — Onde se encontra o arquivo principal `index.html`.

## Tecnologias Utilizadas

- HTML5 Semântico
- CSS3 (Variáveis nativas e layout responsivo)
- JavaScript Vanilla (ES6+, Modules, Custom Elements e Async/Await)
