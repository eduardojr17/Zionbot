
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zbutcherang', // nome do comando slash
            description: 'Infomações sobre o Butcherang', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Butcherang')
        .setDescription('*Butcherang foi criado pelos Wastelanders como um grupo e, como resultado dessa educação, ele é um caçador incrível, um lutador selvagem e um amigo querido de todos eles (exceto da The Baroness, é claro). Ele não é um grande orador, mas ele não precisa ser, ele sempre encontra uma maneira de se comunicar com os outros.* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Imunidade a cegueira \n R1: Super harmonizado\n R3:Regeneração de Resistência(ED)', inline: true},
            { name: 'Relíquias', value: 'Espada \n Máscara', inline: true},
            { name: 'Estatísticas', value: 'Poder: 24752 \n Vida: 311236 \n Velocidade: 12704', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},
            { name: 'Novo líder', value: ' Causa dano moderado de metal a um inimigo.' },

            { name: 'Escolhida Baronex', value: 'Causa dano baixo de metal a todos os inimigos' },

            { name: 'Lâminas Selvagens', value: 'Causa dano moderado de metal a todos os inimigos. Requer recarga' },

            { name: 'Nunca falhando', value: 'Aplica regeneração de resistência a si mesma e aplica o incentivo de dano a si mesmo. Requer recarga' },

            { name: 'Cabelo Carmesim', value: 'Causa dano moderado de metal a todos os inimigos e aplica sangramento a todos os inimigos. Requer recarga' },

            { name: 'Esquerda Ágil', value: 'Causa baixo dano especial a um inimigo e Dá 1 turno extra para si mesmo. Requer recarga' },

            { name: 'Flash Carmesim', value: 'Causa baixo dano especial a um inimigo, aplica sangramento a um inimigo e dá 1 turno extra para si mesmo. Requer recarga' },

            { name: 'Muscular Right', value: 'Causa dano imenso de metal a um inimigo e aplica tontura a um inimigo. Requer recarga' },

            { name: 'Furacão vermelho (especial)', value: 'Desativa a característica em todos os inimigos, causa dano imenso de Metal a todos os inimigos e aplica sangramento a todos os inimigos' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/2/28/Butcherang_2.png/revision/latest?cb=20210914150954')
        .setTimestamp()
        .setFooter('Passe grátis');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
