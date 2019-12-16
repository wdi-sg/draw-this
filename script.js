

var inputHappened = function(currentInput){
  //take multiple inputs, split into an array
  let inputArr = currentInput.split(" ")
//check if command is to clear
  if (inputArr[0] === "clear"){
    return inputArr
  }

  let pineapple = "🍍"
  let pineappleContainer = []
  let pineappleParagraph = document.createElement("p")
  // iterate input array and push same amount of pineapples as input
  for (let i = 0; i < inputArr[0]; i++){
    pineappleContainer.push(pineapple)
  }
  // set paragraph to amount of pineapples as a string
  pineappleParagraph.innerHTML = `${pineappleContainer.join("")}`
  // return the paragraph
  return pineappleParagraph
};

var display = function(stuffToDisplay){
  // take pineapple paragraph as parameter

  // your DOM manipulation code here
  let displayElement = document.querySelector("#output")
  // check if not clear, append
  if (stuffToDisplay[0] !== "clear") {
    displayElement.appendChild(stuffToDisplay)
  }
  // if input is clear, remove node as in second number
  if (stuffToDisplay[0] === "clear") {
    displayElement.removeChild(displayElement.childNodes[stuffToDisplay[1]])
  }
  document.querySelector("#input").value = ""
};
