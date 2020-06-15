const rowsButton = document.querySelector("#rows");
const triButton = document.querySelector("#triangles");
let emojiArr = [];


const makeRows = (e) => {
  const content = document.querySelector(".content");
  content.innerHTML = "";

  const title = document.createElement("h1");
  title.innerText = "YOU ARE IN THE ROWS MODE";
  content.appendChild(title);

  const description = document.createElement("p");
  description.innerText =
    "Please insert the numbers of rows that you want to display, and press enter";
  content.appendChild(description);

  const inputRows = document.createElement("input");
  inputRows.id = "inputRows";

  content.appendChild(inputRows);
  inputRows.addEventListener("change", inputHappened);

  const rowsDisplay = document.createElement("div");
  rowsDisplay.className = "display";
  document.querySelector("body").appendChild(rowsDisplay);

  const clearButton = document.createElement('button');
  clearButton.class = "clearButton";
  clearButton.innerText = "clear";
  clearButton.addEventListener("click", clear)
  content.appendChild(clearButton);
};

const inputHappened = (e) => {
  emojiArr = [];

  const rows = document.createElement('div');
  rows.className = 'rowsEmoji';
  const inputValue = e.target.value;
  console.log("inputValue", inputValue);
  
  for (let i = 0; i < inputValue; i++) {
    emojiArr.push("🍓");
  }
  console.log("emojiArr", emojiArr);
  rows.innerHTML = emojiArr;
  
 
  document.querySelector(".display").appendChild(rows);
};

const clear = () =>{

document.querySelector(".display").innerHTML = "";

}

rowsButton.addEventListener("click", makeRows);
