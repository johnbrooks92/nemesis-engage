"use strict";
// Keystroke to start audio background
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
    }







});
//
//
//
// alert("Click here to begin the battle!");



document.getElementById("battleThemeSaiyans").volume = 0.35;

// var music = new Audio();
// function playMusic(file) {
//     music.pause();
//     music = new Audio(file);
//     music.play();
// }