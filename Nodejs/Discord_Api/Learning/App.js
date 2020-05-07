const discord = require('discord.js');
const auth = require('./auth.json');

const { google } = require('googleapis');
const calendar = google.calendar({
    version: 'v3',
    auth: auth.google,
});

// calendar.events.insert(
//     {
//         auth: auth.google,
//         calendarId: 'auoo0fq4adr0hkeifqg4j4rjp0@group.calendar.google.com',
//         resource: {
//             summary: 'test',
//             description: 'test description',
//             start: {
//                 dateTime: '2020-05-7T00:00:00',
//                 timeZone: 'GMT+2',
//             },
//             end: {
//                 dateTime: '2020-05-7T00:01:00',
//                 timeZone: 'GMT+2',
//             },
//         },
//     },
//     (err, res) => {
//         console.error(err);
//     }
// );

calendar.events.quickAdd({ auth: auth.google, calendarId: 'auoo0fq4adr0hkeifqg4j4rjp0@group.calendar.google.com', text: 'test' }, res => {
    console.log(res);
});

const bot = new discord.Client();
bot.login(auth.discord);

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
