
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'q-3r1on', // nome do comando slash
            description: 'Infomações sobre Q-3R1ON', // Descrição do comando slash
        })
    }

    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Q-3R1ON')
        .setDescription('*Q-3R1ON é um complexo IA emocional dentro de uma concha robótica feita de cubos modulares vivos. Depois de medir as chances das forças do mal assumirem o controle de Elektra, Q-3R1ON detectou níveis extremos de perigo e decidiu enfrentar essas forças do mal para detê-los.* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Imune a atordoar \n R1:Artefato \n R3: Provocação', inline: true},
            { name: 'Relíquias', value: 'Máscara \n Armadura', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 23.712 \n Vida: 324.768\n Velocidade: 12.256', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Herói Fractal', value: 'Causa dano moderado de Metal a um inimigo. Aplica Tontura a um inimigo.' },

            { name: 'Menger Vertex', value: 'Remove 20% da Vida Total de um inimigo.' },

            { name: 'Soldagem de metal', value: 'Cura-se 30%. Requer recarga' },

            { name: 'Esponja Menger', value: 'Remove 30% da vida total de um inimigo. Aplica Nanovírus a um inimigo. Requer recarga' },

            { name: 'Metal Shatter', value: 'Causa dano moderado de Metal a todos os inimigos. Remove o escudo de todos os inimigos. Requer recarga' },

            { name: 'Menger Cube', value: 'Remove 20% da vida total de todos os inimigos. Requer recarga' },

            { name: 'Cube Shatter', value: 'Causa dano Pesado de Metal a um inimigo. Remove o escudo de um inimigo. Requer recarga' },

            { name: 'Ilusão Fractal', value: 'Causa dano moderado de Metal a todos os inimigos. Aplica Tontura a todos os inimigos. Requer recarga' },

            { name: 'Q-Snowflake (Especial)', value: 'Remove o escudo de todos os inimigos. Causa danos de Metal muito pesado ​​a todos os inimigos. Aplica Mega Atordoaento a todos os inimigos.' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/c/c5/Q-3R1ON_2.png/revision/latest/scale-to-width-down/250?cb=20210824153013')
        .setTimestamp()
        .setFooter('Labirinto');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
