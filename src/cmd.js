const ConfigDs = require('./configDS.json');
const commands = {
    "ajuda"    : require('./comandos/ajuda'),
    "limpar"   : require('./comandos/limpar'),
    "ng"  : require('./comandos/newGame'),
    "join"     : require('./comandos/join')
}

async function readMensege(msg, bot) {

    if (msg.author.bot) return;
    if (msg.channel.name != "comandos") return;
    if (msg.toString()[0] != ConfigDs.prefix) {
        msg.reply(`Para me pedir algo o comando tem que começar com "${ConfigDs.prefix}"\n Exemplo: "${ConfigDs.prefix}ajuda" (que pode ser usar para saber mais sobre comandos)`);
        return;
    }
    const cmd = msg.toString().replace(ConfigDs.prefix , "");

    if (commands[cmd]) {
        commands[cmd](msg, bot);
    }else{
        msg.reply(`O comando "${msg.toString()}" não existe\n Caso tenha alguma dulvida sobre comandos use o comando ".ajuda"`);
    }
}
module.exports = readMensege;