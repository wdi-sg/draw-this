console.log("hello script js");

var icon = "🍀";
var output = document.querySelector('#output');

var totalClovers = " ";
var addedClovers = 0;

var firstRowIcons = " ";
var secondRowIcons = " ";

var clovers = 0;

var count = 0;

var clearInput = function () {
    document.querySelector("#input").value = "";
}

var inputHappened = function(currentInput){
    display(currentInput);
    clearInput();
    if (currentInput === "clear") {
        document.querySelector("#output").innerHTML = "";
    }
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
    var cloverRows = document.createElement("p");
    var secondRow = document.createElement("p");
    if (stuffToDisplay.includes(" ")) {
        var displaySplit = stuffToDisplay.split(" ");
        var firstRow = displaySplit[0];
        var secondRow = displaySplit[1];
        for (var i = 0; i < firstRow; i++) {
            firstRowIcons += icon;
        }
        for (var i = 0; i < secondRow; i++) {
            secondRowIcons += icon;
        }
        cloverRows.innerHTML = "<p>" + (firstRowIcons) + "</p>" + "<p>" + (secondRowIcons) + "</p>";
        secondRow.innerText = (secondRowIcons);
        console.log(firstRow, secondRow);
        document.querySelector("#output").appendChild(cloverRows);
        firstRowIcons = " ";
        secondRowIcons = " ";
    } else if (isNaN(stuffToDisplay) === false) {
        for (var i = 0; i < stuffToDisplay; i++) {
            totalClovers += icon;
        }
        cloverRows.innerText = (totalClovers);
        document.querySelector("#output").appendChild(cloverRows);
        totalClovers = "";
    }
};
