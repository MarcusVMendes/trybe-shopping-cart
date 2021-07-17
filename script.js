function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
  console.log(event);  
}

// Funçao de adicionar ao carrinho
function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// Requisito 2 - Adicionar itens ao carrinho.

const fetchProductsByID = async (event) => {
  const id = event.target.parentElement.firstChild.innerText;
  const url = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(url);
  const object = await response.json();
  const cart = document.querySelector('.cart__items');
  
  return cart.appendChild(createCartItemElement(object));
};

// Função que cria cada section de itens
function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
    .addEventListener('click', fetchProductsByID);
  return section;
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

// Requisito 1 - Fazendo a requisição da API e criando as Seções
const objectProduct = (object) => {
  const sectionItems = document.querySelector('.items');
  object.results.forEach((product) => {
    const newObject = {
      sku: product.id,
      name: product.title,
      image: product.thumbnail,
      salePrice: product.prices,
    };
    return sectionItems.appendChild(createProductItemElement(newObject));
  });
};

const fetchProducts = async (product) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const response = await fetch(url);
  const object = await response.json();
  objectProduct(object);
};
//

window.onload = () => { 
  fetchProducts('computador');
};
