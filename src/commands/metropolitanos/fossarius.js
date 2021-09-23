
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zfossarius', // nome do comando slash
            description: 'Infomações sobre Fossarius', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Fossarius')
        .setDescription('*Já se passaram muitos anos desde que Fossarius perdeu o controle de seu disco voador e o despencou no deserto de Wastelands. Para sobreviver nesta terra hostil, ele teve que fabricar armas com o que restou de sua nave. Com o tempo, seus pulmões adaptado à nova atmosfera, e ele se tornou o mutante temido que é hoje* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Resistente (35%) \n R1: Imune a Atordoar\n R3:MegaProvocação(ED)', inline: true},
            { name: 'Relíquias', value: 'Máscara \n Armadura', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 23712 \n Vida: 328828 \n Velocidade: 12320', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},
            { name: 'Mutante Temido', value: ' Causa dano moderado de Terra a um inimigo. Aplica Tontura a um inimigo.' },

            { name: 'Coletor de lixo', value: 'Aplica um escudo de vida de 30% a si mesmo.' },

            { name: 'Armadura de Sucata', value: 'Aplica 50% de escudo de vida e bloqueia 50% do dano recebido. Requer recarga' },

            { name: 'Carga mutante', value: 'Causa dano moderado de Terra a todos os inimigos. Aplica tontura a todos os inimigos. Requer recarga' },

            { name: 'Mordida Virulenta', value: 'Causa  dano pesado de Terra a um inimigo.Aplica Nanovirus e tontura a um inimigo. Requer recarga' },

            { name: 'Carga Virulenta', value: 'Causa dano moderado de Terra a todos os inimigos. Aplica Nanovírus a todos os inimigos. Requer recarga.' },

            { name: 'Proteção de Sucata', value: 'Aplica 50% escudo de vida a todos os aliados. Requer recarga' },

            { name: 'Sobreviver e se adaptar', value: 'Aplica-se ao Megaprovocação a si mesmo. Bloqueia para si 50% do dano recebido. Requer recarga' },

            { name: 'Comedor de Resíduos (especial)', value: 'Remove o escudo de todos os inimigos. Causa muitos danos terrestres a todos os inimigos. Aplica Mega Atordoarmento a todos os inimigos' },
        )

        .setImage('https://static.wikia.nocookie.net/monster-legends-competitive/images/6/6b/Fossarius.png/revision/latest/scale-to-width-down/250?cb=20210824160401&path-prefix=fr')
        .setTimestamp()
        .setFooter('Procriação/Dias de Missão');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
