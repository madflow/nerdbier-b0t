const Telegraf = require('telegraf');

const app = new Telegraf(process.env.BOT_TOKEN);

const nerdTalk = [
    'Ich erwarte alle in der Bahn um 18.01!',
    'Heute Schinaman?',
    'Du ist gleich Fleisch.',
    'Immer doch besser als nichts zu tun.',
    '🍺'
];

function randomArrayItem (items) {
    return items[Math.floor(Math.random()*items.length)];
}

app.command('start', (ctx) => {
  console.log('start', ctx.from);
  ctx.reply('Mkay - ' + ctx.from.first_name + ' '  + ctx.from.last_name);
});

app.hears('#ebv', (ctx) => {
    ctx.reply('🍺');
});

app.hears(/nerdbier/ig, (ctx) => {
    ctx.reply('Wann?');
});

app.hears(/nb/ig, (ctx) => {
    ctx.reply(randomArrayItem(nerdTalk));
});

app.hears('Du...', (ctx) => {
    ctx.replyWithHTML(ctx.from.first_name + ' <strong>Du...</strong>');
});

app.hears('Debug', (ctx) => {

    ctx.reply(JSON.stringify(ctx.message));

});

app.on('message', (ctx) => {
    if(ctx.message.document) {
        ctx.reply('/fake');
    }
});

app.startPolling();