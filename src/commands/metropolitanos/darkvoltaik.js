
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zdarkvoltaik', // nome do comando slash
            description: 'Infomações sobre Dark Voltaik', // Descrição do comando slash
        })
    }

    //função do que acontece quando o evento é chamado
    run = (interaction) => {

       const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setAuthor('Metropolitano', 'https://cdn.discordapp.com/attachments/869282294639231008/869282336221565010/badge_metropolitan-small_v1.png')
        
        .setTitle('DARK VOLTAIK')
        .setDescription('*VoltaiK teve um par de anos muito feliz e tranquilo. Tudo estava ótimo com sua parceira Madam Fusion e ele conseguia ver seus outros amigos super-heróis de vez em quando, embora eles não trabalhassem juntos tanto quanto antes. Ele não estava trabalhando muito, mas apenas porque havia conseguido manter os vilões sob controle. No entanto, tudo mudou para ele depois que ele descobriu que uma de suas melhores amigas, Cyan Nathura, havia se transformado em uma versão nova e mais forte dela mesma, Emerald Nathura. A transformação dela abalou uma parte dele que ele havia trabalhado muito duro para controlar no passado. Ele sentiu uma mistura de ciúme e ambição. Ele não conseguia deixar de pensar em como os cidadãos não o idolatravam como costumavam fazer. De repente, sua vida tranquila ficou muito tranquila para ele e a felicidade se foi. Ele descobriu através da Madam Fusion que Cyan não era a única transformação acontecendo ao seu redor. Alguns de seus piores inimigos também se tornaram mais fortes. Nesse ponto, ele começou a enlouquecer, e Madam Fusion percebeu, então ela tentou ajudá-lo a se transformar também para que ele pudesse canalizar toda a sua ambição de voltar como o super-herói favorito de todos de uma forma saudável. Mas, por mais que VoltaiK tentasse, ele não parecia capaz de se transformar. Ele colocou as mãos em um bom grupo de Nebulosa com bastante facilidade, mas, inexplicavelmente, não funcionou com ele. Portanto, ele começou a investigar maneiras alternativas de obter seu aumento de poder, mas ao mergulhar em técnicas mais sombrias, ele decidiu deixar Madam Fusion de fora de suas tentativas. No final, ele encontrou algo que funcionou para ele - Lutum. Ele foi avisado várias vezes que Lutum afetaria mais do que sua força, que poderia corromper sua personalidade, mas àquela altura ele estava faminto demais para ouvir a razão. Foi assim que VoltaiK ficou escuro* \n ')
        
        //.addField('\u200b', '\u200b')
         
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Caracteríticas', value: 'R0: Reforçado (20%) \n R1:Imunidade à Possessão \n R3: ED: Evasão de Área', inline: true},
            { name: 'Relíquias', value: 'Bandeira \n Bastão', inline: true},
            { name: 'Estatísticas(R5)', value: 'Poder: 24.624 \n Vida: 316.648\n Velocidade: 12.928', inline: true}
        )

        .addField('\u200b', '\u200b')
        .addFields(
            { name: 'ATAQUES', value: '\u200B'},

            { name: 'Herói devolvido', value: 'Causa dano moderado do Trovão a um inimigo.' },

            { name: 'Sede de poder', value: 'Causa dano de escuridão baixo a todos os inimigos.' },

            { name: '20.000 Volts', value: 'Causa dano moderado de Trovão a um inimigo. Dá 1 turno extra para si mesmo. Requer recarga' },

            { name: 'Energia Corrompida', value: 'Dá 50% de resistência a si mesmo. Remove 50% da Vida Total de si mesmo. Dá 1 turno extra para si mesmo. Requer recarga' },

            { name: 'Assalto na escuridão', value: 'Causa dano de escuridão baixo a um inimigo. Dá 1 turno extra para si mesmo.' },

            { name: 'Névoa de ressentimento', value: 'Aplica a Evasão de área a si mesmo. Aplica Fraqueza de escuridão a todos os inimigos. Requer recarga' },

            { name: '50.000 Volts', value: 'Causa  dano pesado de Trovão a um inimigo. Dá 1 turno extra para si mesmo. Requer recarga' },

            { name: 'Choque Negro', value: 'Causa dano de escuridão moderado a um inimigo. Causa dano moderado de escuridão a todos os inimigos. Dá 1 turno extra para si mesmo. Requer recarga' },

            { name: 'Blackout (Especial)', value: 'Remove os efeitos positivos de todos os inimigos. Causa  dano pesado de escuridão a todos os inimigos. Aplica Corrompido a todos os inimigos.' },
        )

        .setImage('https://static.wikia.nocookie.net/monsterlegends/images/b/b5/Dark_VoltaiK_2.png/revision/latest/scale-to-width-down/250?cb=20211014083315')
        .setTimestamp()
        .setFooter('Passe Pago');
        

        interaction.reply({ embeds: [exampleEmbed] });

    }
}
