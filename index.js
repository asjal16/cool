const Discord = require('discord.js');
const prefix = 't!';
// const token = process.env.TOKEN;
const env = require('dotenv').config();
const intents = new Discord.Intents(513);
const client = new Discord.Client({ intents: [intents] })
const command = require('./Commands/youtube')
const fs = require('fs');
const version = 'Beta 0.0.3';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log(`Logged In As ${client.user.username}`);
    client.user.setActivity({ type: "WATCHING", name: "*help" })
}) // DONT REMOVE

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    switch (command) {
        case 'ping':
            client.commands.get('ping').execute(message, args)
            console.log(`Running The Command ${command}`);
            break;
        case 'youtube':
            client.commands.get('youtube').execute(message, args)
            console.log(`Running The Command ${command}`);
            break;
        case 'version':
            client.commands.get('version').execute(message, args)
            console.log(`Running The Command ${command}`);
            break;
        case 'server':
            client.commands.get('server').execute(message, args)
            console.log(`Running The Command ${command}`);
            break;
        case 'changelog':
            client.commands.get('changelog').execute(message, args, Discord)
            console.log(`Running The Command ${command}`);
            break;
        case 'help':
            client.commands.get('help').execute(message, args, Discord)
            console.log(`Running The Command ${command}`);
            break;
        case 'support':
            client.commands.get('support').execute(message, args)
            console.log(`Running The Command ${command}`);
            break;
        case 'purge':
            client.commands.get('purge').execute(message, args)
            console.log(`Running The Command ${command}`);
            break;
    }

})

client.login(process.env.TOKEN)