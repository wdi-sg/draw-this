// var pineappleContainer = document.createElement("p");

var inputBox = document.getElementById("input");
var outputBox = document.getElementById("output");


inputBox.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addPineapples();
  }
});

var addMorePineapples = function() {
    var inputVal = inputBox.value;
    var pineappleContainer = document.createElement("p");
    pineappleContainer.textContent = "";
        for (i = 0; i < inputVal; i++) {
            pineappleContainer.textContent += '🍍';
        }
    outputBox.appendChild(pineappleContainer);
};

var addPineapples = function () {
    var piney = inputBox.value;
    if (piney === "clear") {
        location.reload();
    } else {
    addMorePineapples();
    }

var removeRow = function (){
    var str = inputBox.value;
    var argArray = str.split(" ");
    var arg1 = argArray[0];
    var arg2 = parseInt(argArray[1]);
    outputBox.removeChild(child[arg2-1]);
}