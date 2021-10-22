
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zvilina', // nome do comando slash
            description: 'Infomações sobre Vilina', // Descrição do comando slash
        })
    }

    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Q-3R1ON')
        .setDescription('*Vilina era a melhor amiga de Fampira, mas ela desapareceu quando foi para Monstown em uma noite de Halloween. Ninguém a viu depois, até hoje. No entanto, ela mudou um pouco. Não há dúvida de que ela é de Monstelvania, mas seus poderes e objetivos de vida são completamente diferentes. Ela é a supervilã de Malairion agora!* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Imune a atordoar \n R1:Artefato \n R3: Provocação', inline: true},
            { name: 'Relíquias', value: '- \n -', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: - \n Vida: -\n Velocidade: -', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Demônios Apavorantes Asustadores', value: 'Aplica a Possessão a um inimigo.' },

            { name: 'Calafrio na espinha', value: 'Causa dano de escuridão moderado a um inimigo. Aplica cegueira a um inimigo.' },

            { name: 'Sabe, você gosta de mim', value: 'Causa dano de escuridão moderado a um inimigo. Aplica Possessão a um inimigo. Requer recarga' },

            { name: 'Quer ser meu fantoche', value: 'Ressuscita um inimigo com 1% de Vida. Aplica Possessão a um inimigo. Requer recarga' },
            { name: 'Quer sair?', value: 'Ressuscita um aliado com 50% de vida. Aplica regeneração de vida a um aliado. Requer recarga' },
            { name: 'Máscara assustadora', value: 'Causa dano de escuridão baixo a todos os inimigos. Aplica cegueira a todos os inimigos. Requer recarga' },
            { name: 'Vamos ser amigos?', value: 'Ressuscita um aliado com 1% de vida. Aplica dobro de dano  a um aliado. Requer recarga' },
            { name: 'Eu Sei o Que Você Gosta', value: 'Causa baixo dano de escuridão a todos os inimigos. Aplica Possessão a todos os inimigos. Requer recarga' },
            { name: 'Amor nas rochas (Especial)', value: 'Remove os efeitos positivos de todos os inimigos. Causa dano de escuridão moderado a todos os inimigos. Aplica morte por contagem regressiva de 3 voltas e atordoamento a todos os inimigos.' },

        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/c/c5/Q-3R1ON_2.png/revision/latest/scale-to-width-down/250?cb=20210824153013')
        .setTimestamp()
        .setFooter('Procriação');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
