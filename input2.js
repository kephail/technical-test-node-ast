/**
 * Please do not modify the code in this file.
 * You are being tested on your ability to take the contents of this file and transform it.
 *
 * All of your code should go in to server.js
 */

const fs = require('fs/promises');

var a = 1;
var b = 2;

async function dummy() {
    const fileContents = await fs.readFile('server.js', 'utf8');
    console.log(fileContents);
}

console.log(`${a} + ${b} = ${a+b}`);
dummy();
