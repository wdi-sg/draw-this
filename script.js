console.log("hello script js");

//---------------------------------------------defined variables-------------------------------------------//
var totalEmojis = "";
var output = document.getElementById("output");
var emoji = "😼";

//-------------------------------------------------functions-----------------------------------------------//

//clear input value
var clearInput = function() {

  document.getElementById("input").value = "";

}


// add emoji to total emojis and append to output in 'p'
var display = function(currentInput) {

  var emojiRow = document.createElement("p");

  for ( i = 0 ; i < currentInput ; i++ ) {

    totalEmojis += emoji;

  }

  emojiRow.innerText = totalEmojis;

  output.appendChild(emojiRow);

  totalEmojis = "";

  clearInput();

}


// clear output
var inputHappened = function(currentInput){

  console.log( currentInput );

  display(currentInput);

  if ( currentInput === "clear" ){

    document.querySelector("#output").innerHTML = "";
  }

};