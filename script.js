/*console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
};*/

//variables
let inputNumArray = [];
let emoji = "🍍";
let emojiArray = [];

//DOM manipulation for display 
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

//creates emoji array for printing 
var emojiArrayPrint = function() {
  emojiArray = inputNumArray.map(element => {
    let toPrint = "";
    for (let i = 0; i < element; i++) {
      toPrint = toPrint + emoji;
    }
    return toPrint;
  });
};

//clear all DOM
var clearAllDOM = function() {
  let parent = document.getElementById("output");
  parent.innerHTML = "";
};

//main input function
var inputHappened = function(currentInput) {
  let currentInputSplit = currentInput.split(" ");
  if (currentInputSplit.length === 1 && isNaN(parseInt(currentInput)) === false) {
    inputNumArray.push(parseInt(currentInput));
    console.log(inputNumArray[inputNumArray.length - 1]);
    emojiArrayPrint();
    display();
    console.log(inputNumArray.length - 1);
  }
  else if (currentInputSplit.length === 2 && currentInputSplit[0] === "clear") {
    inputNumArray[currentInputSplit[1]-1] = 0;
    emojiArrayPrint();
    display();
  }
  else if (currentInput === "clear") {
    inputNumArray = [];
    emojiArrayPrint();
    display();
  }
  else if (currentInputSplit.length >= 2 && isNaN(currentInputSplit[0]) === false) {
    currentInputSplit.map((element) => {
      inputNumArray.push(element);
    });
    emojiArrayPrint();
    display();
  }
  else if (currentInputSplit.length === 2 && currentInputSplit[0] === "triangle") {
    let triangle = [];
    for (let i=0; i<currentInputSplit[1]; i++) {
      triangle.push(i+1);
    }
    triangle.map((element) => {
      inputNumArray.push(element);
    });
    emojiArrayPrint();
    display();
  }
  // else if (currentInputSplit.length === 2 && currentInputSplit[0] === "rtriangle") {
  // }
}
