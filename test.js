var wWords = [
    'warum', 'wo', 'wann', 'wie', 'wieso', 'weshalb', 'why', 'where', 'when', 'wheshalb'
];
var wrds = wWords.join('|');
var regex = RegExp('^(' + wrds + ').*\\?+$', 'ig');

console.log('warum'.match(regex));