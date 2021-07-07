console.log("hello script js");
var text =[];
var inputHappened = function(currentInput){
  console.log( currentInput );
  // clear output
  if (currentInput ==="clear"){
  	document.querySelector("#output").innerHTML = "";
  } else {
	for(let i=0; i< currentInput; i++){
		text.push("🍍");
		console.log(text);
	
	}
}
  display(text);
  text = [];  //clear array
  
};

var display = function(stuff){
	
	let newP = document.createElement("p");
	console.log(stuff);
	let pJoin = stuff.join("");
	console.log(pJoin);
	newP.innerHTML = pJoin;

	let output = document.querySelector("#output");
	output.appendChild(newP);

}


	