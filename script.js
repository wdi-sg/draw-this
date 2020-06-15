const gameObj = {
  rows: {
    mode: "rows",
    title: "YOU ARE IN THE ROWS MODE",
    description:
      "Please insert the numbers of rows that you want to display, and press enter",
    id: "inputRows",
  },
  triang: {
    mode: "triang",
    title: "YOU ARE IN THE TRIANGLES MODE",
    description:
      "please insert the numbers of emoji that you want to make your triangle side",
    id: "inputTriang",
  },
};

let emojiArr = [];

//---------------------------------ROWS------------------//
const makeRows = (e) => {
  appendingElements(
    gameObj.rows.title,
    gameObj.rows.description,
    gameObj.rows.id,
    inputHappenedRows
  );
};

const inputHappenedRows = (e) => {
  emojiArr = [];
  const rows = document.createElement("div");
  rows.className = "rowsEmoji";
  const inputValue = e.target.value;
  console.log("inputValue", inputValue);

  for (let i = 0; i < inputValue; i++) {
    emojiArr.push("🍓");
  }
  console.log("emojiArr", emojiArr);
  rows.innerHTML = emojiArr;

  document.querySelector(".display").appendChild(rows);
};

//---------------------------TRIANGLES-------------//

const makeTriang = (e) => {
  appendingElements(
    gameObj.triang.title,
    gameObj.triang.description,
    gameObj.triang.id,
    inputHappenedTriang
  );
};

const inputHappenedTriang = (e) => {
  document.querySelector(".display").innerHTML = "";
  const numbBlocksArr = [];

  const numbBlocks = e.target.value;
  for (let i = 0; i < numbBlocks; i++) {
    const numbBlocksEl = document.createElement("div");
    numbBlocksEl.className = "rowsEmoji";
    numbBlocksArr[i] = "🍓";
    numbBlocksEl.innerHTML = numbBlocksArr;
    document.querySelector(".display").appendChild(numbBlocksEl);

    console.log("numbBlocksArr", numbBlocksArr);
  }
};

//-----------------APPEND ELEMENTS FUNCTION------------------//
const appendingElements = (titleText, descriptionGame, id, inputFunction) => {
  const content = document.querySelector(".content");
  const title = document.createElement("h1");
  const description = document.createElement("p");
  const inputRows = document.createElement("input");
  const rowsDisplay = document.createElement("div");
  const clearButton = document.createElement("button");
  content.innerHTML = "";
  title.innerText = titleText;

  content.appendChild(title);
  description.innerText = descriptionGame;

  content.appendChild(description);

  inputRows.id = id;

  content.appendChild(inputRows);
  inputRows.addEventListener("change", inputFunction);

  rowsDisplay.className = "display";
  document.querySelector("body").appendChild(rowsDisplay);

  clearButton.class = "clearButton";
  clearButton.innerText = "clear";
  clearButton.addEventListener("click", clear);
  content.appendChild(clearButton);
};
//-------------------------------CLEAR FUNCTION-----------------------//
const clear = () => {
  document.querySelector(".display").innerHTML = "";
};
//---------------------------event listeners-------------------//
document.querySelector("#rows").addEventListener("click", makeRows);

document.querySelector("#triangles").addEventListener("click", makeTriang);
