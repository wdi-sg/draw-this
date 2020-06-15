let input = document.getElementById('input');
let output = document.getElementById('output');


//-------------------------------EMOJI-SELECTION--------------------------


let currentEmoji = '🍍';
let emojis = ['☠️', '👽', '👾', '🤖', '🎃'];

for (let i = 0 ; i < emojis.length ; i++) {
  let newButton = document.createElement('button');
  newButton.className = 'btn btn-info';
  newButton.innerText = emojis[i];
  newButton.style = 'margin: 10px;';
  let emojiList = document.getElementById('emoji-list');
  emojiList.appendChild(newButton);
}

let emojiButtons = document.querySelectorAll('button');
// console.log(emojiButtons)
// console.log(Object.keys(emojiButtons));
// console.log(emojiButtons[1].innerText)
for (let i = 0 ; i < emojis.length ; i++) {
  emojiButtons[i].addEventListener('click', function(e) {
    currentEmoji = emojiButtons[i].innerText;
    for (let j = 0 ; j < emojiButtons.length ; j++) {
      emojiButtons[j].disabled = false;
    }
    emojiButtons[i].disabled = true;
  });
}


//-------------------------------INPUT--------------------------


input.addEventListener('keypress', function(x) {
  if (x.key === 'Enter') {
    if (input.value.match(/^(clear)(\s\d+)?/)) {
      //console.log(input.value.match(/^(clear)\s?(\d+)?/));
      if (input.value === 'clear') {
        clear();
      }
      else {
        clear(input.value.toString().split(' ')[1]);
      }
    }
    else if (input.value.match(/(triangle\s\d+)/)) {
      for (let i = 1 ; i <= input.value.match(/\d+/) ; i++) {
        enumerate(i);
      }
    }
    else {
      enumerate(input.value);
    }
    input.value = '';  
  }
});


//------------------------------FUNCTIONS------------------------------


function enumerate(x) {
  let arr = [];
  for (let i = 0 ; i < x ; i++) {
    arr.push(currentEmoji);
  }
  let newPara = document.createElement('p');
  newPara.innerText = arr.join('');
  output.appendChild(newPara);
}

function clear(x) {
  if (x) {
    output.removeChild(output.childNodes[x-1]);
  }
  else {
    output.innerText = '';
  }
}


