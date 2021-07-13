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
// Função que cria cada section de itens
function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

const appendChildSection = () => {
  const section = document.querySelector('.items');
  console.log(section);
};
appendChildSection();

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

// function cartItemClickListener(event) {
//   // coloque seu código aqui
// }

// Funçao de adicionar ao carrinho
// function createCartItemElement({ sku, name, salePrice }) {
//   const li = document.createElement('li');
//   li.className = 'cart__item';
//   li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
//   li.addEventListener('click', cartItemClickListener);
//   return li;
// }

// Requisito 1 - Fazendo a requisição da API

const objectProduct = (object) => {
  const sectionContainer = document.querySelector('.items');
  object.results.forEach((product) => {
    const newObject = {
      sku: product.id,
      name: product.title,
      image: product.thumbnail,
      salePrice: product.prices,
    };
    console.log(createProductItemElement(newObject));

    return sectionContainer.appendChild(createProductItemElement(newObject));
  });
};

const fetchProducts = (product) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  fetch(url)
    .then((response) => response.json())
    .then((object) => {
      objectProduct(object);
    });
};

window.onload = () => { 
  fetchProducts('computador');
};
