function randomColors() {
    $("#modal-two").modal('hide');
    $(".game-start").show();
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
        console.log("Values picking up")
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
    function startGame() {
        var counter = 10;
        $(".game-start").toggle('show');
        // console.log("Start game.")
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
                $(".nextRound").show();

                $('#myInput').attr('readonly', 'readonly');
                
                calculateRed();
                calculateGreen();
                calculateBlue();
                totalScore();
            
            }
        }, 1000); 
    }
}


function roundSet() {
    
};

function totalScore() {
    var finalScore = [];
    
    $("#total-score")[0].innerHTML = Number($("#score-blue")[0].innerHTML)+Number($("#score-green")[0].innerHTML)+Number($("#score-red")[0].innerHTML);

    finalScore.push($("#total-score")[0].innerHTML);
    console.log(finalScore);

}

function firstMod() {
    $("#modal-one").modal('show');
    $("#modal-two").modal('hide');
}

function secondMod() {
    $("#modal-two").modal('show');
    $("#modal-one").modal('hide');
}

function round2() {
    $('#modal-r2').modal('hide');
    var counter = 10;
    $(".scores").toggle();
    $(".nextRound").toggle();
    $(".game-start").show;
        // console.log("Start game.")
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
            $(".nextRound").show();
    
            $('#myInput').attr('readonly', 'readonly');
            
            calculateRed();
            calculateGreen();
            calculateBlue();
            totalScore();
            
        }
    }, 1000)
}


function clearMessage(event) {
    event.preventDefault();  // Stops the page from refreshing
    var screen = document.getElementById("screen");
    screen.innerHTML = '';
}

function nextRound() {
    $('#modal-r2').modal('show');
    $(".game-start").hide();
}

$(window).on('load',function(){
    $('#modal-one').modal('show');
    $('#modal-two').modal('hide');
    $(".nextRound").hide();
    $(".game-start").hide();
});

