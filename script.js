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

    if (progress === 'start') {
        progress = 'number of emoji';
        emoji = currentInput;
        return document.querySelector('#output').innerText = `How many emoji do you want to display?`;
    }

    if (progress === 'number of emoji') {
        var inputArray = currentInput.split(' '); //Split currentInput into an array

        //Create a div element with class 'emojiContainer' (to access childNode later)
        var emojiContainer = document.createElement('div');
        emojiContainer.className = 'emojiContainer';

    //e.g. inputArray = ['2','2']
    if (!isNaN(parseInt(inputArray[0])) === true) {

        //Equivalent to for(const input = 0; input < inputArray.length; input++)
        for (const input of inputArray) {
            inputNum = parseInt(input);
            var myP = document.createElement('p');

            for (var i = 0; i < inputNum; i++) {
                myP.innerText += emoji;
            }

            emojiContainer.appendChild(myP); //Append p tags to div class emojiCounter
            document.body.appendChild(emojiContainer); //Append div class to body

        }
    } else {
            //e.g. inputArray = ['clear','2'], to clear second row
            numToRemove = parseInt(inputArray[1]);
            var emojiContainer = document.querySelector('.emojiContainer');
            var selectedChildNode = emojiContainer.childNodes[numToRemove - 1];
            emojiContainer.removeChild(selectedChildNode); //Removes p according to childNodes

        };
    }
};

//Clear input function
var clearInput = function() {
    return document.getElementById("input").value = '';
}