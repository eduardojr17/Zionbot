
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zgahyzuhl', // nome do comando slash
            description: 'Infomações sobre Gahy Zuhl', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Gahy Zuhl')
        .setDescription('*Gahy Zuhl foi condenada ao Inferno por cometer crimes indescritíveis. Agora, pelo resto de sua existência, ela não apenas viverá no Mundo Inferior, mas também terá que suportar a dor infligida por um fogo eterno dentro dela. Por causa dessa dor, ela está permanentemente enfurecida e deixa todos ao seu redor furiosos também.* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Resistente \n R1: Imune a Incendiar e Ignição\n R3:Efeito positivo aleatório(Área-ED)', inline: true},
            { name: 'Relíquias', value: 'Bastão \n Máscara', inline: true},
            { name: 'Estatísticas', value: 'Poder: 23216 \n Vida: 318002 \n Velocidade: 13344', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},
            { name: 'Portador da dor', value: ' Causa dano moderado de Fogo a um inimigo. Aplica Ignição a um inimigo.' },

            { name: 'Purificador de Tormentos', value: 'Aplica evasão a um aliado.' },

            { name: 'Angústia desconhecida', value: 'Remove todos os efeitos negativos de um aliado. Aplica um efeito positivo aleatório a um aliado. Dá 1 turno extra para si mesmo. Requer recarga' },

            { name: 'Arrependimentos desconhecidos', value: 'Aplica um efeito  positivo aleatório a todos os aliados. Requer recarga' },

            { name: 'Purga do Ódio', value: 'Aplica Evasão a um aliado. Dá 1 turno extra para si mesmo. Requer recarga.' },

            { name: 'Ciclo de Agonia', value: 'Causa dano moderado de Fogo a todos os inimigos. Aplica Ignição a todos os inimigos. Aplica Incentivo de dano a todos os aliados. Requer recarga.' },

            { name: 'Infusão de Fúria', value: 'Aplica Dano Duplo a um aliado. Dá 1 turno extra para si mesmo.' },

            { name: 'Supressão de ódio', value: 'Aplica Evasão a todos os aliados. Requer recarga' },

            { name: 'Dor torna você mais forte (especial)', value: 'Causa dano de fogo pesado a todos os inimigos. Remove efeitos de status positivos de todos os inimigos. Desabilita característica em todos os inimigos. Aplica Ignição a todos os inimigos.' },
        )

        .setImage('https://static.wikia.nocookie.net/monster-legends-competitive/images/e/e4/Gahy_Zuhl.png/revision/latest/scale-to-width-down/250?cb=20210830134929&path-prefix=fr')
        .setTimestamp()
        .setFooter('Procriação/Dias de Missão');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
