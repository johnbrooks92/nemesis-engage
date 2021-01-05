"use strict";

//Important Data
const url = "https://fascinated-rigorous-breath.glitch.me/fighters";
console.log(url);
let catalog = [];
let responseObject = {fighters:[]};
let name = $("#name");
let moves = $("#moves");
let ultimate = $("#ultimate");
let transformations = $("#transformations");
let series = $("#series");
let unlock = $("#unlock");
let rivals = $("#rivals");
let atk = $("#atk");
let def = $("#defend");
let speed = $("#speed");
let atkaura = $("#atkaura");
let defaura = $("#defaura");


//Functionality for Initial Fetch
fetch(url)
    .then(response => response.json())
    .then(response => {
        $("#topRow").fadeIn(5000).css("display", "flex");
        responseObject = response;
        displayFighters(responseObject.fighters);
        console.log(response)
        canRemoveFighter();
        canEditFighter();
    })
    .catch(error => console.error(error));

// Functionality for Callback
function callback() {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            $("#topRow").css("display", "flex");
            $("#loading").fadeOut(300);
            catalog = response;
            console.log(catalog);
            canRemoveFighter();
            canEditFighter();
        });
}


//Establish New Movie (Fetch)
const newFighter = (movie) => fetch(`${url}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
})
    .then(res => res.json())
    .then(fighter => {
        $("#topRow").innerHTML += render(fighter);
        return fighter;
    })
    .catch(console.error);


//Establish Edit Movies (Put)
const editMovie = movie => fetch(`${url}/${movie.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie)
})
    .then(res => res.json())
    .then(fighter => {
        console.log(`Success: edited ${JSON.stringify(fighter)}`);
    })
    .catch(console.error);


// Establish Removal of Movie (Delete)
const deleteMovie = (id) => fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => response.json()
).then(() => {
    callback();
    console.log(catalog);
    console.log(`Success, deleted movie ${id}`);
}).catch(error => console.log(error));


//Call to Display Movie Data
function displayFighters(arr){
    for(let i = 0; i < arr.length; i++){
        $("#topRow")[0].insertAdjacentHTML("afterbegin", render(arr[i]));
    }
}


//Format for Creating Movie
function createFighter(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12){
    let newFighter = {
        name: i1,
        moves: i2,
        ultimate: i3,
        transformations: i4,
        series: i5,
        unlock: i6,
        rivals: i7,
        atk: i8,
        def: i9,
        speed: i10,
        atkaura: i11,
        defaura: i12,
    }
    return newFighter
}


//Populate Cards and Data String For Search Functionality
function render(fighter){
    return `<div class="movieCard" data-string="${fighter.name} ${fighter.series}">
        <span id="forDelete">${fighter.id}</span>
        <button class="Edit">Edit</button>
        <button class="delete">Remove</button>
        <h5 class="titleOnPoster">${fighter.title}</h5>
        <img src="${fighter.poster}" class="poster" alt="posterMissing">
        <p>Rated: ${fighter.rating}</p>
        <p>Genre: ${fighter.genre}</p>
        <p>${fighter.minutes} minutes</p>
        <p>Year: ${fighter.year}</p>
        <button class="Trailer"><a href="${fighter.trailer}" target="_blank">Click Here for Trailer</button>
        </div>`;
}


//New Movie Submit Button
$("#submit").on("click", function (){
    newFighter(createFighter(name.val(), moves.val(), ultimate.val(), transformations.val(), series.val(), unlock.val(), rivals.val(), atk.val(), def.val(), speed.val(), atkaura.val(), defaura.val())).then(fighter => {
        $("#topRow")[0].insertAdjacentHTML("afterbegin", render(fighter));
    });
    $(this).parent().css("display", "none");
    $("#displayForm").css("display", "flex");
});

//function for removal
function canRemoveFighter() {
    $("body").on("click", ".delete", function () {
        deleteMovie($(this).parent().children().first()[0].innerText).then();
        $(this).parent().remove();
    });
}

