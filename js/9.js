// const inputNumberRef = document.querySelector('#controls [type="number"]');
// const btnRenderRef = document.querySelector('#controls [data-action="render"]');
// const btnDestroyRef = document.querySelector('#controls [data-action="destroy"]');
// const boxesRef = document.querySelector('#boxes')

// //  const amount = inputNumberRef.value;

// const randomRgbColor = () => { 
// const r = Math.round(Math.random() * (255 - 1) + 1);
// const g = Math.round(Math.random() * (255 - 1) + 1);
// const b = Math.round(Math.random() * (255 - 1) + 1);
//     return `rgb(${r},${g},${b})`
// }

// const PRIMARY_BOX_SIZE = 30;
// const INCREASE_STEP = 10;

// btnRenderRef.addEventListener('click', ()=>createBoxes(+inputNumberRef.value))
// btnDestroyRef.addEventListener('click', destroyBoxes)

// function createBoxes(amount) { 
//     boxesRef.innerHTML = ''
//     const boxes = [...new Array(amount)]
//     const arrayBoxes = boxes.reduce((htmlString, _, i) => {
//    return htmlString + `<div style="width: ${PRIMARY_BOX_SIZE + INCREASE_STEP * i}px; height:${PRIMARY_BOX_SIZE + INCREASE_STEP * i}px; background-color: ${randomRgbColor()}"></div>`
//     }, '')
//     // console.log(arrayBoxes)
//     boxesRef.insertAdjacentHTML('beforeend', arrayBoxes)
   
// }

// function destroyBoxes() {
//     boxesRef.innerHTML = ''
//     inputNumberRef.value = ''
// }

// -----------------------------------------------------------------
// const addBtn = document.querySelector('[data-action="render"]');
// const clearBtn = document.querySelector('[data-action="destroy"]');
// const createBox = document.querySelector('[type="number"]');
// const boxes = document.querySelector('#boxes');

// function createBoxes () {
//     boxes.innerHTML = '';
    
//     const amount = createBox.value;
    
//     const items = [];

//     for (let i = 0; i < amount; i += 1){
//         const newItemDiv = document.createElement('div');
//         newItemDiv.style.backgroundColor = randomColorRGB();
//         newItemDiv.style.width = (i * 10) + 20 + 'px';
//         newItemDiv.style.height = (i * 10) + 20 + 'px';
//         items.push(newItemDiv);
//     }
//     boxes.append(... items);
// };

// const clearBoxes = () => {
//     boxes.innerHTML = '';
//     createBox.value = ''
// };
  
// addBtn.addEventListener('click', createBoxes);
// clearBtn.addEventListener('click', clearBoxes);

// function randomColorRGB() {
//     const random = (min, max) => Math.round(Math.random() * (max - min) + min);

//     const red = random(0, 255);
//     const green = random(0, 255);
//     const blue = random(0, 255);

//     return `rgb(${red},${green},${blue})`;
// };

// ---------------------------------------------------------------------
const refs = {
    input: document.querySelector('#controls [type="number"]'),
    createBtn: document.querySelector('#controls [data-action="render"]'),
    destroyBtn: document.querySelector('#controls [data-action="destroy"]'),
    root: document.querySelector('#boxes'),
}

const { input, createBtn, destroyBtn, root } = refs

const randomRgbColor = () => { 
const r = Math.round(Math.random() * (255 - 1) + 1);
const g = Math.round(Math.random() * (255 - 1) + 1);
const b = Math.round(Math.random() * (255 - 1) + 1);
    return `rgb(${r},${g},${b})`
}

const INITIAL_SIZE = 30;
const STEP = 10;

createBtn.addEventListener('click', ()=>handleCreate(Number(input.value)));
destroyBtn.addEventListener('click', handleDestroy);

// function handleCreate(amount) { 
//     root.innerHTML = ''
//     const boxes = [...new Array(amount)];
//     const arrBoxes = boxes.map((_, i) => createBoxes(i));
//     root.append(...arrBoxes)
    
// }

// function createBoxes(i) { 
//     const box = document.createElement('div');
//     box.style.backgroundColor = randomRgbColor();
//     box.style.height = `${INITIAL_SIZE + STEP * i}px`;
//     box.style.width = `${INITIAL_SIZE + STEP * i}px`
    
//     return box
// }

function handleCreate(amount) { 
    root.innerHTML = ''
    const boxes = [...new Array(amount)];
    const arrBoxes = boxes.map((_, i) => createBoxes(i)).join('');
    root.insertAdjacentHTML('beforeend', arrBoxes)
    
}

function createBoxes(i) { 
 return `<div style="width: ${INITIAL_SIZE + STEP * i}px; height:${INITIAL_SIZE + STEP * i}px; background-color: ${randomRgbColor()}"></div>`
}

function handleDestroy() { 
root.innerHTML = ''
input.value = ''
}