// main file - this will be the base of the project

const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

/// Command Functions ///
const {
  cmd1,
  cmd2,
  tech
} = require('./commands')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }else if(msg.content.startsWith('dt')){
    tech(client, msg)
  }
});

client.login(auth.token);