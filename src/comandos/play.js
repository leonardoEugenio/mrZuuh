
async function play(msg) {
    const msgAutor = msg.member
    if (!msgAutor.voice.channel)
        return msg.reply("Entre em um canal de voz, em que você deseja jogar")

    msg.reply("Calma ae to arrumando umas coizinhas aqui;\n O jogo ja vai começar :D");
    let channel = msg.guild.channels.cache.get(msgAutor.voice.channel.id);
    var users = channel.members.filter(obj => obj.user.bot === false);
    console.log(users);
}
module.exports = play;