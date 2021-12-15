//const Discord = require('discord.js');
module.exports = {
    'name': 'help',
    'description': 'The Help Of The Bot',
    execute(message, args, Discord) {
        const version = '1.0';
        const help = new Discord.MessageEmbed()
            .setColor('#ffa700')
            .setTitle(`Help Menu`)
            .setURL('https://www.youtube.com/channel/UCflm4LVzOvTz4u4srIo9raQ')
            .setDescription(`Following Are The Bot Commands`)
            .addField(`Misc Commands:`, `
            > ** *ping ** \n "Replies With Pong!(For Testing Purposes)"\ n 
            > ** *server ** \n "Replies With Server Info(Buggy)" \n 
            > ** *version ** \n "Replies With Current Bot Version" \n 
            > ** *youtube ** \n "Replies With The Youtube Channel Link" \n
            > ** *support ** \n "Returns The Support Server Link" \n
            
            `
            )
            .setFooter(`Join The Support Server : https://discord.gg/7JBPmvkZek`)
            .setTimestamp()
            .setImage('https://www.pngall.com/wp-content/uploads/5/Help-Buzzer-Red-Button-PNG.png')
            .setThumbnail('https://yt3.ggpht.com/mUta-FM907FUlue6LoTI7kvkDYC5JtyWTnq3BUvQpNzDJ7dnjum_chdS7HQU6BcBut7k5IqP=s88-c-k-c0x00ffffff-no-rj')
            ;
        message.channel.send({ embeds: [help] });
    }
}