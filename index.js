const Discord = require("discord.js");
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES
    ]
});
require("dotenv").config();

const prefix = "!";

client.on("ready", () => {
    console.log("Je suis prêt");
});

client.on("message", msg => {
    if (msg.content === prefix + "pds") {
        msg.channel.send("pong");
    }

    else if (msg.content === prefix + "help"){
        msg.channel.send("**__Les commandes du bot__**\n - !pds : Prise de service");
    }
});

client.login(process.env.BOT_TOKEN);