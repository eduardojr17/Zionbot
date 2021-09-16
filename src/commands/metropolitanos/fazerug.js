//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zfazerug', // nome do comando slash
            description: 'Infomações sobre Faze Rug', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Geração', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Faze Rug')
        .setDescription('*FaZe Rug estava dirigindo seu carro esporte por Monstown quando ele pulou o semáforo. Infelizmente para ele, Malfeitor estava tentando atravessar a estrada e ele não aceitou bem o desrespeito de FaZe Rug. O vilão o amaldiçoou e o fundiu com seu carro , então ele se tornou um robô enorme! Ele pode não ser capaz de dirigir mais, mas, como um robô, ele é incomparável!* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            //Caracteriticas
            { name: 'Caracteríticas', value: 'R0:Artefato \n R1:Harmonizado \n R3:Energizado', inline: true},
            //Relíquias
            { name: 'Relíquias', value: 'Armadura \n Armadura' , inline: true},
            //Estatisticas do monstro no nível 5
            { name: 'Estatíticas', value: 'Poder:23.584 \n Vida: 331.534 \n Velocidade:12.224', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Clan FaZe', value: 'Causa dano moderado de Fogo a um inimigo. Cura a si mesmo em 10%.' },

            { name: 'Carro personalizado', value: 'Causa baixo dano de fogo a todos os inimigos.' },

            { name: 'Botão Bom Mistério', value: 'Cura-se em 50%. Requer recarga' },

            { name: 'Vai dá errado', value: 'Causa dano moderado de Fogo a um inimigo. Aplica Ignite a um inimigo. Aplica Fraqueza de Fogo a um inimigo. Requer recarga' },

            { name: 'Chamas virais', value: 'Causa dano moderado de Fogo a todos os inimigos. Aplica Incendiar a todos os inimigos. Requer recarga' },

            { name: 'Doando para monstros', value: 'Cura todos os aliados em 20%. Requer recarga' },

            { name: 'Desafio de Lava', value: 'Causa dano moderado de Fogo a todos os inimigos. Aplica Fraqueza de Fogo a todos os inimigos. Requer recarga' },

            { name: 'Peça Flamejante', value: 'Causa dano de fogo imenso a um inimigo. Aplica Ignição a um inimigo. Requer recarga' },

            { name: 'INACREDITÁVEL (Especial)', value: 'Causa dano de Fogo imenso a todos os inimigos. Aplica tontura a todos os inimigos. Aplica Mega Atordoamento a todos os inimigos.' },

        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/3/30/FaZe_Rug_2.png/revision/latest/scale-to-width-down/250?cb=20210915072354')
        .setTimestamp()
        .setFooter('Procriação/Fraternidade');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}