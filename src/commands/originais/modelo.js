
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zmonstro', // nome do comando slash
            description: 'Infomações sobre Monstro', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Geração', 'https://cdn.discordapp.com/attachments/869282294639231008/869282337790230558/badge_stardust-small_v1.png')
        
        .setTitle('Monstro')
        .setDescription('*História* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0:- \n R1: -\n R3:-', inline: true},
            { name: 'Relíquias', value: '- \n -', inline: true},
            { name: 'Estatíticas', value: 'Poder: - \n Vida: - \n Velocidade: -', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Nome do Ataque', value: 'Descrição do ataque' },

            { name: 'Nome do Ataque2', value: 'Descrição do ataque2' },

            { name: 'Nome do Ataque (Especial)', value: 'Descrição do ataque especial' },

        )

        .setImage('https://cdn.discordapp.com/attachments/862850974133649438/872667049934094407/gr-chest-visual-content-cosmic-era-monster_v1.png')
        .setTimestamp()
        .setFooter('Onde apareceu pela primeira vez');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
