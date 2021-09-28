//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zthebaronex', // nome do comando slash
            description: 'Infomações sobre The Baronex', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        //Nome do Monstro
        .setTitle('The Baronex')
        //História do Monstro
        .setDescription('*The Baronex sempre foi uma governante tirânica que abusava dos poucos recursos da terra Devastada. Agora, no entanto, ela cruzou a linha permitindo que Don Canine deixasse todo o lixo de Monstown em sua região. Ela fez isso por mais poder e um novo nome . Como The BaroneX, ela será capaz de continuar governando, apesar de seus vários opositores * \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            //Caracteriticas
            { name: 'Caracteríticas', value: 'R0:Reforçado(20%) \n R1:Super-harmonizado \n R3:Vazamento de resistência(ED)', inline: true},
            //Relíquias
            { name: 'Relíquias', value: 'Bastão \n Armadilha' , inline: true},
            //Estatisticas do monstro no nível 5
            { name: 'Estatíticas(R5)', value: 'Poder:23.296 \n Vida: 316.648 \n Velocidade:12.832', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Poeira Tóxica', value: 'Causa dano moderado de Metal a um inimigo. Aplica vazamento de resistência a um inimigo..' },

            { name: 'Eis o meu cajado', value: 'Remove 30% da resistência de um inimigo.' },

            { name: 'Tempestade de Poeira Tóxica', value: 'Causa dano baixo de Metal a todos os inimigos. Aplica Vazamento de resistência a todos os inimigos. Requer recarga.' },

            { name: 'Dispositivo destruido de Timerion', value: 'Causa dano moderado de Metal a um inimigo. Ativa todas as recargas em um inimigo. Requer recarga.' },

            { name: 'Tempestade mortal', value: 'Causa dano moderado de Metal a todos os inimigos. Remove 50% de resistência de todos os inimigos. Requer recarga.' },

            { name: 'Toque mortal', value: 'Causa dano moderado de Metal a um inimigo. Remove 100% da resistência de um inimigo. Requer recarga.' },

            { name: 'Dispositivo Sucateado de Timerion', value: 'Causa dano baixo de Metal a um inimigo. Ativa todas as recargas de inimigo. Dá 1 turno extra para si mesmo. Requer recarga.' },

            { name: 'Dispositivo completo do Timerion', value: 'Causa dano de metal baixo a todos os inimigos. Ativa todas as recargas de todos os inimigos. Requer recarga.' },

            { name: 'Viagem no tempo (especial) ', value: 'Causa dano moderado de Metal a todos os inimigos. Ativa todas as recargas em todos os inimigos. Restaura todas as recargas de todos os aliados. .' },

        )
        //Imagem do monstro
        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/0/07/The_BaroneX_2.png/revision/latest/scale-to-width-down/250?cb=20210818083118')
        .setTimestamp()
        //Onde o mosntro veio
        .setFooter('Passe Gratuito');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}