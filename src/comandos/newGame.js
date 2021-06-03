const join         = require("./join");
const Verification = require("../verification/verification")

function newGame(msg, param) {

    global.gameInf = require("../game/gameInfos.json");

    if (param.length == 0)
        return msg.reply(
            "Ok, repita o comando '.ng', mas da seguinte maneira :\n" +
            "'.ng <Numero de detetives> <Numero de assassinos> <numero de players>'\n" +
            "Exemplo: `.ng 1 1 8`");

    if (Verification(param, "int") === false)
        return msg.reply(
            "Achei um errinho aqui os numeros tem que ser inteiros");

    for (let i = 0; i < param.length; i++) {
        param[i] = parseInt(param[i]);
    }


    if (param.length < 3)
        return msg.reply(
            "Errinho alert presisso que você passe três parametros enteiros");

    if (param[0] > param[2] || param[1] > param[2] || param[0] + param[1] >= param[2])
        return msg.reply(
            "Não pode ter mais detetives e assassinos que civis");

    if (param[0] > 3 || param[1] > 3)
        return msg.reply(
            "O maximo de assassinos ou detetives é de 3");

    if (global.gameInf.IdAdm != null)
        return msg.reply(
            "Infelismente ja temos uma partida em andamento nesse servidor");

    // verifica se o menbro esta em um canal de voz
    if (!msg.member.voice.channel)
        return msg.reply(
            "Precisso que vecê entre em um canal de voz !");

    join(msg);
    const userAdm = msg.member.user;
    global.gameInf.config.IdAdm = userAdm.discriminator;
    global.gameInf.config.qtdDetetives = param[0];
    global.gameInf.config.qtdKilers = param[1];
    global.gameInf.config.maxCidadoes = param[2];
    console.log(global.gameInf);
}
module.exports = newGame;