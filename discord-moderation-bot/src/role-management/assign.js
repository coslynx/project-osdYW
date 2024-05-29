const Discord = require('discord.js');

module.exports = {
  name: 'assign',
  description: 'Assign a role to a user',
  execute(message, args) {
    if (!message.member.hasPermission('MANAGE_ROLES')) {
      return message.reply('You do not have permission to use this command.');
    }

    const targetUser = message.mentions.users.first();
    if (!targetUser) {
      return message.reply('Please mention a user to assign a role to.');
    }

    const roleName = args.slice(1).join(' ');
    const role = message.guild.roles.cache.find(role => role.name === roleName);
    if (!role) {
      return message.reply('The specified role does not exist.');
    }

    const targetMember = message.guild.members.cache.get(targetUser.id);
    if (targetMember.roles.cache.has(role.id)) {
      return message.reply('The user already has that role.');
    }

    try {
      targetMember.roles.add(role);
      message.reply(`Successfully assigned the role ${role.name} to ${targetUser.username}.`);
    } catch (error) {
      console.error(error);
      message.reply('An error occurred while assigning the role.');
    }
  },
};