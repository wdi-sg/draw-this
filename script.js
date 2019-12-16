console.log("hello script js");
var a=""
var outputField=document.querySelector('#output');
var inputField=document.querySelector('#input');
var inputHappened = function(currentInput){
	var b = document.createElement('p');
	for (i = 0; i < currentInput; i++) {
		a = a + "🍍";
	}
	b.innerHTML=a;
	outputField.appendChild(b);
	inputField.value = "";
	a="";
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
  
};
