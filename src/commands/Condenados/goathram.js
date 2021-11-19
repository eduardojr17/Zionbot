
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zgoathram', // nome do comando slash
            description: 'Infomações sobre Goathram', // Descrição do comando slash
        })
    }

    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Condenado', 'https://cdn.discordapp.com/attachments/869282294639231008/908493303295655996/badge_doomsday_v1.png')
        
        .setTitle('Goathram')
        .setDescription('*Darmith Khan é um guerreiro brutal, mas ele está por perto há tempo suficiente para saber que se todos ao seu redor são tão selvagens e mal-humorados como ele é, ele vai acabar falhando. É por isso que ele mantém monstros como o Goathram na mão. Este xamã bárbaro não está aqui para destruir, mas para evitar que os inimigos impeçam Darmith e seus soldados.* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Resistente (20%) \n R1: Imune a maldição \n R3: 50% de Escudo(ED)', inline: true},

            { name: 'Relíquias', value: 'Bastão \n Máscara', inline: true},

            { name: 'Estatísticas(R5)', value: 'Poder: 23584 \n Vida: 345066\n Velocidade: 13536', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Ameaça Queratinosa', value: 'Causa dano de Magia baixo a um inimigo.' },

            { name: 'Magia dos Ossos', value: 'Causa dano de Magia baixo a todos os inimigos.' },

            { name: 'Duas Perspectivas', value: 'Causa dano de Magia moderado a um inimigo. Aplica Atordoar a um inimigo. Remove todos os efeitos negativos de si mesmo. Requer recarga.' },

            { name: 'Instinto Feral', value: 'Aplica um Escudo de vida de 33% a todos os aliados. Requer recarga.' },

            { name: 'Cabra da Peste!', value: 'Causa dano de Magia moderado a todos os inimigos. Aplica Atordoar a todos os inimigos. Requer recarga.' },

            { name: 'Tá de bode?', value: 'Causa dano de Magia moderado a todos os inimigos. Aplica Bloqueio de Escudo a todos os inimigos. Requer recarga.' },

            { name: 'Esforço Conjunto', value: 'Aplica 50% de Escudo de Vida a um aliado e a si mesmo. Requer recarga.' },

            { name: 'Passeio da Fera', value: 'Causa dano de Magia moderado a um inimigo. Aplica Reflexo de Habilidade a si mesmo. Requer recarga.' },

            { name: 'História de Um Carneiro Mágico (Especial)', value: 'Causa dano de Magia muito pesado a todos os inimigos. Ativa todas as recargas em todos os inimigos. Aplica Atordoar a todos os inimigos.' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/8/8b/Goathram_2.png/revision/latest/scale-to-width-down/250?cb=20211116142325')
        .setTimestamp()
        .setFooter('Procriação (Dias de Missão)');
        
        interaction.reply({ embeds: [exampleEmbed] });

    }
}