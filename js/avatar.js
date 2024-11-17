import { getPlayer, buildAvatar, setPlayer } from "./sharedData.js";

let isRefresh = true;

htmx.on('htmx:load', () => {
    // prevent script from running when not on the avatar page
    const avatarPlayer = document.getElementById('avatarPlayer');

    if (!avatarPlayer) {
        return;
    }
    
    // load player avatar
    loadAvatar();

    // initial character load on refresh
    if (isRefresh) {
        loadContent('charactersTab');
    }

    // load event listeners
    loadEventListeners();
});

// load player avatar & show continue button
function loadAvatar() {
    buildAvatar(getPlayer(), 'avatarPlayer');
    showContinueButton();
}

function loadEventListeners() {
    // tab listener
    document.querySelectorAll('.avatarTab').forEach(tab => {
        tab.addEventListener('click', (event) => {
            selectTab(event.target.id);
            loadContent(event.target.id);
        });
    });

    // avatar item listener
    document.addEventListener('htmx:afterSwap', (event) => {
        if (event.detail.target.id === 'avatarContent') {
            document.querySelectorAll('.avatarItem').forEach(item => {
                item.addEventListener('click', (event) => {
                    const selectedItem = event.target.closest('.avatarItem').id;
                    updateAvatar(selectedItem);
                    buildAvatar(getPlayer(), 'avatarPlayer');
                });
            });
        }
    });
}

// load content based on selected tab
function loadContent(selectedTabId) {
    isRefresh = false; // reset refresh flag

    if (selectedTabId === 'charactersTab') {
        htmx.ajax('GET', '/pages/avatar/characters.html', {
            target: '#avatarContent',
            swap: 'innerHTML'
        });
    } else if (selectedTabId === 'accessoriesTab') {
        htmx.ajax('GET', '/pages/avatar/accessories.html', {
            target: '#avatarContent',
            swap: 'innerHTML'
        });
    }
}

// show continue button
function showContinueButton() {
    const continueButton = document.querySelector('.continueButton');
    if (continueButton) {
        continueButton.classList.remove('hidden');
    }
}

// change tab appearance on selection
function selectTab(selectedTabId) {
    let tabs = document.querySelectorAll('.avatarTab');

    tabs.forEach(tab => {
        tab.classList.remove('selected');
    });

    let selectedTab = document.getElementById(selectedTabId);
    selectedTab.classList.add('selected');
}

// updating avatar data
function updateAvatar(selectedItem) {
    // get current player data
    let player = getPlayer();

    if (selectedItem.startsWith('character')) {
        player.character = selectedItem.replace('character', '');
    }
    if (selectedItem.startsWith('accessory')) {
       player.accessory = selectedItem.replace('accessory', '');
    }
    	
    // save in sessionStorage
    setPlayer(player);
}