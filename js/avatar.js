function selectTab(tabId) {
    document.querySelectorAll('.avatarTab').forEach(function(tab) {
        tab.classList.remove('selected');
    });

    document.getElementById(tabId).classList.add('selected');
}