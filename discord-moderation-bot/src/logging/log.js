const fs = require('fs');

const log = (action, user, timestamp) => {
    const logEntry = `${timestamp} - ${user} - ${action}\n`;

    fs.appendFile('log.txt', logEntry, (err) => {
        if (err) {
            console.error('Error writing to log file');
        }
    });
};

module.exports = log;