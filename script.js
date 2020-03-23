console.log("hello script js");

function clearInput() {
  document.getElementById("input").value = "";
}

var inputHappened = function(currentInput){
  clearInput();
  var newArray = [];
  for (var i=0; i < currentInput; i++) {
    newArray.push("🍍");
  };
  var newRow = document.createElement("p");
  newRow.textContent = newArray.join("");
  return display(newRow);
};

var display = function(stuffToDisplay){
  document.getElementById("output").appendChild(stuffToDisplay)
};
