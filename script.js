console.log("hello script js");

var inputHappened = function(currentInput){
  // console.log( currentInput );
  // display( "WOW SOMETHING HAPPENED" );
  drawVegetable(currentInput);
  // clearInput(currentInput);
  // clearInput2(currentInput);
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
  var output = document.querySelector('#output');
  output.innerText = data;

};

var drawVegetable = function(currentInput) {
    var output = document.querySelector('#output');
    let vegetable = document.createElement("p");
    for (let i = 0; i < currentInput; i++) {
        console.log(vegetable);
        output.textContent += "🥬";
        output.appendChild(vegetable);
    };
    // output.appendChild(vegetable);
    // var clearInput = function(currentInput) {
    // if (currentInput === "clear") {
    //     location.reload();
    // }
};

var clearInput2 = function(clearInput) {
    if (currentInput) {

        "Greetings friend"

    }
};

// var listVegetable = output.childNodes;
// listVegetable.removeChild(listVegetable.childNodes[0]);