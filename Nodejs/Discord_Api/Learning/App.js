const discord = require('discord.js');
const auth = require('./auth.json');

const bot = new discord.Client();
bot.login(auth.token);

bot.on('ready', () => {
    console.log(`Bot started and connected to (${bot.user.tag})`);
    channel = bot.channels.cache.get('707965424368615494');
    channel.send('I am being started!');
});

bot.on('message', msg => {
    msg.content.toLowerCase() == 'ping' ? msg.reply('pong') : null;
    msg.content.toLowerCase() == 'papier' ? msg.reply('hier') : null;
    msg.content.toLowerCase() == 'marco' ? msg.reply('polo') : null;
    msg.content.toLowerCase().match(/fuck|piss|shit/) != null ? msg.reply('Hela dat zeggen we hier niet!') : null;
});
