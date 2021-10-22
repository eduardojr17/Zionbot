
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'ztallulight', // nome do comando slash
            description: 'Infomações sobre Tallulight', // Descrição do comando slash
        })
    }

    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Tallulight')
        .setDescription('*Os cidadãos de Monstown foram privados da luz do sol e enganados por Don Canine e Malairion. Mas a verdade sempre aparece no final e deixa uma pessoa muito zangada. Cansado de ficar sentado esperando que os super-heróis a salvem, o monstro por trás da máscara de Tallulight decidiu lutar por si mesma e seus concidadãos!.* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Reforçado \n R1:Resistente \n R3: ED:MegaProvocação', inline: true},
            { name: 'Relíquias', value: 'Máscara \n Armadura', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 23.712 \n Vida: 338.300\n Velocidade: 12.528', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Sua Diva Favorita', value: 'Causa baixo dano de luz a um inimigo. Aplica queimadura a um inimigo.' },

            { name: 'Clarão da Heroína', value: 'Aplica provocação a si mesma.' },

            { name: 'Pose famosa', value: 'Cura-se em 50%. Aplica imunidade à tortura a si mesma. Requer recarga' },

            { name: 'Brilho de uma estrela', value: 'Bloqueia 50% do dano recebido para si mesmo. Aplica imunidade ao controle a si mesmo. Requer recarga' },

            { name: 'Pose Heroica', value: 'Bloqueia 50% do dano recebido para si mesmo. Aplica imunidade ao controle a si mesmo. Requer recarga' },

            { name: 'Autógrafos de assinatura', value: 'Causa dano de luz moderado a todos os inimigos. Aplica Vulnerável a todos os inimigos. Requer recarga' },

            { name: 'Pulo da bomba', value: 'Causa dano de luz  muito pesado a um inimigo. Aplica Vulnerável a um inimigo. Aplica queimadura a um inimigo. Requer recarga' },

            { name: 'Fotografe-me!', value: 'Aplica Mega Provocação a si mesmo. Bloqueia para si 50% do dano recebido. Requer recarga' },

            { name: 'Para meus fãs! (Especial)', value: 'Causa danode luz muito pesado a todos os inimigos. Aplica Mega Atordoamento a todos os inimigos. Aplica queimadura a todos os inimigos' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/5/5a/Tallulight_2.png/revision/latest/scale-to-width-down/250?cb=20211020144356')
        .setTimestamp()
        .setFooter('Evento de Procriação');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}