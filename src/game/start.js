const assignCharacters = require("./assignCharacters")
function start(msg) {
    if (!global.gameInf)
        msg.reply("Ainda não temos um jogo configurado para começar");
    if (!msg.member.discriminator != global.gameInf.config.IdAdm)
        msg.reply("Você não tem permição para iniciar a partida")
    assignCharacters();
}
module.exports = start;