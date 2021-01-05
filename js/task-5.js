const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('span#name-output');

inputRef.addEventListener('input', onNameOutput);

function onNameOutput({target }) {
  // if (target.value) {
  //   outputRef.textContent = target.value;
  // } else {
  //   outputRef.textContent = 'незнакомец';
  // }

  outputRef.textContent = target.value ?target.value :'незнакомец'
}
