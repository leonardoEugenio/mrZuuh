var gameInfos       = require("../game/gameInfos.json");


function newGame(msg) {
    if (!msg.member.voice.channel)
        return msg.reply("Precisso que vecê entre em um canal de voz !");
    
    configGame(msg);

    msg.member.voice.setChannel("845149323607932948");
}

function configGame(msg) {
    const userAdm = msg.member.user;
    gameInfos.config.IdAdm = userAdm.discriminator;
    gameInfos.players = [
        userAdm
    ];
    console.log(gameInfos);
}
module.exports = newGame;