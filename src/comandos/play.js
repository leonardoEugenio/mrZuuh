
async function play(msg, bot) {
    const msgAutor = msg.member
    if (!msgAutor.voice.channel)
        return msg.reply("Entre em um canal de voz, em que você deseja jogar")

    msg.reply("Calma ae to arrumando umas coizinhas aqui;\n O jogo ja vai começar :D");

    let channel = msg.guild.channels.cache.get(msgAutor.voice.channel.id);
    console.log(channel.members);
}
module.exports = play;