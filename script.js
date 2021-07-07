console.log("hello script js");

var inputHappened = function(currentInput){
    display(currentInput);
    event.target.value = '';
};

var display = function(input){
    let wordArray = input.split(" ");
        console.log('wordArray length:'+ wordArray.length)
        console.log('wordArray:'+ wordArray)

    let output = document.getElementById('output');
    let newPar = document.createElement("p");
    let parsedInputZero;
    let parsedInputOne;
    let childCount = output.childElementCount;
    let pineapple = '';
    console.log('child count:'+childCount)

    if (wordArray.length === 2) {
        if (wordArray[0] === 'clear'){
            parsedInputOne = parseInt(wordArray[1]);
            output.removeChild(output.children[parsedInputOne-1]);
        }
        else {
            parsedInputOne = parseInt(wordArray[1]);
            parsedInputZero = parseInt(wordArray[0]);
            for (let i=0; i<parsedInputZero; i++){
                pineapple += '🍍';
            }
            newPar.textContent = pineapple;
            for (let j=0; j<parsedInputOne; j++){
                output.appendChild(newPar);
            }
        }
    } else if (wordArray.length === 1) {
        if (wordArray[0] === 'clear') {
            for(let i=0; i<childCount; i++){
            output.removeChild(output.children[0]);
            }
        } else {
            parsedInputZero = parseInt(wordArray[0]);
            let pineapple = '';
            for (let i=0; i<parsedInputZero; i++){
                pineapple += '🍍';
            }
        }
        newPar.textContent = pineapple;
        output.appendChild(newPar);
    }
};