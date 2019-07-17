console.log("hello script js");
var content = [];
var emoji = "🍍";
var output = document.querySelector('#output');
var error = document.querySelector('#error');
var instructions = [];

var inputHappened = function(currentInput){
  console.log( "user input is " + currentInput );

  if (currentInput === "clear"){
    clearAll();
  } else if (!isNaN(currentInput)){
    for (var i = 0; i < currentInput ; i++){
      content.push(emoji);
    }
    // console.log(content);
    console.log("current content length is " + content.length);
    display(content);

  } else {
    error.innerHTML = "Please enter a number or type clear";
  }
};

var display = function(data){
  var row = document.createElement('p');
  row.setAttribute('class','row');
  var newRow = output.appendChild(row);

  // this removes the commas in the array and shows it in the new row.
  newRow.innerHTML = data.join(" ");

  //clear content array
  content = [];
};

var clearAll = function(){
  output.innerHTML = "";
}

//check for the clear word
// var checkForClear = function(data){
//   if (data.includes('contain')){
//     // var data.split('');
//     // loop and check if any part of the array contains a number
//     // if yes , use it to select the row to delete deleteRow(number);
//     // if no additional number clear everything clearAll
//   }
// }
