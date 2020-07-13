var Discord = require('discord.js')

module.exports = (client) => {
    
    client.once('ready', () => {

        console.log(` - BOT initialized successfully`);

        client.user.setPresence({
            status: 'online',
            activity: {
                name: 'Portugal',
                type: 'PLAYING'
            }
        })

    })

}