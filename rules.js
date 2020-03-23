var rulesModal = document.createElement("div");
rulesModal.setAttribute("class", "modal");
rulesModal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h1>RULES</h1>
                <h3>Enter the number of characters you wish to print</h3>
                <h3>Enter "clear" to clear everything, or "clear" followed by a number to clear a specific line (eg. "clear 6" will clear characters on line 6)</h3>
                <h3>To print a triangle, or a triangle-in-reverse, enter "triangle" or "rtriangle" respectively, followed by a number (eg. "triangle 6" or "rtriangle 3"). The triangle's base will be formed by that number of characters.
                <h4>
            </div>
    `

var rulesBtn = document.createElement("button");
rulesBtn.setAttribute("class", "btn");
rulesBtn.innerHTML = `Rules`

document.body.insertAdjacentElement("afterbegin", rulesBtn);
document.body.insertAdjacentElement("afterbegin", rulesModal);

var closeBtn = document.querySelector(".close-btn");

var toggleRulesModal = () => {
    rulesModal.classList.toggle("show-modal");
    document.body.classList.toggle("dim-background");
}

rulesBtn.addEventListener("click", toggleRulesModal);
closeBtn.addEventListener("click", toggleRulesModal);