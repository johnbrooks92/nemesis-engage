
// Keystroke to start audio background and hide top strip
var musicCode =[13]
var inputCode=[]

$('body').keyup(function(event) {
    $(this).scrollTop(0);
    inputCode.push(event.which);
    console.log(inputCode);

    if (inputCode.join(',') === musicCode.join(',')) {
        $('audio#battleThemeSaiyans')[0].play();
        $('#enterNotification').css({
            'display': 'none'
        });
        $('#topRow').css({
            'visibility': 'visible'
        });
    }

});

document.getElementById("battleThemeSaiyans").volume = 0.35;





//Define all global variables needed pointing to our different divs
var topRow = document.getElementById('topRow');
var bottomRow = document.getElementById('bottomRow');
var stats = document.getElementsByClassName('stats');
var gokuStats = document.getElementById('gokuStats');
var vegetaStats = document.getElementById('vegetaStats');
var gokuHP = document.getElementById('gokuHP');
var vegetaHP = document.getElementById('vegetaHP');
var gokuKi = document.getElementById('gokuKi');
var vegetaKi = document.getElementById('vegetaKi');

//Define Health Variables
var sonHP = 1200;
var princeHP = 1200;
var sonKi = 1200;
var princeKi = 1200;
//
//

// Functionality for Moves
function kamehameha(){
    var hitChance = Math.round(Math.random()*10);
    if (hitChance >=2 && sonKi > 155) {
        var damage = Math.round(Math.random()*20)+10;
        princeHP -= damage;
        if (princeHP < 0){
            princeHP = 0
        }
        bottomRow.innerHTML = "Goku landed the Kamehameha! The wave did " + damage + " HP in damage. Vegeta now has " + princeHP + " HP remaining.";
        var vegetaHPBarWidth = (princeHP/1200)*300;
        vegetaHP.style.width = vegetaHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (princeHP === 0){
        bottomRow.innerHTML += "<br>Goku has defeated Vegeta in the duel of the rivals!"
    }
    sonKi -= 155;
    var gokuKiBarWidth = (sonKi/1200)*300;
    gokuKi.style.width = gokuKiBarWidth + "px";
}



// Functionality for Transformations

$(document).ready(function(){
    //Goku Transformation Effects
    $('#sonGokuSS').hide();
    $('#sonGokuSS2').hide();
    $('#sonGokuSS3').hide();
    $('#sonGokuSSG').hide();
    $('#sonGokuSSGSS').hide();

    $('#transformGoku1').click(function(){
        $('#sonGokuBase').hide();
        $('#sonGokuSS2').hide();
        $('#sonGokuSS3').hide();
        $('#sonGokuSSG').hide();
        $('#sonGokuSSGSS').hide();
        $('audio#ssScreamGoku')[0].play();
        $('#sonGokuSS').show();
        bottomRow.innerHTML += "<br>Goku has transformed into the Super Saiyan of legends!"
    });
    $('#transformGoku2').click(function(){
        $('#sonGokuBase').hide();
        $('#sonGokuSS').hide();
        $('#sonGokuSS3').hide();
        $('#sonGokuSSG').hide();
        $('#sonGokuSSGSS').hide();
        $('audio#ss2ScreamGoku')[0].play();
        $('#sonGokuSS2').show();
        bottomRow.innerHTML += "<br>Goku has transformed into an ascended saiyan!"
    });
    $('#transformGoku3').click(function(){
        $('#sonGokuBase').hide();
        $('#sonGokuSS').hide();
        $('#sonGokuSS2').hide();
        $('#sonGokuSSG').hide();
        $('#sonGokuSSGSS').hide();
        $('audio#ss3ScreamGoku')[0].play();
        $('#sonGokuSS3').show();
        bottomRow.innerHTML += "<br>Goku has taken this even further beyond!"
    });
    $('#transformGoku4').click(function(){
        $('#sonGokuBase').hide();
        $('#sonGokuSS').hide();
        $('#sonGokuSS2').hide();
        $('#sonGokuSS3').hide();
        $('#sonGokuSSGSS').hide();
        $('audio#ssGScreamGoku')[0].play();
        $('#sonGokuSSG').show();
        bottomRow.innerHTML += "<br>Goku has achieved the power of Gods!"
    });
    $('#transformGoku5').click(function(){
        $('#sonGokuBase').hide();
        $('#sonGokuSS').hide();
        $('#sonGokuSS2').hide();
        $('#sonGokuSS3').hide();
        $('#sonGokuSSG').hide();
        $('audio#ssGssScreamGoku')[0].play();
        $('#sonGokuSSGSS').show();
        bottomRow.innerHTML += "<br>Goku has become a Super Saiyan amongst Gods!!"
    });


//Vegeta Transformation Effects
    $('#princeVegetaSS').hide();
    $('#princeVegetaMajin').hide();
    $('#princeVegetaSS3').hide();
    $('#princeVegetaSSG').hide();
    $('#princeVegetaSSGSS').hide();

    $('#transformVegeta1').click(function(){
        $('#princeVegetaBase').hide();
        $('#princeVegetaMajin').hide();
        $('#princeVegetaSS3').hide();
        $('#princeVegetaSSG').hide();
        $('#princeVegetaSSGSS').hide();
        $('audio#ssScreamVegeta')[0].play();
        $('#princeVegetaSS').show();
        bottomRow.innerHTML += "<br>Vegeta has pushed his limits to become a Super Saiyan!"
    });
    $('#transformVegeta2').click(function(){
        $('#princeVegetaBase').hide();
        $('#princeVegetaSS').hide();
        $('#princeVegetaSS3').hide();
        $('#princeVegetaSSG').hide();
        $('#princeVegetaSSGSS').hide();
        $('audio#majinScreamVegeta')[0].play();
        $('#princeVegetaMajin').show();
        bottomRow.innerHTML += "<br>Vegeta has given into Babidi's influence!"
    });
    $('#transformVegeta3').click(function(){
        $('#princeVegetaBase').hide();
        $('#princeVegetaSS').hide();
        $('#princeVegetaMajin').hide();
        $('#princeVegetaSSG').hide();
        $('#princeVegetaSSGSS').hide();
        $('audio#ss3ScreamVegeta')[0].play();
        $('#princeVegetaSS3').show();
        bottomRow.innerHTML += "<br>Vegeta takes things futher beyond!"
    });
    $('#transformVegeta4').click(function(){
        $('#princeVegetaBase').hide();
        $('#princeVegetaSS').hide();
        $('#princeVegetaMajin').hide();
        $('#princeVegetaSS3').hide();
        $('#princeVegetaSSGSS').hide();
        $('audio#ssgScreamVegeta')[0].play();
        $('#princeVegetaSSG').show();
        bottomRow.innerHTML += "<br>Vegeta has worked his way to a peer of Gods!"
    });
    $('#transformVegeta5').click(function(){
        $('#princeVegetaBase').hide();
        $('#princeVegetaSS').hide();
        $('#princeVegetaMajin').hide();
        $('#princeVegetaSS3').hide();
        $('#princeVegetaSSG').hide();
        $('audio#ssgssScreamVegeta')[0].play();
        $('#princeVegetaSSGSS').show();
        bottomRow.innerHTML += "<br>Vegeta has ascended his God form!"
    });













});














