const Discord = require('discord.js');

module.exports = {
  name: 'spam',
  description: 'Automated moderation feature to handle spam messages',

  execute(message) {
    // Set the spam threshold limit
    const spamThreshold = 3;
    let spamCount = 0;
    let lastMessage = '';

    // Check for spam messages
    if (message.content === lastMessage) {
      spamCount++;
    } else {
      spamCount = 1;
    }

    // If spam threshold is reached, take action
    if (spamCount >= spamThreshold) {
      // Delete the spam message
      message.delete()
        .then(msg => console.log(`Deleted spam message from ${msg.author.username}`))
        .catch(console.error);

      // Inform the user
      message.author.send('Please refrain from spamming in the server.');

      // Reset spam count and update last message
      spamCount = 0;
      lastMessage = '';
    } else {
      lastMessage = message.content;
    }
  }
};