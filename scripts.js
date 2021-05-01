const form = document.querySelector('form');
const max = document.getElementById('max');
const stock = document.getElementById('stock');
const search = document.getElementById('search');
const ul = form.appendChild(document.createElement('ul'));

const catalog = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

function renderList(itemList) {
  ul.innerHTML = itemList
    .map(
      ({ price, name }) =>
        `<li>
  <label">${name} - ${price}</label>
  </li>`,
    )
    .join('');
}

renderList(catalog);

max.addEventListener('keyup', event => {
  event.preventDefault();

  const result = catalog.filter(
    ({ price }) => price.slice(1) <= parseFloat(max.value),
  );
  renderList(result);
});

stock.addEventListener('change', event => {
  event.preventDefault();

  if (stock.checked) {
    const result = catalog.filter(({ stocked }) => stocked === true);

    renderList(result);
  } else {
    renderList(catalog);
  }
});

search.addEventListener('keyup', event => {
  event.preventDefault();
  const result = catalog.filter(({ name }) =>
    name.toLowerCase().includes(search.value.toLowerCase()),
  );

  renderList(result);
});
