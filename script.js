console.log("hello script js");
var content = [];
var pineapple = "🍍";
var output = document.querySelector('#output');

var inputHappened = function(currentInput){
  console.log( currentInput );

  if (currentInput === "clear"){
    clearAll();
  } else if (!isNaN(currentInput)){
    for (var i = 0; i < currentInput ; i++){
      content.push(pineapple);
    }
    console.log(content);
    display(content);
  }
};

var display = function(stuffToDisplay){
  var row = document.createElement('p');
  row.setAttribute('class','row');
  var newRow = output.appendChild(row);
  newRow.innerHTML = stuffToDisplay;
  content = [];
};

var clearAll = function(){
  output.innerHTML = "";
}
