let finalScores = [];

function randomColors() {
    
    $("#modal-two").modal('hide');
    $("#modal-r2").modal('hide');
    $(".game-start").show();
    
    //Sets random values for Match Div
    let rM = Math.floor(Math.random()*256);          // Random between 0-255
    let gM = Math.floor(Math.random()*256);          // Random between 0-255
    let bM = Math.floor(Math.random()*256);          // Random between 0-255
    let randomRGBMatch = 'rgb(' + rM + ',' + gM + ',' + bM + ')';

    //Sets random values for Input Div, ensuring it's distinct from the match color
    let r, g, b;
    do {
        r = Math.floor(Math.random()*256);
        g = Math.floor(Math.random()*256);
        b = Math.floor(Math.random()*256);
    } while (Math.abs(r - rM) + Math.abs(g - gM) + Math.abs(b - bM) < 255);

    randomInputDiv();
    randomMatchDiv();    
    // changeValues();
    gameRounds();

    // dictates whether to run through round 1||2 or final round
    function gameRounds() {
        if (finalScores.length >= 2) {
            finalStart();
            console.log("final start in game rounds function")
        } else {
            startGame();
            console.log("start game in game rounds function")
        }
    }

    function randomInputDiv() {
        //applies random color values to RGB inputs
        $("#red").text(r)
        $("#green").text(g)
        $("#blue").text(b)
        //applies random color to input div
        $("#input").css("background", "linear-gradient(rgba(" + r + ", " + g + ", " + b + ", 0), rgba(" + r + ", " + g + ", " + b + ", 1))");
        return;
    }

    function randomMatchDiv() {
        //applies random color to match div
        $("#match").css("background-color", randomRGBMatch);
        return;
    }

    function calculateRed() {
        let redScore = $("#score-red");
        if ($("#red").text() >= rM) {
            redScore.text(Math.abs(($("#red").text() - rM) - 255));
        } else {
            redScore.text(Math.abs((rM - $("#red").text() - 255)));
        }
        return;
    }
    function calculateGreen() {
        let greenScore = $("#score-green");
        if ($("#green").text() >= gM) {
            greenScore.text(Math.abs(($("#green").text() - gM) - 255));
        } else {
            greenScore.text(Math.abs((gM - $("#green").text()) - 255));
        }
        return;
    }
    function calculateBlue() {
        let blueScore = $("#score-blue");
        if ($("#blue").text() >= bM) {
            blueScore.text(Math.abs(($("#blue").text() - bM) - 255));
        } else {
            blueScore.text(Math.abs((bM - $("#blue").text()) - 255));
        }
        return;
    }

    
    function totalScore() {
        let sum = Number($("#score-blue")[0].innerHTML) + Number($("#score-green")[0].innerHTML) + Number($("#score-red")[0].innerHTML);
        let pct = Math.round(sum / 765 * 100);
        $("#total-score")[0].innerHTML = pct + "%";
    }

    function finalScore() {
        finalScores.push($("#total-score").html());
        console.log(finalScores);
    }

    function displayMatch() {
        // let matchValues = $("#displayMatchValues");
        // matchValues[0].innerHTML = rM + ", " + gM + ", " + bM;
        $("#match-red")[0].innerHTML = rM;
        $("#match-green")[0].innerHTML = gM;
        $("#match-blue")[0].innerHTML = bM;
    }

    // function lockSpan(color){
    //     return color;
    // }

    function startGame() {
        console.log("startGame")
        var counter = 16;
        // var countdown = 4;

        $(".scores").hide();
        $("#displayMatchValues").hide();

        $(".nextRoundBtn").hide();
        $(".lastRoundBtn").hide();
        $(".gameEndBtn").hide();
        $('#modal-last').modal('hide');
        
        $("#red").disabled;
        
    
        $("#countdown-screen").hide();
        setInterval(function(){
                counter--;
            if (counter >= 0) {
                    span = document.getElementById("counter");
                    span.innerHTML = counter;
                    $(".rgb-input").css("pointer-events", "auto");
                }
            if (counter === 0) {
                console.log('sorry, out of time');

                clearInterval(counter);
                $(".rgb-input").css("pointer-events", "none");

                displayMatch();
                calculateRed();
                calculateGreen();
                calculateBlue();
                totalScore();
                finalScore();

                $(".scores").show();
                $("#displayMatchValues").show();
                
                //Determins whether second round or last round display shows.
                if (finalScores.length >= 2) {
                    $(".lastRoundBtn").show();
                    
                    console.log("last round button")
                } else {
                    
                    $(".nextRoundBtn").show();
                    console.log("next round button")
                }
            
            }
        }, 1000); 

    }


    function finalStart() {
        console.log("startGame")
        var counter = 16;
        var countdown = 4;

        //hide bottons, modal, scores, and other div RGB values
        $(".scores").hide();
        $("#displayMatchValues").hide();
        $(".nextRoundBtn").hide();
        $(".lastRoundBtn").hide();
        $(".gameEndBtn").hide();
        $('#modal-r3').modal('hide');
        
        //countdown for game
        setInterval(function(){
                counter--;
            if (counter >= 0) {
                    span = document.getElementById("counter");
                    span.innerHTML = counter;
                    $(".rgb-input").css("pointer-events", "auto");
                }
            if (counter === 0) {
                console.log('sorry, out of time');

                clearInterval(counter);
                $(".rgb-input").css("pointer-events", "none");

                $(".scores").show();
                $("#displayMatchValues").show();
                $(".gameEndBtn").show();

                
                
                displayMatch();
                calculateRed();
                calculateGreen();
                calculateBlue();
                totalScore();
                finalScore();
                displayFinalScore()
            }
        }, 1000); 
    }
}
      

