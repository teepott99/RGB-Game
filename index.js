var red = $("#red").val();
var green = $("#green").val();
var blue = $("#blue").val();

var inputColor = [
    {r: 30, g:50, b:60},
];

$( ".rgb-input" ).change(function updateColor(){
    $("#red").val(red);
    $("#green").val(green);
    $("#blue").val(blue);
});




// var inputStart = ['rgb(30, 50, 60)'];

// function rgb(r, g, b) {
//     return "rgb("+r+","+g+","+b+")";
// } 
// document.getElementById("id1").style.backgroundColor = rgb;

function rgb() {
    document.getElementById("input").style.backgroundColor =
    "rgb(" + red + ", " + green + ", " + blue + ")";
  }

// function colorChange(e) {
//         var name = e.name;
//         var val = e.val;
        
//         return $('#input').css("background-color", "rgb(" + red + ", " + green + ", " + blue + ")");
//   }

//   $( ".rgb-input" ).change(rgb);


// document.addEventListener('DOMContentLoaded',function() {
//     document.querySelector('select[class="rgb-input"]').onchange=changeEventHandler;
// },false);

// function changeEventHandler(event) {
//     return $('#input').css("background-color", "rgb(" + red + ", " + green + ", " + blue + ")");
// }

// $('#red').change(function() {
//     $('#red').val($('#red').val());
//   });

// matchColor().onChange;

// function updateInput(ish){
//     $("#red").value = ish;
// }


// $(document).ready(function() {
    
// });

// $(".red").onChange = function() {
//     var red = 30;
// }

//REFERENCE CODE
// var inputLtc = document.getElementById('input-ltc'),
// inputBtc = document.getElementById('input-btc');

// var constantNumber = 2;

// inputLtc.onchange = function() {
//    var result = parseFloat(inputLtc.value) * constantNumber;
//    inputBtc.value = !isNaN(result) ? result : '';
// };

// function random_rgba() {
//     var o = Math.round, r = Math.random, s = 255;
//     return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
// }

// var color = random_rgba();

// g.fillStyle   = color;
// g.strokeStyle = color;


// $(document).ready(function(){
//     $("#txt_name").keyup(function(){
//       alert(this.value);
//     });
//   });

// $( "#red" ).change( matchColor );
// matchColor();