const textInputHandler = (event) => {
  const currentInput = event.target.value;
  inputHappened(currentInput);
}

document.querySelector("#input").addEventListener("change", textInputHandler);

console.log("hello script js");




var inputHappened = function(currentInput) {
  const myEmoji = [];
  document.getElementById("input").value = "";
      console.log("myEmojiArrAfterLoop",myEmoji)

  for (let i = 0; i < currentInput; i++) {
  myEmoji[i] = "🦠";
      }
      
  console.log("myEmojiArrAfterLoop",myEmoji)

  stuffToDisplay = myEmoji;

  console.log(currentInput !== 0);
  if (currentInput !== 0) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = stuffToDisplay;
    newParagraph.setAttribute("class", "emoji");
    document.body.appendChild(newParagraph);
  }

};

const clear= function(event){
  console.log(document.querySelectorAll(".emoji"));
  document.querySelector('body').textContent = "";
}
document.querySelector("#clear").addEventListener("click",clear);

var display = function(stuffToDisplay) {
  const stuff = function() {
    console.log("sdsds");
  };

  // your DOM manipulation code here
};
