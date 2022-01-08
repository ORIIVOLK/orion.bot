const { Client, Intents } = require("discord.js")
const client = new Client({intents: []});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.once('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});
client.login(TOKEN);
