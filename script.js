console.log("hello script js");

entries = 0

const pine = '🍍';

const node = document.querySelectorAll('p.starter')[0];

const clearInput = function(){
	document.querySelectorAll('#input')[0].value = "";
};

//append input to innerHTML
const addColumn = function(input){
	if (node.lastChild == null){
		node.appendChild(document.createElement('p'));
		node.lastChild.innerHTML += input;
	} else {
		node.lastChild.innerHTML += input;
	};
};


//append a new node to output using block display (row)
const addRow = function(input){
	let new_ele = document.createElement('p');
	new_ele.innerHTML = input;
	node.appendChild(new_ele);
};

//run input function a certain number of times
const runFunc = function(func, times, input){
	i = 0;
	while (i < times){
		func(input);
		i++;
	};
};


var inputHappened = function(currentInput){

	if (currentInput === 'clear'){
	node.innerHTML = "";
	} else if (entries % 2 === 0){
  	runFunc(addColumn, currentInput, pine);
  	entries++;
  	} else if (entries % 2 !== 0){
  	addRow(pine);
  	runFunc(addColumn, currentInput-1, pine);
  	entries++;
  	};
  	clearInput();

  // display( "WOW SOMETHING HAPPENED" );
};








var display = function(stuffToDisplay){
  // your DOM manipulation code here
};









// //append a new node to output using inline display (column)
// const addColumn = function(input){
// 	let new_ele = document.createElement('a');
// 	new_ele.innerHTML = input;
// 	document.querySelectorAll('p.starter')[0].appendChild(new_ele);
// };




