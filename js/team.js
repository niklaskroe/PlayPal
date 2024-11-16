import { getPlayer, getBots, getGames, buildAvatar, getSelectedGame } from '/js/sharedData.js';
htmx.on('htmx:load', (event) => {
    // hide continue button
    hideContinueButton();

    //Current Team
    let playerTeam = null;
    //Data from sharedData.js
    const playerData = getPlayer();
    const gamesData = getGames();

    //Global Index
    let globalPlayerIndex = 0;

    //Game-Pin
    const gamePinDisplay = document.getElementById('gamePinDisplay');
    //Get PIN of selectedGame Object
    let pin = getSelectedGame() || '222222';
    gamePinDisplay.textContent = pin;

    loadTeams(pin);

    // Load Teams based on PIN
    function loadTeams(pin) {
        console.log("Loading teams for pin:", pin);
        console.log("Loading teams for pin:", pin);
        const selectedGame = Object.values(gamesData).find(game => game.pin == pin);

        if (selectedGame) {
            const teamsCount = selectedGame.teams; // Amount of Teams
            const totalPlayers = selectedGame.playerCount; // Amount of players (bots)
            const teamsCount = selectedGame.teams; // Amount of Teams
            const totalPlayers = selectedGame.playerCount; // Amount of players (bots)
            const teamContainer = document.querySelector('.teamSelection');

            // Empty Team-Container
            // Empty Team-Container
            teamContainer.innerHTML = '';

            if (teamsCount === 0) {
                //no Teams
                teamContainer.classList.add('noTeams')
                const playersDiv = document.createElement('div');
                playersDiv.classList.add('teamPlayers', 'noTeams');

                //get players in case of no Teams
                const players = getPlayersForTeam(0, 1, totalPlayers);
                players.forEach((player) => {
                    const playerDiv = createPlayerElement(player);
                    playersDiv.appendChild(playerDiv);
                });
                const playerDiv = createPlayerElement(playerData);
                playersDiv.appendChild(playerDiv);
                teamContainer.appendChild(playersDiv);
            } else {
                teamContainer.classList.remove('noTeams');
                for (let i = 0; i < teamsCount; i++) {
                    const teamName = `Team ${String.fromCharCode(65 + i)}`; // Team A, B, C, ...
                    const players = getPlayersForTeam(i, teamsCount, totalPlayers); // Bots for Teams
                    const players = getPlayersForTeam(i, teamsCount, totalPlayers); // Bots for Teams

                    const teamDiv = document.createElement('div');
                    teamDiv.classList.add('team');

                    const teamTitle = document.createElement('h2');
                    teamTitle.textContent = teamName;
                    teamTitle.classList.add('teamTitle')

                    const playersDiv = document.createElement('div');
                    playersDiv.classList.add('teamPlayers');

                    players.forEach((player) => {
                        const playerDiv = createPlayerElement(player);
                        const playerDiv = createPlayerElement(player);
                        playersDiv.appendChild(playerDiv);
                    });

                    const teamButtonContainer = document.createElement('div');
                    teamButtonContainer.classList.add('teamButtonContainer');

                    const teamButton = document.createElement('button');
                    teamButton.classList.add('teamButton');
                    teamButton.textContent = 'Beitreten';
                    teamButton.addEventListener('click', () => joinTeam(teamDiv, playerData));
                    teamButton.addEventListener('click', () => joinTeam(teamDiv, playerData));
                    teamButtonContainer.appendChild(teamButton)

                    teamDiv.appendChild(teamTitle);
                    teamDiv.appendChild(playersDiv);
                    teamDiv.appendChild(teamButtonContainer);
                    teamContainer.appendChild(teamDiv);
                }
            }
        } else {
            console.log('Kein Spiel mit dieser PIN gefunden.');
        }
    }

    //create Players without teams
    function createPlayerElement(player) {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('teamPlayer');

        const botAvatarContainer = document.createElement('div');
        botAvatarContainer.id = `avatar-${globalPlayerIndex}`;
        botAvatarContainer.classList.add('teamAvatar');

        console.log(`Building Bot Avatar for: ${player.name} with ID: ${botAvatarContainer.id}`);

        let characterId = player.character;
        let accessoryId = player.accessory;

        let characterSrc = `/assets/avatar/character${characterId}.svg`;
        let accessorySrc = `/assets/avatar/accessory${accessoryId}.svg`;

        botAvatarContainer.innerHTML = `
    <img class="avatarSvg character" src="${characterSrc}" alt="Character ${characterId}">
    <img class="avatarSvg accessory" src="${accessorySrc}" alt="Accessory ${accessoryId}">
    `;

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('teamPlayerName');
        nameSpan.textContent = player.name;

        playerDiv.appendChild(botAvatarContainer);
        playerDiv.appendChild(nameSpan);
        globalPlayerIndex++;
        return playerDiv;
    }

    //Team-Entry
    function joinTeam(teamElement, playerData) {
        if (playerTeam) {
            const prevButton = playerTeam.querySelector('.teamButton');
            prevButton.disabled = false;
            const prevPlayersDiv = playerTeam.querySelector('.teamPlayers');
            const prevPlayers = prevPlayersDiv.querySelectorAll('.teamPlayer');
            //removal of Player when joining another team
            for (let player of prevPlayers) {
                if (player.querySelector('.teamPlayerName').textContent === playerData.name) {
                    prevPlayersDiv.removeChild(player);
                    break;
                }
            }
        }

        const playersDiv = teamElement.querySelector('.teamPlayers');
        const playerDiv = createPlayerElement(playerData);
        playersDiv.appendChild(playerDiv);

        const button = teamElement.querySelector('.teamButton');
        button.disabled = true;
        playerTeam = teamElement;
    }

    //get Bot-Players for Game with Teams
    function getPlayersForTeam(teamIndex, totalTeams, totalPlayers) {
        const playerValues = Object.values(getBots());
        const playerValues = Object.values(getBots());
        const players = [];

        //Players per team
        //Players per team
        const playersPerTeam = Math.floor(totalPlayers / totalTeams);
        const startIndex = teamIndex * playersPerTeam;

        //add Players to teams (bots)
        //add Players to teams (bots)
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

    //get Bot-Players for Game with Teams
    function getPlayersForTeam(teamIndex, totalTeams, totalPlayers) {
        const playerValues = Object.values(getBots());
        const players = [];

        //Players per team
        const playersPerTeam = Math.floor(totalPlayers / totalTeams);
        const startIndex = teamIndex * playersPerTeam;

        //add Players to teams (bots)
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

    function hideContinueButton() {
        const continueButton = document.querySelector('.continueButton');
        if (continueButton) {
            continueButton.classList.add('hidden');
        }
    }
});