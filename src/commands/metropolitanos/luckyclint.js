
//importa a classe Command
const Command = require('../../structures/Command')

const {MessageEmbed}  = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'zluckyclint',
            description: 'Infomações sobre Lucky Clint'
        })
    }

   
}