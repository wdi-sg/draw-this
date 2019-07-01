// console.log("hello script js");

// Declaring global variables
let pineappleArray = [];
let newPineappleString;
let newParagraph = document.createElement("p");
let documentBody = document.body;
let userInputArray = [];


// When user types in an input
var inputHappened = function(currentInput){

    // To reset everything back to zero
    newParagraph = document.createElement("p");
    pineappleArray = [];

    let userInput = currentInput;

    userInputArray = userInput.split(" ");

    let rowNumber = parseInt(userInputArray[1]);

    if (userInput.includes("clear") === true) {
        clearRow(rowNumber)

    } else if (userInput !== NaN) {
        // To create the string of pineapples in <p></p> based on user's input
        createPineappleArray(userInput);

        newParagraph.textContent = newPineappleString;

        documentBody.appendChild(newParagraph);

    } else {
        alert('Please type in a number')
    }

};


const createPineappleArray = function(userInput) {

    for (let i = 0; i < userInput; i ++) {
        pineappleArray.push("🍍");
    }

    newPineappleString = pineappleArray.join("")

}

// Version 1 of Clearing
// const clearArea = function() {

//     let paragraphs = document.getElementsByTagName('p');

//     let paragraphLength = paragraphs.length;

//     for (let i = 0; i < paragraphLength; i ++) {

//         documentBody.removeChild(paragraphs[0]);

//     }

// }

// // Version 2 of Clearing
const clearRow = function(rowNumber) {

    let paragraphs = document.getElementsByTagName('p');

    documentBody.removeChild(paragraphs[(rowNumber - 1)]);

}






// var display = function(stuffToDisplay){
//     // your DOM manipulation code here

//     let outputBox = document.getElementById("output")

//     outputBox.textContent = stuffToDisplay;

// };