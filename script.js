console.log("hello script js");

var vibe = "🙃";

var output = document.querySelector("#output");

var totalVibe = " ";

var additionalVibe = 0;

var clearInput = function () {

  document.querySelector("#input").value = "";

}

var inputHappened = function(currentInput){

  console.log( currentInput );

  display(currentInput);

  if ( currentInput === "clear" ){

    document.querySelector("#output").innerHTML = "";
  }

};

var madVibes = function (vibeRows) {

};

var display = function(stuffToDisplay){

  // your DOM manipulation code here

  var vibeRows = document.createElement("p");

  for ( var i = 0; i < stuffToDisplay; i++ ){

    totalVibe += vibe;

  }

  vibeRows.innerText = (totalVibe);

  document.querySelector("#output").appendChild(vibeRows);

  totalVibe = "";

};