console.log("hello script js");

var pineapple = "🍍";
console.log(pineapple);

var displayOutput;

var newOutputs = function (newInput) {
  var add = [];
  for (var i = 0; i < newInput; i++) {
    add.push(pineapple);
  };
  return add.join("");
};

var inputHappened = function (currentInput) {
  console.log(currentInput);

  if (currentInput.toString() !== 'clear') {
    var newOutput = newOutputs(currentInput);
    console.log(newOutput);
    display(newOutput);
  }

  else {
    clearDisplay();
  };


};

var display = function (displayOutput) {
  // your DOM manipulation code here
  var displayList = document.getElementById("outputList");
  var newList = document.createElement("li");
  var newOutput = document.createElement("p");
  newOutput.textContent = displayOutput.toString();
  // var first = displayList.children[0];
  // displayList.insertBefore(newOutput, first);
  displayList.appendChild(newOutput);
};

var clearDisplay = function () {
  var displayList = document.getElementById("outputList");
  while (displayList.hasChildNodes()) {
    displayList.removeChild(displayList.firstChild);
  }
};