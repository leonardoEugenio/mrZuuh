const ConfigDs = require('./configDS.json');
const Ajuda    = require('./comandos/ajuda');
const ajuda = require('./comandos/ajuda');

async function readMensege(msg) {

    if (msg.author.bot) return;
    if (msg.toString()[0] != ConfigDs.prefix) {
        msg.reply(`Para me pedir algo o comando tem que começar com "${ConfigDs.prefix}"\n Exemplo: "${ConfigDs.prefix}ajuda" (que pode ser usar para saber mais sobre comandos)`);
        return;
    }
    const cmd = msg.toString().replace(ConfigDs.prefix , "");

    if (cmd === "ajuda") {
        ajuda(msg);
    }
}
module.exports = readMensege;