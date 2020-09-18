module.exports = {
    name: 'userinfo',
    aliases: ['user'],
    permissions: [],
    ownerOnly: false,
    enabled: true,
    cooldown: 0,
    exec: async (client, message, args) => {
        const Discord = require("discord.js");

        let inline = true
        let resence = true
        const status = {
            online: "Online",
            idle: "Ausente",
            dnd: "Não Pertube",
            offline: "Offline/Invisível"
        }

        const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
        let target = message.mentions.users.first() || message.author

        if (member.user.bot === true) {
            var bot = "Yes";
        } else {
            var bot = "No";
        }
        var embed = new Discord.MessageEmbed()
            .setThumbnail((target.displayAvatarURL))
            .setColor("#ff11ac")
            .addField("Nome Do Membro", `${member.user.tag}`, inline)
            .addField("ID", member.user.id, inline)
            .addField("Apelido", `${member.nickname !== null ? `${member.nickname}` : "None"}`, true)
            .addField("Bot", `${bot}`, inline, true)
            .addField("Status", `${status[member.user.presence.status]}`, inline, true)
            .addField("Conta Criada Em", member.user.createdAt)
            .setFooter(`Informações ${member.user.username}`)
            .setTimestamp()
        message.channel.send(embed);
    },
}
