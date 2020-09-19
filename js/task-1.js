const categoriesRef = document.querySelector('#categories');
const quantityСategories = categoriesRef.children.length;

console.log(`В списке ${quantityСategories} категории.`);

const itemRef = document.querySelectorAll('.item');
itemRef.forEach(item => {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
});

// console.log(itemRef);

// Категория: Животные
// Количество элементов: 4

// const categoryItems = document.querySelectorAll('.item');
// categoryItems.forEach(item => {
//   console.log(`Категорія: ${item.querySelector('h2').textContent}`);
//   console.log(`Кількість елементів: ${item.querySelectorAll('li').length}`);
// });

// const itemsEl = document.querySelectorAll('.item');
// Array.from(itemsEl).forEach(element => {
//   const titleEl = element.querySelector('h2').textContent;
//   const itemsLengthEl = element.querySelectorAll('li').length;
//   console.log(`Категория: ${titleEl}\nКоличество элементов: ${itemsLengthEl}`);
// });
