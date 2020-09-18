module.exports = {
    name: "avatar",
    aliases: [av],
    permissions: [],
    ownerOnly: false,
    enabled: true,
    cooldown: 2, 
    exec: async (client, message, args) => {
        const Discord = require("discord.js");
        const user = message.mentions.users.first() || message.author;
        const avatarEmbed = new Discord.MessageEmbed()
            .setColor(ff11ac)
            .setAuthor(`${user.username}'s Avatar De Perfil`)
            .setImage(user.avatarURL({size: 2048, dynamic: true})) 
        message.channel.send(avatarEmbed);
    }
}
