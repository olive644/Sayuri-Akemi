module.exports = {
    name: "ping",
    aliases: [],
    permissions: [],
    enabled: true,
    cooldown: 3,
    exec: async (client, message) => {
        const Discord = require("discord.js");
        const package = require('../../package.json')
        const version = (package.version);
        const ping = new Discord.MessageEmbed()
            .setTitle("Ping")
            .setDescription(`Ping?`)
            .setColor(FF11AC)
            .setFooter(`Versão ${version}`)
        const m = await message.channel.send(ping);
        const pong = new Discord.MessageEmbed()
            .setTitle("Ping")
            .setDescription(`Pong! Minha Latência Esta Em: ${m.createdTimestamp - message.createdTimestamp}ms. 🏓`)
            .setColor(FF11AC)
            .setFooter(`Versão ${version}`)
        m.edit(pong);
    },
};
