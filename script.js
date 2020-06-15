// console.log("hello script js");

// var inputHappened = function (currentInput) {
//   console.log(currentInput);
//   display("WOW SOMETHING HAPPENED");
// };



// var display = function (stuffToDisplay) {
// your DOM manipulation code here

// };


/* Version 1 */
const input = document.querySelector('#input');
const output = document.querySelector('#output');

const newContent = document.createElement('div'.id = 'content');
document.body.appendChild(newContent);
newContent.appendChild(output);

input.addEventListener('change', event => {

  const currentInput = event.target.value;

  switch (currentInput) {
    case '3':
      output.innerHTML = `<p>🍍🍍🍍</p>`;
      break;
    case '2':
      output.innerHTML += `<p>🍍🍍</p>`;
      break;
      /* Version 2 */
    case '2 2':
      output.innerHTML = `<p>🍍🍍<br>🍍🍍</p>`;
      break;

    default:
      output.innerHTML += `<p>`;
      for (let i = 0; i < (parseInt(currentInput) || 1); i++) {
        output.innerHTML += `🍍`;
      }
      output.innerHTML += `</p>`;
      break;

    case 'clear':
      output.innerHTML = '';
      break;

      /* further try */
    case 'triangle 3':
      output.innerHTML = `<p>🍍🍍🍍<br>🍍🍍<br>🍍</p>`;
      break;

    case 'rtriangle 3':
      output.innerHTML = `<p style='text-align: right'>🍍<br>🍍🍍<br>🍍🍍🍍</p>`;
      break;
  }
});

/* Version 2 */