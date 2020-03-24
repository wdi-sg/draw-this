console.log("hello script js");

var inputArray = [];
var bird = '🐦';
var input , x;
var birdOutput = '';

var inputHappened = function(currentInput){
  var input = currentInput;
  if(!isNaN(parseInt(input))){
    inputArray.push(input);
    console.log( currentInput );
    //display( "WOW SOMETHING HAPPENED" );

    for(x = 0 ; x < input ; x++){
      birdOutput += bird;
      console.log(birdOutput);
    }
    display();
  }
  else if (input === 'clear'){
    clear();
  }
  else{
    document.querySelector('#output').innerText ='Invalid Character';
  }
};

var display = function(){
  // your DOM manipulation code here
  var newPara = document.createElement('p');
    newPara.innerText = birdOutput;
    document.getElementById('output').appendChild(newPara);
    birdOutput = '';
};
var clear = function(){
  document.querySelector('#output').innerText ='';
}