const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection, Guild } = require(`discord.js`);
const fs = require('fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] }); 

const cooldown = new Set();
///This is 1 minute, you can change it to whatever value
const cooldownTime = 60000; 

module.exports = {
    data: new SlashCommandBuilder()
    .setName ('comp-ping')
    .setDescription ("Creates a compping")
    .addStringOption(option =>
        option.setName('code')
            .setDescription('The name of the code')
            ),
    
    async execute(interaction, client, message) {
        
        const code = interaction.options.get('code')?.value;

        if (cooldown.has(interaction.user.id)) {
            /// If the cooldown did not end
            interaction.reply({ content: "Please wait for the cooldown to end", ephemeral: true });
            
          } else {
            /// Else give the reply
            interaction.reply(`<@&1108486619608137790> Join code **${code}**!`);
        
            //now, set cooldown
           cooldown.add(interaction.user.id);
                setTimeout(() => {
                  // Removes the user from the set after 1 minute
                  cooldown.delete(interaction.user.id);
                }, cooldownTime);
            }
          
    }};