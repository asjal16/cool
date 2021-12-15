module.exports = {
    'name': 'ping',
    'description': 'Simple Ping Command For Testing',
    execute(message, args){
        message.channel.send('Pong!');
    }
}