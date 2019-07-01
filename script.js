//------------------VERSION ONE-----------------

// var inputHappened = function(currentInput){
//   console.log( "InputHappened!" );
//   display(currentInput);
//   pineapples = [];
// };

// var wrapper = document.getElementById('output');
// var pineapple = "🍍";
// var pineapples = [];

// var display = function(currentInput){
//   // your DOM manipulation code here
//     if (currentInput === "clear") {
//         wrapper.innerHTML = null;
//         console.log("Cleared!");
//         return;
//     }
//     let validInput = parseInt(currentInput);
//     if (validInput % 1 !== 0) {
//         console.log("Error: please input a whole number.");
//     }
//     let row = document.createElement('p');
//     for (i = 0; i < validInput; i += 1) {
//         pineapples.push(pineapple)
//     };
//     row.innerHTML = pineapples.join("");
//     wrapper.appendChild(row);
// }


// "🍍"
// step 1: draw a row in <p>, where the length of the string === input.
// step 2: repeat the same step in the next row. to do this, you may need make a counter
// step 2-2: add ability to clear

// Second Version:
// step 3: add ability to clear by row, where clear "input" removes the "input"th row. You will have to use .split to get the two arguments from input, clear + number
//         reminder: split(" ") takes separate rows in a sentence and returns them as elements in array

// further 1:
// step 4: add ability to add multiple rows at a time. you may need to split the input and check if they are numbers.

//---------------------VERSION TWO-------------

var inputHappened = function(currentInput){
  console.log( "InputHappened!" );
  display(currentInput);
  pineapples = [];
};

var wrapper = document.getElementById('output');
var pineapple = "🍍";
var pineapples = [];
var clearError = "Error while clearing!"



//VERSION 2

// var display = function(currentInput){


// let validInput = parseInt(currentInput);
// console.log(validInput);
// if (currentInput.includes("clear") === true) {
//         console.log("has clear!");
//         var inputArray = currentInput.split(" ");
//         console.log(inputArray)
//         var validClearNum = parseInt(inputArray[1])
//         console.log("clear valid!")
//         wrapper.removeChild(wrapper.childNodes[validClearNum-1])
// }

// if (isNaN(validInput) === false) {
//     console.log('input is valid!')
//     let row = document.createElement('p');
//     for (i = 0; i < validInput; i += 1) {
//         pineapples.push(pineapple)
//     }
//     row.innerHTML = pineapples.join("");
//     wrapper.appendChild(row);
// }
// }

//FURTHERS
var display = function(currentInput){


if (currentInput.includes("clear") === true) {
        console.log("has clear!");
        let inputArray = currentInput.split(" ");
        console.log(inputArray)
        let validClearNum = parseInt(inputArray[1])
        console.log("clear valid!")
        wrapper.removeChild(wrapper.childNodes[validClearNum-1])
}

var numArray = currentInput.split(" ");
    console.log(numArray)
    for (j = 0; j < numArray[0]; j++){
        for (i = 0; i < numArray[i]; i += 1) {

            pineapples.push(pineapple)
            }
            var row = document.createElement('p');
            row.innerHTML = pineapples.join("");
            wrapper.appendChild(row);
}


}