
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zorcatti', // nome do comando slash
            description: 'Infomações sobre Orcatti', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Orcatti')
        .setDescription('*Mantenha seus amigos por perto e seus inimigos por perto. Orcatti costumava ser um antigo rival de Don Canine, mas quando este concorreu a prefeito, ele construiu uma estratégia para silenciar seus rivais. Para ter sucesso, ele recrutou profissionais de sua própria área. Ele se juntou a Orcatti, que fez um ótimo trabalho garantindo que nenhum dos outros candidatos tivesse chance!* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0:Resistente \n R1: Imune a Congelar\n R3:Provocação(ED)', inline: true},
            { name: 'Relíquias', value: 'Armadura \n Armadilha', inline: true},
            { name: 'Estatísticas', value: 'Poder: 24256 \n Vida: 335594 \n Velocidade: 12224', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},
            { name: 'Mão direita de Don', value: 'Causa dano moderado de Água a um inimigo.' },

            { name: 'Trabalho sujo', value: 'Remove os efeitos positivos de si mesmo. Aplica dano triplo a si mesmo. Requer recarga' },

            { name: 'Mafia Enforcer', value: 'Causa dano moderado de Água a todos os inimigos. Aplica Afogado a todos os inimigos. Requer recarga' },

            { name: 'Bad Cop', value: 'Remove o escudo de um inimigo. Causa  dano pesado de Água a um inimigo. Requer recarga' },

            { name: 'Friends Close', value: 'Aplica provocação e Incentivo de dano a si mesmo. Requer recarga' },

            { name: 'Pior Policial', value: 'Causa grande dano de Água a um inimigo. Remove o escudo e aplica Afogado em um inimigo. Requer recarga' },

            { name: 'Enemies Closer', value: 'Aplica Mega Provocação a si mesmo. Bloqueia para si 50% do dano recebido. Requer recarga' },

            { name: 'No More Warm Up (Especial)', value: 'Remove os efeitos positivos de status de todos os inimigos. Desabilita característica em todos os inimigos. Causa dano pesado de Água a todos os inimigos' },
        )

        .setImage('https://static.wikia.nocookie.net/monster-legends-competitive/images/a/aa/Orcatti.png/revision/latest/scale-to-width-down/250?cb=20210914153136&path-prefix=fr')
        .setTimestamp()
        .setFooter('Maratona');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
