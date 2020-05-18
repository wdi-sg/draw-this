console.log("hello script js");
var a="";
var num = 0;
var outputField=document.querySelector('#output');
var inputField=document.querySelector('#input');
var count = 0;

var inputHappened = function(currentInput){
	if (currentInput.includes(" ")) {
		num = parseInt(currentInput.split(" ")[1]);
		document.querySelector('#p-'+num).innerHTML = "";
	} else {
		var b = document.createElement('p');
		count++
		for (i = 0; i < currentInput; i++) {
			a = a + "🍍";
		}
		b.innerHTML=a;
		b.id="p-"+ count;
		outputField.appendChild(b);
		inputField.value = "";
		a="";
	}
}

var display = function(stuffToDisplay){
};
