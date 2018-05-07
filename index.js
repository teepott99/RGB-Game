var inputColor = [
    {r: 30, g:50, b:60},
];
var input = $("#input");

function rgb() {
    //grabs the values of the input boxes
    var red = $("#red").val();
    var green = $("#green").val();
    var blue = $("#blue").val();
    //replaces div2 RGB values with those from input boxes
    input.css("background-color", "rgb(" + red + ", " + green + ", " + blue + ")");
    ;

}

function randomSelector(arr){
    if (arr === []) {
    return;
    } else {
        var random = arr[Math.floor(Math.random() * arr.length)];
        return random;
    }
}

// var colorValues = [];

// function pushColor() {
//     colorValues.push(randomSelector(inputColor));
//     return colorValues;
// }

function randomInputDiv(inputColor) {
    input.css("background-color", "rgb(" + inputColor[0].r + ", " + inputColor[0].g + ", " + inputColor[0].b + ")");
    $("#red").val(inputColor[0].r)
    $("#green").val(inputColor[0].g)
    $("#blue").val(inputColor[0].b)
    return;
}

// console.log(randomInputDiv(colorValues))

$(document).ready(function(){
    rgb();
    randomInputDiv(inputColor)
});