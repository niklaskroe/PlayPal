//Benutzerdaten
const userName = "Test"
const userAvatar = "/assets/avatar/kahoot_glasses.svg"
//Müssen später mit tatsächlichen Daten überschrieben werden
//Aktuelles Team
let playerTeam = null;

//Team-Beitritt
function joinTeam(teamElement) {
    //Spielr bereits in Team?
    const playersDiv = teamElement.querySelector('.players');
    //console.log('Players Div:', playersDiv);

    const existingPlayers = playersDiv.querySelectorAll('.player')
    //console.log('Existing Players:', existingPlayers);

    for (let player of existingPlayers) {
        if (player.querySelector('.playerName').textContent === userName) {
            alert("Du bist bereits in diesem Team!");
            return
        }
    }

    if (playerTeam) {
        const prevPlayersDiv = playerTeam.querySelector('.players');
        const prevPlayers = prevPlayersDiv.querySelectorAll('.player');
        //Entfernen des Spielers bei Beitritt in ein neues Team
        for (let player of prevPlayers) {
            if (player.querySelector('.playerName').textContent === userName) {
                prevPlayersDiv.removeChild(player);
                break;
            }
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

    //console.log('Adding Player Div',playerDiv)

    //Spieler Teamcontainer hinzufügen (ChatGPT)
    //Fehler war player"s"Div wurde übergeben :/
    playersDiv.appendChild(playerDiv);


    playerTeam = teamElement;
}

//On-Click eventListener
document.querySelectorAll('.team').forEach(team =>{
    team.addEventListener('click',()=> joinTeam(team));
})
