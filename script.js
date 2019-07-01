console.log("hello script js");

var userInput;

// CREATE A TXT ARRAY TO STORE NO. OF PINEAPPLES TO DISPLAY
var textInside = [];
var row;

var inputHappened = function(currentInput){
    // GENERATE NO. OF PINEAPPLES BASED ON USER INPUT NUMBER
    for (var i = 0; i < currentInput; i++) {
        // PUSH NEW PINEAPPLE INTO ARRAY
        textInside.push("🍍");
    }
  display(textInside);
};

var display = function(data) {
    var output = document.querySelector('#output');
    //var row = data.join(" ");
    row = data.join(" ");
    output.innerHTML = row;

};