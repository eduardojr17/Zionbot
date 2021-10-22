//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'ztetsuman', // nome do comando slash
            description: 'Infomações sobre Tetsuman', // Descrição do comando slash
        })
    }

    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Tetsuman')
        .setDescription('*Com Malairion controlando toda a Nebulosa em Elektra, como os super-heróis podem detê-lo? Bem ... Eles têm sua própria arma secreta e seu nome é Tetsuman! Construído com tecnologia de ponta, incontáveis ​​técnicas de luta e uma missão para proteger os inocentes, Tetsuman está definido para dar aos vilões um ou dois pesadelos.* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Imunidade a Choque \n R1:Reforçado \n R3: ED:Precisão', inline: true},
            { name: 'Relíquias', value: 'Espada \n Mascara', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 24.256 \n Vida: 318.002\n Velocidade: 12.560', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Kata Chocante', value: 'Causa dano moderado de Trovão a um inimigo. Aplica choque a um inimigo.' },

            { name: 'Técnica Shinobi', value: ' Causa baixo dano de Natureza a todos os inimigos.' },

            { name: 'Karlo Chop', value: 'Causa dano moderado de Natureza a um inimigo. Aplica veneno a um inimigo. Requer recarga' },

            { name: 'Sem pontos fracos', value: 'Aplica imunidade ao fogo e uma proteção aleatória a si mesmo. Dá 1 turno extra para si mesmo. Requer recarga' },

            { name: 'Shockwave', value: 'Causa dano moderado de Natureza a um inimigo. Aplica Veneno e Sangramento a todos os inimigos. Requer recarga' },

            { name: 'Swift Tekki', value: 'Causa dano baixo de Trovão a um inimigo. Dá 1 turno extra para si mesmo. Requer recarga' },

            { name: 'Inspirado pela multidão', value: 'Aplica incetivo de dano e precisão a si mesmo. Dá 1 turno extra para si mesmo. Requer recarga' },

            { name: 'Underdog Fury', value: 'Causa dano moderado de Natureza a todos os inimigos. Aplica Choque e Incendiar  a todos os inimigos. Requer recarga' },

            { name: 'Nunca é o segundo melhor! (Especial)', value: '.Aplica Nanovirus e Sangramento a todos os inimigos. Restaura todas as recargas de si mesmo. Dá 1 turno extra para si mesmo..' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/a/a6/Tetsuman_2.png/revision/latest/scale-to-width-down/250?cb=20211013122902')
        .setTimestamp()
        .setFooter('Batalhas Multijogador(PvP)');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}