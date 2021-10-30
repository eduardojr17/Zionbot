
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zfirefly', // nome do comando slash
            description: 'Infomações sobre Firefly', // Descrição do comando slash
        })
    }

    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Wormanoid')
        .setDescription('*Cuidado! Se você ver um inseto vermelho brilhante se oferecendo para guiá-lo pelas áreas escuras da Floresta Cardinal, corra. Firefly é mãe de cinco filhos, nenhum dos quais sabe caçar, então ela tem que fazer todo o trabalho. Ela atrai vítimas sem noção, oferecendo-se para levá-los para o outro lado da floresta, atordoa-os e rouba sua comida.* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Imune a combustão e Ignição \n R1: Imune a Cegueria \n R3: Visão(ED)', inline: true},
            { name: 'Relíquias', value: 'Bastão \n Amuleto', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 19.080 \n Vida: 249.400\n Velocidade: 11.505', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Picada com coceira', value: 'Causa dano moderado de Fogo a um inimigo. Aplica combustão a um inimigo.' },

            { name: 'Luminária de lava', value: 'Causa baixo dano de luz a todos os inimigos.' },

            { name: 'Feixe aquecido', value: 'Aplica a combustão a todos os inimigos. Aplica queimadura a todos os inimigos.' },

            { name: 'Siga a luz', value: 'Remove todos os efeitos negativos de um aliado. Aplica Visão Real a um aliado. Requer  recarga' },

            { name: 'Beliscão Urticário', value: 'Causa dano moderado de Fogo a um inimigo. Aplica Nanovírus a um inimigo. Aplica Ignição a um inimigo. Requer recarga' },

            { name: 'Brilho Fervente', value: 'Aplica atordoar a um inimigo. Causa dano moderado de Fogo a todos os inimigos. Aplica queimadura a todos os inimigos. Requer  recarga' },

            { name: 'Picada Inflamatória', value: 'Aplica MegaAtordoamento a um inimigo. Aplica Nanovírus a um inimigo. Aplica combustão a um inimigo. Requer  recarga' },

            { name: 'Efeito Firefly (especial)', value: 'Causa dano de fogo muito pesado a todos os inimigos. Aplica atordoar a todos os inimigos. Remove todos os efeitos negativos de todos os aliados. Aplica Visão real a todos os aliados.' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/9/95/Firefly_2.png/revision/latest/scale-to-width-down/250?cb=20211025162402')
        .setTimestamp()
        .setFooter('Caça a Recompensa (Grátis)');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
