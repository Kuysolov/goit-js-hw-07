const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onlostFocus)

function onlostFocus({currentTarget}) { 
  currentTarget.value.length === +inputRef.dataset.length
    ? (inputRef.classList.add('valid'), inputRef.classList.remove('invalid'))
    :(inputRef.classList.add('invalid'), inputRef.classList.remove('valid'))
  } 


// const inputRef = document.querySelector('#validation-input');

// inputRef.addEventListener('blur', onInputBlur);

// function onInputBlur() {
//   if (
//     inputRef.value.length > Number(inputRef.dataset.length) ||
//     inputRef.value.length < Number(inputRef.dataset.length)
//   ) {
//     inputRef.classList.add('invalid');
//     inputRef.classList.remove('valid');
//   } else if (inputRef.value.length === Number(inputRef.dataset.length)) {
//     inputRef.classList.add('valid');
//     inputRef.classList.remove('invalid');
//   }
// }
