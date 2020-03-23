console.log("hello script js");

var inputHappened = function(currentInput){

var pineappleVar = "";
var userInput = document.querySelector("#input");
var pineapple = document.createElement("p");
for (var i = 0; i < parseInt(currentInput); i++){
    pineappleVar = pineappleVar + "🍍"
}

pineapple.textContent = pineappleVar;
document.getElementById('div').appendChild(pineapple);
    userInput.value = "";
}