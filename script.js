console.log("hello script js");

//Input runs here
var inputHappened = function(currentInput){
	drawPineapple(currentInput);
	clearInput(currentInput);
	clearInput2(currentInput);
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here\
	var output = document.querySelector('#output');
        output.innerText = data;
};	

var drawPineapple = function(currentInput){
	let pineapple = document.createElement("p");

	for (let i = 0; i < currentInput; i++){
		console.log(currentInput);
		pineapple.textContent += "🍍";
	};
	var printPineapple = output.appendChild(pineapple);
};

var clearInput = function(currentInput){
	if (currentInput === "clear"){

	location.reload();
	}
};

var clearInput2 = function(currentInput){
	
	if (currentInput){

		Hello

	}

	

	var listPineapples = output.childNodes;
	listPineapples.removeChild(listPineapples.childNodes[0]);
};
