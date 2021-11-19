
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zkillarok', // nome do comando slash
            description: 'Infomações sobre Killarok', // Descrição do comando slash
        })
    }

    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Condenado', 'https://cdn.discordapp.com/attachments/869282294639231008/908493303295655996/badge_doomsday_v1.png')
        
        .setTitle('Killarok')
        .setDescription('*Lord Inheritor pode ter vencido a primeira batalha contra os Anjos, mas ele sabe que a guerra apenas começou. Por esta razão, ele começou a reunir alguns soldados-chave para ajudá-lo e aos outros Demônios caso os Anjos se atrevessem a contra-atacar. Sua primeira criação se chama Killarok, um monstro feito de rocha inalterada do Submundo!* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Demônio \n R1: Imune a atordoar \n R3: Dobro de Cura (ED)', inline: true},

            { name: 'Relíquias', value: 'Armadura \n Escudo', inline: true},

            { name: 'Estatísticas(R5)', value: 'Poder: 24208 \n Vida: 361304\n Velocidade: 13536', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Carapaça dura', value: 'Aplica Provocação a si mesmo. Aplica 50% de Reflexo de Dano a si mesmo. Precisa recarregar.' },

            { name: 'Rugindo por dentro', value: 'Dobra a vida máxima de si mesmo. Cura a si mesmo em 30%. Precisa recarregar.' },

            { name: 'Chifre de Vingança', value: 'Causa dano de terra baixo a todos os inimigos.' },
            
            { name: 'Chifre regenerativo', value: 'Cura a si mesmo em 20%.' },

            { name: 'Rock Entity', value: 'Causa dano moderado de Terra a um inimigo. Causa dano de terra moderado a todos os inimigos. Aplica a Dobro de Cura a si mesma. Precisa recarregar.' },

            { name: 'Deslizamento de terra', value: 'Causa dano de terra moderado a um inimigo. Aplica a Regeneração de Vida a si mesmo. Precisa recarregar.' },

            { name: 'Chifre de Tenacidade', value: 'Causa dano de terra baixo a todos os inimigos. Aplica Areia Movediça a todos os inimigos. Precisa recarregar.' },

            { name: 'Parede sólida como rocha', value: 'Causa dano de terra moderado a um inimigo. Cura-se em 50%. Precisa recarregar.' },

            { name: 'Handquake', value: 'Causa dano de terra pesado a todos os inimigos. Aplica Mega Atordoar a todos os inimigos. Desativa as características de todos os inimigos.' },

        )
        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/7/7b/Killarok_2.png/revision/latest?cb=20211116143723')
        .setTimestamp()
        .setFooter('Labirinto');
        
        interaction.reply({ embeds: [exampleEmbed] });

    }
}
