

document.querySelector('#input').addEventListener('change', function(event){
        var currentInput = event.target.value;

        checkUserInput(currentInput);
});

var getEmoji = function(number){
    var i = 0;
    var pineapples = "";
    for (i; i < number; i++) {
        pineapples = pineapples + "🍍";
    }
    return pineapples
}
var createPara = function(emoji) {
    var para = document.createElement("p");
    var node = document.createTextNode(emoji);
    para.appendChild(node);
    var disp = document.getElementById("display");
    disp.appendChild(para);
}
var userInputToArray = function(string){

    var inputArray = string.split(" ")

    var wordArray = inputArray.filter(function (item) {
    return !(parseInt(item) == item);
    });

    var numArray  = inputArray.filter(function (item) {
    return (parseInt(item) == item);
    });
    console.log(numArray)
    console.log("user input " + numArray.lenth + " numbers")

    var emoji = []
    for (var i = 0; i <= 0; i++) {
        emoji.push(parseInt(numArray[i]))
    }

    return emoji
};

var checkUserInput = function(userinput){
    var numInput = userInputToArray(userinput);
    console.log(numInput)
    if(numInput.lenth === 1){
        var emoji = parseInt(numInput[0])
        createPara(getEmoji(emoji));
    } else {
        var emojiOne = parseInt(numInput[0])
        var emojiTwo = parseInt(numInput[1])
        createPara(getEmoji(emojiOne));
        createPara(getEmoji(emojiTwo));

    }

}



var createParaTwo = function(){
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
}
// function clearContent() {
//     var parent = document.getElementById("wrapper");
// var child = document.getElementById("output");
// parent.removeChild(child);
// }