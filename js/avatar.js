// load characters immediately
(function() {
    htmx.ajax('GET', '/pages/avatar/characters.html', {
        target: '#avatarContent',
        swap: 'innerHTML'
    });
    console.log("neu geladen");
})();

function selectTab(tabId) {
    document.querySelectorAll('.avatarTab').forEach(function(tab) {
        tab.classList.remove('selected');
    });

    document.getElementById(tabId).classList.add('selected');
}