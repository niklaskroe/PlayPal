import { isGame, setPlayer, setSelectedGame } from "./sharedData.js";

const button = document.getElementById('startButton');
let conditionPlayer = false;
let conditionPin = false;
let code = null;

const player = {
    name: "",
    character: 0,
    accessory: 0
}
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

function setName(name){
    player.name = name;
    setPlayer(player);
}
document.getElementById('nameInput').addEventListener('input', (event) => {
    const nameInput = event.target;
    if(nameInput.value.length<3){
        nameInput.classList.remove('inputTrue');
        nameInput.classList.add('inputFalse');
        conditionPlayer = false;
        updateButton();
    } else {
        nameInput.classList.remove('inputFalse');
        nameInput.classList.add('inputTrue');
        conditionPlayer = true;
        updateButton();
        setName(nameInput.value);
    }
    if (nameInput.value.length==0){
        nameInput.classList.remove('inputFalse');
        nameInput.classList.remove('inputTrue');
        updateButton();
        conditionPlayer = false;
    }
});

document.getElementById('pinInput').addEventListener('input', (event) => {
    const pinInput = event.target;
    if(pinInput.value.length<6){
        pinInput.classList.remove('inputTrue');
        pinInput.classList.add('inputFalse');
        conditionPin = false;
        updateButton();
    } else {
        pinInput.classList.remove('inputFalse');
        pinInput.classList.add('inputTrue');
        conditionPin = true;
        updateButton();
        code = pinInput.value;
    }
    if (pinInput.value.length==0){
        pinInput.classList.remove('inputFalse');
        pinInput.classList.remove('inputTrue');
        updateButton();
        conditionPin = false;
    }
});

button.addEventListener('click', function() {
    let pin = parseInt(code);
    if(isGame(pin)){
        setSelectedGame(pin);
        const htmxLink = document.querySelector('[hx-get="/pages/avatar/avatar.html"]');
    // HTMX-Request manuell auslösen
        htmx.ajax('GET', '/pages/avatar/avatar.html', {
            target: '#mainContent',
            swap: 'innerHTML',
        });
    } else {
        alert("Not found");
    }
});
