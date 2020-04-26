// main file - this will be the base of the project

// const Discord = require('discord.js');
// const MessageEmbed = require('discord.js');
// const client = new Discord.Client();

const {
  Client,
  MessageEmbed
} = require('discord.js');
const client = new Client();

const auth = require('./auth.json');

/// Command Functions ///
const {
  cmd1,
  cmd2,
  tech,
  gc,
  getQuote,
  getJoke,
  getHelp,
  codeTest,
  dispAuth
} = require('./commands')

/// Embeds ///
const megEmbed = new MessageEmbed()
  .setTitle('Megan Forster')
  .setColor('fcba03')
  .setDescription('Senior Computer Science Student at Quinnipiac University.')
  .setURL('https://github.com/megforster');
const eamEmbed = new MessageEmbed()
  .setTitle('Eamon Duffy')
  .setColor('28C8F0')
  .setDescription('Senior Software Engineering Student at Quinnipiac University.')
  .setURL('https://eamonduffy.dev');
const jackEmbed = new MessageEmbed()
  .setTitle('Jack Zemlanicky')
  .setColor('d91200')
  .setDescription('Sophomore Computer Science Student at Quinnipiac University.')
  .setURL('https://github.com/jackzemlanicky');
const gioEmbed = new MessageEmbed()
  .setTitle('Giovanni Greco')
  .setColor('64e302')
  .setDescription('Junior Student at Quinnipiac University.')
  .setURL('https://github.com/Giovanni-QU');
const josEmbed = new MessageEmbed()
  .setTitle('Joseph Mannarino')
  .setColor('7e02e3')
  .setDescription('Junior Student at Quinnipiac University.')
  .setURL('https://github.com/Mannarinoo');

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
  let creators = 'creators';
  let test= 'test';

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
    case test:
      codeTest(client,msg);
      break;
    case creators:
      msg.reply('Creators of the DevOps Bot:')
      msg.channel.send(megEmbed);
      msg.channel.send(eamEmbed);
      msg.channel.send(jackEmbed);
      msg.channel.send(gioEmbed);
      msg.channel.send(josEmbed);
      break;
  }
});

client.login(auth.token);