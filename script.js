// console.log("hello script js");

var inputHappened = function(currentInput) {
    console.log(currentInput);
    var input = parseInt(currentInput);
    // display( "WOW SOMETHING HAPPENED" );
    var p = document.createElement("p");
    var pine = [];
    for (let i = 0; i < input; i++) {
        pine.push ("🍍");
    }
    console.log("pine", pine);
    p.innerHTML = pine.join(" ");
    document.getElementById("output").appendChild(p);
};

// var display = function(stuffToDisplay){
//   // your DOM manipulation code here

// };