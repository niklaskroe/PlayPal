// default bots
const bots = {
    player1: {
        name: "Herbert",
        character: 1,
        accessory: 1
    },
    player2: {
        name: "Frank",
        character: 2,
        accessory: 2
    },
    player3: {
        name: "Marco Reus",
        character: 3,
        accessory: 3
    },
    player4: {
        name: "Justin Time",
        character: 4,
        accessory: 4
    },
    player5: {
        name: "Niklas",
        character: 5,
        accessory: 5
    },
    player6: {
        name: "Pewe",
        character: 6,
        accessory: 6
    },
    player7: {
        name: "Frank",
        character: 7,
        accessory: 7
    },
    player8: {
        name: "Olaf",
        character: 8,
        accessory: 8
    },
    player9: {
        name: "Peter",
        character: 9,
        accessory: 9
    },
    player10: {
        name: "Klaus",
        character: 0,
        accessory: 0
    },
    player11: {
        name: "Chris",
        character: 1,
        accessory: 1
    },
    player12: {
        name: "Mert",
        character: 2,
        accessory: 2
    },
    player13: {
        name: "Sep",
        character: 3,
        accessory: 3
    },
    player14: {
        name: "Suke Lykwalker",
        character: 4,
        accessory: 4
    },
    player15: {
        name: "San Holo",
        character: 5,
        accessory: 5
    },
    player16: {
        name: "Jakob",
        character: 6,
        accessory: 6
    },
    player17: {
        name: "Sergej Fährlich",
        character: 7,
        accessory: 7
    },
    player18: {
        name: "Paul Lahner",
        character: 8,
        accessory: 8
    },
    player19: {
        name: "Klara Vorteil",
        character: 9,
        accessory: 9
    },
    player20: {
        name: "Heinz Fiction",
        character: 0,
        accessory: 0
    },
    player21: {
        name: "Rainer Verlust",
        character: 1,
        accessory: 1
    },
    player22: {
        name: "Ken Tucky",
        character: 2,
        accessory: 2
    },
    player23: {
        name: "Andi Arbeit",
        character: 3,
        accessory: 3
    },
    player24: {
        name: "Obama",
        character: 4,
        accessory: 4
    }
};

// data of player
const player = {
    name: "Torben",
    character: 2,
    accessory: 4
};

// available game sessions
const games = {
    game1: {
        pin: 111111,
        playerCount: 8,
        teams: 2,
    },
    game2: {
      pin: 222222,
      playerCount: 11,
      teams: 2,
    },
    game3: {
      pin: 333333,
      playerCount: 23,
      teams: 3,
    },
    game4: {
      pin: 444444,
      playerCount: 14,
      teams: 3,
    },
    game5: {
      pin: 555555,
      playerCount: 23,
      teams: 4,
    },
    game6: {
      pin: 777777,
      playerCount: 19,
      teams: 4,
    },
};

// clear sessionStorage TODO for production
sessionStorage.clear();

// init default data
(function initGames() {
    if (!sessionStorage.getItem("games")) {
        sessionStorage.setItem("games", JSON.stringify(games));
    }
})();

(function initBots() {
    if (!sessionStorage.getItem("bots")) {
        sessionStorage.setItem("bots", JSON.stringify(bots));
    }
})();

// init player
(function initPlayer() {
    if (!sessionStorage.getItem("player")) {
        sessionStorage.setItem("player", JSON.stringify(player));
    }
})();

// getter and setter
function getPlayer() {
    let playerData = sessionStorage.getItem("player");

    if (!playerData) {
        console.warn("No player found in sessionStorage");
        return null;
    }

    if (playerData.trim() === "") {
        console.error("Stored player data is empty");
        return null;
    }

    try {
        let player = JSON.parse(playerData);
        return player;
    } catch (error) {
        console.error("JSON parser ERROR: main player data", error);
        return null;
    }
}

function setPlayer(player) {
    sessionStorage.setItem("player", JSON.stringify(player))
}

function getBots() {
    let botData = sessionStorage.getItem("bots");

    if (!botData) {
        console.warn("No bots found in sessionStorage");
        return null;
    }

    if (botData.trim() === "") {
        console.error("Stored bots data is empty");
        return null;
    }

    try {
        let bots = JSON.parse(botData);
        return bots;
    } catch (error) {
        console.error("JSON parser ERROR: main player data", error);
        return null;
    }
}

function getGames() {
    let gameData = sessionStorage.getItem("games");

    if (!gameData) {
        console.warn("No game data found in sessionStorage");
        return null;
    }

    if (gameData.trim() === "") {
        console.error("Stored game data is empty")
        return null;
    }

    try {
        const game = JSON.parse(gameData);
        return game;
    } catch (error) {
        console.error("JSON parser ERROR: game data", error);
        return null;
    }
}

function isGame(pin) {
    let gameData = Object.values(getGames());
  
    return gameData.some(game => game.pin === pin);
}

function buildAvatar(player, target) {
    let characterId = player.character;
    let accessoryId = player.accessory;

    let characterSrc = `/assets/avatar/character${characterId}.svg`;
    let accessorySrc = `/assets/avatar/accessory${accessoryId}.svg`;

    let targetElement = document.getElementById(target);
    if (!targetElement) return;

    targetElement.innerHTML = `
        <img class="avatarSvg character" src="${characterSrc}" alt="Character ${characterId}">
        <img class="avatarSvg accessory" src="${accessorySrc}" alt="Accessory ${accessoryId}">
    `;
}

function setSelectedGame(pin){
    sessionStorage.setItem("selectedGame", JSON.stringify(pin))    
}

function getSelectedGame(){
    let gamePin = sessionStorage.getItem("selectedGame");

    if (!gamePin) {
        console.warn("No selected game found in sessionStorage");
        return null;
    }

    if (gamePin.trim() === "") {
        console.error("Stored selected game is empty")
        return null;
    }

    try {
        const game = JSON.parse(gamePin);
        return game;
    } catch (error) {
        console.error("JSON parser ERROR: game data", error);
        return null;
    }
}

export { getPlayer, setPlayer, buildAvatar, isGame, getGames, getBots, setSelectedGame, getSelectedGame };