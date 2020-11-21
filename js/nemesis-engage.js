
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




















