var inputColor = [
    {r: 30, g:50, b:60},
];

function rgb() {
    var red = $("#red").val();
    var green = $("#green").val();
    var blue = $("#blue").val();
    
    document.getElementById("input").style.backgroundColor =
    "rgb(" + red + ", " + green + ", " + blue + ")";

  }

$(document).ready(function(){
    rgb();
});