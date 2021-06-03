const ConfigDs = require('./configDS.json');
const commands = {
    "ajuda"    : require('./comandos/ajuda'),
    "limpar"   : require('./comandos/limpar'),
    "ng"       : require('./comandos/newGame'),
    "join"     : require('./comandos/join'),
    "tu"       : require('./comandos/tu')
}

async function readMensege(msg, bot) {

    if (msg.author.bot) return;
    if (msg.channel.name != "comandos") return;
    if (msg.toString()[0] != ConfigDs.prefix) {
        msg.reply(`Para me pedir algo o comando tem que começar com "${ConfigDs.prefix}"\n Exemplo: "${ConfigDs.prefix}ajuda" (que pode ser usar para saber mais sobre comandos)`);
        return;
    }

    const param = msg.toString().replace(ConfigDs.prefix , "").split(" ");
    const cmd = param.shift()

    if (commands[cmd]) {
        commands[cmd](msg, param);
    }else{
        msg.reply(`O comando "${ConfigDs.prefix + cmd}" não existe\n Caso tenha alguma dulvida sobre comandos use o comando ".ajuda"`);
    }
}
module.exports = readMensege;