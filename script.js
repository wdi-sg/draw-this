console.log("hello script js");

var inputArray = [];
var bird = '🐦';
var input, x, input1, input2;
var birdOutput = '';
var outputArray = [];
var lastOutput, outputLength;
var clearLine;
var count = 1;

var inputHappened = function (currentInput) {
    inputArray = currentInput.split(" ");
    console.log(inputArray);
    if (inputArray.length === 1) {
        if (!isNaN(parseInt(inputArray[0]))) {
            inputArray.push(inputArray[0]);
            console.log(currentInput);
            //display( "WOW SOMETHING HAPPENED" );

            for (x = 0; x < inputArray[0]; x++) {
                birdOutput += bird;
                console.log(birdOutput);
            }
            outputArray.push(birdOutput);
            console.log(outputArray);
            outputLength = outputArray.length - 1;
            lastOutput = outputArray[outputLength]
            display();
        } else if (inputArray[0] === 'clear') {
            clear();
        } else {
            document.querySelector('#output').innerText = 'Invalid Character';
        }
    } else if (inputArray.length === 2) {
        {
            clearLine = parseInt(inputArray[1]);
            var list = document.getElementById('output');
            list.removeChild(list.childNodes[clearLine - 1])
            console.log(clearLine);
        }
    } else {
        document.querySelector('#output').innerText = 'Invalid Character';
    }
};

var display = function () {
    // your DOM manipulation code here
    var newPara = document.createElement('p');
    newPara.id = 'a' + count;
    count++
    newPara.innerText = lastOutput;
    document.getElementById('output').appendChild(newPara);
    birdOutput = '';
};
var clear = function () {
    document.querySelector('#output').innerText = '';
}