console.log("hello script js");

var pineapple = "🍍"
var pineColumns = "";
var userInput;


var clearInput = function() {
    document.querySelector("#input").value = "";
}

var inputHappened = function(currentInput){
    userInput = parseInt(currentInput);
    if (userInput > 0){
        makePara();
        makePineaples(userInput);
        insertPineapples();
        clearInput();
        pineColumns = "";
    } else if (currentInput.toLowerCase() === "clear") {
        clearPineapples();
        clearInput();
    }
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
        pineColumns = pineColumns + pineapple;
    }
    return pineColumns;
}

var insertPineapples = function () {
    document.querySelector("p:last-child").innerText = pineColumns;
}

var clearPineapples = function () {
    var output = document.querySelector("#output");
    output.innerHTML = "";
}