let finalScores = [];

function randomColors() {
    
    $("#modal-two").modal('hide');
    $("#modal-r2").modal('hide');
    $(".game-start").show();
    
    //Sets random values for Input Div
    let r = Math.floor(Math.random()*256);          // Random between 0-255
    let g = Math.floor(Math.random()*256);          // Random between 0-255
    let b = Math.floor(Math.random()*256);          // Random between 0-255
    let randomRGB = "linear gradient(rgba(" + r + ", " + g + ", " + b + ", 0)," + "rgba("+ r + ", " + g + ", " + b + ", 1))"; // Collect all to a string

    //Sets random values for Match Div
    let rM = Math.floor(Math.random()*256);          // Random between 0-255
    let gM = Math.floor(Math.random()*256);          // Random between 0-255
    let bM = Math.floor(Math.random()*256);          // Random between 0-255
    let randomRGBMatch = 'rgb(' + rM + ',' + gM + ',' + bM + ')'; // Collect all to a string

    randomInputDiv();
    randomMatchDiv();    
    changeValues();
    gameRounds();

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
        $("#red").val(r)
        $("#green").val(g)
        $("#blue").val(b)
        //applies random color to input div
        $("#input").css("background", randomRGB);
        return;
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
        $("#total-score")[0].innerHTML = Number($("#score-blue")[0].innerHTML)+Number($("#score-green")[0].innerHTML)+Number($("#score-red")[0].innerHTML);
        
    }

    function finalScore() {
        finalScores.push($("#total-score")[0].innerHTML);
        console.log(finalScores);
    }

    function displayMatch() {
        let matchValues = $("#displayMatchValues");
        matchValues[0].innerHTML = rM + ", " + gM + ", " + bM;
    }


    function startGame() {
        console.log("startGame")
        var counter = 16;
        var countdown = 4;

        $(".scores").hide();
        $("#displayMatchValues").hide();

        $(".nextRoundBtn").hide();
        $(".lastRoundBtn").hide();
        $(".gameEndBtn").hide();
        $('#modal-last').modal('hide');
        
        setInterval(function(){
            countdown--;
            if (countdown >= 0) {
                span = document.getElementById("countdown");
                span.innerHTML = countdown;
                $("#countdown-screen").show();
                $(".rgb-input").prop('disabled', true);
            }
            if (countdown === 0) {
                $("#countdown-screen").hide();
                setInterval(function(){
                        counter--;
                    if (counter >= 0) {
                            span = document.getElementById("counter");
                            span.innerHTML = counter;
                            $(".rgb-input").prop('disabled', false);
                        }
                    if (counter === 0) {
                        console.log('sorry, out of time');
                        
                        clearInterval(counter);
                        
                        displayMatch();
                        calculateRed();
                        calculateGreen();
                        calculateBlue();
                        totalScore();
                        finalScore();
                        
            
                        $(".rgb-input").prop('disabled', true);
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
        }, 1000)
    }


    function finalStart() {
        console.log("startGame")
        var counter = 16;
        var countdown = 4;

        $(".scores").hide();
        $("#displayMatchValues").hide();

        $(".nextRoundBtn").hide();
        $(".lastRoundBtn").hide();
        $(".gameEndBtn").hide();
        $('#modal-r3').modal('hide');
        
        setInterval(function(){
            countdown--;
            if (countdown >= 0) {
                span = document.getElementById("countdown");
                span.innerHTML = countdown;
                $("#countdown-screen").show();
                $(".rgb-input").prop('disabled', true);
            }
            if (countdown === 0) {
                $("#countdown-screen").hide();
                setInterval(function(){
                        counter--;
                    if (counter >= 0) {
                            span = document.getElementById("counter");
                            span.innerHTML = counter;
                            $(".rgb-input").prop('disabled', false);
                        }
                    if (counter === 0) {
                        console.log('sorry, out of time');
                        
                        clearInterval(counter);
            
                        $(".rgb-input").prop('disabled', true);
                        $(".scores").show();
                        
                        $("#displayMatchValues").show();

                        $(".gameEndBtn").show();
                        
                        displayMatch();
                        calculateRed();
                        calculateGreen();
                        calculateBlue();
                        totalScore();
                        finalScore();
                    
                    }
                }, 1000); 
            }
        }, 1000)
    }
}        


function getSum(total, num) {
    return total + num;
}

function displayFinalScore(item) {
    return $("#final-score")[0].innerHTML = finalScores.reduce(getSum, 0);
}

function secondMod() {
    $("#modal-two").modal({        
        backdrop: 'static', 
        backdrop: false,
        keyboard: false,
        show: true,});
    $("#modal-one").modal('hide');
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

function changeValues() {
    let red = $("#red").val();
    let green = $("#green").val();
    let blue = $("#blue").val();
    // console.log("Values picking up")
    //replaces div2 RGB values with those from input boxes
    $("#input").css("background", "linear-gradient(rgba(" + red + ", " + green + ", " + blue + ", 0)," + " rgba("+ red + ", " + green + ", " + blue + ", 1))");
    
}

//SCRUBBER FUNCTION
$ (function() {
    var inputMinBlack = parseInt($(".black").attr("min"), 10);
    var inputMaxBlack = parseInt($(".black").attr("max"), 10);
  
    var inputWidth = parseInt($(".inputNumber").innerWidth(), 10);
  
    $(".slider").width(inputWidth);
    $(".sliderBlack").slider({
      range: "min",
      value: 0,
      min: inputMinBlack,
      max: inputMaxBlack,
      slide: black
    });
  
    function black(event, slider) {
      $(".black").val(slider.value);
    }
  
})



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
