const schedule = require('node-schedule');

function setReminder(message, date) {
    schedule.scheduleJob(date, function(){
        message.channel.send(`Reminder: ${message.content}`);
    });
}

module.exports = {
    setReminder
};