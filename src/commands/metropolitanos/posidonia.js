
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zposidonia', // nome do comando slash
            description: 'Infomações sobre Posidonia', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Posidonia')
        .setDescription('*Posidonia foi banida dos mares de Petra depois de trair a Rainha Thalassa. Após sua expulsão, ela atracou nos mares de Elektra, e passou a ser um dos poucos monstros subaquáticos sortudos transformados pela Nebulosa graças ao seu corpo vegetal, que absorveu todos os nutrientes da luz do sol!* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Antecipação \n R1: Imune a tortura\n R3: Proteção de natureza (ED)', inline: true},
            { name: 'Relíquias', value: 'Bastão \n Amuleto', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 23040 \n Vida: 316648 \n Velocidade: 13344', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},
            { name: 'Danos no fundo do mar', value: 'Causa dano moderado de natureza a um inimigo e aplica cura reversa a um inimigo. ' },

            { name: 'Grama de Netuno', value: 'Remove todos os efeitos negativos de um aliado.' },

            { name: 'Varredura de corrente', value: 'Causa dano baixo de terra a todos os inimigos e aplica areia movediça a todos os inimigos. Requer recarga.' },

            { name: 'Salve Posidonia', value: 'Cura todos os aliados em 50%. Requer recarga.' },

            { name: 'A oliva do mar', value: 'Causa dano moderado de natureza a todos os inimigos, aplica veneno a todos os inimigos e aplica cura reversa a todos os inimigos. Requer recarga.' },

            { name: 'Ecossistema rico', value: 'Remove todos os efeitos negativos de um aliado, aplica imunidade elemental a um aliado e cura um aliado em 50%. Requer recarga.'},

            { name: 'Pulmão Mediterraneo', value: 'Remove os efeitos positivos de todos os inimigos e aplica afogado a todos os inimigos. Requer recarga.' },

            { name: 'Varredura de âncora podre', value: 'Causa dano pesado de natureza a um inimigo, remove os efeitos de positivos de um inimigo. Aplica veneno e areia movediça a um inimigo. Requer recarga.' },

            { name: 'Muro de Posidonia (Especial)', value: 'Remove os efeitos positivos de todos os inimigos. Aplica cura reversa a todos os inimigos. Cura todos os inimigos em 50% e cura todos os aliados em 50%.' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/d/d1/Posidonia_2.png/revision/latest?cb=20210920145121')
        .setTimestamp()
        .setFooter('Ilha progressiva');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
