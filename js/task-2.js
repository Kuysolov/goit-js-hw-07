const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridientsRef = document.querySelector('#ingredients')
// console.log(ingridientsRef)

// const elements = []
// for (let i = 0; i < ingredients.length; i += 1) { 
//   // const item = ingredients[i];
//   const liElement = document.createElement('li');
//   liElement.textContent = ingredients[i];
//   elements.push(liElement)
//   }
// console.log(ingridientsRef)

// ingridientsRef.append(...elements)
// --------------------------------------------------------
  
// const elements = ingredients.map(ingredient => { 
//   const liElement = document.createElement('li');
//   liElement.textContent = ingredient;
//   return liElement
// })
  
// ingridientsRef.append(...elements)
// --------------------------------------------------------


// const createIngredientsElements = ingredients => {
// return ingredients.map(ingredient => { 
//   const liElement = document.createElement('li');
//   liElement.textContent = ingredient;
//   return liElement
  
// })
// }
// const elements = createIngredientsElements(ingredients);
// ingridientsRef.append(...elements)
// ---------------------------------------------------------

const createIngredientsElement = ingredient => { 
  const liElement = document.createElement('li');
  liElement.textContent = ingredient;
  return liElement
}
 
const elements = ingredients.map(createIngredientsElement)

ingridientsRef.append(...elements)
