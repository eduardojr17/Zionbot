
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'ztuska', // nome do comando slash
            description: 'Infomações sobre Tuska', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Tuska')
        .setDescription('*Tuska não pertence a nenhum bando de lobos. Ele prefere ficar sozinho. Ele teve um parceiro de caça chamado Thentsar uma vez, mas ele morreu em uma batalha contra um orc, deixando Tuska devastada. Ele queimou o corpo de seu amigo e colocou as cinzas dentro de uma cápsula, que ele anexou à sua espada. Assim, Thentsar sempre será o parceiro de caça de Tuska.* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Reforçado(20%) \n R1: Imunidade a pesadelos\n R3: Incentivo de dano (25%-ED)', inline: true},
            { name: 'Relíquias', value: 'Espada \n Máscara', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 24.672 \n Vida: 318.002\n Velocidade: 12.768', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},
            { name: 'Caçador Insaciável', value: 'Causa dano moderado de Terra a um inimigo. ' },

            { name: 'Não há fuga', value: 'Causa  dano baixo de Terra a todos os inimigos. ' },

            { name: 'Predador noturno', value: 'Causa dano moderado da Terra a um inimigo. Aplica incentivo de dano de 25% a si mesmo. Requer recarga.' },

            { name: 'Alimente o rebanho', value: 'Causa dano moderado de Terra a todos os inimigos. Aplica Sangramento a todos os inimigos. Requer recarga.' },

            { name: 'Siga a Trilha', value: 'Aplica Sangramento a todos os inimigos. Dá 1 turno extra para si mesmo. Requer  recarga.' },

            { name: 'Uivo para a lua', value: ' Aplica incentivo de dano de 25% e dá 1 turno extra a si mesmo. Requer  recarga.'},

            { name: 'Caçador caçado', value: 'Causa dano pesado de Terra a um inimigo. Aplica Sangramento a um inimigo. Requer  recarga.' },

            { name: 'Noite da caça', value: 'AplicaÓdio a sangramento e Evasão a si mesmo. Requer  recarga.' },

            { name: 'Filhotes Estão Com Fome (Especial)', value: 'Aplica Ódio a sangramento a si mesmo e Sangramento a todos os inimigos. Causa dano moderado de Terra a todos os inimigos.' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/9/9e/Tuska_2.png/revision/latest?cb=20211001110812')
        .setTimestamp()
        .setFooter('Caça a Recompensa (Grátis)');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
