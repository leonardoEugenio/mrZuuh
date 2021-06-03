function assignCharacters() {
    for (let i = 0; i < global.gameInf.config.qtdDetetives; i++) {
        var character = "detetive";
        addCharacter(character);
    }
    for (let i = 0; i < global.gameInf.config.qtdKilers; i++) {
        var character = "Kiler";
        addCharacter(character);
    }
    console.log(global.gameInf.players);
}

function randownNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function addCharacter(character) {
    const drawn = randownNumber(1, global.gameInf.players.qtdPlayers);
     if (global.gameInf.players[drawn].personagem == "cidadao") {
         global.gameInf.players[drawn].personagem = character;
     }else{
         addCharacter(character);
     }
}
module.exports = assignCharacters;