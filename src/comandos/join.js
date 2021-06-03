const start = require("../game/start")
function join(msg) {
    if (!msg.member.voice.channel)
        return msg.reply(
            "Precisso que vecê entre em um canal de voz !"
            );
    if (!global.gameInf)
        return msg.reply(
            "Opá, ainda não foi criado uma partida\nPara criar use '.ng' Para mais informações use o '.ajuda'"
            );
    
    const player = msg.member;
    
    player.user.personagem = "cidadao"
    global.gameInf.players[global.gameInf.players.qtdPlayers + 1] = player.user;
    global.gameInf.players.qtdPlayers ++;

    player.voice.setChannel("845149323607932948");

    if (global.gameInf.config.maxCidadoes == global.gameInf.players.qtdPlayers)
        start();
}
module.exports = join;