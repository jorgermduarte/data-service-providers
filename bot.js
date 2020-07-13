const { Client } = require("discord.js")
var cfgs = require('./configurations')

var client = new Client()
require('./listeners/index.js')(client)


//authenticate bot
client.login(cfgs.bot_token).catch((error) => {
    console.error(error);
    process.exit(1)
})