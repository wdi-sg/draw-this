// console.log("hello script js");

// Declaring global variables
let pineappleArray = [];
let newPineappleString;
let newParagraph = document.createElement("p");
let documentBody = document.body;


// When user types in an input
var inputHappened = function(currentInput){


    // To reset everything back to zero
    newParagraph = document.createElement("p");
    pineappleArray = [];


    // ParseInt the user's input
    let userInput = parseInt(currentInput);

    // To create the string of pineapples in <p></p> based on user's input
    createPineappleArray(userInput);

    newParagraph.textContent = newPineappleString;

    documentBody.appendChild(newParagraph);

};


const createPineappleArray = function(userInput) {

    for (let i = 0; i < userInput; i ++) {
        pineappleArray.push("🍍");
    }

    newPineappleString = pineappleArray.join("")

}









// var display = function(stuffToDisplay){
//     // your DOM manipulation code here

//     let outputBox = document.getElementById("output")

//     outputBox.textContent = stuffToDisplay;

// };