console.log("hello script js");
console.log('🍍');

var num = [];

var inputHappened = function(currentInput){
  console.log( currentInput );
  num = currentInput.split();
  console.log(num);
  display();
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
    var fruits = document.createElement("p");
    for (let i = 0; i < num; i++ ) {
        fruits.innerHTML += '🍍';
    };
    console.log (fruits);
    var box = document.getElementById("output");
    box.appendChild(fruits);
};