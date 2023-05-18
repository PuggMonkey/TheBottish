const { SlashCommandBuilder } = require('@discordjs/builders');
const { idUser } = require("./wall.json");

const x = "<@"
const y = ">"
let PUGG = x + idUser + y

//const newarray = messege.content("\n").split();

//newarray.foreach()



module.exports = {
    data: new SlashCommandBuilder()
    .setName ('leaderboard')
    .setDescription ("Displays the current top players")
            .addStringOption(option =>
                option.setName('category')
                    .setDescription('The skill category')
                    .addChoices(
                        { name: 'branches', value: 'b' },
                        { name: 'walls', value: 'w' },
                        { name: 'overall', value: 'o' },
                    )),

    async execute(interaction) {
        
        await interaction.deferReply({ephemeral: true});
        
        if(interaction.options.getString('category') === 'w') {
            
            interaction.editReply(" 1." + PUGG + "\n 2." + PUGG + " \n 3." + PUGG + " \n 4." + PUGG + " \n 5." + PUGG + " \n 6." + PUGG + " \n 7." + PUGG + " \n 8." + PUGG + " \n 9." + PUGG + " \n 10." + PUGG);
            console.log ("The walls command was executed successfully");
        }

        if(interaction.options.getString('category') === 'o') {
            
            interaction.editReply("**The current top players overall are:** \n \n 1." + PUGG + " \n 2." + PUGG + " \n 3." + PUGG + " \n 4." + PUGG + " \n 5." + PUGG + " \n 6." + PUGG + " \n 7." + PUGG + " \n 8." + PUGG + " \n 9." + PUGG + " \n 10." + PUGG);
            console.log ("The overall command was executed successfully");
        }
        if(interaction.options.getString('category') === 'b') {
            
            interaction.editReply("**The current top players at branches are:** \n \n 1." + PUGG + " \n 2." + PUGG + " \n 3." + PUGG + " \n 4." + PUGG + " \n 5." + PUGG + " \n 6." + PUGG + " \n 7." + PUGG + " \n 8." + PUGG + " \n 9." + PUGG + " \n 10." + PUGG);
            console.log ("The branch command was executed successfully");
        }
        
    }
};