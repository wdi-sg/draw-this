console.log("hello script js");

var instruction = document.querySelector('#instruction');
instruction.innerText = "Instructions: \n\n 1. number \n 2. number number \n 3. clear \n 4. clear number";

var input = document.querySelector('#input');
var output = document.querySelector('#output');

function inputHappened(currentInput) {
  console.log( currentInput );

  var array = currentInput.split(" ");

  if (array[0] == "clear" && array[1] > 0) {

    clearSelectedOutput(parseInt(array[1]));

  } else if (array[0] == "clear") {

    clearAll();

  } else {

    display(parseInt(array[0]), parseInt(array[1]));

  }

  clearInput();

}

function display(stuffToDisplay, num) {
  // your DOM manipulation code here
  if (num > 1) {

    //multiple rows
    for (var i = 1; i < num; i++) {
      var newP = document.createElement('p');
      newP.textContent = emoji(stuffToDisplay);
      document.querySelector('#output').appendChild(newP);

    }

  } else {

    //single row
    var newP = document.createElement('p');
    newP.textContent = emoji(stuffToDisplay);
    document.querySelector('#output').appendChild(newP);

  }
  
  
}

function emoji(num) {

  var skull = "💀";

  return skull.repeat(num);

}

function clearInput() {
  input.value = "";
}

function clearSelectedOutput(num) {
  var p = document.querySelectorAll('#output p');
  p[num-1].remove();
}

function clearAll() {
  output.innerHTML = "";
}