//function for editing
function canEditFighter() {
    $("body").on("click", ".Edit", function () {
        let newId = $(this).parent().children().first()[0].innerText;
        let card = $(this);
        let newFighterObj = {};
        $("#changeMovie").on("click",function(){
            let newName = $("#changeName").val();
            let newMoves = $("#changeMoves").val();
            let newUltimate = $("#changeUltimate").val();
            let newTransformations = $("#changeTransformations").val();
            let newSeries = $("#changeSeries").val();
            let newUnlock = $("#changeUnlock").val();
            let newRivals = $("#changeRivals").val();
            let newAtk = $("#changeAtk").val();
            let newDef = $("#changeDef").val();
            let newSpeed = $("#changeSpeed").val();
            let newAtkaura = $("#changeAtkaura").val();
            let newDefaura = $("#changeDefaura").val();
            newFighterObj = {
                name: newName,
                moves: newMoves,
                ultimate: newUltimate,
                transformations: newTransformations,
                series: newSeries,
                unlock: newUnlock,
                rivals: newRivals,
                atk: newAtk,
                def: newDef,
                speed: newSpeed,
                atkaura: newAtkaura,
                defaura: newDefaura,
                id: newId
            }
            canEditFighter(newFighterObj);
            card.parent().html(render(newFighterObj));
            $("#edit").css("display", "none");
        });
        $("#closeEdit").on("click", function (){
            $("#edit").css("display", "none");
        });
        $("#edit").css("display", "flex");

    });
}

// On Click Function for Forms
$("#displayForm").on("click", function (){
    $("#formSection").css("display", "flex");
    $(this).css("display", "none");
});


