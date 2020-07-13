const Discord = require('discord.js');
const client = new Discord.Client();
const App = require('./app/App');

client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}!`);
});

(() => {
   new App(client).init()
})();
