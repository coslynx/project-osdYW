const Discord = require('discord.js');

module.exports = {
  name: 'report',
  description: 'Report a user for violating server rules',
  execute(message, args) {
    if (!message.mentions.users.size) {
      return message.reply('You need to tag a user in order to report them!');
    }

    const taggedUser = message.mentions.users.first();
    message.channel.send(`You reported ${taggedUser.username} for violating server rules.`);
  },
};