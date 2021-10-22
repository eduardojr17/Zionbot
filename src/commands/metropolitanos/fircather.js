//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'Zfirecatcher', // nome do comando slash
            description: 'Infomações sobre Fircather', // Descrição do comando slash
        })
    }

    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Firecatcher')
        .setDescription('* Malairion treinou pessoalmente essa supervilã em chamas anos atrás. Ele sabia que ela era especial desde o início, e seu talento para o crime provou ser excelente desde o primeiro dia de trabalho. O problema era que a Firecatcher gostava de fazer as coisas do jeito dela e isso não é aceitável quando você trabalha para um gênio do mal. Seu contrato foi rescindido por desobediência e ela foi banida do Esconderijo dos Supervilões. Malairion nunca se esqueceu do talento de sua ex-aluna, mas colocou o orgulho em primeiro lugar, até o dia em que percebeu que seu projeto estava em perigo. Agora ele percebeu que precisa de todo o talento que puder ter perto dele e a Firecatcher está de volta ao seu time!.* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Evasão de área \n R1:Reforçado \n R3:ED:Fraqueza a elemento aleatório', inline: true},
            { name: 'Relíquias', value: 'Bandeira \n Armadilha', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 22.880 \n Vida: 318.002\n Velocidade: 13.344', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Marca Flamejante', value: 'Aplica um Efeito de Tortura aleatório a um inimigo aplica um efeito  negativo aleatório a todos os inimigos. Requer recarga' },

            { name: 'Conhecimento Adquirido', value: 'Causa baixo dano de Fogo a todos os inimigos. Aplica fraqueza a luz a todos os inimigos. Requer recarga' },

            { name: Teste de sorte', value: 'Causa dano de luz moderado a um inimigo. Aplica fraqueza de luz a um inimigo. Remove todos os efeitos negativos de todos os aliados. Requer recarga' },

            { name: 'Marca Brilhante', value: 'Aplica um Efeito de Tortura aleatório a um inimigo. Aplica um efeito aleatório de tortura a um inimigo. Requer recarga' },

            { name: 'Pegue isso', value: 'Causa dano de luz baixo a um inimigo. Aplica um efeito aleatório  positivo a si mesmo.' },

            { name: 'O que vem por ai...', value: 'Causa dano moderado de Fogo a um inimigo. Remove efeitos positivos de todos os inimigos. Aplica Fraqueza de Fogo a todos os inimigos. Requer recarga"},

            { name: 'Pode Verificar', value: 'Causa baixo dano de Fogo a um inimigo. Aplica um efeito negativo aleatório a um inimigo.' },

            { name: 'Vem aí', value: 'Causa dano moderado de Fogo a todos os inimigos. Aplica uma Fraqueza Elemental aleatória a todos os inimigos. Aplica um efeito aleatório de tortura a todos os inimigos. Requer recarga' },

            { name: 'Eu fiquei bem! (Especial)', value: 'Remove os efeitos positivos de todos os inimigos. Desabilita  Caracteristica de todos os inimigos. Causa dano pesado de Fogo a todos os inimigos. Aplica imunidade à tortura a todos os aliados. 
' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/c/c5/Q-3R1ON_2.png/revision/latest/scale-to-width-down/250?cb=20210824153013')
        .setTimestamp()
        .setFooter('Labirinto');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}