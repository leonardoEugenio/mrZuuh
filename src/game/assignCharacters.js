function assignCharacters() {
    const characters = randownCharacters();

    console.log(global.gameInf.players);

    global.gameInf.players[characters.assassino].user.personagem = "assassino";
    global.gameInf.players[characters.policia].user.personagem = "policia";
    console.log(global.gameInf.players);
}

function randownCharacters() {
    const assassino = Math.floor(Math.random() * (global.gameInf.players.qtdPlayers - 0) + 0);
    const policia = Math.floor(Math.random() * (global.gameInf.players.qtdPlayers - 0) + 0);
    if (assassino == policia) {
        randownCharacters();
    } else {
        const characters = {assassino, policia};
        return (characters);
    }
}
module.exports = assignCharacters;