
function limpar(msg) {
    if (!msg.member.hasPermission("MANAGE_MESSAGES"))
        return msg.React("Você não tem permição para executar esse comando");
    msg.channel.bulkDelete(100)
}
module.exports = limpar;