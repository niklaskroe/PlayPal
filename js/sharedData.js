// default npcs
const defaultPlayers = {
        player1: {
            name: "",
            character: 1,
            accessory: 1
        },
        player2: {
            name: "",
            character: 2,
            accessory: 2
        },
        player3: {
            name: "",
            character: 3,
            accessory: 3
        },
        player4: {
            name: "",
            character: 4,
            accessory: 4
        },
        player5: {
            name: "",
            character: 5,
            accessory: 5
        },
        player6: {
            name: "",
            character: 6,
            accessory: 6
        },
        player7: {
            name: "",
            character: 7,
            accessory: 7
        },
        player8: {
            name: "",
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
const mainPlayer = {
    name: "",
    character: 2,
    accessory: 4
}
// available game sessions
const gameData = {
    game1: {
        pin: 111111,
        playerCount: 8,
        teams: 0
    },
    game2: {
        pin: 222222,
        playercount: 11,
        teams: 2
    },
    game3: {
        pin: 333333,
        playercount: 23,
        teams: 3
    },
    game4: {
        pin: 444444,
        playercount: 23,
        teams: 3
    },
    game5: {
        pin: 555555,
        playercount: 23,
        teams: 0
    },
    game6: {
        pin: 777777,
        playercount: 19,
        teams: 4
    }
};

// init default data
(function defaultPlayers() {
    if (!sessionStorage.getItem("defaultPlayers")) {
        sessionStorage.setItem("defaultPlayers", JSON.stringify(defaultPlayers));
    }
    console.log("default players")
})();

(function gameData() {
    if (!sessionStorage.getItem("gameData")) {
        sessionStorage.setItem("gameData", JSON.stringify(defaultPlayers));
    }
})();

function getPlayerData(playerId) {
    const players = JSON.parse(sessionStorage.getItem("defaultPlayers"));
    console.log(players);
    return players ? players[playerId] : null;
}

export { getPlayerData };