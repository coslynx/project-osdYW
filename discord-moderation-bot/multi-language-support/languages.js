const languages = {
  english: {
    welcomeMessage: 'Welcome to the server!',
    goodbyeMessage: 'Goodbye, see you next time!',
    moderation: {
      warningMessage: 'You have received a warning for violating the rules.',
      kickMessage: 'You have been kicked for repeated violations.',
      banMessage: 'You have been banned for breaking the rules.',
    },
    automatedResponses: {
      greeting: 'Hello! How can I assist you today?',
      help: 'Please provide more details so I can better assist you.',
      thankYou: 'Thank you for using our services!',
    },
  },
  spanish: {
    welcomeMessage: '¡Bienvenido al servidor!',
    goodbyeMessage: '¡Adiós, nos vemos la próxima vez!',
    moderation: {
      warningMessage: 'Has recibido una advertencia por violar las reglas.',
      kickMessage: 'Has sido expulsado por violaciones repetidas.',
      banMessage: 'Has sido baneado por romper las reglas.',
    },
    automatedResponses: {
      greeting: '¡Hola! ¿En qué puedo ayudarte hoy?',
      help: 'Por favor, proporciona más detalles para poder ayudarte mejor.',
      thankYou: '¡Gracias por usar nuestros servicios!',
    },
  },
};

module.exports = languages;