function getMenbersVoice(msg) {
    const msgAutor = msg.member

    if (!msgAutor.voice.channel)
        return msg.reply("Entre em um canal de voz, em que você deseja jogar")

    msg.reply("Calma ae to arrumando umas coizinhas aqui;\n O jogo ja vai começar :D");
    const channel = msg.guild.channels.cache.get(msgAutor.voice.channel.id);
    const users = channel.members.filter(obj => obj.user.bot === false);

    return(users)
}
module.exports = getMenbersVoice;