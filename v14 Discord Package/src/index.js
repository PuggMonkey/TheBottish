const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection, Guild } = require(`discord.js`);
const fs = require('fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] }); 

/*var http = require('http'); 
http.createServer(function (req, res) { res.write("I'm alive"); 
res.end(); 
}).listen(8080);

client.on('ready', () => {
    console.log('Your Bot is now Online.') 
    
    let activities = [`chill gang`, `with the gang`, `with the gang` ],i = 0; setInterval(() => {
        bot.user.setActivity(`${activities[i++ % activities.length]}`, {type:"STREAMING",url:"https://www.youtube.com/watch?v=DWcJFNfaw9c" })}, 5000) })
*/


client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("./src/Functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/Events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/Commands");

(async () => {
    for (file of functions) {
        require(`./Functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/Events");
    client.handleCommands(commandFolders, "./src/Commands");
    client.login(process.env.DISCORD_TOKEN)
})();




/*client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'set-mvp'){
        const p1 = interaction.options.get('player-1')?.value;
        const p2 = interaction.options.get('player-2')?.value;
        const p3 = interaction.options.get('player-3')?.value;
        const p4 = interaction.options.get('player-4')?.value;
        const p5 = interaction.options.get('player-5')?.value;
        const p6 = interaction.options.get('player-6')?.value;
        const p7 = interaction.options.get('player-7')?.value;
        const p8 = interaction.options.get('player-8')?.value;
        const p9 = interaction.options.get('player-9')?.value;
        const p10 = interaction.options.get('player-10')?.value;

        if (interaction.guild.ownerId === '590239329268269073'){
            interaction.reply(`The MVP's for this week are as follows:\n 1- ${p1} \n 2- ${p2} \n 3- ${p3} \n 4- ${p4} \n 5- ${p5} \n 6- ${p6} \n 7- ${p7} \n 8- ${p8} \n 9- ${p9} \n 10- ${p10} \n Please vote using the reactions below!`);
        };
    }
});*/
