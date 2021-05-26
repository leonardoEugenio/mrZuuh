const Discord = require("discord.js");
const client = new Discord.Client();
const configDS = require("./src/configDS.json");
const readMensege = require("./src/cmd");

client.on("ready", () => {
    console.log(`Bot foi inicializado`);
});

client.on("message", async message => {
        readMensege(message, client)
});

client.login(configDS.token)