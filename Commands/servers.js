const Discord = require('discord.js');
const intents = new Discord.Intents(513);
const bot = new Discord.Client({ intents: [intents] })

module.exports = {
  'name': 'servers',
  'description': 'Get All Servers Info',
  execute(message, args) {
    bot.guilds.cache.forEach(guild => {
      guild.channels.cache.first().createInvite()
        .then(inv => message.reply(`Name : ${guild.name} | Members: ${guild.memberCount} \nInvite Link  ${inv.url}`));
    });
  }
}
/*

*/