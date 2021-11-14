
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zizabeth', // nome do comando slash
            description: 'Infomações sobre Izabeth', // Descrição do comando slash
        })
    }

    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Condenado', 'https://cdn.discordapp.com/attachments/869282294639231008/908493303295655996/badge_doomsday_v1.png')
        
        .setTitle('Lord Inheritor')
        .setDescription('*The Inheritor estava co-governando o Submundo com Kaih the Sunmelter, mas não era o suficiente para ele. Para se tornar o único governante, ele quebrou o pacto de equilíbrio entre Demônios e Anjos: Ele roubou Ambrosia e se transformou em um Demônio com poder incomparável. Agora, ninguém se opõe a ele ... ou governa ao seu lado.* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Demônio \n R1: Super Demônio \n R3: Imune a Torturas \n R4: Regeneração de Vida \n R5: Ignição (ED)', inline: true},

            { name: 'Relíquias', value: 'Armadura \n Espada', inline: true},

            { name: 'Estatísticas(R5)', value: 'Poder: 25328 \n Vida: 345066\n Velocidade: 13072', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Sem mais Paz', value: 'Causa dano moderado de Fogo a um inimigo.' },

            { name: 'Somente Violência', value: 'Causa dano baixo de escuridão a todos os inimigos.' },

            { name: 'Garra do inferno', value: 'Causa dano moderado de escuridão a um inimigo. Aplica Fogo Infernal a um inimigo. Requer recarga' },

            { name: 'Arrebatamento de Fogo', value: 'Aplica possessão a um inimigo. Requer recarga' },

            { name: 'Marcha de fogo', value: 'Causa dano moderado de fogo a todos os inimigos. Aplica Combustão a todos os inimigos. Requer recarga' },

            { name: 'Selo de Salomão', value: 'Bloqueia 50% de dano e aplica regeneração de vida a si mesmo. Requer recarga' },

            { name: 'Marcha do Inferno', value: 'Dano moderado de fogo a todos os inimigos. Aplica Iginição a todos os inimigos. Requer recarga' },

            { name: 'Garras do SupraDemônio', value: 'Remove efeitos positivos de um inimigo. Causa dano imenso a um inimigo. Requer recarga' },

            { name: 'Condenação', value: 'Causa dano pesado de escuridão a todos os inimigos. Aplica Fogo Infernal a todos os inimigos.Requer recarga' },

            { name: 'Senhor do Dogma', value: 'Aplica escudo fotofóbico e Dobro de dano a si mesmo. Requer recarga' },

            { name: 'O Senhor das Garras', value: 'Causa dano imenso de fogo a um inimigo. Aplica Ignição e Combustão a um inimigo. Requer recarga' },

            { name: 'Mercador de Almas', value: 'causa dano moderador de escuridão a todos os inimigos. Aplica Possessão a todos os inimigos. Requer recarga' },

            { name: 'Prenúncio da desgraça(Especial)', value: 'Causa dano muito pesado de fogo a todos os inimigos. Aplica MegaPossessão, Fogo Infernal e Ignição a todos os inimigos.' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/d/d2/Lord_Inheritor_2.png/revision/latest/scale-to-width-down/250?cb=20211112095714')
        .setTimestamp()
        .setFooter('Passe Pago');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