//changes html to display final score in end of game modal
function displayFinalScore() {
    return $("#final-score")[0].innerHTML = calculateTotalScore(finalScores);
}

//calculating final score from total scores array
function calculateTotalScore(arr){
    let val = 0;
    arr.forEach((num) => {
        val += Number(String(num).replace('%', ''));
    })
    return Math.round(val / arr.length) + "%";
}

function firstMod() {
    $("#modal-one").modal({
        backdrop: 'static', 
        backdrop: false,
        keyboard: false,
        show: true,});
    $("#modal-two").modal('hide');
}

function secondMod() {
    $("#modal-one").modal('hide');
    $("#modal-two").modal({        
        backdrop: 'static', 
        backdrop: false,
        keyboard: false,
        show: true,});
    
}

function nextRound() {
    $('#modal-r2').modal({        
        backdrop: 'static', 
        backdrop: false,
        keyboard: false,
        show: true,});
}

function resetGame() {
    finalScores = [];
    $('#modal-one').modal({        
        backdrop: 'static', 
        backdrop: false,
        keyboard: false,
        show: true,}) 
    $('#modal-two').modal('hide');
    $('#modal-last').modal('hide');
    $(".game-start").hide();
}

//Color span limit function
function limitValues(num) {
    if (num >= 255) {
        return 255;
    } else if (num <= 0) {
        return 0;
    } else {
        return num;
    }
}

//SCRUBBER FUNCTION
var scurbberAdapter = {
    init : function ( scrubbingElement ) { },

    start : function ( scrubbingElement ) {
       return Number(scrubbingElement.node.innerHTML); 
      },

   change : function ( scrubbingElement, value, delta ) {
       scrubbingElement.node.innerHTML = limitValues(value);
       let red = $("#red").text();
       let green = $("#green").text();
       let blue = $("#blue").text();
       $("#input").css("background", "linear-gradient(rgba(" + red + ", " + green + ", " + blue + ", 0), rgba(" + red + ", " + green + ", " + blue + ", 1))");
   },

   end : function ( scrubbingElement ) { }
}

new Scrubbing ( document.querySelector ( '#red'), {
    adapter: scurbberAdapter
} );
new Scrubbing ( document.querySelector ( '#green'), {
    adapter: scurbberAdapter
} );
new Scrubbing ( document.querySelector ( '#blue'), {
    adapter: scurbberAdapter
} );

function niceJobBtn() {
    $('#modal-last').modal({        
        backdrop: 'static', 
        backdrop: false,
        keyboard: false,
        show: true,});
    $(".game-start").hide();
}

function lastRound() {
    $('#modal-r3').modal({        
    backdrop: 'static', 
    backdrop: false,
    keyboard: false,
    show: true,});
    $(".game-start").hide();

}

$(window).on('load',function(){
    
    $('#modal-one').modal({
        backdrop: 'static', 
        backdrop: false,
        keyboard: false,
        show: true,
      }) 
    $('#modal-two').modal('hide');
    $(".nextRoundBtn").hide();
    $(".game-start").hide();
    // Numscrubber.init();
});
