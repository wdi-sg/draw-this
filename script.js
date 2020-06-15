console.log("hello script js");
//Instructions:
var howTo = document.createElement('h2');
howTo.innerText = 'Valid inputs: \n' + '"clear" will clear display \n' + '"3" will print emoji by 3 times \n' + '"clear 2" will clear 2nd row';
var textBox = document.querySelector('#input');
var body = document.querySelector('body');
body.insertBefore(howTo, textBox);

//Global variables
var order;
var number;
var printThis;


var inputHappened = function(currentInput){
  var userArray = currentInput.split(' ');
  //if there's only one element in the array (i.e. no spaces in user input)
    if (userArray.length ===1){
      if (currentInput === 'clear'){
        console.log('please clear');
        clearDisplay();
      }
      number = parseInt(userArray[0]);
      printThis = printEmojis(number);
      display(printThis);
    } else {
      if (userArray[0]=== 'clear'){
        number = parseInt(userArray[1]);
        console.log('clear ' + number + ' row');
        clearRow(number);
      } else {
        //TBD: print multiple rows
      }
    }
  }
 

//Helper Functions
var display = function(stuffToDisplay){
  var results = document.createElement('p');
  results.innerText = stuffToDisplay;
  document.querySelector('#output').appendChild(results);
  
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

var printEmojis = function(num){
  var emoji = "🍍";
  return emoji.repeat(num);
}