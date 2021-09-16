
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zslumster', // nome do comando slash
            description: 'Infomações sobre Slumster', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Slumster')
        .setDescription('*Em breve* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Evasão de Área \n R1: Imune ao Controle\n R3:Regeneração de Resistência(ED-Área)', inline: true},
            { name: 'Relíquias', value: '- \n -', inline: true},
            { name: 'Estatísticas', value: 'Poder: - \n Vida: - \n Velocidade: -', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},
            { name: 'Mole e Inteligente', value: 'Causa dano moderado de natureza a um inimigo e aplica regeneração de resistência a todos os aliados.' },

            { name: 'Disfarçado', value: 'Aplica imunidade ao controle a um aliado.' },

            { name: 'Risada de Água', value: 'Aplica proteção de efeito positivo a todos os aliados e dá 30% de resistência a todos os aliados. Requer recarga' },

            { name: 'Carta Bomba', value: 'Causa dano pesado de natureza a um inimigo e remove os efeitos positivos de um inimigo. Requer recarga.' },

            { name: 'Para o esgoto', value: 'Remove todos os efeitos de status negativos de todos os aliados e aplica evasão a todos os aliados. Requer recarga.' },

            { name: 'Tome um suco', value: 'Causa dano pesado de natureza a um inimigo, aplica imunidade ao controle a todos os aliados e aplica regeneração de resistência a todos os aliados. Requer recarga.' },

            { name: 'Me siga', value: 'Remove todos os efeitos negativos de um aliado, aplica evasão a um aliado e aplica proteção de efeito positivo a um aliado. Requer recarga.' },

            { name: 'Pacote Bomba ', value: 'Causa dano pesado de natureza a um inimigo, remove os efeitos de status positivos de um inimigo e remove efeitos positivos de todos os inimigos. Requer recarga.' },

            { name: 'Meu pequeno Hamster (especial) ', value: 'Remove os efeitos de status positivos de todos os inimigos, desabilita característica em todos os inimigos, aplica corrompido a todos os inimigos e aplica sangramento a todos os inimigos.' },

        )

        .setImage('https://cdn.discordapp.com/attachments/610845535296946186/888033321098035270/MlFrancophone1_Capture0_2021-09-16_14-06-39.png')
        .setTimestamp()
        .setFooter('Labirinto');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
