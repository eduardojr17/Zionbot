//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zaloedeath', // nome do comando slash
            description: 'Informações sobre Aloe Death', // Descrição do comando slash
        })
    }

 
    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        //Nome do Monstro
        .setTitle('Aloe Death')
        //História do Monstro
        .setDescription('*Aloe Death saiu da terra desvastada e entrou em Monstown como clandestino em um dos caminhões de Don Canine, escondido sob uma pilha de vigas de ferro. No minuto em que pôs os pés na cidade, ele começou a atormentar a todos, então ele se tornou um problema para o prefeito Don Canine, que teve que enviar seus melhores capangas atrás dele antes que surgissem perguntas sobre este visitante indesejado.* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            //Caracteriticas
            { name: 'Caracteríticas', value: 'R0:Abominação \n R1:Imune a Venenno \n R3:Reflexo de dano(50%)', inline: true},
            //Relíquias
            { name: 'Relíquias', value: 'Espada \n Armadura' , inline: true},
            //Estatisticas do monstro no nível 5
            { name: 'Estatíticas(R5)', value: 'Poder:24.416 \n Vida: 324.768 \n Velocidade:12.336', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Bandido de estrada', value: 'Causa dano moderado de Natureza a um inimigo. Aplica cura reversa a um inimigo.' },

            { name: 'Cacto Nocivo', value: 'Aplica um espelho de dano de 50% a si mesmo.' },

            { name: 'Abraça-me', value: 'Aplica 50% reflexo de dano a si mesmo. Bloqueia 50% do dano recebido em si mesmo. Requer Recarga.' },

            { name: 'Tornado de metal', value: 'Causa dano de natureza baixo a todos os inimigos. Aplica Sangramento a todos os inimigos. Requer Recarga.' },

            { name: 'Fonte Oxidante', value: 'Causa dano moderado de Natureza a todos os inimigos. Aplica cura reversa a todos os inimigos. Requer Recarga.' },

            { name: 'Vitaminas Roubadas', value: 'Causa dano moderado de Natureza a todos os inimigos. Aplica cura reversa a todos os inimigos. Requer Recarga.' },

            { name: 'Sinta o Metal', value: 'Causa dano de Natureza muito pesado a um inimigo. Aplica Sangramento a um inimigo. Requer Recarga.' },

            { name: 'Nathura da Morte', value: 'Causa dano pesado de Natureza a um inimigo. Aplica cura reversa a um inimigo. Requer Recarga.' },

            { name: 'Zero Nutrientes (Especial)', value: 'Remove os efeitos positivo de todos os inimigos. Causa dano muito pesado de Natureza a todos os inimigos. Aplica veneno e nanovírus a todos os inimigos.' },

        )
        //Imagem do monstro
        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/b/b6/Aloe_Death_2.png/revision/latest/scale-to-width-down/250?cb=20210818073510')
        .setTimestamp()
        //Onde o mosntro veio
        .setFooter('Batalhas Multijogador(PvP)');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}