import { isGame, setPlayer, setSelectedGame } from "./sharedData.js";
htmx.on("htmx:load", () => {
    // prevent script from running when not on the entry page
    const button = document.getElementById('startButton');

    if (!button) {
        return;
    }

    //Variables
    const nameInput = document.getElementById('nameInput');
    const pinInput = document.getElementById('pinInput');

    if (!button || !nameInput || !pinInput) {
        return; // Exit if the elements are not present
    }

    let conditionPlayer = false;
    let conditionPin = false;
    let code = null; //for Code transfer
    const player = { //for Player transfer
        name: "",
        character: 0,
        accessory: 0
    }

    // deactivate Button 
    function disableButton() {
        button.classList.remove('enabled');         //remove "enabled" Class
        button.classList.add('disabled');          //add "disabled" Class
    }

    // activate Button 
    function enableButton() {
        button.classList.remove('disabled');         // remove "disabled" Class
        button.classList.add('enabled');            //add "enabled" Class
    }

    //Checks conditions & (de)activates button
    function updateButton() {
        if (conditionPin && conditionPlayer) {
            enableButton();
        } else {
            disableButton();
        }
    }

    //sets individual Playername
    function setName(name) {
        player.name = name;
        setPlayer(player);
    }

    //Event-Listener for Name-Input
    document.getElementById('nameInput').addEventListener('input', (event) => {
        const nameInput = event.target;
        
        if (nameInput.value.length < 3) {
            nameInput.classList.remove('inputTrue'); //remove "InputTrue" Class
            nameInput.classList.add('inputFalse');  //add "InputFalse" Class
            
            conditionPlayer = false;
            
            updateButton();                         //checks Button
        } else {
            nameInput.classList.remove('inputFalse'); //remove "InputFalse" Class
            nameInput.classList.add('inputTrue');    //add "InputTrue" Class
            
            conditionPlayer = true;
            
            updateButton();                          //checks Button
            
            setName(nameInput.value);
        }
        if (nameInput.value.length == 0) {
            nameInput.classList.remove('inputFalse');   //remove "InputFalse" Class
            nameInput.classList.remove('inputTrue');    //remove "InputTrue" Class
            
            conditionPlayer = false;
            
            updateButton();                             //checks Button
        }
    });

    //Event-Listener fpr Pin-Input (analog to Name-Input)
    document.getElementById('pinInput').addEventListener('input', (event) => {
        const pinInput = event.target;

        if (pinInput.value.length < 6) {
            button.textContent = "Join";

            pinInput.classList.remove('inputTrue');
            pinInput.classList.add('inputFalse');
            
            conditionPin = false;
            
            updateButton();
        } else {
            pinInput.classList.remove('inputFalse');
            pinInput.classList.add('inputTrue');
            // sets code
            code = pinInput.value;
            if (isGame(parseInt(pinInput.value))) {  //checks if Pin has a Game
                conditionPin = true;
            } else {
                button.textContent = "Game not found";
                button.textContent = "Game not found";
            }
            updateButton();
        }
        if (pinInput.value.length == 0) {
            button.textContent = "Join";
            
            pinInput.classList.remove('inputFalse');
            pinInput.classList.remove('inputTrue');
            
            conditionPin = false;
            
            updateButton();
        }
    });

    //Event-Listener for Button-Click
    button.addEventListener('click', function () {
        let pin = parseInt(code);
        //sets Game
        setSelectedGame(pin);
        //go to avatar         
        htmx.ajax('GET', '/pages/avatar/avatar.html', {
            target: '#mainContent',
            swap: 'innerHTML',
        });
    });
    
});
