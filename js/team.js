import { getPlayer, getBots, getGames, buildAvatar, getSelectedGame } from '/js/sharedData.js';
htmx.on('htmx:load', (event) => {

//Daten aus der sharedData.js
    const playerData = getPlayer();
    const botsData = getBots();
    const gamesData = getGames();

//Globaler Index
    let globalPlayerIndex = 0;

//Spiele-Pin
    const gamePinDisplay = document.getElementById('gamePinDisplay');
//Get PIN of selectedGame Object
    let pin = getSelectedGame() || '222222';
    console.log('Pin:', pin);
    gamePinDisplay.textContent = pin;

    if (playerData) {
        console.log('Spieler Daten:', playerData);
        loadTeams(pin);
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

// Lade die Teams basierend auf der PIN
    function loadTeams(pin) {
        const selectedGame = Object.values(gamesData).find(game => game.pin == pin);

        if (selectedGame) {
            const teamsCount = selectedGame.teams; // Anzahl der Teams
            const totalPlayers = selectedGame.playerCount; // Anzahl Spieler (bots)
            const teamContainer = document.querySelector('.teamSelection');

            // Leerer Team-Container
            teamContainer.innerHTML = '';

            for (let i = 0; i < teamsCount; i++) {
                const teamName = `Team ${String.fromCharCode(65 + i)}`; // Team A, B, C, ...
                const players = getPlayersForTeam(i, teamsCount, totalPlayers); // Bots für die Teams

                const teamDiv = document.createElement('div');
                teamDiv.classList.add('team');

                const teamTitle = document.createElement('h2');
                teamTitle.textContent = teamName;
                teamTitle.classList.add('teamTitle')

                const playersDiv = document.createElement('div');
                playersDiv.classList.add('teamPlayers');

                players.forEach((player) => {
                    const playerDiv = document.createElement('div');
                    playerDiv.classList.add('teamPlayer');

                    const botAvatarContainer = document.createElement('div');
                    botAvatarContainer.id = `avatar-${globalPlayerIndex}`; // Eindeutige ID
                    botAvatarContainer.classList.add('teamAvatar');

                    console.log(`Building Bot Avatar for: ${player.name} with ID: ${botAvatarContainer.id}`);

                    let characterId = player.character;
                    let accessoryId = player.accessory;

                    let characterSrc = `/assets/avatar/character${characterId}.svg`;
                    let accessorySrc = `/assets/avatar/accessory${accessoryId}.svg`;

                    if (botAvatarContainer) {
                        botAvatarContainer.innerHTML = `
                    <img class="avatarSvg character" src="${characterSrc}" alt="Character ${characterId}">
                    <img class="avatarSvg accessory" src="${accessorySrc}" alt="Accessory ${accessoryId}">
                    `;
                    }

                    // Avatar bauen
                    //buildAvatar(player, botAvatarContainer);

                    const nameSpan = document.createElement('span');
                    nameSpan.classList.add('teamPlayerName');
                    nameSpan.textContent = player.name;

                    playerDiv.appendChild(botAvatarContainer);
                    playerDiv.appendChild(nameSpan);
                    playersDiv.appendChild(playerDiv);

                    globalPlayerIndex++;
                });

                const teamButtonContainer = document.createElement('div');
                teamButtonContainer.classList.add('teamButtonContainer');

                const teamButton = document.createElement('button');
                teamButton.classList.add('teamButton');
                teamButton.textContent = 'Beitreten';

                teamButtonContainer.appendChild(teamButton)

                teamDiv.appendChild(teamTitle);
                teamDiv.appendChild(playersDiv);
                teamDiv.appendChild(teamButtonContainer);
                teamContainer.appendChild(teamDiv);
            }

            addTeamButtonListeners();
        } else {
            console.log('Kein Spiel mit dieser PIN gefunden.');
        }
    }

    function getPlayersForTeam(teamIndex, totalTeams, totalPlayers) {
        const playerValues = Object.values(botsData);
        const players = [];

        //Anzahl Spieler pro Team
        const playersPerTeam = Math.floor(totalPlayers / totalTeams);
        //Startteam
        const startIndex = teamIndex * playersPerTeam;

        //Spieler aktuellem Team hinzufügen (bots)
        for (let i = startIndex; i < startIndex + playersPerTeam; i++) {
            if (playerValues[i]) {
                players.push({
                    name: playerValues[i].name,
                    character: playerValues[i].character,
                    accessory: playerValues[i].accessory
                });
            }
        }
        console.log(`bot-players ${teamIndex}`, players)
        return players;
    }

//Team-Buttons Event-Listener
    function addTeamButtonListeners() {
        document.querySelectorAll('.teamButton').forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                const teamElement = button.closest('.team');
                joinTeam(teamElement);
            });
        });
    }

//Aktuelles Team
    let playerTeam = null;

//Team-Beitritt
    function joinTeam(teamElement) {
        //Spielr bereits in Team?
        const playersDiv = teamElement.querySelector('.teamPlayers');
        //console.log('Players Div:', playersDiv);

        const existingPlayers = playersDiv.querySelectorAll('.teamPlayer')
        //console.log('Existing Players:', existingPlayers);

        for (let player of existingPlayers) {
            if (player.querySelector('.teamPlayerName').textContent === playerData.name) {
                alert("Du bist bereits in diesem Team!");
                return
            }
        }

        if (playerTeam) {
            const prevPlayersDiv = playerTeam.querySelector('.teamPlayers');
            const prevPlayers = prevPlayersDiv.querySelectorAll('.teamPlayer');
            //Entfernen des Spielers bei Beitritt in ein neues Team
            for (let player of prevPlayers) {
                if (player.querySelector('.teamPlayerName').textContent === playerData.name) {
                    prevPlayersDiv.removeChild(player);
                    break;
                }
            }
        }

        const playerDiv = document.createElement('div');
        playerDiv.classList.add('teamPlayer')

        //Avatar
        const playerAvatarContainer = document.createElement('div');
        playerAvatarContainer.id = `avatar-${globalPlayerIndex}`;
        playerAvatarContainer.classList.add('teamAvatar');

        let characterId = playerData.character;
        let accessoryId = playerData.accessory;

        let characterSrc = `/assets/avatar/character${characterId}.svg`;
        let accessorySrc = `/assets/avatar/accessory${accessoryId}.svg`;

        if (playerAvatarContainer) {
            playerAvatarContainer.innerHTML = `
        <img class="avatarSvg character" src="${characterSrc}" alt="Character ${characterId}">
        <img class="avatarSvg accessory" src="${accessorySrc}" alt="Accessory ${accessoryId}">
        `;
        }
        //Avatar bauen

        //Namen
        const nameSpan = document.createElement('span');
        nameSpan.classList.add('teamPlayerName');
        nameSpan.textContent = playerData.name;

        //Player div updaten
        playerDiv.appendChild(playerAvatarContainer);
        playerDiv.appendChild(nameSpan);

        //Spieler Teamcontainer hinzufügen (ChatGPT)
        //Fehler war player"s"Div wurde übergeben :/
        playersDiv.appendChild(playerDiv);

        playerTeam = teamElement;
        globalPlayerIndex++;
    }

})