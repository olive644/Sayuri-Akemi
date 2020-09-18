module.exports = {
    name: 'stats',
    aliases: ['st'],
    permissions: [],
    ownerOnly: false,
    enabled: true,
    cooldown: 10,
    exec: async (client, message, args) => {
        const Discord = require('discord.js');
        const stats = [
        `**Estou Em: ${client.guilds.cache.size} Servidores**`,

        `**Estou Vendo: ${client.users.cache.size} Membros**`
        ]
        const botstats = new Discord.MessageEmbed()
        .setTitle(`Sayuri Bot Stats`)
        .setDescription(stats)
        message.channel.send(botstats);
    },
};
