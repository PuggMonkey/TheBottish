const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection } = require(`discord.js`);
const fs = require('fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] }); 



module.exports = {
    data: new SlashCommandBuilder()
    .setName ('set-mvp')
    .setDescription ("Creates an MVP message")
    .addUserOption(option =>
        option.setName('player-1')
        .setDescription('The name of the player')
    )
    .addUserOption(option =>
        option.setName('player-2')
        .setDescription('The name of the player')
    )
    .addUserOption(option =>
        option.setName('player-3')
        .setDescription('The name of the player')
    )
    .addUserOption(option =>
        option.setName('player-4')
        .setDescription('The name of the player')
    )
    .addUserOption(option =>
        option.setName('player-5')
        .setDescription('The name of the player')
    )
    .addUserOption(option =>
        option.setName('player-6')
        .setDescription('The name of the player')
    )
    .addUserOption(option =>
        option.setName('player-7')
        .setDescription('The name of the player')
    )
    .addUserOption(option =>
        option.setName('player-8')
        .setDescription('The name of the player')
    )
    .addUserOption(option =>
        option.setName('player-9')
        .setDescription('The name of the player')
    )
    .addUserOption(option =>
        option.setName('player-10')
        .setDescription('The name of the player')
    ),   
    async execute(interaction) {

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
    
        if (!interaction.isChatInputCommand()) return;

            if (interaction.guild.ownerId === '590239329268269073'){
             await interaction.reply(`The MVP's for this week are as follows:\n 1- <@${p1}> \n 2- <@${p2}> \n 3- <@${p3}> \n 4- <@${p4}> \n 5- <@${p5}> \n 6- <@${p6}> \n 7- <@${p7}> \n 8- <@${p8}> \n 9- <@${p9}> \n 10- <@${p10}> \n Please vote using the reactions below!`);
            };
       
    }};