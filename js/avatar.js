import { initializePlayerData, initializeGameData, getPlayerData } from "./sharedData.js";

initializePlayerData();
getPlayerData(1);

// load characters immediately
(function() {
    htmx.ajax('GET', '/pages/avatar/characters.html', {
        target: '#avatarContent',
        swap: 'innerHTML'
    });
    console.log("neu geladen");
})();

// change tab appearance on selection
function selectTab(tabId) {
    document.querySelectorAll('.avatarTab').forEach(function(tab) {
        tab.classList.remove('selected');
    });

    document.getElementById(tabId).classList.add('selected');
}

// avatarItem selection
// each item has an id, saving both ids of the character and accessory in an object model
// avatar is being built separately by getting all components with the right id --> avatarBuilder
// building should happen in a generalized script to be available to all pages
function selectItem(characterId, accessoryId) {
    const avatar = {
        characterId: characterId,
        accessoryId: accessoryId
    };
}