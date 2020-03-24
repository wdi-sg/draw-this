console.log("DRAW THIS THROUGH DOM MANIPULATION!");

function clearInput() {
  document.getElementById("input").value = "";
}

var fruit = "🍍";
var storeInput = 0;
var showOutput = "";

var inputHappened = function(currentInput) {
  var storeInput = currentInput;
  clearInput();
  console.log(storeInput);
  if (!isNaN(parseInt(storeInput)) && storeInput < 10) {
    for (i = 0; i < storeInput; i++) {
      showOutput = showOutput + fruit;
      console.log(showOutput);
    }
    var display = document.createElement("p");
    display.innerText = showOutput;
    document.getElementById("output").appendChild(display);
    showOutput = "";
  } else if (!isNaN(parseInt(storeInput)) && storeInput > 9) {
    var display = document.createElement("p");
    display.innerText = "Value entered is too big! Please Enter 1 - 9 only";
    document.getElementById("output").appendChild(display);
  } else if (storeInput === "clear") {
    console.log("hello this is working!");
    document.querySelector("#output").textContent = "";
  } else {
    document.querySelector("#output").textContent =
      "Please enter only numbers!";
  }
};

//Part 1 completed//
