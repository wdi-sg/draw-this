console.log("hello script js");

let output = "";

const init = function(){
    document.getElementById('input').value = "";
}


var inputHappened = function(currentInput){
  if(currentInput === "clear"){
    clear();
  }

  console.log( currentInput );
  display( currentInput );
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
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