console.log("hello script js");

var icon = "🍀";
var output = document.querySelector('#output');

var totalClovers = "";
var addedClovers = 0;

// totalClovers = totalClovers + (input clover)

var inputHappened = function(currentInput){
    display(currentInput);
    clearInput();
    if (currentInput === "clear") {
        document.querySelector("#output").innerHTML = "";
    }
};

var clearInput = function () {
    document.querySelector("#input").value = "";
}

var display = function(stuffToDisplay){
  // your DOM manipulation code here
    var cloverRows = document.createElement("p");
    for (var i = 0; i < stuffToDisplay; i++) {
        totalClovers += icon;
    }
        cloverRows.innerText = (totalClovers);
        document.querySelector("#output").appendChild(cloverRows);
        totalClovers = "";
};

var appendIX = function (cloverRows) {
    // append p tags and stuff to output
};