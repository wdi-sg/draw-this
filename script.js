console.log("hello script js");
var number;
var count = "0";
var pancake = "🥞";
var clearPancake = " ";

var inputHappened = function(currentInput){
  console.log( currentInput );
  //create a p tag with id of addPancake
  var addPancake = document.createElement("p");
  number = parseInt(currentInput);
  document.querySelector("#input").value = "";
  for(count = 0; count < number; count++){
    clearPancake = clearPancake + pancake;
  }
    console.log(clearPancake);
  //append pancake to document body
    addPancake.innerHTML = clearPancake;
    document.getElementById("output").appendChild(addPancake);
    clearPancake = " ";
};

function myFunction() {
  var stackedPancake = document.getElementById("output");
  stackedPancake.remove();
}

