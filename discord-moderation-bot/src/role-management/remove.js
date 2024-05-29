const removeRole = (message, args) => {
    const roleName = args.join(" ");
    const role = message.guild.roles.cache.find(role => role.name === roleName);

    if (!role) {
        return message.reply(`The role "${roleName}" does not exist.`);
    }

    if (!message.member.roles.cache.has(role.id)) {
        return message.reply("You do not have this role.");
    }

    message.member.roles.remove(role)
        .then(() => {
            message.reply(`Successfully removed the role "${roleName}".`);
        })
        .catch(error => {
            console.error("Error removing role:", error);
            message.reply("An error occurred while removing the role.");
        });
};

module.exports = {
    name: 'remove',
    description: 'Remove a specified role from the user.',
    execute(message, args) {
        if (args.length === 0) {
            return message.reply("Please provide a role to remove.");
        }
        
        removeRole(message, args);
    }
};