var boundaries = 0;
var currentC=0;

var clearBoardField = function() {
    document.getElementById('board-size').value = '';
};

var changeInputSetGame = function () {
    document.getElementById('span-name').innerText = `Game Move: `;

    document.getElementById('board-size').removeAttribute('type');
    document.getElementById('board-size').setAttribute('type','text');

    document.getElementById('board-button').removeAttribute('onclick');
    document.getElementById('board-button').setAttribute('onclick','moveBoard()');
    document.getElementById('board-button').innerText = 'Move!';
};

var resetBoard = function() {
    var display = document.getElementById(display2);
    for (var i = 0; i<(boundaries*boundaries);i++) {
        display2.removeChild(display2.children[0]);
    }

    document.getElementById('span-name').innerText ='Board size: ';

    document.getElementById('board-size').removeAttribute('type');
    document.getElementById('board-size').setAttribute('type','number');

    document.getElementById('board-button').removeAttribute('onclick');
    document.getElementById('board-button').setAttribute('onclick','createBoard()');
    document.getElementById('board-button').innerText = 'Create Board';

    currentC=0;
    boundaries=0;
}

var createBoard= function(){
    var rowsColumn = parseInt(document.getElementById('board-size').value);
    boundaries = rowsColumn;
    var display2 = document.getElementById('display2');
    clearBoardField();
    console.log(rowsColumn);
    var buildCount = 0;
    var percent=95/rowsColumn;

    while (buildCount<(rowsColumn*rowsColumn)){
        var block = document.createElement('p');
        block.classList.add('grid');
        block.setAttribute("id",`${buildCount}`);
        block.style.width = `${percent}%`;
        if (buildCount===0){
            block.innerText = 'c';
        } else {
            block.innerHTML = '&nbsp;&nbsp;';
        }

        display2.appendChild(block);
        buildCount++;
    }

    changeInputSetGame();
};

var moveBoard = function(){
    var move = document.getElementById('board-size').value;
    clearBoardField();

    var moveArray= move.split(' ');
    var moveTimes= parseInt(moveArray[1]);

    switch (moveArray[0].toLowerCase()){
        case 'up':
            if ((currentC - (boundaries*moveTimes) < 0)) {
                alert('Invalid Move');
                break;
            } else {
                for (var i = 0; i<moveTimes;i++){
                    document.getElementById(`${currentC}`).innerText = '🍍';
                    currentC -= boundaries;
                }
                document.getElementById(`${currentC}`).innerText = 'c';
                break;
            }
            break;
        case 'down':
            if((currentC)+(boundaries*moveTimes)>(boundaries*boundaries)) {
                alert('Invalid Move');
                break;
            }             else {
                for (var i = 0; i<moveTimes;i++){
                    document.getElementById(`${currentC}`).innerText = '🍍';
                    currentC += boundaries;
                }
                document.getElementById(`${currentC}`).innerText = 'c';
                break;
            }
            break;
        case 'left':
            var checkDenied = true;
            if ((currentC >= 0 && currentC <= (boundaries-1)) && ((currentC - moveTimes) >= 0)) {
                for (var i = 0; i<moveTimes;i++){
                    document.getElementById(`${currentC}`).innerText = '🍍';
                    currentC -= 1;
                }
                document.getElementById(`${currentC}`).innerText = 'c';
                break;
            }

            for (var i=1; i<= boundaries;i++) {
                if ((currentC >= (boundaries*i) && currentC < (boundaries*(i+1))) && ((currentC - moveTimes) >= (boundaries*i))){
                for (var i = 0; i<moveTimes;i++){
                    document.getElementById(`${currentC}`).innerText = '🍍';
                    currentC -= 1;
                }
                document.getElementById(`${currentC}`).innerText = 'c';
                checkDenied = false;
                break;
                }
            }
            if(checkDenied) {
                alert('Invalid Move');
            }
            break;
        case 'right':
            var checkDenied = true;
            if ((currentC >= 0 && currentC <= (boundaries-1)) && ((currentC + moveTimes) <= (boundaries-1))) {
                for (var i = 0; i<moveTimes;i++){
                    document.getElementById(`${currentC}`).innerText = '🍍';
                    currentC += 1;
                }
                document.getElementById(`${currentC}`).innerText = 'c';

                break;
            }

            for (var i=1; i<= boundaries;i++) {
                if ((currentC >= (boundaries*i) && currentC < (boundaries*(i+1))) && ((currentC + moveTimes) < (boundaries*(i+1)))){
                for (var i = 0; i<moveTimes;i++){
                    document.getElementById(`${currentC}`).innerText = '🍍';
                    currentC += 1;
                    }
                document.getElementById(`${currentC}`).innerText = 'c';
                checkDenied = false;
                break;
                }
            }
            if(checkDenied) {
                alert('Invalid Move');
            }
            break;
    }
};