// console.log("hello script js");

// Declaring global variables
let pineappleArray = [];
let newPineappleString;
let newParagraph = document.createElement("p");
let outputBody = document.getElementById('output')
let userInputArray = [];


// When user types in an input
var inputHappened = function(currentInput){

    // To reset everything back to zero
    pineappleArray = [];

    let userInput = currentInput;

    userInputArray = userInput.split(" ");

    let rowNumber = parseInt(userInputArray[1]);

    if (userInput.includes("clear") === true) {
        clearRow(rowNumber);

    } else if (userInput.includes("triangle") === true) {

        let triangleLength = parseInt(userInputArray[1])

        for (i = 0; i < triangleLength; i ++) {

            // To create the string of pineapples in <p></p> based on user's input
            newPineappleString = "";
            pineappleArray = [];

            newParagraph = document.createElement("p");
            createPineappleArray(i + 1);

            newParagraph.textContent = newPineappleString;

            outputBody.appendChild(newParagraph);
        }

    } else {

        for (i = 0; i < userInputArray.length; i ++) {

            // To create the string of pineapples in <p></p> based on user's input
            newPineappleString = "";
            pineappleArray = [];

            newParagraph = document.createElement("p");
            createPineappleArray(userInputArray[i]);

            newParagraph.textContent = newPineappleString;

            outputBody.appendChild(newParagraph);
        }
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

//         outputBody.removeChild(paragraphs[0]);

//     }

// }

// // Version 2 of Clearing
const clearRow = function(rowNumber) {

    let paragraphs = document.getElementsByTagName('p');

    outputBody.removeChild(paragraphs[(rowNumber - 1)]);

}






// var display = function(stuffToDisplay){
//     // your DOM manipulation code here

//     let outputBox = document.getElementById("output")

//     outputBox.textContent = stuffToDisplay;

// };