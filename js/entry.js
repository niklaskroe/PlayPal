// Hole den Button anhand seiner ID (passe die ID an)
const button = document.getElementById('startButton');
const pin = document.getElementById('pin');
const player = document.getElementById('player');
let condition =false;
// Funktion, die beim Klicken auf den Button ausgeführt wird
// Button deaktivieren
function disableButton() {
    //button.disabled = true;                    // Deaktiviert den Button
    button.classList.remove('enabled');         // Entfernt die aktive Klasse
    button.classList.add('disabled');          // Fügt die disabled Klasse hinzu
}

// Button aktivieren
function enableButton() {
    //button.disabled = false;                   // Aktiviert den Button
    button.classList.remove('disabled');       // Entfernt die disabled Klasse
    button.classList.add('enabled');            // Fügt die aktive Klasse hinzu
}

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