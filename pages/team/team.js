//Benutzerdaten
const userName = "Test"
const userAvatar = "/assets/avatar/kahoot_glasses.svg"
//Müssen später mit tatsächlichen Daten überschrieben werden

//Team-Beitritt
function joinTeam(teamElement) {
    //Spielr bereits in Team?
    const playersDiv = teamElement.querySelector('.players');
    console.log('Players Div:', playersDiv);

    const existingPlayers = playersDiv.querySelectorAll('.player')
    console.log('Existing Players:', existingPlayers);

    for (let player of existingPlayers) {
        if (player.querySelector('.playerName').textContent === userName) {
            alert("Du bist bereits in diesem Team!");
            return
        }
    }


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

    console.log('Adding Player Div',playerDiv)

    //Spieler Teamcontainer hinzufügen (ChatGPT)
    //Fehler war player"s"Div wurde übergeben :/
    if (!Array.from(existingPlayers).includes(playerDiv)) {
        playersDiv.appendChild(playerDiv);
    } else {
        console.log("Player is already in the team:", userName);
    }
}

//On-Click eventListener
document.querySelectorAll('.team').forEach(team =>{
    team.addEventListener('click',()=> joinTeam(team));
})
