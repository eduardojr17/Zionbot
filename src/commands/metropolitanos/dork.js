//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zdork', // nome do comando slash
            description: 'Infomações sobre Dork', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Dork')
        .setDescription('*Dork foi morto por membros de sua própria tribo quando descobriram que ele estava tramando contra seu líder. No entanto, após sua morte, sua alma foi lançada no universo e, ninguém sabe o que aconteceu lá, mas o fato é que ela viajou de volta ao seu corpo.Quando Dork ressuscitou, os orks entenderam que era seu destino governar*')        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Resistente e Anti fugitivo \n R1: Imune ao Controle\n R3:Proteção Antidano', inline: true},
            { name: 'Relíquias', value: 'Espada \n Armadura', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 24.704 \n Vida: 327.474 \n Velocidade: 12.464', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},
            { name: 'Primeiro Aviso ', value: 'Causa dano de escuridão moderado a um inimigo. Bloqueia para si 50% do dano recebido..' },

            { name: 'Acordar!', value: 'Causa dano de escuridão baixo a todos os inimigos.' },

            { name: 'Vá trabalhar agora!', value: 'Causa dano de escuridão moderado a todos os inimigos. Aplica Tontura a todos os inimigos. Requer recarga' },

            { name: 'Alma do Chefe de guerra', value: 'Bloqueia 50% do dano recebido e aplica o Espelho de dano  a si mesmo. Requer recarga.' },

            { name: 'Último Aviso', value: 'Causa dano de escuridão pesado a um inimigo. Aplica Espelho de dano a si mesmo. Requer recarga.' },

            { name: 'Sem dormir!', value: 'Causa dano de escuridão moderado a todos os inimigos. Aplica pesadelos a todos os inimigos. Requer recarga.' },

            { name: 'Dor de cabeça', value: 'Causa dano de escuridão pesado a um inimigo. Aplica Tontura e Pesadelos a um inimigo. Requer recarga.' },

            { name: 'Bata no Ork! ', value: 'Causa dano de escuridão imenso a um inimigo. Aplica Tontura a um inimigo. Requer recarga.' },

            { name: 'Orks Não Morrem! (Especial)', value: 'Causa dano de escuridão muito pesado a todos os inimigos. Remove todos os efeitos negativos e aplica proteção de efeitos positivos a si mesmo. Cura-se em 50%. .' },

        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/9/92/Dork_2.png/revision/latest/scale-to-width-down/250?cb=20211001110814')
        .setTimestamp()
        .setFooter('Caça Recompensa');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}