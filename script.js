console.log("hello script js");

var inputHappened = function(currentInput){
    let input;

    // if (currentInput === 'clear'){
    //     clear all fields
    // } else {
    //     input = parseInt(currentInput);
    // }

    input = parseInt(currentInput);

    display(input);
    event.target.value = '';
};

var display = function(input){
    let output = document.getElementById('output');
    let newPar = document.createElement("p");
    let pineapple = '';

    for (let i=0; i<input; i++){
        pineapple += '🍍';
    }
    newPar.textContent = pineapple;
    output.appendChild(newPar);
};