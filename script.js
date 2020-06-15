console.log("hello script js");
var input = document.getElementById('input');
var output = document.getElementById('output');

let currentEmoji = '🍍';

input.onkeypress = function(event){
  console.log(input.value)
  input.value = input.value.toLowerCase();
  if (event.keyCode == 13) {
    if (input.value === "clear") {
      input.value = '';
      output.innerText = '';
    }
    else {
      var arr = [];
      for (i = 0 ; i < input.value ; i++) {
        arr.push(currentEmoji);
      }
      input.value = ''
    }
  }
  var newLine = document.createElement('p');
  newLine.innerText = arr.join('');
  output.appendChild(newLine);
}

