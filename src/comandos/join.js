
function join(msg) {
    if (!msg.member.voice.channel)
        return msg.reply("Precisso que vecê entre em um canal de voz !");
    
    const player = msg.member;
    
    player.user.personagem = "cidadao"
    global.gameInf.players = player.user;

    player.voice.setChannel("845149323607932948");
}
module.exports = join;