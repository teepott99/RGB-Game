//Sets random values for Input Div
var r = Math.floor(Math.random()*256);          // Random between 0-255
var g = Math.floor(Math.random()*256);          // Random between 0-255
var b = Math.floor(Math.random()*256);          // Random between 0-255
var randomRGB = 'rgb(' + r + ',' + g + ',' + b + ')'; // Collect all to a string

//Sets random values for Match Div
var rM = Math.floor(Math.random()*256);          // Random between 0-255
var gM = Math.floor(Math.random()*256);          // Random between 0-255
var bM = Math.floor(Math.random()*256);          // Random between 0-255
var randomRGBMatch = 'rgb(' + rM + ',' + gM + ',' + bM + ')'; // Collect all to a string

function randomInputDiv() {
    //applies random color to input div
    $("#input").css("background-color", randomRGB);
    //applies random color values to RGB inputs
    $("#red").val(r)
    $("#green").val(g)
    $("#blue").val(b)
    return;
}

function randomMatchDiv() {
    //applies random color to match div
    $("#match").css("background-color", randomRGBMatch);
    return;
}

function calculateRed() {
    var redScore = $("#score-red");
    if (r >= rM) {
        redScore.text(Math.abs((r - rM) - 255));
    } else {
        redScore.text(Math.abs((rM - r) - 255));
    }
    return;
}
function calculateGreen() {
    var greenScore = $("#score-green");
    if (g >= gM) {
        greenScore.text(Math.abs((g - gM) - 255));
    } else {
        greenScore.text(Math.abs((gM - g) - 255));
    }
    return;
}
function calculateBlue() {
    var blueScore = $("#score-blue");
    if (b >= bM) {
        blueScore.text(Math.abs((b - bM) - 255));
    } else {
        blueScore.text(Math.abs((bM - b) - 255));
    }
    return;
}

// var total = eval(redScore + greenScore + blueScore);

// var total = reduce("calculateRed() + calculateBlue() + calculateGreen()");

// function totalScore(){ 
//     var total = $("#total-score");
//     total = (+calculateRed() + (+calculateBlue()) + (+calculateGreen()));
// };

// function totalScore() {
//     return $("#total-score").text(Math.abs(calculateRed()+calculateGreen()+calculateBlue()))
// }

//Start button begins countdown
$("#start-btn").click(function(){
    var counter = 10;
    setInterval(function(){
    counter--;
    if (counter >= 0) {
         span = document.getElementById("countdown");
         span.innerHTML = counter;
      }
      if (counter === 0) {
         console.log('sorry, out of time');
         
         clearInterval(counter);
         
         calculateRed();
         calculateGreen();
         calculateBlue();
        //  total;
       }
     }, 1000);
})

//calculate score
// function calculateRed(r, rM) {
//     var redScore = $("#score-red").text();
//     redScore = redScore.text(parseInt((Math.abs((r - rM) - 255)), 0));
//     return;
// }


$(document).ready(function(){
    randomInputDiv();
    randomMatchDiv();
    
});

    // var greenScore = document.getElementById("score-green");
    // var blueScore = document.getElementById("score-blue");
    
    // var totalScore = document.getElementById("total-score");
    // var totalScore = redScore+greenScore+blueScore;