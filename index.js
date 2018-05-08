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
         calculateScore();
       }
     }, 1000);
})

//calculate score
// function calculateRed(r, rM) {
//     var redScore = $("#score-red").text();
//     redScore = redScore.text(parseInt((Math.abs((r - rM) - 255)), 0));
//     return;
// }

function calculateRed(r, rM) {
    let redScore = $("#score-red");
    return redScore.text(Math.abs((r - rM) - 255));
}

console.log($("#score-red"))

$(document).ready(function(){
    randomInputDiv();
    randomMatchDiv();
    calculateRed();
    
});

    // var greenScore = document.getElementById("score-green");
    // var blueScore = document.getElementById("score-blue");
    
    // var totalScore = document.getElementById("total-score");
    // var totalScore = redScore+greenScore+blueScore;