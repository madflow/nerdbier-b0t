const Telegraf = require('telegraf');
const leet = require('leet');
const cool = require('cool-ascii-faces');
const pokemon = require('pokemon');
const cows = require('cows');
var uniqueRandomArray = require('unique-random-array');

const app = new Telegraf(process.env.BOT_TOKEN);

const vMap = {
    bv: '🍺',
    wv: '🍷',
    cv: '🍹'
};

const nerdTalk = [
    'erwartet _alle_ in der Bahn um 18.11.',
    'Heute Schinaman? 🍱',
    'Du isst gleich Fleisch.',
    'PR plz',
    'Immer noch besser als nichts zu tun.',
    '🍺',
    '¯\(°_o)/¯'
];

app.command('start', (ctx) => {
  console.log('start', ctx.from);
  ctx.reply('Mkay - ' + ctx.from.first_name + ' '  + ctx.from.last_name);
});

app.hears('#ebv', (ctx) => {
    ctx.reply('🍺');
});

app.hears('#zbv', (ctx) => {
    ctx.reply('🍺🍺');
});

app.hears('#dbv', (ctx) => {
    ctx.reply('🍺🍺🍺');
});

app.hears('#vbv', (ctx) => {
    ctx.reply('🍺🍺🍺🍺');
});

app.hears('#ewv', (ctx) => {
    ctx.reply('🍷');
});

app.hears('#ecv', (ctx) => {
    ctx.reply(vMap['cv']);
});

app.hears(/^#(\d{1,7})(bv|wv|cv)$/i, (ctx) => {
    let count = ctx.match[1];
    let v = ctx.match[2];
    let char = vMap[v] ? vMap[v] : '☕'; 
    let replyWith = '';

    if(count <= 0) {
        replyWith = (char + ' segmentation fault' + char);        
    } else {
        for(i=0; i < count; i++) {
            replyWith += char;
        }
    }
    ctx.replyWithHTML(replyWith);
});

app.hears(/Mafiatorte/i, (ctx) => {
    ctx.reply('🍕');
});

app.hears(/nerdbier/i, (ctx) => {
    ctx.reply('Nerdbier! Wann?');
});

app.hears(/nb/i, (ctx) => {
    let item = uniqueRandomArray(nerdTalk);
    ctx.reply(item());  
});

app.hears(/moo/i, (ctx) => {
    let item = uniqueRandomArray(cows());
    ctx.reply(item());
});


app.hears('Du...', (ctx) => {
    ctx.replyWithHTML(ctx.from.first_name + ' <strong>Du...</strong>');
});

app.hears('Wo?', (ctx) => {
    var url = 'https://nerdbier.herokuapp.com/';
    ctx.replyWithHTML(ctx.from.first_name + ' <strong>Hier: </strong> <a href="'+ url +'">' + url + '</a>');
});

app.hears(/schalke/, (ctx) => {
    ctx.replyWithHTML('<strong>NULL VIER</strong>');
});

app.hears(/fc/i, (ctx) => {
    ctx.replyWithHTML('<strong>MEEEEHHHH</strong>');
});

app.hears(/EffZeh/i, (ctx) => {
    ctx.replyWithHTML('<strong>MEEEEHHHH</strong>');
});

app.hears(/bayer/i, (ctx) => {
    ctx.replyWithHTML('<strong>NULL VIER</strong>');
});

app.hears('Debug', (ctx) => {
    ctx.reply(JSON.stringify(ctx.message));
});

app.hears(/hier schreit nur einer/i, (ctx) => {
    ctx.reply('Uwe und sonst keiner!');
});

app.hears(/leet me (.*)/i, (ctx) => {
    let msg = ctx.match[1];
    if(msg) {
        ctx.reply(leet.convert(msg));
    }
});

app.hears(/cool/i, (ctx) => {
    ctx.reply(cool());
});

app.hears('+s', (ctx) => {
    ctx.replyWithHTML(ctx.from.first_name + ' <strong>¯\(°_o)/¯</strong>');
});

app.hears('+t', (ctx) => {
    ctx.replyWithHTML(ctx.from.first_name + ' <strong>PR plz</strong>');
});

app.hears('+p', (ctx) => {
    ctx.replyWithHTML('Ein wildes <strong>' +  pokemon.random('de')  +  '</strong> erscheint.');
});


app.on('message', (ctx) => {
    if(ctx.message.document) {
        ctx.reply('/fake');
    }
});

app.startPolling();
