console.log("hello script js");
var numRecord = [];

function inputHappened(currentInput){
  console.log( currentInput );
  var input = parseInt(currentInput);
  numRecord.push(currentInput);

  var newP = document.createElement("p");
  var pineapple = [];
  var i = 0;
  for (i=0;i<input;i++){
    pineapple.push('🍍');
  }
  newP.innerHTML = pineapple.join("");
  document.getElementById('output').append(newP);
  if (currentInput === "clear"){
    var output = "";
    display(output);
      }
};