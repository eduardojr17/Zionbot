
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zmccreamy', // nome do comando slash
            description: 'Infomações sobre  MC Creamy', // Descrição do comando slash
        })
    }

    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Condenado', 'https://cdn.discordapp.com/attachments/869282294639231008/908493303295655996/badge_doomsday_v1.png')
        
        .setTitle('MC Creamy')
        .setDescription('*McCreamy costumava comer sorvete o tempo todo, até que cometeu o erro final: roubou o sorvete real de aniversário do Rei Daeron! Quando o rei descobriu, ele sentenciou McCreamy à pior punição possível para ele - uma estadia pelo resto da vida no submundo, onde sorvetes derretem em segundos e têm gosto de enxofre!* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Imune a Atordoar \n R1: Imune a congelar \n R3: Dobro de Cura(ED)', inline: true},

            { name: 'Relíquias', value: 'Máscara \n Bastão', inline: true},

            { name: 'Estatísticas(R5)', value: 'Poder: 23552 \n Vida: 350478\n Velocidade: 13744', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Talentoso e Engraçado', value: 'Causa dano de Fogo moderado a um inimigo. Aplica Vazamento de Resistência a um inimigo' },

            { name: 'Açucar na veia', value: 'Cura todos os aliados em 50%. Aplica Regeneração de Vida a todos os aliados. Requer recarga.' },

            { name: 'Cupcakes e Trolagem', value: 'Causa dano de Fogo baixo a todos os inimigos. Remove efeitos positivos de todos os inimigos. Aplica Vazamento de Resistência a todos os inimigos. Requer recarga.' },

            { name: 'Achei um Glicth', value: ' Aumenta a Resistência Máxima de todos os aliados. Aplica Regeneração de Resistência a todos os aliados. Requer recarga.'},

            { name: 'Monstro Bonito', value: ' Remove 20% da Resistência de todos os inimigos. Dá 20% de Resistência a todos os aliados.' },

            { name: 'Momento Importante', value: 'Aplica Dobro de Cura a um aliado. Requer recarga.' },

            { name: 'Soldado do Soverte', value: 'Remove todos os efeitos negativos de um aliado. Dá 30% de Resistência a um aliado. Requer recarga.' },

            { name: 'Life Hack', value: 'Dobra a Vida Máxima de um aliado. Requer recarga' },

            { name: 'Golden Cream Trooper (Especial)', value: 'Remove 50% da Resistência de todos os inimigos. Cura todos os aliados em 100%. Dá 100% de Resistência a todos os aliados..' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/6/66/McCreamy_2.png/revision/latest/scale-to-width-down/250?cb=20211112085541')
        .setTimestamp()
        .setFooter('Evento de Procriação (Youtuber)');
        
        interaction.reply({ embeds: [exampleEmbed] });

    }
}






