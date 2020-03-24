console.log("hello script js");

let output = "";

let character = "";

const init = function(){
    document.getElementById('input').value = "";
}

document.getElementById('output').textContent = "Type in the character or emoji that you would like to use.";


var inputHappened = function(currentInput){
  debugger;
  console.log( currentInput );
  const inputSplit = currentInput.split(" ")
  var res = inputSplit.every(function(element) {return typeof parseInt(element) === 'number';});
  console.log(res);

  if(inputSplit.length === 1 && character === ""){
    useCharacter(currentInput);
    init()
    document.getElementById('output').textContent = "";
  }
  else if(inputSplit[0] === "clear" && isNaN(parseInt(inputSplit[1])) ){
    clear();
  }
  else if(inputSplit[0] === "clear" && !isNaN(parseInt(inputSplit[1]))){
    clearRow(parseInt(inputSplit[1]));
  }
  else if (!isNaN(parseInt(inputSplit[0])) && isNaN(parseInt(inputSplit[1])) ){
    display( parseInt(currentInput) );
  }
  else if (inputSplit.length > 1 && res) {
    for(let a = 0; a<inputSplit.length; a++){
        display( parseInt(inputSplit[a]) );
    }
  }

};

var display = function(stuffToDisplay){
  const body = document.querySelector('body');
  const input = document.createElement('p');
  input.className = "inputClass";

  for(let i = 0; i<stuffToDisplay; i++){
    output = output + character;
  }
  input.textContent = output ;
  body.appendChild(input);
  output = "";
  init();
};

var clear = function(){
    const para = document.querySelectorAll('.inputClass');
    for(let p = 0; p<para.length; p++){
        para[p].textContent = "";
    }
}

var clearRow = function(num){
    const para = document.querySelectorAll('.inputClass');
    para[num-1].textContent = "";
}

var useCharacter = function(char){
    character = char;
}