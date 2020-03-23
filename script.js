console.log("hello script js");


row_entries = 0

let emoji = '🍍';

const node = document.querySelectorAll('p.starter')[0];

const clearInput = function(){
	document.querySelectorAll('#input')[0].value = "";
};

//append column input to innerHTML
const addColumn = function(input){
	if (node.lastChild == null){
		node.appendChild(document.createElement('p'));
		node.lastChild.innerHTML += input;
	} else {
		node.lastChild.innerHTML += input;
	};
};


//append a new node (row) to output 
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

//return num_of_columns x num_of_rows GRID
const createGrid = function(num_of_columns, num_of_rows){
		let i = 0;
		while (i < num_of_rows){
		runFunc(addColumn, num_of_columns, emoji);
		node.appendChild(document.createElement('p'));
		i++;
	};
};

//draws right-angle triangle with height = length
const triangle = function(height){
	let i = 1;
	while (i <= height){
		createGrid(i, 1);
		i++;
	};
};

var inputHappened = function(currentInput){

	if (parseInt(currentInput) && currentInput.length > 1){
		list = currentInput.split(" ");	
		createGrid(parseInt(list[0]), parseInt(list[1]));
		row_entries = parseInt(list[1]);

	} else if (currentInput === 'clear'){
		node.innerHTML = "";
		row_entries = 0;
	} else if (currentInput === 'clear 2'){
		node.removeChild(node.lastChild);
		row_entries = 1;
	} else if (row_entries % 2 === 0){
  		runFunc(addColumn, currentInput, emoji);
  		row_entries++;
  	} else if (row_entries % 2 !== 0){
  		addRow(emoji);
  		runFunc(addColumn, currentInput-1, emoji);
  		row_entries++;
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




