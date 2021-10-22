//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zmaremotus', // nome do comando slash
            description: 'Infomações sobre Maremotus', // Descrição do comando slash
        })
    }

    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Maremotus')
        .setDescription('*Don Canine aprendeu da maneira mais difícil que quando você joga resíduos tóxicos na água sem ver o que está por baixo, acidentes podem acontecer, acidentes como o de Maremotus. Desde que essa esponja zumbi gigante emergiu do oceano, ele está causando estragos e calamidades aonde quer que vá !* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Provocação \n R1:Abominação \n R3: ED:Mega Provocação(ED)', inline: true},
            { name: 'Relíquias', value: 'Armadura \n Amuleto', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 23.712 \n Vida: 331.534\n Velocidade: 12.320', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Esponja Submarina', value: 'Causa dano moderado de Água a um inimigo. Aplica Afogado a um inimigo.' },

            { name: 'Calamidade Abissal', value: ' Causa dano de escuridão baixo a todos os inimigos. Aplica Vazamento de Estamina a todos os inimigos.' },

            { name: 'Riacho Salgado', value: 'Aplica a regeneração de resistência a si mesmo. Dá 50% de resistência para si mesmo. Requer recarga' },

            { name: 'Banho Gelado', value: 'Causa dano moderado de Água a um inimigo. Aplica Congelar a um inimigo. Requer recarga' },

            { name: 'Profundidade sem vida', value: 'Causa dano de escuridão moderado a todos os inimigos. Aplica pesadelo a todos os inimigos. Requer recarga' },

            { name: 'Onda do Mar Vermelho', value: 'Causa dano moderado de Água a todos os inimigos. Aplica Afogado a todos os inimigos. Aplica Vazamento de resistência a todos os inimigos. Requer recarga' },

            { name: 'Sangue Gelado', value: 'Causa dano pesado de Água a um inimigo. Aplica Mega Congelamento a um inimigo. Requer recarga' },

            { name: 'Grande Barreira', value: 'Aplica a Mega Provocação a si mesmo. Dá 50% de resistência para si mesmo. Requer recarga' },

            { name: 'Recife da Morte (Especial)', value: 'Causa dano escuro muito pesado a todos os inimigos. Aplica-se Afogado a todos os inimigos. Aplica MegaStun a todos os inimigos. Aplica Congelar a todos os inimigos.' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/a/a5/Maremotus_2.png/revision/latest/scale-to-width-down/250?cb=20211020150003')
        .setTimestamp()
        .setFooter('Ilha progressiva');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}