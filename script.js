var pineappleContainer = document.createElement("p");

var inputBox = document.getElementById("input");
var outputBox = document.getElementById("output");


// Enter to submit. not sure if this will work or the assigning to variable must be a function
inputBox.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addPineapples();
  }
});

// var pineapples = [];

var addPineapples = function () {
    var inputVal = inputBox.value;
    pineappleContainer.textContent = "";
        for (i = 0; i < inputVal; i++) {
            pineappleContainer.textContent += '🍍';
        }
    // document.body.appendChild(pineappleContainer);
    outputBox.appendChild(pineappleContainer);
};