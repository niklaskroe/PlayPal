//Benutzerdaten
const userName = "Mein Benutzername"
const userAvatar = "/assets/avatar/kahoot_glasses.svg"
//Müssen später mit tatsächlichen Daten überschrieben werden

//Team-Beitritt
function joinTeam(teamElement) {
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player')

    //Avatar
    const avatarImage = document.createElement('img');
    avatarImage.src = userAvatar;
    avatarImage.alt = userName;
    avatarImage.classList.add('avatar');

    //Namen
    const nameSpan = document.createElement('span');
    nameSpan.classList.add('playerName');
    nameSpan.textContent = userName;

    //Player div updaten
    playerDiv.appendChild(avatarImage);
    playerDiv.appendChild(nameSpan);

    //Spieler Teamcontainer hinzufügen (ChatGPT)
    const playersDiv = teamElement.querySelector('.players');
    playersDiv.appendChild(playersDiv);
}

//On-Click eventListener
document.querySelectorAll('.team').forEach(team =>{
    team.addEventListener('click',()=> joinTeam(team));
})
