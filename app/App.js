const Middleware = require('./Middleware');
require('dotenv').config();

class App {
    constructor(discordClient) {
        this.client = discordClient;
        this.middleware = new Middleware();
    }

    init() {
        this.client.login(process.env.DISCORD_BOT_TOKEN);
        this.client.on('message', this.middleware.handle)
    }
}

module.exports = App;

