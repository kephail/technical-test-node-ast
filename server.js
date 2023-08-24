const { generate } = require('astring');
const { parseScript } = require('meriyah');
const fs = require('fs');
const fileEncoding = 'utf8';

console.log('Hello from Ably!');
console.log(`${generate ? '✔' : '✖'} astring.generate`);
console.log(`${parseScript ? '✔' : '✖'} meriyah.parseScript`);

// read from file (you don't need to modify this line)
const input = fs.readFileSync('input.js', fileEncoding);


// TODO replace this line with your own code
const output = input;


// write to file (you don't need to modify this line)
fs.writeFileSync('output.js', output, fileEncoding);
