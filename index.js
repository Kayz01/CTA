const { userMention } = require("@discordjs/builders");
const Discord = require("discord.js");
const { userInfo } = require("os");
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});
require("dotenv").config();

const prefix = "!";

client.on("ready", () => {
    console.log("Bot Opérationnel");
});

client.on("messageCreate", msg => {

    // Prise de service
    if (msg.content === prefix + "pds") {
        const embed = new Discord.MessageEmbed()
            .setColor ("#33FF33")
            .setTitle("Prise de Service")
            .setAuthor("Centre de Traitement d'Alerte")
            .setDescription("Bonjour, vous venez de prendre votre service, merci de vous mettre dans votre canal respective ! En vous souhaitant une bonne garde.")
            .setTimestamp();
            
        msg.reply({ embeds: [embed]})
    }
});

client.on("messageCreate", msg => {

    if (msg.content === prefix + "fds") {
        const embed2 = new Discord.MessageEmbed()
            .setColor ("#FF0000")
            .setTitle("Fin de Service")
            .setAuthor("Centre de Traitement d'Alerte")
            .setDescription("Bonjour, vous venez de prendre votre fin de service, merci de vous déconnecté de votre canal respective ! Bonne journée / soirée à vous.")
            .setTimestamp();

        msg.reply({ embeds: [embed2]})
   }
});

client.login(process.env.BOT_TOKEN);