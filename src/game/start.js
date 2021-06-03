const assignCharacters = require("./assignCharacters")
function start(msg) {
    if (msg) {
        if (!global.gameInf)
        return msg.reply("Ainda não temos um jogo configurado para começar");
        if (!msg.member.discriminator != global.gameInf.config.IdAdm)
        return msg.reply("Você não tem permição para iniciar a partida")
    }

    assignCharacters();
}
module.exports = start;