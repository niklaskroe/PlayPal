
const button = document.getElementById('startButton');
let condition =false;
const pin = document.getElementById('pin');
const player = document.getElementById('player');
// Button deaktivieren
function disableButton() {
    button.classList.remove('enabled');         // Entfernt die aktive Klasse
    button.classList.add('disabled');          // Fügt die disabled Klasse hinzu
    console.log("Nd da")
}

// Button aktivieren
function enableButton() {
    button.classList.remove('disabled');       // Entfernt die disabled Klasse
    button.classList.add('enabled');            // Fügt die aktive Klasse hinzu
    console.log("Da");
}
//update textinput
function updateValue(event) {
    console.log("My new value is: ", event.target.value)
}

player.addEventListener('change', function(){
    if(player.target.value<=3){
        player.classList.add('inpuFalse');
    } else {
        player.classList.add('inputTrue');
    }
});
pin.addEventListener('change', function(){


});

button.addEventListener('click', function() {
  // Ändere die CSS-Klasse des Buttons
  //window.location.href = '/pages/avatar/avatar.html';
  
  //button.classList.toggle('entryButton'); // Fügt die Klasse 'active' hinzu oder entfernt sie
  if(condition){
    disableButton();
    condition=false;
  }else{
  // Aktiviere den Button
    enableButton();
    condition=true;
  }
});