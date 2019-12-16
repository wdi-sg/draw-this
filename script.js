// nothing happens when only one number input
// 1 1, 3 1 nothing happens

var inputHappened = function (currentInput) {
  //take multiple inputs, split into an array
  let inputArr = currentInput.split(" ")

  let pineapple = "🍍"
  let pineappleContainer = []
  let pineappleParagraph = document.createElement("p")
  let pineapplesAndRows
  //check if command is to clear
  if (inputArr[0] === "clear") {
    return inputArr
  }

  if (inputArr[0] === "triangle") {
    inputArr[2] = pineappleParagraph
    return inputArr
  }

  // iterate input array and push same amount of pineapples as input
  for (let i = 0; i < inputArr[0]; i++) {
    pineappleContainer.push(pineapple)
  }
  // set paragraph to amount of pineapples as a string
  pineappleParagraph.innerHTML = `${pineappleContainer.join("")}`

  // create new pineApple/row array
  if (inputArr[1] === undefined) {
    pineapplesAndRows = pineappleParagraph
    console.log(inputArr[1])
  } else {
    pineapplesAndRows = [pineappleParagraph, inputArr[1]]
  }

  // return the paragraph array
  return pineapplesAndRows
};

var display = function (stuffToDisplay) {
  
  // take pineapple paragraph as parameter
  console.log(stuffToDisplay)
  // your DOM manipulation code here
  let displayElement = document.querySelector("#output")

  if (stuffToDisplay[0] === "triangle") {
    let pineapple = `🍍`
    for (var i = 1; i <= 1; i++) {
      // Enter the first for loop for the number of lines
      for (var j = 1; j <= stuffToDisplay[1]; j++) {
        // Enter the second loop to figure how many *'s to print based on the current line number in i. So the 1st line will have 1 *, the second line will have 2 *s and so on.
        stuffToDisplay[2].innerHTML = `<p>${pineapple}</p>`
        displayElement.appendChild(stuffToDisplay[2].cloneNode(true))
        console.log(pineapple)
        pineapple += "🍍"
      }
    }
  }

  // check if not clear, append
  if (stuffToDisplay[0] !== "clear" && stuffToDisplay[0] !== "triangle") {
    // if row is more than 1, loop and append multiple rows
    if (stuffToDisplay[1] > 1) {
      for (let i = 1; i < stuffToDisplay[1]; i++) {
        displayElement.appendChild(stuffToDisplay[0])
        displayElement.appendChild(stuffToDisplay[0].cloneNode(true))
      }
    } else {
      // else just render the pineapples
      displayElement.appendChild(stuffToDisplay[0])
    }
  }
  // if input is clear, remove node as in second number
  if (stuffToDisplay[0] === "clear" && stuffToDisplay[1] === "all") {
    displayElement.innerHTML = ""
  } else if (stuffToDisplay[0] === "clear") {
    displayElement.removeChild(displayElement.childNodes[stuffToDisplay[1]])
  }
  document.querySelector("#input").value = ""
};