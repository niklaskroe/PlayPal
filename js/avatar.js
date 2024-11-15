import { getPlayer, buildAvatar } from "./sharedData.js";

document.addEventListener("htmx:afterSettle", function() {
    loadCharacters();
    loadAvatar();
    loadEventListeners();
});

// load characters immediately
function loadCharacters() {
    htmx.ajax('GET', '/pages/avatar/characters.html', {
        target: '#avatarContent',
        swap: 'innerHTML'
    });
};

function loadEventListeners() {
    // tab listener
    document.querySelectorAll('.avatarTab').forEach(tab => {
        tab.addEventListener('click', (event) => {
            selectTab(event.target.id);
        });
    });

    document.querySelectorAll('.avatarItem').forEach(item => {
        item.addEventListener('click', (event) => {
            const selectedItem = event.target.closest('.avatarItem').id;
            updateAvatar(selectedItem);
            buildAvatar(getPlayer(), 'avatarPlayer');
        });
    });
};

document.addEventListener("htmx:afterRequest", function(event) {
    if (event.detail.target.id === "avatarContent") {
        console.log("HTMX-Request erfolgreich für avatarContent:", event);
    }
});


// change tab appearance on selection
function selectTab(selectedTabId) {
    console.log(selectedTabId);
    let tabs = document.querySelectorAll('.avatarTab');

    tabs.forEach(tab => {
        tab.classList.remove('selected');
    });

    let selectedTab = document.getElementById(selectedTabId);
    selectedTab.classList.add('selected');
    console.log(selectedTab.classList.value);
}

// avatarItem selection
function loadAvatar() {
    buildAvatar(getPlayer(), 'avatarPlayer');
};

// updating avatar data
function updateAvatar(selectedItem) {
    let player = getPlayer();

    if (selectedItem.startsWith('character')) {
        player.character = selectedItem.replace('character', '');
    }
    if (selectedItem.startsWith('accessory')) {
       player.accessory = selectedItem.replace('accessory', '');
    }

    setPlayer(player);
}