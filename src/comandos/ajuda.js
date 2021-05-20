const DicionarioCmd = require('./dicionarioCmd.json')

async function ajuda(msg) {
    var MsgDicionario = "";
    for (let index = 0; index < DicionarioCmd.comandos.length; index++) {
        MsgDicionario += `*${DicionarioCmd.comandos[index]}*\n`
        console.log(DicionarioCmd.comandos.length);
    }
    msg.reply(MsgDicionario);
}
module.exports = ajuda;