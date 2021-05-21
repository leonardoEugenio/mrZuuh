const DicionarioCmd = require('./dicionarioCmd.json')

async function ajuda(msg) {
    var MsgDicionario = "Lista de Comandos: \n";
    for (let index = 0; index < DicionarioCmd.comandos.length; index++) {
        MsgDicionario += `*${DicionarioCmd.comandos[index]}*\n`
    }
    msg.reply(MsgDicionario);
}
module.exports = ajuda;