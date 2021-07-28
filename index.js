const { Client, version } = require('discord.js');
const { 
    token, 
    serverID, 
    roleID, 
    interval 
} = require('./config.json')
const bot = new Client();

bot.on("Ready", async() => {
    console.log(`[ BOT ] ${bot.user.tag} is now online`);

    let guild = bot.guilds.cache.get(serverID) 
    if(!guild) throw `Error: Didn't find any Server : ${serverID}` 

    let role = guild.roles.cache.find(u => u.id === roleID) 
    if(!role) throw `Error: Didn't find any role, Server name: ${guild.name}` 
    
    if(interval < 60000) console.log(`\nRainbow Activated!`) 

    setInterval(() => {
        role.edit({color: 'RANDOM'}).catch(err => console.log(`[ Error ] An error occurred during the role change.`));
    }, interval)

    bot.user.setPresence({
        status: 'dnd',
        activity: {
            name: 'KDOGE FOREVER',
            type: 'PLAYING',
        }
    })
})


bot.login(token)


