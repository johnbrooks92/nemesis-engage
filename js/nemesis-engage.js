
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
var gokuHealthBtn = document.getElementById('healthMoves1');
var vegetaHealthBtn = document.getElementById('healthMoves2');


//Define Health Variables
var sonHP = 1200;
var princeHP = 1200;
var sonKi = 1200;
var princeKi = 1200;
//
//




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
        bottomRow.innerHTML += "<br>Vegeta takes things further beyond!"
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
        bottomRow.innerHTML += "<br>Vegeta has ascended past his God form!"
    });
});


// Functionality for Goku Moves when clicked
function kamehameha(){
    var hitChance = Math.round(Math.random()*10);
    var kameGif = document.getElementById("kameVideo");
    if (hitChance >=0) {
        document.getElementById("kameWave").play();
        kameGif.classList.toggle("show");
        setTimeout(() => {
        kameGif.classList.remove("show");
        }, 9500)
    } if (hitChance >=2 && sonKi > 155) {
        var damage = Math.round(Math.random()*60+45);
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

function kiai(){
    var hitChance = Math.round(Math.random()*10);
    var kiaiGif = document.getElementById("kiaiVideo");
    if (hitChance >=0) {
        document.getElementById("kiaiAttack").play();
        kiaiGif.classList.toggle("show");
        setTimeout(() => {
            kiaiGif.classList.remove("show");
        }, 2500)
    } if (hitChance >=1 && sonKi > 65) {
        var damage = Math.round(Math.random()*35+20);
        princeHP -= damage;
        if (princeHP < 0){
            princeHP = 0
        }
        bottomRow.innerHTML = "Goku landed the Kiai Blowback! The blast did " + damage + " HP in damage. Vegeta now has " + princeHP + " HP remaining.";
        var vegetaHPBarWidth = (princeHP/1200)*300;
        vegetaHP.style.width = vegetaHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (princeHP === 0){
        bottomRow.innerHTML += "<br>Goku has defeated Vegeta in the duel of the rivals!"
    }
    sonKi -= 65;
    var gokuKiBarWidth = (sonKi/1200)*300;
    gokuKi.style.width = gokuKiBarWidth + "px";
}

function kaioken(){
    var hitChance = Math.round(Math.random()*10);
    var kaiokenGif = document.getElementById("kaiokenVideo");
    if (hitChance >=0) {
        document.getElementById("kaiokenAudio").play();
        kaiokenGif.classList.toggle("show");
        setTimeout(() => {
            kaiokenGif.classList.remove("show");
        }, 2000)
    } if (hitChance >=2 && sonKi > 130) {
        var damage = Math.round(Math.random()*50+30);
        princeHP -= damage;
        if (princeHP < 0){
            princeHP = 0
        }
        bottomRow.innerHTML = "Goku landed the Kaioken Triple Attack! The attack did " + damage + " HP in damage. Vegeta now has " + princeHP + " HP remaining.";
        var vegetaHPBarWidth = (princeHP/1200)*300;
        vegetaHP.style.width = vegetaHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (princeHP === 0){
        bottomRow.innerHTML += "<br>Goku has defeated Vegeta in the duel of the rivals!"
    }
    sonKi -= 130;
    var gokuKiBarWidth = (sonKi/1200)*300;
    gokuKi.style.width = gokuKiBarWidth + "px";
}


function flurry(){
    var hitChance = Math.round(Math.random()*10);
    var flurryGif = document.getElementById("fistsVideo");
    if (hitChance >=0) {
        document.getElementById("fistsAudio").play();
        flurryGif.classList.toggle("show");
        setTimeout(() => {
            flurryGif.classList.remove("show");
        }, 2000)
    } if (hitChance >=1 && sonKi > 30) {
        var damage = Math.round(Math.random()*40+15);
        princeHP -= damage;
        if (princeHP < 0){
            princeHP = 0
        }
        bottomRow.innerHTML = "Goku landed the Fist of Flurry! The attack did " + damage + " HP in damage. Vegeta now has " + princeHP + " HP remaining.";
        var vegetaHPBarWidth = (princeHP/1200)*300;
        vegetaHP.style.width = vegetaHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (princeHP === 0){
        bottomRow.innerHTML += "<br>Goku has defeated Vegeta in the duel of the rivals!"
    }
    sonKi -= 30;
    var gokuKiBarWidth = (sonKi/1200)*300;
    gokuKi.style.width = gokuKiBarWidth + "px";
}

function spirit(){
    var hitChance = Math.round(Math.random()*10);
    var spiritGif = document.getElementById("spiritVideo");
    if (hitChance >=0) {
        document.getElementById("spiritAudio").play();
        spiritGif.classList.toggle("show");
        setTimeout(() => {
            spiritGif.classList.remove("show");
        }, 7500)
    } if (hitChance >=1 && sonKi > 290) {
        var damage = Math.round(Math.random()*80+60);
        princeHP -= damage;
        if (princeHP < 0){
            princeHP = 0
        }
        bottomRow.innerHTML = "Goku hit with his ultimate move, Spirit Bomb! The blast did " + damage + " HP in damage. Vegeta now has " + princeHP + " HP remaining.";
        var vegetaHPBarWidth = (princeHP/1200)*300;
        vegetaHP.style.width = vegetaHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (princeHP === 0){
        bottomRow.innerHTML += "<br>Goku has defeated Vegeta in the duel of the rivals!"
    }
    sonKi -= 290;
    var gokuKiBarWidth = (sonKi/1200)*300;
    gokuKi.style.width = gokuKiBarWidth + "px";
}
//Function for Vegeta Moves

function galickGun(){
    var hitChance = Math.round(Math.random()*10);
    var galickGif = document.getElementById("galickVideo");
    if (hitChance >=0) {
        document.getElementById("galickAudio").play();
        galickGif.classList.toggle("show");
        setTimeout(() => {
            galickGif.classList.remove("show");
        }, 9500)
    } if (hitChance >=2 && princeKi > 160) {
        var damage = Math.round(Math.random()*65+50);
        sonHP -= damage;
        if (sonHP < 0){
            sonHP = 0
        }
        bottomRow.innerHTML = "Vegeta landed the Galick Gun! The wave did " + damage + " HP in damage. Goku now has " + sonHP + " HP remaining.";
        var gokuHPBarWidth = (sonHP/1200)*300;
        gokuHP.style.width = gokuHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (sonHP === 0){
        bottomRow.innerHTML += "<br>Vegeta had defeated Goku in the duel of the rivals!"
    }
    princeKi -= 160;
    var vegetaKiBarWidth = (princeKi/1200)*300;
    vegetaKi.style.width = vegetaKiBarWidth + "px";
}

function lucora(){
    var hitChance = Math.round(Math.random()*10);
    var lucoraGif = document.getElementById("lucoraVideo");
    if (hitChance >=0) {
        document.getElementById("lucoraAudio").play();
        lucoraGif.classList.toggle("show");
        setTimeout(() => {
            lucoraGif.classList.remove("show");
        }, 5000)
    } if (hitChance >=2 && princeKi > 75) {
        var damage = Math.round(Math.random()*35+15);
        sonHP -= damage;
        if (sonHP < 0){
            sonHP = 0
        }
        bottomRow.innerHTML = "Vegeta landed the Lucora Gun! The move did " + damage + " HP in damage. Goku now has " + sonHP + " HP remaining.";
        var gokuHPBarWidth = (sonHP/1200)*300;
        gokuHP.style.width = gokuHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (sonHP === 0){
        bottomRow.innerHTML += "<br>Vegeta had defeated Goku in the duel of the rivals!"
    }
    princeKi -= 75;
    var vegetaKiBarWidth = (princeKi/1200)*300;
    vegetaKi.style.width = vegetaKiBarWidth + "px";
}

function fireworks(){
    var hitChance = Math.round(Math.random()*10);
    var fireworksGif = document.getElementById("fireworksVideo");
    if (hitChance >=0) {
        document.getElementById("fireworksAudio").play();
        fireworksGif.classList.toggle("show");
        setTimeout(() => {
            fireworksGif.classList.remove("show");
        }, 3500)
    } if (hitChance >=2 && princeKi > 120) {
        var damage = Math.round(Math.random()*50+20);
        sonHP -= damage;
        if (sonHP < 0){
            sonHP = 0
        }
        bottomRow.innerHTML = "Vegeta hit that target with Dirty Fireworks! The attack did " + damage + " HP in damage. Goku now has " + sonHP + " HP remaining.";
        var gokuHPBarWidth = (sonHP/1200)*300;
        gokuHP.style.width = gokuHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (sonHP === 0){
        bottomRow.innerHTML += "<br>Vegeta had defeated Goku in the duel of the rivals!"
    }
    princeKi -= 120;
    var vegetaKiBarWidth = (princeKi/1200)*300;
    vegetaKi.style.width = vegetaKiBarWidth + "px";
}

function infinite(){
    var hitChance = Math.round(Math.random()*10);
    var infiniteGif = document.getElementById("infiniteVideo");
    if (hitChance >=0) {
        document.getElementById("infiniteAudio").play();
        infiniteGif .classList.toggle("show");
        setTimeout(() => {
            infiniteGif .classList.remove("show");
        }, 3000)
    } if (hitChance >=2 && princeKi > 30) {
        var damage = Math.round(Math.random()*35+10);
        sonHP -= damage;
        if (sonHP < 0){
            sonHP = 0
        }
        bottomRow.innerHTML = "Vegeta knocked thema round with Infinite Break! The attack did " + damage + " HP in damage. Goku now has " + sonHP + " HP remaining.";
        var gokuHPBarWidth = (sonHP/1200)*300;
        gokuHP.style.width = gokuHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (sonHP === 0){
        bottomRow.innerHTML += "<br>Vegeta had defeated Goku in the duel of the rivals!"
    }
    princeKi -= 30;
    var vegetaKiBarWidth = (princeKi/1200)*300;
    vegetaKi.style.width = vegetaKiBarWidth + "px";
}

function finalFlash(){
    var hitChance = Math.round(Math.random()*10);
    var finalGif = document.getElementById("finalVideo");
    if (hitChance >=0) {
        document.getElementById("finalAudio").play();
        finalGif.classList.toggle("show");
        setTimeout(() => {
            finalGif.classList.remove("show");
        }, 6000)
    } if (hitChance >=2 && princeKi > 235) {
        var damage = Math.round(Math.random()*75+65);
        sonHP -= damage;
        if (sonHP < 0){
            sonHP = 0
        }
        bottomRow.innerHTML = "Vegeta used his ultimate move, Final Flash! The blast did " + damage + " HP in damage. Goku now has " + sonHP + " HP remaining.";
        var gokuHPBarWidth = (sonHP/1200)*300;
        gokuHP.style.width = gokuHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (sonHP === 0){
        bottomRow.innerHTML += "<br>Vegeta had defeated Goku in the duel of the rivals!"
    }
    princeKi -= 235;
    var vegetaKiBarWidth = (princeKi/1200)*300;
    vegetaKi.style.width = vegetaKiBarWidth + "px";
}
//Functionality for Ki and Health
function kiGoku() {
    document.getElementById("gokuKiAudio").play();
    if(sonKi<=800) {
        sonKi += 400;
    } else if(sonKi>800) {
        sonKi = 1200
    }
    var gokuKiBar = (sonKi/1200)*300;
    gokuKi.style.width = gokuKiBar + "px";
    bottomRow.innerHTML += "<br>Goku recovered his ki! Goku now has " + sonKi + " Ki remaining.";
}

function recoverGoku() {
    document.getElementById("gokuHealthAudio").play();
   sonHP = 1200
    var gokuHPBar = (sonHP/1200)*300;
    gokuHP.style.width = gokuHPBar + "px";
    bottomRow.innerHTML += "<br>Goku recovered his health! Goku now has " + sonHP + " HP remaining.";
    gokuHealthBtn.disabled = true;
}

function kiVegeta() {
    document.getElementById("vegetaKiAudio").play();
    if(princeKi<=800) {
    princeKi += 400;
} else if(princeKi>800) {
        princeKi = 1200
    }
    var vegetaKiBar = (princeKi/1200)*300;
    vegetaKi.style.width = vegetaKiBar + "px";
    bottomRow.innerHTML += "<br>Vegeta recovered his ki! Vegeta now has " + princeKi + " Ki remaining.";
}

function recoverVegeta() {
    document.getElementById("vegetaHealthAudio").play();
    if(princeHP<=300) {
        princeHP += 900;
    } else if(princeHP>300) {
        princeHP = 1200
    }
    var vegetaHPBar = (princeHP/1200)*300;
    vegetaHP.style.width = vegetaHPBar + "px";
    bottomRow.innerHTML += "<br>Vegeta recovered his health! Vegeta now has " + princeHP + " HP remaining.";
    vegetaHealthBtn.disabled = true;
}

