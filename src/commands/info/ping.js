
//importa a classe Command
const Command = require('../../structures/Command')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zping',
            description: 'Ping do bot'
        })
    }
    //função do que acontece quando o evento é chamado
    run = (interaction) => {
        interaction.reply({
            content: `O ping do bot é \`${this.client.ws.ping}\`ms.`,
            ephemeral: false
        })
    }
}