
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zuvfusion', // nome do comando slash
            description: 'Infomações sobre UV Fusion', // Descrição do comando slash
        })
    }

    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('UV Fusion')
        .setDescription('*Com a ajuda de sua amiga, Emerald Nathura , que deu a ela sua seiva infundida com nebulosa, Madam Fusion deu lugar a UV Fusion , a super-heroína que salvará Monstown dos planos malucos de Malairion e de seu esquadrão inteiro de vilões! Ela teve que escolher entre sua família e a justiça. Ela escolheu a justiça.* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Reforçado (20%) \n R1:ED: Evasão \n R3: ED: Proteção de Efeitos Positivos', inline: true},
            { name: 'Relíquias', value: 'Bandeira \n Bastão', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 22,960 \n Vida: 318,002\n Velocidade: 13,312', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Sumir na escuridão', value: 'Causa baixo dano de mágia a um inimigo. Aplica choque a um inimigo.' },

            { name: 'Amor verdadeiro', value: 'Causa dano de magia moderado a todos os inimigos. Aplica Vazamento de resistência a todos os inimigos.' },

            { name: 'Volts ilimitados', value: 'Remove todos os efeitos negativos de todos os aliados. Aplica regeneração de resistência a todos os aliados. Requer recarga' },

            { name: 'Acorde Volt!', value: 'Causa dano de trovão moderado a um inimigo. Aplica choque a um inimigo. Dá 1 turno extra para si mesmo. Requer recarga' },

            { name: 'Sua vez!', value: 'Remove todos os efeitos de status negativos de um aliado. Dá 1 turno extra para si mesmo. Requer recarga' },

            { name: 'Escudo do nucleo', value: 'Aplica evasão a si mesmo. Aplica proteção Efeitos positivos a si mesmo. Dá 30% de resistência para si mesmo. Aplica regeneração de resistência a si mesmo. Requer recarga' },

            { name: 'Ingenica Me Ensinou', value: 'Causa baixo dano especial a um inimigo. Desabilita caracterítica de um inimigo. Dá 1 turno extra para si mesmo. Requer recarga' },

            { name: 'Proteção de fusão', value: 'Aplica evasão a todos os aliados. Dá 30% de resistência a todos os aliados. Requer recarga' },

            { name: 'Tempestade crescente (Especial)', value: 'Causa  dano pesado de magia a todos os inimigos. Remove efeitos positivos de todos os inimigos. Desabilita caracteristica em todos os inimigos. Aplica Mega Atordoamento a todos os inimigos' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/1/1e/UV_Fusion_2.png/revision/latest/scale-to-width-down/250?cb=20211014083313')
        .setTimestamp()
        .setFooter('Passe Grátis');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
