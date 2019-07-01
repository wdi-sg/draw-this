var inputHappened = function(currentInput){
  console.log( "InputHappaned!" );
  display(currentInput);
};

var showText = document.getElementById('output');

var display = function(currentInput){
  // your DOM manipulation code here
    let validInput = parseInt(currentInput);
    if (validInput % 1 !== 0) {
        console.log("Error: please input a whole number.");
    }





};

// "🍍"
// step 1: draw a row in <p>, where the length of the string === input.
// step 2: repeat the same step in the next row. to do this, you may need make a counter
// step 2-2: add ability to clear

// Second Version:
// step 3: add ability to clear by row, where clear "input" removes the "input"th row. You will have to use .split to get the two arguments from input, clear + number
//         reminder: split(" ") takes separate rows in a sentence and returns them as elements in array

// further 1:
// step 4: add ability to add multiple rows at a time. you may need to split the input and check if they are numbers.