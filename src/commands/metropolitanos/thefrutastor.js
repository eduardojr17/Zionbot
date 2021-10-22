
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zthefrustastor', // nome do comando slash
            description: 'Infomações sobre The Frustastor', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('TheFrutastor')
        .setDescription('*Malairion esnobou O Frutastor em um teste para sua equipe de Supervilões, mas quando chegou em casa, ele descobriu que cada sarjeta estava entupida de frutas podres. Havia vermes por toda parte. Ele percebeu que um ato de vingança tão malvado só poderia vir de um verdadeiro supervilão, então ele ligou para o Frutastor e lhe ofereceu um contrato.* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Imune a tortura \n R1: Imune a possessão\n R3: Regeneração de vida(ED - Área)', inline: true},
            { name: 'Relíquias', value: 'Máscara \n Armadura', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 23296 \n Vida: 331534\n Velocidade: 12160', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},
            { name: 'Vilão Saudável', value: 'Remove 20% da vida total de um inimigo. Aplica regeneração de resistência a si mesmo. ' },

            { name: 'Fonte de vitaminas', value: 'Cura a si mesma em 30%. Aplica a regeneração de vida a si mesmo. ' },

            { name: 'Moranguinho', value: 'Causa dano moderado de Natureza a um inimigo. Cura todos os aliados em 30%. Requer recarga.' },

            { name: 'Banana Milkshake', value: 'Causa dano moderado de Natureza a um inimigo. Dá 30% de resistência a todos os aliados. Requer recarga.' },

            { name: 'Bagas podres', value: 'Remove 30% da vida total de todos os inimigos. Cura todos os aliados em 30%. Requer recarga.' },

            { name: 'Gula de Morangos', value: 'Aplica cura em dobro e cura-se em 50%. Requer recarga. '},

            { name: 'Bananas podres', value: 'Remove 30% da vida total de todos os inimigos. Aplica regeneração de vida e resistência a todos os aliados. Requer recarga.' },

            { name: 'Salada Saudável', value: 'Cura todos os aliados em 30%. Dá 30% de resistência a todos os aliados. Requer recarga. ' },

            { name: 'Buffet de frutas (especial)', value: 'Remove 50% da vida total de todos os inimigos. Remove todos os efeitos negativos de todos os aliados. Cura todos os aliados em 50%.' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/d/d6/The_Frutastor_2.png/revision/latest?cb=20210720155735')
        .setTimestamp()
        .setFooter('Maratona');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
