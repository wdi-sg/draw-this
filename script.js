console.log("hello script js");
//Instructions:
var howTo = document.createElement('h2');
howTo.innerText = 'Valid inputs: \n' + '"3" will print emoji by 3 times \n' + '"clear 2" will clear 2nd row';
var textBox = document.querySelector('#input');
var body = document.querySelector('body');
body.insertBefore(howTo, textBox);

//Clear All Button
var button = document.createElement('button');
button.innerText = 'clear';
button.onclick = function (){clearDisplay();}
body.appendChild(button);

//Global variables
var order;
var number;
var printThis;


var inputHappened = function(currentInput){
  var userArray = currentInput.split(' ');
  //if there's only one element in array (i.e. no spaces in user input) & not number
    if (userArray.length === 1 && isNaN(currentInput)){
      display('invalid input!')
    }
  //if there's only one element in the array & it's a number
    if (userArray.length === 1){
      number = parseInt(userArray[0]);
      printThis = printEmojis(number);
      display(printThis);
    } else {
      if (userArray[0] === 'clear'){
        number = parseInt(userArray[1]);
        console.log('clear ' + number + ' row');
        clearRow(number);
      } else {
        number = parseInt(userArray[0]);
        printThis = printEmojis(number);
        var rowTimes = parseInt(userArray[1]);
        display(printThis, rowTimes);
      } 
    } 
  }

//Helper Functions
var display = function(stuffToDisplay, numberOfTimes){
  if (numberOfTimes > 1){
    for (var i = 0; i < numberOfTimes; i++){
      var results = document.createElement('p');
      results.innerText = stuffToDisplay;
      document.querySelector('#output').appendChild(results);
    }
  } 
  else {
    var results = document.createElement('p');
    results.innerText = stuffToDisplay;
    document.querySelector('#output').appendChild(results);
  }
};

var clearInput= function(){
  document.querySelector('#input').value = '';
  }

var clearDisplay = function(){
  console.log('clearing now');
  document.querySelector('#output').innerHTML = '';
}

var clearRow = function(rowNumber){
  var rows = document.querySelectorAll('#output p');
  console.log(rows);
  rows[rowNumber - 1].remove();
}

var printMultiple = function(num, printedRow){
  for (var i = 0; i < num; i++){
    var multiplePrint = printedRow + multiplePrint;
  }
  return multiplePrint;
}

var printEmojis = function(num){
  var emoji = "🍍";
  return emoji.repeat(num);
}