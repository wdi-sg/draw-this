console.log("hello script js");
var count = 0;
var emoji;

var inputHappened = function(currentInput){
  	if(count == 0){
  	  emoji = currentInput;
  	  count++;
  	  document.querySelector('#input').value=""
  	  return "Key in a number"
  	} else {

	  var sortedInput = currentInput.split(" ");

	  if (sortedInput.length == 1){
		  
		if(sortedInput[0] == 'clear'){
		  clearRows();
		} else {
		  drawRow(currentInput);
		}

	  } else if (sortedInput.length == 2) {

	  	if(sortedInput[0] == 'clear'){
	  		//"clear <nodeIndex>", where nodeIndex clears the xth row.
	  		var nodeIndex = sortedInput[1];
	  		var selectedNode = document.querySelectorAll('.pineapples')[nodeIndex-1]
	  		selectedNode.parentNode.remove(selectedNode);

	  	} else if(sortedInput[0] == 'triangle') {

	  		drawTriangle(sortedInput[1])


	  	} else if(sortedInput[0] == 'reverse') {

	  		reverseTriangle(sortedInput[1]);

		 } else {
	  		//sortedInput[0] is the columns
	  		//sortedInput[1] is the rows
	  		var c = sortedInput[0]
	  		var r = sortedInput[1]
	        drawRowColumns(c,r);
	        };	
	  	}
	  }
	  return "done";
	}

  
  


var drawRowColumns = function(columns,rows){
	for (let i = 0; i < rows; i++){
		drawRow(columns);
	}

}


var clearRows = function(){
	document.querySelectorAll('.pineapples').forEach(e => e.remove());
}

var display = function(results){
    var output = document.querySelector('#output');
    output.innerText = results;
}
  

var drawRow = function(x){
	
	var mainframe = document.createElement('div');
	mainframe.id = "mframe";
	
	var para = document.createElement('p');
	para.classList.add("pineapples");
	var y = ""
		for(let i = 0; i < x; i++){
		console.log("sd")
		y = y.concat(emoji);
	}

	para.innerText = y;
	
	mainframe.appendChild(para)
	document.body.appendChild(mainframe);
}

var drawTriangle = function(r){

	for(let i = 1; i <= r ; i++){
		drawRowColumns(i,1);
	}

}

var reverseTriangle= function(n){
	var mainframe = document.createElement('div');
	mainframe.id = "mframe";



	for(let i = 1; i <= n ; i++){
		var para = document.createElement('p');
		para.classList.add("pineapples");

		var y = "";
		
		for(let j = 1; j<=(n-i); j++){
			
			y = y.concat("&nbsp&nbsp&nbsp&nbsp&nbsp")
		}

		for(let k = 1; k <= i; k++){
			y = y.concat(emoji);
		}

		para.innerHTML = y;
		mainframe.appendChild(para);
		document.body.appendChild(mainframe);

	}
	
}
