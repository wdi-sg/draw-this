console.log("hello script js");

var pineapple = "🍍"
var pineColumns = "";
var userInput;
var splittedInput;


var clearInput = function() {
    document.querySelector("#input").value = "";
}

var inputHappened = function(currentInput){
    console.log(typeof currentInput)
    userInput = parseInt(currentInput);
    if (userInput > 0){
        makePara();
        makePineaples(userInput);
        insertPineapples();
        clearInput();
        pineColumns = "";
    }
    if (currentInput.toLowerCase() === "clear all") {
        clearPineapplesAll();
        clearInput();
    }
    if (typeof currentInput === "String");
    splitInput(userInput);
};

var display = function(stuffToDisplay){
    // your DOM manipulation code here
    document.querySelector("#output").innerText = stuffToDisplay;

};

var makePara = function() {
    var pinePara = document.createElement("p");
    pinePara.setAttribute("class", "pineapple")
    document.querySelector("#output").appendChild(pinePara);

}

var makePineaples = function (numPine) {
    for ( i = 0 ; i < numPine ; i++ ){
        pineColumns += pineapple;
    }
    return pineColumns;
}

var insertPineapples = function () {
    document.querySelector("p:last-child").innerText = pineColumns;
}

var clearPineapplesAll = function () {
    var output = document.querySelector("#output");
    output.innerHTML = "";
}

var splitInput = function (userInput){
    splittedInput = String(userInput)
    splittedInput = splittedInput.split(" ");
    return splittedInput;
}