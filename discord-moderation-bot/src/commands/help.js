const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'List all available commands',
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Available Commands')
            .addFields(
                { name: '!help', value: 'List all available commands' },
                { name: '!report <user> <reason>', value: 'Report a user for misconduct' },
                { name: '!assign <user> <role>', value: 'Assign a role to a user' },
                { name: '!remove <user> <role>', value: 'Remove a role from a user' },
                { name: '!modify <user> <oldRole> <newRole>', value: 'Modify a user\'s role' },
                { name: '!log <action>', value: 'Log a moderation action' },
                { name: '!announce <message>', value: 'Send an announcement' },
                { name: '!reminder <message> <time>', value: 'Set a reminder' },
                { name: '!integrate <service>', value: 'Integrate with a third-party service' }
            )
            .setTimestamp();

        message.channel.send(embed);
    }
};