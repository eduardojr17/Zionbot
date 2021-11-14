
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zizabeth', // nome do comando slash
            description: 'Infomações sobre Izabeth', // Descrição do comando slash
        })
    }

    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Condenado', 'https://cdn.discordapp.com/attachments/869282294639231008/908493303295655996/badge_doomsday_v1.png')
        
        .setTitle('Izabeth')
        .setDescription('*Lorde Inheritor tem fome de grandeza e está determinado a construir uma corte de milhares de servos e acólitos. Sua favorita é Izabeth, uma demônia habilidosa e dedicada com um incrível talento para as artes das trevas. No entanto, depois de ver a ascensão do Lorde Inheritor ao trono, Izabeth aspira muito mais do que ser uma acólita prestativa.* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Imune a Possessão \n R1:Imune a Pesadelos \n R3: Anti Aleatório (ED-Aliados)', inline: true},
            { name: 'Relíquias', value: 'Máscara \n Bastão', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 23968 \n Vida: 343712\n Velocidade: 13984', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Estudante Negro', value: 'Causa dano moderado de Magia a um inimigo.' },

            { name: 'Acólito do herdeiro', value: 'Remove todos os efeitos negativos de todos os aliados. Aplica Incentivo de dano e Precisão a todos os aliados. Requer recarga' },

            { name: 'Feitiços do submundo', value: 'Causa dano de magia moderado a todos os inimigos. Remove efeitos positivos de todos os inimigos. Aplica Tontura a todos os inimigos. Requer recarga' },

            { name: 'Rebelião de Lúcifer', value: 'Causa  dano pesado de magia a um inimigo. Remove os efeitos positivos de um inimigo. Aplica maldição a um inimigo. Requer recarga' },

            { name: 'Artes Infernais', value: 'Remove todos os efeitos negativos de um aliado. Aplica um efeito de Ódio aleatório a um aliado. Requer recarga' },

            { name: 'Pedra de Nembroth', value: 'Remove todos os efeitos negativos de um aliado. Aplica dobro de dano a um aliado. Requer recarga' },

            { name: 'Feitiço de Bellial', value: 'Aplica um efeito de Ódio aleatório a todos os inimigos. recarga' },

            { name: 'Ódio de Athatriel', value: 'Aplica Incentivo de Dano a um aliado.' },

            { name: 'Pacto com Astaroth (Especial)', value: 'Causa dano pesado de magia a todos os inimigos. Aplica Choque, Maldição e Atordoamento a todos os inimigos.' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/8/82/Izabeth_2.png/revision/latest?cb=20211112091254')
        .setTimestamp()
        .setFooter('Maratona');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
