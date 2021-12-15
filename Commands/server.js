module.exports = {
    'name': 'server',
    'description': 'Get Current Server Info',
    async execute(message, args) {
        let guild = message.guild;
        let invite = await message.channel.createInvite({
            unique: true, maxAge: 0, maxUses: 0
        })
        message.channel.send(`${guild.name} Has A Total Of ${guild.memberCount} Members
        Invite Link : ${invite}`);
    }
}