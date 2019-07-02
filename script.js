///////////////////////////////////////////
//Global Variable Declarations
//////////////////////////////////////////

var character = '🍍';
var noOfPineapple = null;
var rowDelete = null;

//Define space for Reverse Triangle
var pineappleSpace = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
var normalSpace = '&nbsp;&nbsp;&nbsp;';

//Define space for Equilateral Triangle
var pineappleESpace = '&nbsp;&nbsp;&nbsp;';
var normalESpace = '&nbsp;';

//Element variables
var mainOutput = document.getElementById('display1');

///////////////////////////////////////////
//Operation Functions
//////////////////////////////////////////

//Input Button Associated functions
var clearField = function() {
    document.getElementById('input-text').value='';
    document.getElementById('input-character').value='';
};

var defaultCharacter = function(){
    character = '🍍';
}

///////////////////////////////////////////////////
//Creating / Deleting Pineapple Row functions
///////////////////////////////////////////////////

//Create one row of pineapple
var createPineappleRow = function() {
    var newElement = document.createElement('p');
    newElement.classList.add('pineapple-row');
    for (var i=0; i < noOfPineapple;i++){
        newElement.insertAdjacentText('beforeend',character);
    }
    mainOutput.appendChild(newElement);
};

//Delete particular row of pineapple
var deletePineappleRow = function() {
    mainOutput.removeChild(mainOutput.children[rowDelete-1]);
};


//Delete all rows of pineapple
var deleteAll = function () {
    var total = mainOutput.children.length;
    for (var i=0; i < total ; i++){
        mainOutput.removeChild(mainOutput.children[0]);
    }

};

//Creating multiple rows of pineapple
var createMultipleRows = function(row,column){
    noOfPineapple=column;
    for (var i=0; i< row; i++){
        createPineappleRow();
    }

};

//Create normal triangle
var createTriangle = function (row) {
    for (var i=0; i<row; i++){
        noOfPineapple = i+1;
        createPineappleRow();
    }
}

//Create reverse triangle
var createRTriangle = function (row) {
    for (var i=0; i<row; i++){
        noOfPineapple = i+1;
        var noOfSpace = row - noOfPineapple;
        var space;
        var newElement = document.createElement('p');
        newElement.classList.add('pineapple-row');

        if (character === '🍍') {
            space = pineappleSpace;
        } else {
            space = normalSpace;
        }

        for (var j=0; j<noOfSpace; j++){
            newElement.insertAdjacentHTML('beforeend', space);
        }

        for (var k=0; k<noOfPineapple; k++){
            newElement.insertAdjacentText('beforeend',character);
        }
        mainOutput.appendChild(newElement);
    }
}

//Create Equilateral Triangle
var createETriangle = function (row) {
    for (var i=0; i<row; i++){
        noOfPineapple = i+1;
        var noOfSpace = row - noOfPineapple;
        var space;
        var newElement = document.createElement('p');
        newElement.classList.add('pineapple-row');

        if (character === '🍍') {
            space = pineappleESpace;
        } else {
            space = normalESpace;
        }

        for (var j=0; j<noOfSpace; j++){
            newElement.insertAdjacentHTML('beforeend', space);
        }

        for (var k=0; k<noOfPineapple; k++){
            newElement.insertAdjacentText('beforeend',character);
        }
        mainOutput.appendChild(newElement);
    }
}

// Create Equilateral Upside-down Triangle
var createEUTriangle = function (row) {
        console.log('trigger');
        for (var i=row; i>0; i--){
        noOfPineapple = i;
        var noOfSpace = row-i;
        var space;
        var newElement = document.createElement('p');
        newElement.classList.add('pineapple-row');

        if (character === '🍍') {
            space = pineappleESpace;
        } else {
            space = normalESpace;
        }

        for (var j=0; j<noOfSpace; j++){
            newElement.insertAdjacentHTML('beforeend', space);
        }

        for (var k=0; k<noOfPineapple; k++){
            newElement.insertAdjacentText('beforeend',character);
        }
        mainOutput.appendChild(newElement);
    }
}

////////////////////////////////////////////////
//Main Working Function
///////////////////////////////////////////////

var createPineapples = function() {
    var input = document.getElementById('input-text').value;
    var inputCharacter = document.getElementById('input-character');
    input = input.toLowerCase();

    //check character input
    if(inputCharacter.value !== null && inputCharacter.value.length === 1){
        character = inputCharacter.value;
    }

    clearField();

    //check clear
    if (input.includes('clear')){
        var split = input.split(" ");
        if (split.length === 1){
            deleteAll();
        }
        else if (split.length === 2){
            rowDelete = parseInt(split[1]);
            deletePineappleRow();
            return;
        }
    }
    //if input includes triangle/rtriangle/etriangle/eutriangle
    if (input.includes('triangle')){
        var split = input.split(" ");
        if (split[0].toLowerCase() === 'triangle'){
            createTriangle(parseInt(split[1]));
        } else if (split[0].toLowerCase() === 'rtriangle'){
            createRTriangle(parseInt(split[1]));
        } else if (split[0].toLowerCase() === 'etriangle'){
            createETriangle(parseInt(split[1]));
        } else if (split[0].toLowerCase() === 'eutriangle'){
            createEUTriangle(parseInt(split[1]));
        }
        return;
    }

    //input only 1 character
    if (input.length === 1 && typeof(parseInt(input) === 'number')){
        noOfPineapple = parseInt(input);
        createPineappleRow();
        return;
    }

    //if input is 2x2 or 3x3 or 3x4 etc
    var split = input.split(" ");
    createMultipleRows(parseInt(split[0]),parseInt(split[1]));
}