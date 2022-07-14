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

    // Prise de service
    if (msg.content === prefix + "pds") {
        const embed = new Discord.MessageEmbed()
            .setColor ("#33FF33")
            .setTitle("Prise de Service")
            .setAuthor("Centre de Traitement d'Alerte");


        msg.channel.send({ embeds: [embed]})
    }

    else if (msg.content === prefix + "help"){
        msg.channel.send("**__Les commandes du bot__**\n - !pds : Prise de service");
    }
});

client.login(process.env.BOT_TOKEN);