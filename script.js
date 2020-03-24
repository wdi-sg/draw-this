const textInputHandler = (event) => {
  const currentInput = event.target.value;
  inputHappened(currentInput);
}

document.querySelector("#input").addEventListener("change", textInputHandler);



const myEmoji = [];
let count = 0;


var inputHappened = function(currentInput) {
  const myEmoji = [];
  document.getElementById("input").value = "";
     

  for (let i = 0; i < currentInput; i++) {
  myEmoji[i] = "🦠";
      }
      
  

  stuffToDisplay = myEmoji;


  if (currentInput !== 0) {
    console.log(count);
    count = count +1;
    console.log (count);
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = stuffToDisplay;
    newParagraph.setAttribute("class", "emoji");
    document.body.appendChild(newParagraph);
     }
};
console.log("hello");

let myPToClean = document.querySelectorAll('.emoji');
console.log("before", myPToClean);
const clear= function(event){
  console.log("after", myPToClean);
  for (j=0; j<=count; j++){
  myPToClean[j].textContent = "";
}
// Select the button with # clear and add an event listener to it
document.querySelector('#clear').addEventListener("click",clear);



var display = function(stuffToDisplay) {

  };

  // your DOM manipulation code here
};
