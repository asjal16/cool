const { Permissions } = require('discord.js');

module.exports = {
    'name': 'purge',
    'description': 'Purge The Chat!',
    async execute(message, args) {
        if (!args[0]) return message.reply('Please Provide Number Of Messages To Clear.')
        if (isNaN(args[0])) return message.reply('Please Provide A Valid Number Of Messages To Clear.')

        if (args[0] > 100) return message.reply('The Limit Of Messages To Be Deleted Is 100.')
        if (args[0] < 1) return message.reply('You Must Delete At Least One Message')
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            message.channel.send('You Don\'t Have Permission To Manage Messages!');
        }
        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}