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
        $("#red")[0].innerHTML(r)
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
        if ($("#red")[0].innerHTML() >= rM) {
            redScore.text(Math.abs(($("#red")[0].innerHTML() - rM) - 255));
        } else {
            redScore.text(Math.abs((rM - $("#red")[0].innerHTML()) - 255));
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
    let red = $("#red")[0].innerHTML();
    let green = $("#green").val();
    let blue = $("#blue").val();
    // console.log("Values picking up")
    //replaces div2 RGB values with those from input boxes
    $("#input").css("background", "linear-gradient(rgba(" + red + ", " + green + ", " + blue + ", 0)," + " rgba("+ red + ", " + green + ", " + blue + ", 1))");
    
}

//SCRUBBER FUNCTION
/*! Scrubbing 02-01-2014 * Fabrice Weinberg */
!function(a,b){var c=function(a,b){return a?"string"==typeof a?b[a]:a:void 0},d=function(a,b,d,e,f){a[f]=b?c(b[f],e)||d[f]:d[f]},e=function(a,b,c,d,e){Array.isArray(a)?a.forEach(function(a){a[b](c,d,e)}):a[b](c,d,e)},f={init:function(){},start:function(a){return parseInt(a.node.textContent,10)},change:function(a,b){a.node.textContent=b},end:function(){}},g=function(a,b,c,d){this.name=a,this.prop=b,this.factor=c||1,this.divider=d||1};g.prototype={coordinate:function(a){return a[this.prop]},value:function(a,b){return this.factor*Math.floor((b-a)/this.divider)}};var h=function(a,b,c){return function(d){return new g(a,b,c,d)}},i=h("Horizontal","clientX"),j=h("Vertical","clientY",-1),k=function(){var b,c,d=function(){this.removeEventListener("mousemove",b,!1),c&&c.options.adapter.end(c)},e=function(e){if(e.target.scrubbingElement){e.preventDefault(),c=e.target.scrubbingElement;var f=c.options.adapter.start(c),g=function(a){return c.options.resolver.coordinate(a)},h=g(e);return b=function(a){if(1===a.which){var b=c.options.resolver.value(h,g(a));c.options.adapter.change(c,f+b,b)}else d()},a.addEventListener("mousemove",b,!1),a.addEventListener("mouseup",d,!1),!0}},f=function(){a.addEventListener("mousedown",e,!1),f=function(){}};return{init:function(){f()},remove:function(){}}}(),l=function(a){var b,c,d=function(){a.removeEventListener("touchmove",c,!1),b&&b.options.adapter.end(b)},e=function(d){if(1===d.targetTouches.length){var e=d.targetTouches[0];if(e.target.scrubbingElement){d.preventDefault(),b=e.target.scrubbingElement;var f=b.options.adapter.start(b),g=function(a){return b.options.resolver.coordinate(a)},h=g(e);c=function(a){if(1===a.targetTouches.length){a.preventDefault();var c=b.options.resolver.value(h,g(a.targetTouches[0]));b.options.adapter.change(b,f+c,c)}},a.addEventListener("touchmove",c,!1)}}},f=function(){a.addEventListener("touchcancel",d,!1),a.addEventListener("touchend",d,!1),f=function(){}};return{init:function(a){f(),a.node.addEventListener("touchstart",e,!1)},remove:function(){}}}(a,b),m=function(){return{init:function(a){a.node.addEventListener("mousewheel",function(b){b.preventDefault();var c=a.options.adapter.start(a);a.options.adapter.change(a,c-b.wheelDelta,b.wheelDelta)},!1)},remove:function(){}}}(a),n={driver:[l,k],resolver:i(),adapter:f},o=function(a,b){return this instanceof o?(this.node=a,this.options={},d(this.options,b,n,o.driver,"driver"),d(this.options,b,n,o.resolver,"resolver"),d(this.options,b,n,o.adapter,"adapter"),this.node.dataset.scrubOrientation=this.options.resolver.name,a.scrubbingElement=this,this.options.adapter.init(this),e(this.options.driver,"init",this),void 0):new o(b)};o.prototype={remove:function(){delete node.scrubbingElement,e(this.options.driver,"remove",this)}},o.driver={Mouse:k,MouseWheel:m,Touch:l},o.adapter={BasicNode:f},o.resolver={DefaultHorizontal:i(),DefaultVertical:j(),HorizontalProvider:i,VerticalProvider:j},a.Scrubbing=o}(window);
      
new Scrubbing ( document.querySelector ( '.scrubbing-horizontal') )
  


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