//Functionality for Search by Genre, Year and Title
$(".filter").on("keyup", function() {
    var input = $(this).val().toUpperCase();

    $("#charSelectCard").each(function() {
        if ($(this).data("string").toUpperCase().indexOf(input) < 0) {
            $(this).hide();
        } else {
            $(this).show();
        }
    })
});
// // Keystroke to start audio background and hide top strip
// var musicCode =[13]
// var inputCode=[]
//
// $('body').keyup(function(event) {
//     $(this).scrollTop(0);
//     inputCode.push(event.which);
//     console.log(inputCode);
//
//     if (inputCode.join(',') === musicCode.join(',')) {
//         $('audio#battleThemeSaiyans')[0].play();
//         $('#enterNotification').css({
//             'display': 'none'
//         });
//         $('#topRow').css({
//             'visibility': 'visible'
//         });
//     }
//
// });
//
// document.getElementById("battleThemeSaiyans").volume = 0.35;
//
//
//
//
//
// //Define all global variables needed pointing to our different divs
// var topRow = document.getElementById('topRow');
// var bottomRow = document.getElementById('bottomRow');
// var stats = document.getElementsByClassName('stats');
// var p1Stats = document.getElementById('p1Stats');
// var p2Stats = document.getElementById('p2Stats');
// var p1HP = document.getElementById('p1HP');
// var p2HP = document.getElementById('p2HP');
// var p1Ki = document.getElementById('p1Ki');
// var p2Ki = document.getElementById('p2Ki');
// var p1HealthBtn = document.getElementById('healthMoves1');
// var p2HealthBtn = document.getElementById('healthMoves2');
//
//
// //Define Health Variables
// var sonHP = 1200;
// var princeHP = 1200;
// var sonKi = 1200;
// var princeKi = 1200;
// //
// //
//
//
//
//
// //Begin jQuery
// // Functionality for Character Select Screen
// $(document).ready(function(){
//
//
//     function displayFighters(arr){
//         for(let i = 0; i < arr.length; i++){
//             $("#topRow")[0].insertAdjacentHTML("afterbegin", renderFighters(arr[i]));
//         }
//     }
//     function renderFighter(fighter) {
//         var html = '<div class="charSelectCard">';
//
//         html += '<h1>' + fighter.name + '</h1>';
//         // html += ''
//         // html += ''
//         // html += ''
//         html += '</div>';
//         return html;
//     }
//
//
//     function renderFighters(fighters) {
//         var html ='';
//         for (var i = 0; i < fighters.length; i++) {
//             html += renderFighter(fighters[i]);
//         }
//     }
// //
// //     //p1 Transformation Effects
// //     $('#sonp1SS').hide();
// //     $('#sonp1SS2').hide();
// //     $('#sonp1SS3').hide();
// //     $('#sonp1SSG').hide();
// //     $('#sonp1SSGSS').hide();
// //
// //     $('#transformp11').click(function(){
// //         $('#sonp1Base').hide();
// //         $('#sonp1SS2').hide();
// //         $('#sonp1SS3').hide();
// //         $('#sonp1SSG').hide();
// //         $('#sonp1SSGSS').hide();
// //         $('audio#ssScreamp1')[0].play();
// //         $('#sonp1SS').show();
// //         bottomRow.innerHTML += "<br>p1 has transformed into the Super Saiyan of legends!"
// //     });
// //     $('#transformp12').click(function(){
// //         $('#sonp1Base').hide();
// //         $('#sonp1SS').hide();
// //         $('#sonp1SS3').hide();
// //         $('#sonp1SSG').hide();
// //         $('#sonp1SSGSS').hide();
// //         $('audio#ss2Screamp1')[0].play();
// //         $('#sonp1SS2').show();
// //         bottomRow.innerHTML += "<br>p1 has transformed into an ascended saiyan!"
// //     });
// //     $('#transformp13').click(function(){
// //         $('#sonp1Base').hide();
// //         $('#sonp1SS').hide();
// //         $('#sonp1SS2').hide();
// //         $('#sonp1SSG').hide();
// //         $('#sonp1SSGSS').hide();
// //         $('audio#ss3Screamp1')[0].play();
// //         $('#sonp1SS3').show();
// //         bottomRow.innerHTML += "<br>p1 has taken this even further beyond!"
// //     });
// //     $('#transformp14').click(function(){
// //         $('#sonp1Base').hide();
// //         $('#sonp1SS').hide();
// //         $('#sonp1SS2').hide();
// //         $('#sonp1SS3').hide();
// //         $('#sonp1SSGSS').hide();
// //         $('audio#ssGScreamp1')[0].play();
// //         $('#sonp1SSG').show();
// //         bottomRow.innerHTML += "<br>p1 has achieved the power of Gods!"
// //     });
// //     $('#transformp15').click(function(){
// //         $('#sonp1Base').hide();
// //         $('#sonp1SS').hide();
// //         $('#sonp1SS2').hide();
// //         $('#sonp1SS3').hide();
// //         $('#sonp1SSG').hide();
// //         $('audio#ssGssScreamp1')[0].play();
// //         $('#sonp1SSGSS').show();
// //         bottomRow.innerHTML += "<br>p1 has become a Super Saiyan amongst Gods!!"
// //     });
// //
// //
// // //p2 Transformation Effects
// //     $('#princep2SS').hide();
// //     $('#princep2Majin').hide();
// //     $('#princep2SS3').hide();
// //     $('#princep2SSG').hide();
// //     $('#princep2SSGSS').hide();
// //
// //     $('#transformp21').click(function(){
// //         $('#princep2Base').hide();
// //         $('#princep2Majin').hide();
// //         $('#princep2SS3').hide();
// //         $('#princep2SSG').hide();
// //         $('#princep2SSGSS').hide();
// //         $('audio#ssScreamp2')[0].play();
// //         $('#princep2SS').show();
// //         bottomRow.innerHTML += "<br>p2 has pushed his limits to become a Super Saiyan!"
// //     });
// //     $('#transformp22').click(function(){
// //         $('#princep2Base').hide();
// //         $('#princep2SS').hide();
// //         $('#princep2SS3').hide();
// //         $('#princep2SSG').hide();
// //         $('#princep2SSGSS').hide();
// //         $('audio#majinScreamp2')[0].play();
// //         $('#princep2Majin').show();
// //         bottomRow.innerHTML += "<br>p2 has given into Babidi's influence!"
// //     });
// //     $('#transformp23').click(function(){
// //         $('#princep2Base').hide();
// //         $('#princep2SS').hide();
// //         $('#princep2Majin').hide();
// //         $('#princep2SSG').hide();
// //         $('#princep2SSGSS').hide();
// //         $('audio#ss3Screamp2')[0].play();
// //         $('#princep2SS3').show();
// //         bottomRow.innerHTML += "<br>p2 takes things further beyond!"
// //     });
// //     $('#transformp24').click(function(){
// //         $('#princep2Base').hide();
// //         $('#princep2SS').hide();
// //         $('#princep2Majin').hide();
// //         $('#princep2SS3').hide();
// //         $('#princep2SSGSS').hide();
// //         $('audio#ssgScreamp2')[0].play();
// //         $('#princep2SSG').show();
// //         bottomRow.innerHTML += "<br>p2 has worked his way to a peer of Gods!"
// //     });
// //     $('#transformp25').click(function(){
// //         $('#princep2Base').hide();
// //         $('#princep2SS').hide();
// //         $('#princep2Majin').hide();
// //         $('#princep2SS3').hide();
// //         $('#princep2SSG').hide();
// //         $('audio#ssgssScreamp2')[0].play();
// //         $('#princep2SSGSS').show();
// //         bottomRow.innerHTML += "<br>p2 has ascended past his God form!"
// //     });
// });
// //
// //
// // // Functionality for p1 Moves when clicked
// // function kamehameha(){
// //     var hitChance = Math.round(Math.random()*10);
// //     var kameGif = document.getElementById("kameVideo");
// //     if (hitChance >=0) {
// //         document.getElementById("kameWave").play();
// //         kameGif.classList.toggle("show");
// //         setTimeout(() => {
// //         kameGif.classList.remove("show");
// //         }, 9500)
// //     } if (hitChance >=2 && sonKi > 155) {
// //         var damage = Math.round(Math.random()*60+45);
// //         princeHP -= damage;
// //         if (princeHP < 0){
// //             princeHP = 0
// //         }
// //         bottomRow.innerHTML = "p1 landed the Kamehameha! The wave did " + damage + " HP in damage. p2 now has " + princeHP + " HP remaining.";
// //         var p2HPBarWidth = (princeHP/1200)*300;
// //         p2HP.style.width = p2HPBarWidth + "px";
// //     } else {
// //         bottomRow.innerHTML = "You missed!";
// //     }
// //     if (princeHP === 0){
// //         bottomRow.innerHTML += "<br>p1 has defeated p2 in the duel of the rivals!"
// //     }
// //     sonKi -= 155;
// //     var p1KiBarWidth = (sonKi/1200)*300;
// //     p1Ki.style.width = p1KiBarWidth + "px";
// // }
// //
// // function kiai(){
// //     var hitChance = Math.round(Math.random()*10);
// //     var kiaiGif = document.getElementById("kiaiVideo");
// //     if (hitChance >=0) {
// //         document.getElementById("kiaiAttack").play();
// //         kiaiGif.classList.toggle("show");
// //         setTimeout(() => {
// //             kiaiGif.classList.remove("show");
// //         }, 2500)
// //     } if (hitChance >=1 && sonKi > 65) {
// //         var damage = Math.round(Math.random()*35+20);
// //         princeHP -= damage;
// //         if (princeHP < 0){
// //             princeHP = 0
// //         }
// //         bottomRow.innerHTML = "p1 landed the Kiai Blowback! The blast did " + damage + " HP in damage. p2 now has " + princeHP + " HP remaining.";
// //         var p2HPBarWidth = (princeHP/1200)*300;
// //         p2HP.style.width = p2HPBarWidth + "px";
// //     } else {
// //         bottomRow.innerHTML = "You missed!";
// //     }
// //     if (princeHP === 0){
// //         bottomRow.innerHTML += "<br>p1 has defeated p2 in the duel of the rivals!"
// //     }
// //     sonKi -= 65;
// //     var p1KiBarWidth = (sonKi/1200)*300;
// //     p1Ki.style.width = p1KiBarWidth + "px";
// // }
// //
// // function kaioken(){
// //     var hitChance = Math.round(Math.random()*10);
// //     var kaiokenGif = document.getElementById("kaiokenVideo");
// //     if (hitChance >=0) {
// //         document.getElementById("kaiokenAudio").play();
// //         kaiokenGif.classList.toggle("show");
// //         setTimeout(() => {
// //             kaiokenGif.classList.remove("show");
// //         }, 2000)
// //     } if (hitChance >=2 && sonKi > 130) {
// //         var damage = Math.round(Math.random()*50+30);
// //         princeHP -= damage;
// //         if (princeHP < 0){
// //             princeHP = 0
// //         }
// //         bottomRow.innerHTML = "p1 landed the Kaioken Triple Attack! The attack did " + damage + " HP in damage. p2 now has " + princeHP + " HP remaining.";
// //         var p2HPBarWidth = (princeHP/1200)*300;
// //         p2HP.style.width = p2HPBarWidth + "px";
// //     } else {
// //         bottomRow.innerHTML = "You missed!";
// //     }
// //     if (princeHP === 0){
// //         bottomRow.innerHTML += "<br>p1 has defeated p2 in the duel of the rivals!"
// //     }
// //     sonKi -= 130;
// //     var p1KiBarWidth = (sonKi/1200)*300;
// //     p1Ki.style.width = p1KiBarWidth + "px";
// // }
// //
// //
// // function flurry(){
// //     var hitChance = Math.round(Math.random()*10);
// //     var flurryGif = document.getElementById("fistsVideo");
// //     if (hitChance >=0) {
// //         document.getElementById("fistsAudio").play();
// //         flurryGif.classList.toggle("show");
// //         setTimeout(() => {
// //             flurryGif.classList.remove("show");
// //         }, 2000)
// //     } if (hitChance >=1 && sonKi > 30) {
// //         var damage = Math.round(Math.random()*40+15);
// //         princeHP -= damage;
// //         if (princeHP < 0){
// //             princeHP = 0
// //         }
// //         bottomRow.innerHTML = "p1 landed the Fist of Flurry! The attack did " + damage + " HP in damage. p2 now has " + princeHP + " HP remaining.";
// //         var p2HPBarWidth = (princeHP/1200)*300;
// //         p2HP.style.width = p2HPBarWidth + "px";
// //     } else {
// //         bottomRow.innerHTML = "You missed!";
// //     }
// //     if (princeHP === 0){
// //         bottomRow.innerHTML += "<br>p1 has defeated p2 in the duel of the rivals!"
// //     }
// //     sonKi -= 30;
// //     var p1KiBarWidth = (sonKi/1200)*300;
// //     p1Ki.style.width = p1KiBarWidth + "px";
// // }
// //
// // function spirit(){
// //     var hitChance = Math.round(Math.random()*10);
// //     var spiritGif = document.getElementById("spiritVideo");
// //     if (hitChance >=0) {
// //         document.getElementById("spiritAudio").play();
// //         spiritGif.classList.toggle("show");
// //         setTimeout(() => {
// //             spiritGif.classList.remove("show");
// //         }, 7500)
// //     } if (hitChance >=1 && sonKi > 290) {
// //         var damage = Math.round(Math.random()*80+60);
// //         princeHP -= damage;
// //         if (princeHP < 0){
// //             princeHP = 0
// //         }
// //         bottomRow.innerHTML = "p1 hit with his ultimate move, Spirit Bomb! The blast did " + damage + " HP in damage. p2 now has " + princeHP + " HP remaining.";
// //         var p2HPBarWidth = (princeHP/1200)*300;
// //         p2HP.style.width = p2HPBarWidth + "px";
// //     } else {
// //         bottomRow.innerHTML = "You missed!";
// //     }
// //     if (princeHP === 0){
// //         bottomRow.innerHTML += "<br>p1 has defeated p2 in the duel of the rivals!"
// //     }
// //     sonKi -= 290;
// //     var p1KiBarWidth = (sonKi/1200)*300;
// //     p1Ki.style.width = p1KiBarWidth + "px";
// // }
// // //Function for p2 Moves
// //
// // function galickGun(){
// //     var hitChance = Math.round(Math.random()*10);
// //     var galickGif = document.getElementById("galickVideo");
// //     if (hitChance >=0) {
// //         document.getElementById("galickAudio").play();
// //         galickGif.classList.toggle("show");
// //         setTimeout(() => {
// //             galickGif.classList.remove("show");
// //         }, 9500)
// //     } if (hitChance >=2 && princeKi > 160) {
// //         var damage = Math.round(Math.random()*65+50);
// //         sonHP -= damage;
// //         if (sonHP < 0){
// //             sonHP = 0
// //         }
// //         bottomRow.innerHTML = "p2 landed the Galick Gun! The wave did " + damage + " HP in damage. p1 now has " + sonHP + " HP remaining.";
// //         var p1HPBarWidth = (sonHP/1200)*300;
// //         p1HP.style.width = p1HPBarWidth + "px";
// //     } else {
// //         bottomRow.innerHTML = "You missed!";
// //     }
// //     if (sonHP === 0){
// //         bottomRow.innerHTML += "<br>p2 had defeated p1 in the duel of the rivals!"
// //     }
// //     princeKi -= 160;
// //     var p2KiBarWidth = (princeKi/1200)*300;
// //     p2Ki.style.width = p2KiBarWidth + "px";
// // }
// //
// // function lucora(){
// //     var hitChance = Math.round(Math.random()*10);
// //     var lucoraGif = document.getElementById("lucoraVideo");
// //     if (hitChance >=0) {
// //         document.getElementById("lucoraAudio").play();
// //         lucoraGif.classList.toggle("show");
// //         setTimeout(() => {
// //             lucoraGif.classList.remove("show");
// //         }, 5000)
// //     } if (hitChance >=2 && princeKi > 75) {
// //         var damage = Math.round(Math.random()*35+15);
// //         sonHP -= damage;
// //         if (sonHP < 0){
// //             sonHP = 0
// //         }
// //         bottomRow.innerHTML = "p2 landed the Lucora Gun! The move did " + damage + " HP in damage. p1 now has " + sonHP + " HP remaining.";
// //         var p1HPBarWidth = (sonHP/1200)*300;
// //         p1HP.style.width = p1HPBarWidth + "px";
// //     } else {
// //         bottomRow.innerHTML = "You missed!";
// //     }
// //     if (sonHP === 0){
// //         bottomRow.innerHTML += "<br>p2 had defeated p1 in the duel of the rivals!"
// //     }
// //     princeKi -= 75;
// //     var p2KiBarWidth = (princeKi/1200)*300;
// //     p2Ki.style.width = p2KiBarWidth + "px";
// // }
// //
// // function fireworks(){
// //     var hitChance = Math.round(Math.random()*10);
// //     var fireworksGif = document.getElementById("fireworksVideo");
// //     if (hitChance >=0) {
// //         document.getElementById("fireworksAudio").play();
// //         fireworksGif.classList.toggle("show");
// //         setTimeout(() => {
// //             fireworksGif.classList.remove("show");
// //         }, 3500)
// //     } if (hitChance >=2 && princeKi > 120) {
// //         var damage = Math.round(Math.random()*50+20);
// //         sonHP -= damage;
// //         if (sonHP < 0){
// //             sonHP = 0
// //         }
// //         bottomRow.innerHTML = "p2 hit that target with Dirty Fireworks! The attack did " + damage + " HP in damage. p1 now has " + sonHP + " HP remaining.";
// //         var p1HPBarWidth = (sonHP/1200)*300;
// //         p1HP.style.width = p1HPBarWidth + "px";
// //     } else {
// //         bottomRow.innerHTML = "You missed!";
// //     }
// //     if (sonHP === 0){
// //         bottomRow.innerHTML += "<br>p2 had defeated p1 in the duel of the rivals!"
// //     }
// //     princeKi -= 120;
// //     var p2KiBarWidth = (princeKi/1200)*300;
// //     p2Ki.style.width = p2KiBarWidth + "px";
// // }
// //
// // function infinite(){
// //     var hitChance = Math.round(Math.random()*10);
// //     var infiniteGif = document.getElementById("infiniteVideo");
// //     if (hitChance >=0) {
// //         document.getElementById("infiniteAudio").play();
// //         infiniteGif .classList.toggle("show");
// //         setTimeout(() => {
// //             infiniteGif .classList.remove("show");
// //         }, 3000)
// //     } if (hitChance >=2 && princeKi > 30) {
// //         var damage = Math.round(Math.random()*35+10);
// //         sonHP -= damage;
// //         if (sonHP < 0){
// //             sonHP = 0
// //         }
// //         bottomRow.innerHTML = "p2 knocked them around with Infinite Break! The attack did " + damage + " HP in damage. p1 now has " + sonHP + " HP remaining.";
// //         var p1HPBarWidth = (sonHP/1200)*300;
// //         p1HP.style.width = p1HPBarWidth + "px";
// //     } else {
// //         bottomRow.innerHTML = "You missed!";
// //     }
// //     if (sonHP === 0){
// //         bottomRow.innerHTML += "<br>p2 had defeated p1 in the duel of the rivals!"
// //     }
// //     princeKi -= 30;
// //     var p2KiBarWidth = (princeKi/1200)*300;
// //     p2Ki.style.width = p2KiBarWidth + "px";
// // }
// //
// // function finalFlash(){
// //     var hitChance = Math.round(Math.random()*10);
// //     var finalGif = document.getElementById("finalVideo");
// //     if (hitChance >=0) {
// //         document.getElementById("finalAudio").play();
// //         finalGif.classList.toggle("show");
// //         setTimeout(() => {
// //             finalGif.classList.remove("show");
// //         }, 6000)
// //     } if (hitChance >=2 && princeKi > 235) {
// //         var damage = Math.round(Math.random()*75+65);
// //         sonHP -= damage;
// //         if (sonHP < 0){
// //             sonHP = 0
// //         }
// //         bottomRow.innerHTML = "p2 used his ultimate move, Final Flash! The blast did " + damage + " HP in damage. p1 now has " + sonHP + " HP remaining.";
// //         var p1HPBarWidth = (sonHP/1200)*300;
// //         p1HP.style.width = p1HPBarWidth + "px";
// //     } else {
// //         bottomRow.innerHTML = "You missed!";
// //     }
// //     if (sonHP === 0){
// //         bottomRow.innerHTML += "<br>p2 had defeated p1 in the duel of the rivals!"
// //     }
// //     princeKi -= 235;
// //     var p2KiBarWidth = (princeKi/1200)*300;
// //     p2Ki.style.width = p2KiBarWidth + "px";
// // }
// // //Functionality for Ki and Health
// // function kip1() {
// //     document.getElementById("p1KiAudio").play();
// //     if(sonKi<=800) {
// //         sonKi += 400;
// //     } else if(sonKi>800) {
// //         sonKi = 1200
// //     }
// //     var p1KiBar = (sonKi/1200)*300;
// //     p1Ki.style.width = p1KiBar + "px";
// //     bottomRow.innerHTML += "<br>p1 recovered his ki! p1 now has " + sonKi + " Ki remaining.";
// // }
// //
// // function recoverp1() {
// //     document.getElementById("p1HealthAudio").play();
// //    sonHP = 1200
// //     var p1HPBar = (sonHP/1200)*300;
// //     p1HP.style.width = p1HPBar + "px";
// //     bottomRow.innerHTML += "<br>p1 recovered his health! p1 now has " + sonHP + " HP remaining.";
// //     p1HealthBtn.disabled = true;
// // }
// //
// // function kip2() {
// //     document.getElementById("p2KiAudio").play();
// //     if(princeKi<=800) {
// //     princeKi += 400;
// // } else if(princeKi>800) {
// //         princeKi = 1200
// //     }
// //     var p2KiBar = (princeKi/1200)*300;
// //     p2Ki.style.width = p2KiBar + "px";
// //     bottomRow.innerHTML += "<br>p2 recovered his ki! p2 now has " + princeKi + " Ki remaining.";
// // }
// //
// // function recoverp2() {
// //     document.getElementById("p2HealthAudio").play();
// //     if(princeHP<=300) {
// //         princeHP += 900;
// //     } else if(princeHP>300) {
// //         princeHP = 1200
// //     }
// //     var p2HPBar = (princeHP/1200)*300;
// //     p2HP.style.width = p2HPBar + "px";
// //     bottomRow.innerHTML += "<br>p2 recovered his health! p2 now has " + princeHP + " HP remaining.";
// //     p2HealthBtn.disabled = true;
// // }
// //
//
//
//
