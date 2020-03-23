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
  clearAllDOM();
  for (let i = 0; i < emojiArray.length; i++) {
    let p = document.createElement("p");
    p.textContent = emojiArray[i];
    let output = document.getElementById("output");
    output.appendChild(p);
  }
};

var emojiArrayPrint = function() {
  emojiArray = inputNumArray.map(element => {
    let toPrint = "";
    for (let i = 0; i < element; i++) {
      toPrint = toPrint + emoji;
    }
    return toPrint;
  });
};

var clearAllDOM = function() {
  let parent = document.getElementById("output");
  parent.innerHTML = "";
};

var clearDisplay = function() {};

var inputHappened = function(currentInput) {
  if (isNaN(parseInt(currentInput)) === false) {
    inputNumArray.push(parseInt(currentInput));
    console.log(inputNumArray[inputNumArrayIndex]);
    emojiArrayPrint();
    display();
    console.log(inputNumArrayIndex);
  }
};
