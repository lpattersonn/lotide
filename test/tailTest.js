const tail = require('../tail')
const assertEqual = require('../assertEqual')

console.log(tail(["Yo Yo", "Lighthouse", "Labs"]));
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [ 'Lighthouse', 'Labs' ])