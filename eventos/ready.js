const guildModel = require("../models/guildModel");
module.exports = async client => {
    client.user.setPresence({ activity: { name: 'Yey! Script by Tomoko San#2208! | v0.0.0.1', type: 'PLAYING' }, status: 'online' })
    for (let guild of client.guilds.cache.array()) {
        let language = "en";
        let guildDocument = await guildModel.findOne({ guildID: guild.id });
        if (guildDocument && guildDocument.language) language = guildDocument.language;
        guild.language = require(`../locales/${language}.json`);
    }
    process.stdout.write("\n");
    console.log("   Sayuri Bot!    ");
    console.log("-------------------------------");
    console.log(`[      Bot]: ${client.user.username} Esta Pronta!`);
    console.log(`[ Prefixos]: ${client.config.prefixes.join(" ")}`);
    console.log(`[   Servidores]: ${client.guilds.cache.size}`);
    console.log(`[ Canais]: ${client.channels.cache.size}`);
    console.log(`[    Membros]: ${client.users.cache.size}`);
    console.log(`[ Tempo]: ${process.uptime() * 1000}ms`);
}
