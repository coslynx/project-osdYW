const { Client, Intents } = require('discord.js');
const { scheduleJob } = require('node-schedule');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Announcements bot is ready!');
});

client.login('your-bot-token');

const channelId = 'your-channel-id';
const announcementMessage = 'Hello, this is a scheduled announcement!';

const job = scheduleJob('0 0 1 * *', () => {
    const channel = client.channels.cache.get(channelId);
    if (channel) {
        channel.send(announcementMessage);
    } else {
        console.error('Channel not found!');
    }
});