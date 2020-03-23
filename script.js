document.querySelector('#output').innerText = `Please type an emoji. Or choose one below: 🤯 😈 🤗 🤬 😷`;

var progress = 'start';
var emoji = '🥇';

//Input function
var inputHappened = function(currentInput){
    clearInput();
    display(currentInput);
};

//Display function
var display = function(currentInput) {

    if (progress == 'start') {
        progress = 'number of emoji';
        emoji = currentInput;
        return document.querySelector('#output').innerText = `How many emoji do you want to display?`;
    }

    if (progress == 'number of emoji') {
        var pArray = [];
        var inputArray = currentInput.split(' ');

        if (!isNaN(parseInt(inputArray[0])) == true) {
            for (var i = 0; i < inputArray[0]; i++) {
                pArray.push(emoji);
            }
        } else {
            inputArrayIndex = inputArray[1];
            var pClear = document.querySelectorAll('.emoji');
                pClear[inputArrayIndex - 1].innerHTML = "";
        }

        var myPText = pArray.join('');
        var myP = document.createElement('p');
        myP.classList.add('emoji');
        myP.innerText = myPText;

        return document.body.appendChild(myP);
    }
};

//Clear input function
var clearInput = function() {
    return document.getElementById("input").value = '';
}