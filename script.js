console.log("hello script js");

var inputHappened = function(currentInput){
  // console.log( currentInput );
  // display( "WOW SOMETHING HAPPENED" );
  drawPineapple(currentInput);
  clearInput(currentInput);
  clearInput2(currentInput);
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
  var output = document.querySelector('#output');
  output.innerText = data;

};

var drawVegetable = function(currentInput) {
    let vegetable = document.createElement("p");

    for (let i = 0; i < currentInput; i++) {
        console.log(currentInput);
        vegetable.textContent += "🥬";
    };
}