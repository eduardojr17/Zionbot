//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zwerevolt', // nome do comando slash
            description: 'Infomações sobre Werevolt', // Descrição do comando slash
        })
    }

    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Werevolt')
        .setDescription('* Este lobisomem vivia na floresta, onde seria inofensivo para os cidadãos, mas quando Malairion e Don Canine a destruíram para dar lugar ao Abrigo, ele não teve onde morar. Desorientado, ele correu para a cidade, mas ele estava tão cego por sua fúria que não viu a cerca elétrica em torno de Monstown. Ele se chocou contra ela e ... que o nascimento de Werevolt!.* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0:Imune a Possesão \n R1:Imune a Atordoamento \n R3:ED:100% de Reflexo de dano', inline: true},
            { name: 'Relíquias', value: 'Espada \n Essência', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 24.672 \n Vida: 311.236\n Velocidade: 12.768', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Criatura Afiada', value: 'Causa dano moderado do Trovão a um inimigo.' },

            { name: 'Alma eletrizada', value: 'Causa dano baixo de trovão a todos os inimigos.' },

            { name: 'Bola-Volt de energia', value: ' Causa dano de trovão moderado a um inimigo. Aplica choque a um inimigo.' },

            { name: 'Mordida de mão', value: 'Causa dano físico baixo a um inimigo. Rouba a vida do alvo.' },

            { name: 'Braço ferido', value: 'Causa dano Físico moderado a um inimigo. Rouba a vida do alvo. Requer recarga' },

            { name: 'Uivo Estático', value: 'os. Aplica Incentivo de dano e 50% de reflexo de dano a si mesmo. Requer  recarga'},

            { name: 'Bola-Volt Furiosa', value: 'Causa dano de trovão moderado a todos os inimigos. Aplica choque a todos os inimigos. Requer recarga' },

            { name: 'Lanche de pescoço', value: 'Causa dano físico pesado a um inimigo. Rouba a vida do alvo. Requer  recarga' },

            { name: 'Frenesi cortante(Especial)', value: 'Causa dano de trovão imenso a um inimigo. Aplica  cegueira total e sangramento a todos os inimigos. 
' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/4/4b/Werevolt_2.png/revision/latest/scale-to-width-down/250?cb=20211013162712')
        .setTimestamp()
        .setFooter('Passe Mais Caro');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}