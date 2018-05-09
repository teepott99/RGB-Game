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
    //applies random color values to RGB inputs
    $("#red").val(r)
    $("#green").val(g)
    $("#blue").val(b)

    //applies random color to input div
    $("#input").css("background-color", randomRGB);
    return;
}

function changeValues() {
    let red = $("#red").val();
    let green = $("#green").val();
    let blue = $("#blue").val();

    //replaces div2 RGB values with those from input boxes
    $("#input").css("background-color", "rgb(" + red + ", " + green + ", " + blue + ")");
    ;
}

function randomMatchDiv() {
    //applies random color to match div
    $("#match").css("background-color", randomRGBMatch);
    return;
}

function calculateRed() {
    let redScore = $("#score-red");
    if ($("#red").val() >= rM) {
        redScore.text(Math.abs(($("#red").val() - rM) - 255));
    } else {
        redScore.text(Math.abs((rM - $("#red").val()) - 255));
    }
    console.log(redScore.innerText)
    return;
}
function calculateGreen() {
    let greenScore = $("#score-green");
    if ($("#green").val() >= gM) {
        greenScore.text(Math.abs(($("#green").val() - gM) - 255));
    } else {
        greenScore.text(Math.abs((gM - $("#green").val()) - 255));
    }
    return;
}
function calculateBlue() {
    let blueScore = $("#score-blue");
    if ($("#blue").val() >= bM) {
        blueScore.text(Math.abs(($("#blue").val() - bM) - 255));
    } else {
        blueScore.text(Math.abs((bM - $("#blue").val()) - 255));
    }
    return;
}

function totalScore() {
    
    return $("#score-blue")+$("#score-green")+$("#score-red");
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
    $(".game-start").toggle('show');
    setInterval(function(){
    counter--;
    if (counter >= 0) {
         span = document.getElementById("countdown");
         span.innerHTML = counter;
      }
      if (counter === 0) {
         console.log('sorry, out of time');
         
         clearInterval(counter);

         $(".scores").toggle();

         $('#myInput').attr('readonly', 'readonly');
         
         calculateRed();
         calculateGreen();
         calculateBlue();
         totalScore();
        
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
    changeValues();
    
});

    // var greenScore = document.getElementById("score-green");
    // var blueScore = document.getElementById("score-blue");
    
    // var totalScore = document.getElementById("total-score");
    // var totalScore = redScore+greenScore+blueScore;