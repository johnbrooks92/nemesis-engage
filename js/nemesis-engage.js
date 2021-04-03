
// Keystroke to start audio background and hide top strip
var musicCode=[13];
var inputCode=[];

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
// var topRow = document.getElementById('topRow');
var bottomRow = document.getElementById('bottomRow');
// var stats = document.getElementsByClassName('stats');
// var GokuStats = document.getElementById('GokuStats');
// var VegetaStats = document.getElementById('VegetaStats');
var GokuHP = document.getElementById('GokuHP');
var VegetaHP = document.getElementById('VegetaHP');
var GokuKi = document.getElementById('GokuKi');
var VegetaKi = document.getElementById('VegetaKi');
var GokuHealthBtn = document.getElementById('healthMoves1');
var VegetaHealthBtn = document.getElementById('healthMoves2');
var BtnId = document.getElementsByClassName('moves');


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
        var VegetaHPBarWidth = (princeHP/1200)*300;
        VegetaHP.style.width = VegetaHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (princeHP === 0){
        bottomRow.innerHTML += "<br>Goku has defeated Vegeta in the duel of the rivals!"
    }
    sonKi -= 155;
    var GokuKiBarWidth = (sonKi/1200)*300;
    GokuKi.style.width = GokuKiBarWidth + "px";
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
        var VegetaHPBarWidth = (princeHP/1200)*300;
        VegetaHP.style.width = VegetaHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (princeHP === 0){
        bottomRow.innerHTML += "<br>Goku has defeated Vegeta in the duel of the rivals!"
    }
    sonKi -= 65;
    var GokuKiBarWidth = (sonKi/1200)*300;
    GokuKi.style.width = GokuKiBarWidth + "px";
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
        var VegetaHPBarWidth = (princeHP/1200)*300;
        VegetaHP.style.width = VegetaHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (princeHP === 0){
        bottomRow.innerHTML += "<br>Goku has defeated Vegeta in the duel of the rivals!"
    }
    sonKi -= 130;
    var GokuKiBarWidth = (sonKi/1200)*300;
    GokuKi.style.width = GokuKiBarWidth + "px";
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
        var VegetaHPBarWidth = (princeHP/1200)*300;
        VegetaHP.style.width = VegetaHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (princeHP === 0){
        bottomRow.innerHTML += "<br>Goku has defeated Vegeta in the duel of the rivals!"
    }
    sonKi -= 30;
    var GokuKiBarWidth = (sonKi/1200)*300;
    GokuKi.style.width = GokuKiBarWidth + "px";
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
        var VegetaHPBarWidth = (princeHP/1200)*300;
        VegetaHP.style.width = VegetaHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (princeHP === 0){
        bottomRow.innerHTML += "<br>Goku has defeated Vegeta in the duel of the rivals!"
    }
    sonKi -= 290;
    var GokuKiBarWidth = (sonKi/1200)*300;
    GokuKi.style.width = GokuKiBarWidth + "px";
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
        var GokuHPBarWidth = (sonHP/1200)*300;
        GokuHP.style.width = GokuHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (sonHP === 0){
        bottomRow.innerHTML += "<br>Vegeta had defeated Goku in the duel of the rivals!"
    }
    princeKi -= 160;
    var VegetaKiBarWidth = (princeKi/1200)*300;
    VegetaKi.style.width = VegetaKiBarWidth + "px";
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
        var GokuHPBarWidth = (sonHP/1200)*300;
        GokuHP.style.width = GokuHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (sonHP === 0){
        bottomRow.innerHTML += "<br>Vegeta had defeated Goku in the duel of the rivals!"
    }
    princeKi -= 75;
    var VegetaKiBarWidth = (princeKi/1200)*300;
    VegetaKi.style.width = VegetaKiBarWidth + "px";
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
        var GokuHPBarWidth = (sonHP/1200)*300;
        GokuHP.style.width = GokuHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (sonHP === 0){
        bottomRow.innerHTML += "<br>Vegeta had defeated Goku in the duel of the rivals!"
    }
    princeKi -= 120;
    var VegetaKiBarWidth = (princeKi/1200)*300;
    VegetaKi.style.width = VegetaKiBarWidth + "px";
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
        var GokuHPBarWidth = (sonHP/1200)*300;
        GokuHP.style.width = GokuHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (sonHP === 0){
        bottomRow.innerHTML += "<br>Vegeta had defeated Goku in the duel of the rivals!"
    }
    princeKi -= 30;
    var VegetaKiBarWidth = (princeKi/1200)*300;
    VegetaKi.style.width = VegetaKiBarWidth + "px";
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
        var GokuHPBarWidth = (sonHP/1200)*300;
        GokuHP.style.width = GokuHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (sonHP === 0){
        bottomRow.innerHTML += "<br>Vegeta had defeated Goku in the duel of the rivals!"
    }
    princeKi -= 235;
    var VegetaKiBarWidth = (princeKi/1200)*300;
    VegetaKi.style.width = VegetaKiBarWidth + "px";
}
//Functionality for Ki and Health
function kiGoku() {
    document.getElementById("GokuKiAudio").play();
    if(sonKi<=800) {
        sonKi += 400;
    } else if(sonKi>800) {
        sonKi = 1200
    }
    var GokuKiBar = (sonKi/1200)*300;
    GokuKi.style.width = GokuKiBar + "px";
    bottomRow.innerHTML += "<br>Goku recovered his ki! Goku now has " + sonKi + " Ki remaining.";
}

function recoverGoku() {
    document.getElementById("GokuHealthAudio").play();
   sonHP = 1200
    var GokuHPBar = (sonHP/1200)*300;
    GokuHP.style.width = GokuHPBar + "px";
    bottomRow.innerHTML += "<br>Goku recovered his health! Goku now has " + sonHP + " HP remaining.";
    GokuHealthBtn.disabled = true;
}

function kiVegeta() {
    document.getElementById("VegetaKiAudio").play();
    if(princeKi<=800) {
    princeKi += 400;
} else if(princeKi>800) {
        princeKi = 1200
    }
    var VegetaKiBar = (princeKi/1200)*300;
    VegetaKi.style.width = VegetaKiBar + "px";
    bottomRow.innerHTML += "<br>Vegeta recovered his ki! Vegeta now has " + princeKi + " Ki remaining.";
}

function recoverVegeta() {
    document.getElementById("VegetaHealthAudio").play();
    if(princeHP<=300) {
        princeHP += 900;
    } else if(princeHP>300) {
        princeHP = 1200
    }
    var VegetaHPBar = (princeHP/1200)*300;
    VegetaHP.style.width = VegetaHPBar + "px";
    bottomRow.innerHTML += "<br>Vegeta recovered his health! Vegeta now has " + princeHP + " HP remaining.";
    VegetaHealthBtn.disabled = true;
}

