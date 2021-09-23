
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zthermagorn', // nome do comando slash
            description: 'Infomações sobre Thermagorn', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Thermagorn')
        .setDescription('*Depois que Malarion cortou quase todas as árvores da cidade para construir o abrigo, ele deixou cupins sem nada pra comer. Infelizmente, pra ele, esse insetos não vão deixar barato. O líder deles, Thermagorn, tem um plano pra tirar a sustentação do chão, abaixo do prédio principal do Abrigo. Levará tempo, mas ele chegará lá* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0:Resistente (20%) \n R1: Resistente (35%)\n R3:Autoevasão (ED)', inline: true},
            { name: 'Relíquias', value: 'Máscara \n Essência', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 24416 \n Vida: 324768 \n Velocidade: 12464', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},
            { name: 'Soldado Inseto', value: 'Causa dano moderado de Terra a um inimigo.' },

            { name: 'Raça alienígena', value: 'Aplica morte com contagem regressiva de morte de 3 rodadas a um inimigo.' },

            { name: 'Mordida Enfraquecedora', value: 'Remove 50% da Vida Total de um inimigo. Requer recarga' },

            { name: 'Tempo para Evolução', value: 'Aplica morte com contagem regressivade 3 rodadas a todos os inimigos. Requer recarga' },

            { name: 'Muitos para escolher', value: 'Causa dano moderado de Terra a todos os inimigos. Aplica Guarda baixa a todos os inimigos. Requer recarga' },

            { name: 'Sobrevivência do mais forte', value: '50% de chance de derrotar instantaneamente um inimigo. 20% de chance se for um chefe. Aplica morte com contagem regressiva de 3 rodadas a um inimigo. Requer recarga' },

            { name: 'Presas Endurecidas', value: 'Remove 30% da vida total de todos os inimigos. Requer recarga' },

            { name: 'Presa Escolhida', value: 'Causa dano pesado de Terra a um inimigo. Aplica Guarda baixa a um inimigo. Requer recarga'}, 

            { name: 'Predador da Morte (Especial)', value: 'Causa dano pesado de Terra a um inimigo. Aplica Guarda baixa a um inimigo. Aplica a Vulnerável a um inimigo. 50% de chance de derrotar instantaneamente um inimigo. 20% de chance se for um chefe.' },
        )

        .setImage('https://static.wikia.nocookie.net/monster-legends-competitive/images/2/2c/Thermagorn.png/revision/latest/scale-to-width-down/250?cb=20210907155452&path-prefix=fr')
        .setTimestamp()
        .setFooter('Caça a Recompensa');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
