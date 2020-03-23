console.log("hello script js");

let output = "";

const init = function(){
    document.getElementById('input').value = "";
}


var inputHappened = function(currentInput){
  const inputSplit = currentInput.split(" ")

  if(inputSplit[0] === "clear" && isNaN(parseInt(inputSplit[1])) ){
    clear();
  }
  else if(inputSplit[0] === "clear" && !isNaN(parseInt(inputSplit[1]))){
    clearRow(parseInt(inputSplit[1]));
  }


  console.log( currentInput );
  display( currentInput );
};

var display = function(stuffToDisplay){
  const body = document.querySelector('body');
  const input = document.createElement('p');
  input.className = "inputClass";

  for(let i = 0; i<stuffToDisplay; i++){
    output = output + "🍍"
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