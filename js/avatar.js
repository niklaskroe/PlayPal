import { getPlayer } from "./sharedData.js";

const pl = getPlayer();
console.log(pl);

// load characters immediately
(function loadCharacters() {
    htmx.ajax('GET', '/pages/avatar/characters.html', {
        target: '#avatarContent',
        swap: 'innerHTML'
    });
})();

// change tab appearance on selection
function selectTab(selectedTabId) {
    let tabs = document.querySelectorAll('.avatarTab');
    
    tabs.forEach(tab => {
        tab.classList.remove('selected');
    });

    let selectedTab = document.getElementById(selectedTabId);
    selectedTab.classList.add('selected');
}

document.querySelectorAll('.avatarTab').forEach(tab => {
    tab.addEventListener('click', (event) => {
        selectTab(event.target.id);
    });
});

// avatarItem selection
// each item has an id, saving both ids of the character and accessory in an object model
// avatar is being built separately by getting all components with the right id --> avatarBuilder
// building should happen in a generalized script to be available to all pages
function updateAvatar(selectedItem) {
    
}

document.querySelectorAll('.avatarItem').forEach(item => {
    item.addEventListener('click', (event) => {

    });
})