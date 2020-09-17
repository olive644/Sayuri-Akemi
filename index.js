const Discord = require('discord.js');
const Canvas = require('canvas');
require('dotenv').config();

const client = new Discord.Client();

const prefix = process.env.PREFIX;

client.once('ready', () => {
	console.log('Estou Online!');
});

client.login(process.env.CLIENT_TOKEN);
