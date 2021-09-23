
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zqwaste', // nome do comando slash
            description: 'Infomações sobre Qwaste', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Qwaste')
        .setDescription('*Qwaste é uma lata de lixo eremita. Ele viajou de Monstown para Terra devastada em um dos caminhões de Don Canine e se encontrou no paraíso em sua nova casa. Ele usa o lixo não apenas para se proteger, mas também para amplificar seu fedor, o que lhe permite atordoar até o inimigo mais forte.* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Imune ao controle \n R1: Resistente (20%)\n R3: Nanovirus (ED)', inline: true},
            { name: 'Relíquias', value: 'Máscara \n Essência', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 23088 \n Vida: 322062 \n Velocidade: 13280', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},
            { name: 'Criação de Resíduos', value: 'Causa dano moderado de Metal a um inimigo. Aplica Nanovírus a um inimigo.' },

            { name: 'Não jogue isso!', value: 'Causa baixo dano de Metal a todos os inimigos. Aplica tontura a todos os inimigos.' },

            { name: 'Lixeira Enfraquecedora', value: 'Causa baixo dano de Metal a todos os inimigos. Aplica cegueira a todos os inimigos. Requer recarga.' },

            { name: 'Resíduos poluentes', value: 'Causa dano moderado de Metal a um inimigo. Remove os efeitos positivos de um inimigo. Aplica cegueira a um inimigo. Requer recarga' },

            { name: 'Aprenda a reciclar', value: 'Causa dano especial moderado a um inimigo. Aplica Cegueira Total a um inimigo. Requer recarga.' },

            { name: 'Papel higiênico', value: 'Causa dano especial moderado a todos os inimigos. Aplica cegueira e tontura a todos os inimigos. Requer recarga.' },

            { name: 'Isso fede!', value: 'Causa dano de metal pesado a um inimigo. Remove os efeitos positivos de um inimigo duas vezes. Aplica Nanovírus a um inimigo. Requer resfriamento.' },

            { name: 'Chuveiro de lixo', value: 'Causa dano moderado de Metal a todos os inimigos. Remove efeitos positivos de todos os inimigos. Aplica Nanovírus a todos os inimigos. Requer recarga'}, 

            { name: 'Volta ao proprietário (Especial)', value: 'Causa dano de Metal muito pesado a todos os inimigos. Aplica Cegueira Total e Nanovirus a todos os inimigos.' },
        )

        .setImage('https://static.wikia.nocookie.net/monster-legends-competitive/images/9/9b/Qwaste.png/revision/latest/scale-to-width-down/250?cb=20210920153517&path-prefix=fr')
        .setTimestamp()
        .setFooter('Procriação/Dias de Missão');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
