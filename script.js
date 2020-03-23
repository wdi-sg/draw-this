/*console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
};*/

//variables
let inputNumArray = [];
let clearArray = [];
let emoji = "🍍";
let inputNumArrayIndex = 0;
let emojiArray = [];

var display = function() {
  // your DOM manipulation code here
  let p = document.createElement('p');
  p.textContent = emojiArray[emojiArray.length - 1];
  let output = document.getElementById('output');
  output.appendChild(p);
};

var emojiArrayPrint = function(inputNumArray) {
  let toPrint = "";
  for (let i = 0; i < inputNumArray[inputNumArrayIndex]; i++) {
    toPrint = toPrint + emoji;
  }
  console.log(toPrint);
  emojiArray.push(toPrint);
  console.log(emojiArray[emojiArray.length - 1]);
  inputNumArrayIndex++;
};

var inputHappened = function(currentInput) {
  if (isNaN(parseInt(currentInput)) === false) {
    inputNumArray.push(parseInt(currentInput));
    console.log(inputNumArray[inputNumArrayIndex]);
    emojiArrayPrint(inputNumArray);
    display();
    console.log(inputNumArrayIndex);
  }
}
