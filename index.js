var r = Math.floor(Math.random()*256);          // Random between 0-255
var g = Math.floor(Math.random()*256);          // Random between 0-255
var b = Math.floor(Math.random()*256);          // Random between 0-255
var randomRGB = 'rgb(' + r + ',' + g + ',' + b + ')'; // Collect all to a string


var input = $("#input");
var colorValues = [];

function rgb() {
    //grabs the values of the input boxes
    var red = $("#red").val();
    var green = $("#green").val();
    var blue = $("#blue").val();
    //replaces div2 RGB values with those from input boxes
    input.css("background-color", randomRGB);
}

function randomInputDiv() {
    //applies random color to input div
    input.css("background-color", randomRGB);
    //applies random color values to RGB inputs
    $("#red").val(r)
    $("#green").val(g)
    $("#blue").val(b)
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
       }
     }, 1000);
})

$(document).ready(function(){
    rgb();
    // pushColor();
    randomInputDiv();
});

