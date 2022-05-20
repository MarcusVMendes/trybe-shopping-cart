# Boas vindas ao repositório do projeto shopping cart!


Este projeto foi desenvolvido por [MarcusVMendes](http://www.linkedin.com/in/marcusvmendes-dev) enquanto estudante de Desenvolvimento Web Full Stack na [Trybe](https://www.linkedin.com/school/betrybe/) no periodo 2021/2022, como requisito parcial para aprovação de módulo.  #vqv 🚀

A proposta do projeto é desenvolver uma carrinho de compras utilzando HTML, CSS e JavaScript Assincrono utilizando a APi do Mercado Livre para tal.


# Habilidades

- Fazer requisições a uma API *(Application Programming Interface)* do Mercado Livre;
- Utilizar os seus conhecimentos sobre JavaScript, CSS e HTML;
- Trabalhar com funções assíncronas.<br><br>


# Instalação do projeto localmente

Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _marcus.mendes89@gmail.com_.
<br>
<br>

<div style="text-align: left">1. Abra o terminal e crie um diretório no local de sua preferência com o comando <b>mkdir</b>:</div><br>

```javascript
mkdir projetos
```
<br>
<div style="text-align: left">2. Entre no diretório que acabou de criar e depois clone o projeto:<div><br>


```javascript
cd projetos
git clone git@github.com:MarcusVMendes/trybe-shopping-cart.git
```
<br>
<div style="text-align: left">3. Acesse o diretório do projeto e depois utilize o comando <b>npm install</b> para instalar todas as dependências necessárias:<div><br>

```javascript
cd trybe-shopping-cart
npm install
```
<br>
    4. Recomenda-se o uso da extensão <b>Live Server</b> para executar o projeto no browser. 
<br><br>


# Sumário


- [Requisitos do Projeto](#requisitos-do-projeto)

    `Requisitos obrigatórios:`
     - [1. Crie uma listagem de produtos](#1-crie-uma-listagem-de-produtos)
     - [2. Adicione o produto ao carrinho de compras](#2-adicione-o-produto-ao-carrinho-de-compras)
     - [3. Remova o item do carrinho de compras ao clicar nele](#3-remova-o-item-do-carrinho-de-compras-ao-clicar-nele)
     - [4. Carregue o carrinho de compras através do **LocalStorage** ao iniciar a página](#4-carregue-o-carrinho-de-compras-através-do-LocalStorage-ao-iniciar-a-página)
     - [5. Some o valor total dos itens do carrinho de compras](#5-some-o-valor-total-dos-itens-do-carrinho-de-compras)
     - [6. Crie um botão para limpar carrinho de compras](#6-crie-um-botão-para-limpar-carrinho-de-compras)
     - [7. Adicione um texto de "loading" durante uma requisição à API](#7-adicione-um-texto-de-loading-durante-uma-requisição-à-api)