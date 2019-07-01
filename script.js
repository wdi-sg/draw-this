console.log("hello script js");
console.log('🍍');

var num = [];

var inputHappened = function(currentInput){
  console.log( currentInput );
  if (currentInput.includes('clear') === true) {
    num = currentInput.split(' ');
  }
  else {
    num = parseInt(currentInput);
  }
  console.log(num);
  display();
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
    if (typeof num === 'number') {
        var fruits = document.createElement("p");
        for (let i = 0; i < num; i++ ) {
            fruits.innerHTML += '🍍';
        };
    console.log (fruits);
    var box = document.getElementById("output");
    box.appendChild(fruits);
    }
    else {
        remove();
    }
};

var remove = function() {
    var box = document.getElementById("output");
    console.log(box);
    var rowNum = num[1] - 1;
    console.log(rowNum);
    var remainRows = box.removeChild(box.childNodes[rowNum]);
    console.log(remainRows);
};