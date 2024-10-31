
const button = document.getElementById('startButton');
let conditionPlayer = false;
let conditionPin = false;
const pin = document.getElementById('pin');
const player = document.getElementById('player');
// Button deaktivieren
function disableButton() {
    button.classList.remove('enabled');         // Entfernt die aktive Klasse
    button.classList.add('disabled');          // Fügt die disabled Klasse hinzu
}

// Button aktivieren
function enableButton() {
    button.classList.remove('disabled');       // Entfernt die disabled Klasse
    button.classList.add('enabled');            // Fügt die aktive Klasse hinzu
}

//update textinput
function updateButton() {
    if(conditionPin == true && conditionPlayer == true) {
        enableButton();
    } else {
        disableButton();
    }
}

player.addEventListener('input', function(event){
    if(event.target.value.length<3){
        player.classList.remove('inputTrue');
        player.classList.add('inputFalse');
        conditionPlayer = false;
    } else {
        player.classList.remove('inputFalse');
        player.classList.add('inputTrue');
        conditionPlayer = true;
        updateButton();
    }
    if (event.target.value.length==0){
        player.classList.remove('inputFalse');
        player.classList.remove('inputTrue');
        conditionPlayer = false;
    }
})  
;
pin.addEventListener('input', function(event){
    if(event.target.value.length<6){
        pin.classList.remove('inputTrue');
        pin.classList.add('inputFalse');
        conditionPin = false;
    } else {
        pin.classList.remove('inputFalse');
        pin.classList.add('inputTrue');
        conditionPin = true;
        updateButton();
    }
    if (event.target.value.length==0){
        pin.classList.remove('inputFalse');
        pin.classList.remove('inputTrue');
        conditionPin = false;
    }
});

button.addEventListener('click', function() {

  // Ändere die CSS-Klasse des Buttons
  //window.location.href = '/pages/avatar/avatar.html';
  
  //button.classList.toggle('entryButton'); // Fügt die Klasse 'active' hinzu oder entfernt sie
  /*if(conditionPin == true && conditionPlayer == true) {
    enableButton();
} else {
    disableButton();
}*/
console.log("HYAAA")
});