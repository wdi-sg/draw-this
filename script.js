console.log("hello script js");
var pineappleHolder = [];
var pineappleHolderTwo = [];

var inputHappened = function(currentInput){
    var parsedEntry = parseInt(currentInput);
    for (i =0; i<parsedEntry; i++){
        pineappleHolder.push("🍍");
    }
    display();
    pineappleHolder = [];
    if (currentInput.toUpperCase() === "CLEAR"){
        var retrieveOutput = document.querySelector('#output');
        retrieveOutput.innerHTML = "";
    } else if (currentInput.toUpperCase() === "CLEAR 2"){
        var getterHold = document.getElementById("output");
        getterHold.removeChild(getterHold.childNodes[1]);
    }
    document.getElementById('input').value = "";
};


var display = function(stuffToDisplay){
var destination = document.getElementById("output");
var createNewTag = document.createElement("p");
createNewTag.innerText = (pineappleHolder.join(""));
console.log(pineappleHolder.join());
destination.appendChild(createNewTag);
};