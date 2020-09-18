const Discord = require('discord.js');
const Canvas = require('canvas');
require('dotenv').config();

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Yey, Estou Online!');
});

client.login(process.env.CLIENT_TOKEN);
