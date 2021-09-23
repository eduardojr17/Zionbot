
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zluckyclint', // nome do comando slash
            description: 'Infomações sobre Lucky Clint', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Lucky Clint')
        .setDescription('*Lucky Clint gosta que as pessoas pensem que ele não é nada além de um andarilho solitário que é bom com suas armas, mas na realidade, ele é um monstro atencioso que tem muita sabedoria a oferecer. Ele é uma das figuras paternas e protetoras de Butcherang* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Antecipação \n R1: Imune aCegueira\n R3:Visão Real(ED)', inline: true},
            { name: 'Relíquias', value: 'Máscara \n Armadilha', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 24.464 \n Vida: 316.648 \n Velocidade: 12.528', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},
            { name: 'Cowboy de Futuro', value: 'Causa dano mágico moderado a um inimigo.' },

            { name: 'Rodeio de bala', value: 'Causa dano baixo  de Magia a todos os inimigos.' },

            { name: 'Uma questão de fé', value: 'Aplica a visão real  e o duplo dano a si mesmo. Requer recarga' },

            { name: 'Uma questão de princípio', value: 'Aplica a si mesmo imunidade ao controle e incentivo de dano. Requer recarga' },

            { name: 'Filho da Esperança', value: 'Causa dano pesado de magia a um inimigo. Aplica maldição a um inimigo. Requer recarga' },

            { name: 'Ciclone', value: 'Causa dano moderado de Magia a todos os inimigos. Aplica maldição a todos os inimigos. Requer recarga.' },

            { name: 'Situação mortal', value: 'Causa dano de Metal muito pesado a um inimigo. Aplica Maldição e Nanovírus a um inimigo. Requer recarga' },

            { name: 'Ação de Mão parafuso', value: 'Causa dano imenso de Metal a um inimigo. Requer recarga.' },

            { name: 'Confronto na Casa Diabo (especial)', value: 'Causa dano pesado de magia a todos os inimigos. Aplica Cegueira Total, Vunerável e Sangramento a todos os inimigos.' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/d/d8/Lucky_Clint_2.png/revision/latest/scale-to-width-down/250?cb=20210915073438')
        .setTimestamp()
        .setFooter('Batalhas Multijogador (PvP)');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
