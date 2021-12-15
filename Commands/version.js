module.exports = {
    'name': 'version',
    'description': 'The Version Of The Bot',
    execute(message, args) {
        const version = 'Beta 0.0.4';

        message.channel.send(`The Version Of The Bot Is ${version}`);
    }
}