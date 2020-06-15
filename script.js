console.log("hello script js");

function inputHappened(currentInput) {
  console.log( currentInput );

  if (currentInput == "clear") {

    clearOuput();

  } else {

    display(checkInput(currentInput));

  }

}

function display(stuffToDisplay) {
  // your DOM manipulation code here
  
  var newP = document.createElement('p');
  newP.textContent = emoji(stuffToDisplay);
  document.querySelector('#output').appendChild(newP);
  
}

function checkInput(input) {

  if (isNaN(input)) {
    
    //return error message
    return "Please key in a valid number!";

  } else {

    var tempNum = parseInt(input);
    return tempNum;

  }

}

function emoji(num) {

  var emoji = "💀";

  return emoji.repeat(num);

}

function clearOuput() {
  var output = document.querySelector('#output');
  output.innerHTML = "";
}