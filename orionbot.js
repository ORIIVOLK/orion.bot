const prefix = "$"
const { Client, Intents, StageChannel } = require("discord.js")

const client = new Client({
    intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,

    ]
})

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setActivity({name: "in Testing Stage", type: "PLAYING"})

})

client.on('messageCreate', (message) => {
    
    if(!message.content.startsWith(prefix))
        return;

    let arg = message.content.substring(prefix.length).split(" ");

    switch (arg[0].toLowerCase()) {


        case 'ping': {  
             if (arg[1] === 'pong') {
            message.channel.send("Hey! I was going to say that!")
            } else {

            message.channel.send("Pong!") }
        }

    }
})

client.login("token")
