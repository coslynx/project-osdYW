const filterWords = (message, wordList) => {
    const words = message.content.toLowerCase().split(" ");
    const filteredWords = words.filter(word => wordList.includes(word));
  
    if (filteredWords.length > 0) {
        message.delete();
        message.reply('Please refrain from using inappropriate language.');
    }
};
  
module.exports = {
    filterWords
};