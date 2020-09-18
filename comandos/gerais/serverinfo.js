module.exports = {
    name: 'serverinfo',
    aliases: [svf],
    permissions: [],
    ownerOnly: false,
    enabled: true,
    cooldown: 0,
    exec: async (client, message, args) => {
        const Discord = require("discord.js");
        const veriLevel = {
            NONE: "Nenhum",
            LOW: "Baixo",
            MEDIUM: "Alto",
            HIGH: "(╯°□°）╯︵ ┻━┻",
            VERY_HIGH: "(ノಠ益ಠ)ノ彡┻━┻"
        }

        let inline = true
        let servericon = message.guild.iconURL;
        let serverembed = new Discord.MessageEmbed()
            .setColor("#ff11ac")
            .setThumbnail(servericon)
            .setAuthor(message.guild.name)
            .addField("Nome", message.guild.name, inline)
            .addField("ID", message.guild.id, inline)
            .addField("Fundador", message.guild.owner, inline)
            .addField("Região", message.guild.region, inline)
            .addField("Nível De Segurança", veriLevel[message.guild.verificationLevel], inline)
            .addField("Membros Totais", `${message.guild.memberCount}`, inline)
            .addField("Cargos Totais", message.guild.roles.size, inline)
            .addField("Canais Totais", message.guild.channels.size, inline)
            .addField("Você Entrou Em", message.member.joinedAt)
            .setFooter(`Criando Em ${message.guild.createdAt}`);

        message.channel.send(serverembed);
    },
}
