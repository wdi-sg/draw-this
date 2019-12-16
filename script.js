console.log("hello script js");

var inputHappened = function(currentInput){
  console.log(currentInput);
  display(currentInput);
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
console.log(stuffToDisplay);
var box = document.getElementById("output");  // This refers to the output box


var text = "";

for (var i = 0; i < parseInt(stuffToDisplay); i++) {
    text = text + "🍍";
}

var emoji = document.createElement("p");
    emoji.innerHTML = text;
    box.appendChild(emoji);

//append to the output element
};


/*
Create a program that takes in commands to draw different figures.

First Version
Your program will take a command to draw a "row", (it will be a <p> tag) with the number of columns you want to draw.


Start by outputting a 🍍for each column.

Example:

You input: 3.

Your program draws:

🍍🍍🍍
Your HTML would look like this:

<p>🍍🍍🍍</p>



You input 2.

Your program draws a new row, adding to what's already there:

🍍🍍🍍
🍍🍍
You can type clear to clear the elements out of the DOM.*/