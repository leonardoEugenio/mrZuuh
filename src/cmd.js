const ConfigDs = require('./configDS.json');
const ajuda    = require('./comandos/ajuda');
const limpar   = require('./comandos/limpar');
const newGame  = require('./comandos/newGame');
const join  = require('./comandos/join');

async function readMensege(msg, bot) {

    if (msg.author.bot) return;
    if (msg.channel.name != "comandos") return;
    if (msg.toString()[0] != ConfigDs.prefix) {
        msg.reply(`Para me pedir algo o comando tem que começar com "${ConfigDs.prefix}"\n Exemplo: "${ConfigDs.prefix}ajuda" (que pode ser usar para saber mais sobre comandos)`);
        return;
    }
    const cmd = msg.toString().replace(ConfigDs.prefix , "");

    if (cmd === "ajuda") {
        ajuda(msg);
        return;
    }
    if (cmd === "limpar"){
        limpar(msg);
        return;
    }
    if (cmd === "newGame" || cmd === "ng") {
        newGame(msg);
        return;
    }
    if (cmd === "join") {
        join(msg);
        return;
    }
    msg.reply(`O comando "${msg.toString()}" não existe\n Caso tenha alguma dulcida sobre comandos use o comando ".ajuda"`)
}
module.exports = readMensege;