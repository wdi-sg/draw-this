console.log("hello script js");

//          What I need to do

//1. a function to display a string to output

//2. to check if user input is a number

//3. make an array and record user input

//4. run a loop for each array input

//5. display a pineapple for each loop

//6. create a new <p> for each user input









//Variable to be shown when a number is entered
var pineApple = "🍍";
//to
var countInput = [];


//this assigns a variable for function that runs when user enters a value
var inputHappened = function(currentInput){
  //this logs the entered value into the console
  console.log( currentInput );
  //boolean argument before returning
  if (isNaN(currentInput)){
    console.log("that is not a number");
    alert("That is not a number");
    return
  }
    console.log("that is a number");
    display()
}


// your DOM manipulation code here
var display = function(outputBox){

    //This searches for the p element output in the html document and change the text
    outputBox = document.getElementById("output");

    output.innerHTML = "Heres a 🍍";

    console.log();

  };