//const Discord = require('discord.js');
module.exports = {
    'name': 'changelog',
    'description': 'The Changelog Of The Bot',
    execute(message, args, Discord) {
        const version = 'Beta 0.0.3';
        const changelog = new Discord.MessageEmbed()
            .setColor('#00FFB2')
            .setTitle(`Changelog For The Version Of ${version}`)
            .setURL('https://www.youtube.com/channel/UCflm4LVzOvTz4u4srIo9raQ')
            .setDescription(`Following Are The Changes Made In The Version ${version}`)
            .addField('New Commands:', '> ** *ping ** \n "Replies With Pong!(For Testing Purposes)"\n > ** *server ** \n "Replies With Server Info(Buggy)"  \n > ** *version ** \n "Replies With Current Bot Version" \n > ** *youtube ** \n "Replies With The Youtube Channel Link')
            .setFooter(`Join The Support Server : https://discord.gg/7JBPmvkZek`)
            .setTimestamp()
            .setThumbnail('https://yt3.ggpht.com/mUta-FM907FUlue6LoTI7kvkDYC5JtyWTnq3BUvQpNzDJ7dnjum_chdS7HQU6BcBut7k5IqP=s88-c-k-c0x00ffffff-no-rj');
        message.channel.send({ embeds: [changelog] });
    }
}