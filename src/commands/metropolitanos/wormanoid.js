
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zwormanoid', // nome do comando slash
            description: 'Infomações sobre Wormanoid', // Descrição do comando slash
        })
    }

    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Wormanoid')
        .setDescription('*Depois de ser mordido por um inseto alienígena, Wormanoid, ninguém quis dar a ele uma chance, ninguém exceto Malairion, que estava fascinado pela mutação que a mordida havia causado em seu corpo. Ele está treinando no Esconderijo dos Supervilões por um enquanto agora, e foi escolhido por seu chefe para se tornar um de seus primeiros agentes movidos a nebulosa!* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Imune a atordoamento \n R1:Reforçado (20%) \n R3: Efeito Dispersado - Aplica Vazamento de Resistência a todos os inimigos no início da batalha', inline: true},
            { name: 'Relíquias', value: 'Bandeira \n Máscara', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 22.928 \n Vida: 312.590\n Velocidade: 12.976', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Chicote de carne', value: 'Causa dano moderado de Terra a um inimigo. Aplica vazamento de resistência  a um inimigo.' },

            { name: 'Olhos do Vazio', value: 'Causa dano baixo de escuridão a todos os inimigos.' },

            { name: 'Olhar Drenante', value: 'Remove 25% de resistência de todos os inimigos. Requer recarga' },

            { name: 'Mordida Afiada!', value: 'Causa dano moderado de Terra a um inimigo. Remove 50% de resistência de um inimigo. Requer recarga' },

            { name: 'Sorriso Maníaco!', value: 'Causa dano moderado de escuridão a todos os inimigos. Aplica pesadelos a todos os inimigos. Requer recarga' },

            { name: 'Parando o Chomp', value: 'Causa dano moderado de Terra a um inimigo. Aplica atordoamento a um inimigo. Aplica atordoamento a um inimigo. Requer recarga' },

            { name: 'Olhos paralisados', value: 'Causa dano baixo de Terra a todos os inimigos. Aplica atordoamento a todos os inimigos. Aplica Vazamento de resistência a todos os inimigos. Requer recarga.' },

            { name: 'Sobrecarga de dentes', value: 'Causa dano pesado de Terra a um inimigo. Aplica Mega Atordoamento a um inimigo. Aplica pesadelos a um inimigo. Requer recarga.' },

            { name: 'Três olhos Ultrajantes (Especial)', value: 'Remove os efeitos positivos de todos os inimigos. Causa dano muito pesado de terra a todos os inimigos. Aplica imunidade ao controle a todos os aliados. Remove 50% de resistência de todos os inimigos.' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/f/fe/Wormanoid_2.png/revision/latest/scale-to-width-down/250?cb=20211013122853')
        .setTimestamp()
        .setFooter('Maratona');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
