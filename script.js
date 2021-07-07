console.log("hello script js");

//Version1
// var inputHappened = function(currentInput){
//     console.log( currentInput );
//     var input = parseInt(currentInput);
//     // display( "WOW SOMETHING HAPPENED" );
//     var p = document.createElement("p");
//     var pine = [];
//     for (let i = 0; i < input; i ++){
//         pine.push("🍍");
//     }
//     console.log("pine", pine);
//     p.innerHTML = pine.join(" ");
//     document.getElementById("output").appendChild(p);


//Version 2
var inputRecord = [];

var inputNum = function(data){
    return /\d/.test(data);
}

//to add pineapples to <p></p>
var inputHappened = function(currentInput){
    console.log( currentInput );
    var input = parseInt(currentInput);
    // display( "WOW SOMETHING HAPPENED" );
    var pine = [];
    var p = document.createElement("p");
    p.setAttribute("id", "p");
    for (let i = 0; i < input; i ++){
        pine.push("🍍");
    }
    console.log("Number of pine", pine);
    p.innerHTML = pine.join(" ");
    document.getElementById("output").appendChild(p);


    for(let j = 0; j < inputRecord.length; j++){
        console.log(pine);
        if(inputRecord[j].includes("clear") && inputNum(inputRecord[j] === true)){
            var pToRemove = inputRecord[j].split(" ")[1];
            console.log(pine);
            if (pToRemove === pine.length(i));
            document.querySelectorAll("p")[pToRemove].innerHTML = ("<p> is removed");
        }
    }

}


// console.log("hello script js");

// var inputRecord = [];

// function hasNumber(data) {
//   return /\d/.test(data);
// }

// //Thea sample code
// var inputHappened = function(
//     currentInput){
//    inputRecord.push(currentInput);
//     //to confirm inputs are stored
//   console.log(inputRecord);
//   var input = parseInt(currentInput);
//   var createP = document.createElement("p");
//   var pineapple = [];
//    for (let i = 0; i<input; i++){
//     pineapple.push("🍍");
//    }
//    createP.innerHTML = pineapple.join(" ");
//    console.log(`The number of pineapples is ${pineapple}.` );
//    document.getElementById('output').append(createP);

//    for (let j = 0; j<inputRecord.length; j++){
//    if (inputRecord[j].includes('clear') && hasNumber(inputRecord[j]) === true ){
//          var rowToRemove = inputRecord[j].split(" ")[1];
//          (document.querySelectorAll("p")[rowToRemove]).innerHTML="This row has been removed."
//    }
// }
// }


var display = function(stuffToDisplay){
    // your DOM manipulation code here
};




// var display = function( data ){
//             var output = document.querySelector('#output');
//             output.innerText = data;
//         }