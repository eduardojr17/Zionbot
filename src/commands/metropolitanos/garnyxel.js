
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zgarnyxel', // nome do comando slash
            description: 'Infomações sobre Garnyxel', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('Garnyxel')
        .setDescription('*Garnyxel costumava ser o anjo da guarda de uma tribo do norte. Quando ele começou, ele era um pequeno querubim fazendo o seu melhor para cuidar dos guerreiros sob sua proteção. No entanto, muito em breve, ele se tornou amigo deles e, depois de se envolver em muitas de suas festas e banquetes, ele perdeu seu status de anjo.Mas ele nunca deixou a tribo! Agora ele é apenas Garnyxel, o guardião da tribo. Ele ainda protege e cura os guerreiros, mas não como um anjo mais.* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Celestial \n R1: Reforçado\n R3:Provocação(ED)', inline: true},
            { name: 'Relíquias', value: 'Armadura \n Escudo', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 24048 \n Vida: 332888 \n Velocidade: 12256', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},
            { name: 'Grande Querubim', value: 'Causa dano moderado do Trovão a um inimigo. Aplica dobro de cura a si mesmo' },

            { name: 'Tatuagens Sagradas', value: 'Causa dano baixo de Trovão a todos os inimigos. Aplica Tontura a todos os inimigos.' },

            { name: 'Energia Divina', value: 'Cura todos os aliados em 30%. Aplica regeneração de vida a todos os aliados. Requer recarga.' },

            { name: 'Pança Agraciada', value: 'Dobra sua vida máxima e aplica Evasão a si mesmo. Requer recarga.' },

            { name: 'Ressoar de Luta', value: 'Causa dano  pesado de trovão a um inimigo. Aplica Choque e tontura a um inimigo. Requer recarga.' },

            { name: 'Estrondo da Guerra', value: 'Causa dano moderado do Trovão a todos os inimigos. Aplica choque a todos os inimigos. Requer recarga.' },

            { name: 'Pança Inquebrável', value: 'Aplica dobro de cura  cura e evasão a si mesmo. Requer recarga.' },

            { name: 'Muro de Carne', value: 'Aplica-se Megaprovocação a si mesmo. Cura a si mesmo em 30%. Requer recarga.' },

            { name: 'Barriga Superenergizada (Especial)', value: 'Causa  dano muito pesado de Trovão a todos os inimigos. Remove efeitos de positivos de todos os inimigos. Aplica Choque e Mega atordoamentoa todos os inimigos. ' },

        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/5/5a/Garnyxel_2.png/revision/latest?cb=20210929093348')
        .setTimestamp()
        .setFooter('Procriação');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
