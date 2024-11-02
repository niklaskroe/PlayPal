import { getPlayer, getBots, getGames } from '/js/sharedData.js';

const playerData = getPlayer();
const botsData = getBots();
const gamesData = getGames();

if (playerData) {
    console.log('Spieler Daten:', playerData);
    createExampleTeams();
} else {
    console.log('Spieler Daten konnten nicht abgerufen werden.');
}

if (botsData) {
    console.log('Bots Daten:', botsData);
} else {
    console.log('Bots Daten konnten nicht abgerufen werden.');
}

if (gamesData) {
    console.log('Spiele Daten:', gamesData);
} else {
    console.log('Spiele Daten konnten nicht abgerufen werden.');
}

//BeispielTeams
function createExampleTeams() {
    const teamContainer = document.querySelector('.teamSelection');

    const teams = [
        { name: "Team Alpha", players: [botsData.player1, botsData.player2]},
        { name: "Team Beta", players: [botsData.player3, botsData.player4]},
        { name: "Team Gamma", players: [botsData.player5, botsData.player6]},
        { name: "Team Delta", players: [botsData.player7, botsData.player8]}
    ];

    teams.forEach(team => {
        const teamDiv = document.createElement('div');
        teamDiv.classList.add('team');

        const teamTitle = document.createElement('h2');
        teamTitle.textContent = team.name;

        const playersDiv = document.createElement('div')
        playersDiv.classList.add('players');

        //Bot-Spieler Hinzufügen
        team.players.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('player');

            const avatarImage = document.createElement('img');
            avatarImage.src = '/assets/avatar/character0.svg' || player.avatar;
            avatarImage.alt = player.name;
            avatarImage.classList.add('avatar');

            const nameSpan = document.createElement('span');
            nameSpan.classList.add('playerName');
            nameSpan.textContent = player.name;

            // Spieler-Div aktualisieren
            playerDiv.appendChild(avatarImage);
            playerDiv.appendChild(nameSpan);
            playersDiv.appendChild(playerDiv);
        });

        const teamButtonContainer = document.createElement('div');
        teamButtonContainer.classList.add('teamButtonContainer');

        const teamButton = document.createElement('button');
        teamButton.classList.add('teamButton');
        teamButton.textContent = 'Beitreten';
        teamButtonContainer.appendChild(teamButton);

        // Team zusammenbauen
        teamDiv.appendChild(teamTitle);
        teamDiv.appendChild(playersDiv);
        teamDiv.appendChild(teamButtonContainer);
        teamContainer.appendChild(teamDiv);
    });
}

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
        if (player.querySelector('.playerName').textContent === playerData.name) {
            alert("Du bist bereits in diesem Team!");
            return
        }
    }

    if (playerTeam) {
        const prevPlayersDiv = playerTeam.querySelector('.players');
        const prevPlayers = prevPlayersDiv.querySelectorAll('.player');
        //Entfernen des Spielers bei Beitritt in ein neues Team
        for (let player of prevPlayers) {
            if (player.querySelector('.playerName').textContent === playerData.name) {
                prevPlayersDiv.removeChild(player);
                break;
            }
        }
    }

    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player')

    //Avatar
    const avatarImage = document.createElement('img');
    avatarImage.src = playerData.avatar || '/assets/avatar/accessory0.svg';
    avatarImage.alt = playerData.name;
    avatarImage.classList.add('avatar');

    //Namen
    const nameSpan = document.createElement('span');
    nameSpan.classList.add('playerName');
    nameSpan.textContent = playerData.name;

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
document.querySelectorAll('.teamButton').forEach(button =>{
    button.addEventListener('click',(event)=> {
        event.stopPropagation();
        const teamElement = button.closest('.team');
        joinTeam(teamElement);
    });
});
