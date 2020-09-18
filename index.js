const Discord = require('discord.js');
const config = require('/config.json');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Yey, Estou Online!');
});

client.login(process.env.CLIENT_TOKEN);
