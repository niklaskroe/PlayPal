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
        name: "Reus",
        character: 3,
        accessory: 3
    },
    player4: {
        name: "Justin",
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
        name: "Frankenstein",
        character: 7,
        accessory: 7
    },
    player8: {
        name: "Tanzverbot",
        character: 8,
        accessory: 8
    },
    player9: {
        name: "",
        character: 9,
        accessory: 9
    },
    player10: {
        name: "",
        character: 10,
        accessory: 10
    },
    player11: {
        name: "",
        character: 11,
        accessory: 11
    },
    player12: {
        name: "",
        character: 12,
        accessory: 12
    },
    player13: {
        name: "",
        character: 13,
        accessory: 13
    },
    player14: {
        name: "",
        character: 14,
        accessory: 14
    },
    player15: {
        name: "",
        character: 15,
        accessory: 15
    },
    player16: {
        name: "",
        character: 16,
        accessory: 16
    },
    player17: {
        name: "",
        character: 17,
        accessory: 17
    },
    player18: {
        name: "",
        character: 18,
        accessory: 18
    },
    player19: {
        name: "",
        character: 19,
        accessory: 19
    },
    player20: {
        name: "",
        character: 20,
        accessory: 20
    },
    player21: {
        name: "",
        character: 21,
        accessory: 21
    },
    player22: {
        name: "",
        character: 22,
        accessory: 22
    },
    player23: {
        name: "",
        character: 23,
        accessory: 23
    },
    player24: {
        name: "",
        character: 24,
        accessory: 24
    }
};
// data of player
const player = {
    name: "Torben",
    character: 2,
    accessory: 4
}
// available game sessions
const games = {
    game1: {
      pin: 111111,
      playerCount: 8,
      teams: 0,
    },
    game2: {
      pin: 222222,
      playercount: 11,
      teams: 2,
    },
    game3: {
      pin: 333333,
      playercount: 23,
      teams: 3,
    },
    game4: {
      pin: 444444,
      playercount: 23,
      teams: 3,
    },
    game5: {
      pin: 555555,
      playercount: 23,
      teams: 0,
    },
    game6: {
      pin: 777777,
      playercount: 19,
      teams: 4,
    },
  };

// clear sessionStorage
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
        console.error("Stored gane data is empty")
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

export { getPlayer, setPlayer, buildAvatar, isGame, getGames, getBots };