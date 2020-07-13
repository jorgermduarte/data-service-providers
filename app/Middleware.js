class Middleware {
    handle(message) {
        switch (message.content) {
            case 'ping':
                message.reply('pong');
                break;
            default:
                break;
        }
    }
}

module.exports = Middleware;