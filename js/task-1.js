const itemsRef = document.querySelectorAll('.item')
console.log(`В списке ${itemsRef.length} категории.`)

// const categoriesList = document.querySelector('#categories').children
// console.log(`В списке ${categoriesList.length} категории.`)

// for (let i = 0; i < itemLiRef.length; i += 1) { 
//   const titleCategories = itemLiRef[i].querySelector('h2').textContent;
//   const amountSubCategories = itemLiRef[i].querySelectorAll('li').length;
// console.log(`Категория: ${titleCategories}\nКоличество элементов: ${amountSubCategories}`)

// }

itemsRef.forEach(item => { 
    const titleCategory = item.querySelector("h2").textContent;
    const amountCategoryElements = item.querySelector("ul").children.length;
console.log(`Категория: ${titleCategory}\nКоличество элементов: ${amountCategoryElements}`)
})
