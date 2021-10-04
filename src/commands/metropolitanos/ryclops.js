//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zryclops', // nome do comando slash
            description: 'Informações sobre Ryclops', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        //Nome do Monstro
        .setTitle('Ryclops')
        //História do Monstro
        .setDescription('*Ryclops era um guia nas regiões montanhosas. Sua equipe única refletia o luar e iluminava o caminho para os viajantes. Mas um dia, enquanto ajudava um viajante a atravessar a cordilheira, ele foi atingido por um terremoto. Ele foi capaz de salvar o viajante, mas não a si mesmo. Ele estava preso dentro do coração de uma montanha até agora! Os anões mineiros o encontraram e o desenterraram!* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            //Caracteriticas
            { name: 'Caracteríticas', value: 'R0:Imune ao Controle \n R1:Resistente (20%) \n R3:Imune a Tortura(ED)', inline: true},
            //Relíquias
            { name: 'Relíquias', value: 'Bastão \n Essência' , inline: true},
            //Estatisticas do monstro no nível 5
            { name: 'Estatíticas(R5)', value: 'Poder:22.960 \n Vida: 324.768 \n Velocidade:13.072', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Espirito da Montanha', value: 'Causa dano baixo de Terra a um inimigo.Remove os efeitos positivos de um inimigo.' },

            { name: 'Pastor das pedras', value: 'Aplica imunidade a cegueira a um aliado.' },

            { name: 'Pedra Sobre pedra', value: 'Aplica 30% de Escudo de Vida a um aliado.' },

            { name: 'Potência Mineral', value: 'Aplica imunidade a torturas a um aliado.' },

            { name: 'Poeira de Basalto', value: 'Remove todos os efeitos de controle de todos os aliados. Aplica 50% de Escudo de Vida a todos os aliados. Requer recarga.' },

            { name: 'Cristal reluzente', value: 'Aplica Imunidade a Torturas a todos os aliados. Aplica imunidade a cegueira a todos os aliados. Requer recarga.' },

            { name: 'Ataque de Ricky!', value: 'Remove efeitos positivos de um inimigo. Causa dano baixo de Terra a todos os inimigos. Remove efeitos positivos de todos os inimigos. Requer recarga.' },

            { name: 'Ricky, ataca!', value: 'Causa dano pesado de Terra a um inimigo. Remove os efeitos positivos de um inimigo. Aplica um escudo de vida de 30% a todos os aliados. Requer recarga.' },

            { name: 'Rolam as pedras (Especial)', value: 'Remove os efeitos positivos de todos os inimigos. Remove efeitos positivos de todos os inimigos. Causa dano muito pesado de terra a todos os inimigos. Aplica Mega Atordoamento a todos os inimigos.' },

        )
        //Imagem do monstro
        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/f/f3/Ryclops_2.png/revision/latest/scale-to-width-down/250?cb=20210803095055')
        .setTimestamp()
        //Onde o mosntro veio
        .setFooter('Caça a Recompensa');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}