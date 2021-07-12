/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//Hulp van Sonja, Wei, Javascript boek en http://keycode.info/

console.log("Test");
var i;
var afbeeldingen = document.getElementsByTagName('img');
console.log(afbeeldingen);

// Nieuwe plaatjes die grijs zijn
var actief = ['NootCgrijs', 'NootDgrijs', 'NootEgrijs', 'NootFgrijs', 'NootGgrijs', 'NootAgrijs', 'NootBgrijs', 'drumgrijs', 'drum2grijs', 'drum3grijs', 'drum4grijs', 'drum5grijs', 'drum6grijs', 'drum7grijs'];

// Plaatjes die niet grijs zijn
var inactief = ['NootC', 'NootD', 'NootE', 'NootF', 'NootG', 'NootA', 'NootB', 'drum', 'drum2', 'drum3', 'drum4', 'drum5', 'drum6', 'drum7'];

// Function als piano wordt indegrukt = grijs
function speelNoot() {
    console.log(this.id);

    var audio = new Audio("audio/" + this.id + '.mp3');
    audio.play();
    document.getElementById(this.id).src = 'images/' + actief[this.id] + '.png';
}

// Function als piano wordt losgelaten = wit
function losNoot() {
    console.log(this.id);

    document.getElementById(this.id).src = 'images/' + inactief[this.id] + '.png';
}

// Klik op afbeelding gebeurt functie speelNoot (grijs)
for (i = 0; i < afbeeldingen.length; i++) {
    afbeeldingen[i].addEventListener('mousedown', speelNoot);
}

// Klik op afbeelding gebeurt functie losNoot (weer wit)
for (i = 0; i < afbeeldingen.length; i++) {
    afbeeldingen[i].addEventListener('mouseup', losNoot);
}

// Zorgt voor keyclick op noot dat afbeelding veranderd en audio komt. Het translate de geklikte coder naar het case nummer.
function keyklik(e) {

    switch (e.keyCode) {
        // Piano geluiden        
    case 65:
        document.getElementById('0').src = 'images/' + actief[0] + '.png';
        console.log('c grijs');
        var audio = new Audio("audio/0.mp3");
        audio.play();
        break;

    case 83:
        document.getElementById('1').src = 'images/' + actief[1] + '.png';
        console.log('d grijs');
        audio = new Audio("audio/1.mp3");
        audio.play();
        break;

    case 68:
        document.getElementById('2').src = 'images/' + actief[2] + '.png';
        console.log('e grijs');
        audio = new Audio("audio/2.mp3");
        audio.play();
        break;

    case 70:
        document.getElementById('3').src = 'images/' + actief[3] + '.png';
        console.log('f grijs');
        audio = new Audio("audio/3.mp3");
        audio.play();
        break;

    case 71:
        document.getElementById('4').src = 'images/' + actief[4] + '.png';
        console.log('g grijs');
        audio = new Audio("audio/4.mp3");
        audio.play();
        break;

    case 72:
        document.getElementById('5').src = 'images/' + actief[5] + '.png';
        console.log('a grijs');
        audio = new Audio("audio/5.mp3");
        audio.play();
        break;

    case 74:
        document.getElementById('6').src = 'images/' + actief[6] + '.png';
        console.log('b grijs');
        audio = new Audio("audio/6.mp3");
        audio.play();
        break;

        // Drum geluiden
    case 81:
        document.getElementById('7').src = 'images/' + actief[7] + '.png';
        console.log('hi-hat grijs');
        audio = new Audio("audio/7.mp3");
        audio.play();
        break;

    case 87:
        document.getElementById('8').src = 'images/' + actief[8] + '.png';
        console.log('kick grijs');
        audio = new Audio("audio/8.mp3");
        audio.play();
        break;

    case 69:
        document.getElementById('9').src = 'images/' + actief[9] + '.png';
        console.log('snare grijs');
        audio = new Audio("audio/9.mp3");
        audio.play();
        break;

    case 82:
        document.getElementById('10').src = 'images/' + actief[10] + '.png';
        console.log('crash1 grijs');
        audio = new Audio("audio/10.mp3");
        audio.play();
        break;

    case 84:
        document.getElementById('11').src = 'images/' + actief[11] + '.png';
        console.log('tom1 grijs');
        audio = new Audio("audio/11.mp3");
        audio.play();
        break;

    case 89:
        document.getElementById('12').src = 'images/' + actief[12] + '.png';
        console.log('tom2 grijs');
        audio = new Audio("audio/12.mp3");
        audio.play();
        break;

    case 85:
        document.getElementById('13').src = 'images/' + actief[13] + '.png';
        console.log('crash2 grijs');
        audio = new Audio("audio/13.mp3");
        audio.play();
        break;

        //Easter Egg
    case 67:
        audio = new Audio("audio/cat.mp3");
        audio.play();
        break;
    }
}
// Zorgt ervoor als je Noot A loslaat het oude plaatje komt.
function keylos(e) {

    switch (e.keyCode) {
        // Piano geluiden
    case 65:
        document.getElementById('0').src = 'images/' + inactief[0] + '.png';
        console.log('c');
        break;

    case 83:
        document.getElementById('1').src = 'images/' + inactief[1] + '.png';
        console.log('d');
        break;

    case 68:
        document.getElementById('2').src = 'images/' + inactief[2] + '.png';
        console.log('e');
        break;

    case 70:
        document.getElementById('3').src = 'images/' + inactief[3] + '.png';
        console.log('f');
        break;

    case 71:
        document.getElementById('4').src = 'images/' + inactief[4] + '.png';
        console.log('g');
        break;

    case 72:
        document.getElementById('5').src = 'images/' + inactief[5] + '.png';
        console.log('a');
        break;

    case 74:
        document.getElementById('6').src = 'images/' + inactief[6] + '.png';
        console.log('b');
        break;

        // Drum geluiden
    case 81:
        document.getElementById('7').src = 'images/' + inactief[7] + '.png';
        console.log('hi-hat wit');
        break;

    case 87:
        document.getElementById('8').src = 'images/' + inactief[8] + '.png';
        console.log('kick wit');
        break;

    case 69:
        document.getElementById('9').src = 'images/' + inactief[9] + '.png';
        console.log('snare wit');
        break;

    case 82:
        document.getElementById('10').src = 'images/' + inactief[10] + '.png';
        console.log('crash1 wit');
        break;

    case 84:
        document.getElementById('11').src = 'images/' + inactief[11] + '.png';
        console.log('tom1 wit');
        break;

    case 89:
        document.getElementById('12').src = 'images/' + inactief[12] + '.png';
        console.log('tom2 wit');
        break;

    case 85:
        document.getElementById('13').src = 'images/' + inactief[13] + '.png';
        console.log('crash2 wit');
        break;
    }
}

// Hier roep je alles op.
document.addEventListener("keydown", keyklik);
document.addEventListener("keyup", keylos);

//----------------------------------------------------------------------------------//

console.log("Test2");