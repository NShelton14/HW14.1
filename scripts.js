const form = document.querySelector('form');
const max = document.getElementById('max');
const ul = document.body.appendChild(document.createElement('ul'));

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

form.addEventListener('keyup', event => {
  event.preventDefault();

  const result = catalog.filter(
    ({ price }) => price.slice(1) <= parseInt(max.value, 10),
  );
  renderList(result);
});
