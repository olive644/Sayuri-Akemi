// requisito para rodar o bot
const Discord = require('discord.js');

// Pasta de configuração
const config = require('./config.json');

// criar novo cliente
const client = new Discord.Client();

// Log de iniciação do bot
client.once('ready', () => {
	console.log('Estou Pronta!');
});

// Capturador de mensagens para log
client.on('message', message => {
	console.log(message.content);
});

// login do bot
client.login(config.token)