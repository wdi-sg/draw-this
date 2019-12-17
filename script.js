console.log("hello script js");



// var display = function(stuffToDisplay){

// document.getElementById("output").innerText= stuffToDisplay
// };


var inputHappened = function(currentInput){
  // console.log( currentInput );
  var pineapple = ""; //declaring empty string to a variable, smth that u wana output later
  var displayPineapple = document.createElement('p'); //creating a p tag and store under variable named displayPineapple, creating p tag to show the pineapples but ntg inside it first, it's just being created but floating around
  for (var i = 0; i < parseInt(currentInput); i++) {
        pineapple = pineapple + "🍍" // looping through current input and at the same time parseInt(currentInput) to turn any input into number, then pineapple starts increment by 1 and being stored in the pineapple variable. this one no .length coz is parse (numbers)

  }
  displayPineapple.innerText = pineapple // the pineapple will appear inside the p tag being created
console.log(pineapple);
console.log(displayPineapple);
document.getElementById("'output'").appendChild(displayPineapple); // adding pineapple emojis into the output box, document.getElementById('output') is in html there



     if (currentInput === "'clear'") {
       document.getElementById('output').innerHTML = "";
       //.innerHTML is clearing the elements in the

   };

// }; to work on clear part

};