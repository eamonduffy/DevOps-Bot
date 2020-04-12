// main file - this will be the base of the project

const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

/// Command Functions ///
const {
  cmd1,
  cmd2,
  tech,
  gc,
  getQuote,
  getJoke,
  getHelp
} = require('./commands')

const prefix = 'dev ';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  let args = msg.content.substring(prefix.length).split(' ');
  let ping = 'ping';
  let help = 'help';
  let quote = 'quote';
  let dt = 'dt';
  let cal = 'cal';
  let joke = 'joke';

  switch (args[0]) {
    case ping:
      msg.reply('pong');
      break;
    case help:
      msg.reply(getHelp());
      break;
    case quote:
      msg.reply(getQuote());
      break;
    case dt:
      tech(client, msg);
      break;
    case cal:
      gc(client, msg);
      break;
    case joke:
      msg.reply(getJoke());
      break;
  }
});

client.login(auth.token);