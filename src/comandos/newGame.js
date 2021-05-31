const gameIndex = require("../game/game");
const join      = require("./join");

function newGame(msg) {
    gameIndex();
    configGame(msg);
    join(msg);
}

function configGame(msg) {
    const userAdm = msg.member.user;
    global.gameInf.IdAdm = userAdm.discriminator;
    console.log(global.gameInf);
}
module.exports = newGame;