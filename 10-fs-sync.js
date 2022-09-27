const { readFileSync, writeFileSync } = require('fs')

console.log('start')
const first = readFileSync('./content/subfolder/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/second.txt', 'utf8');

//console.log(first)
//console.log(second)

writeFileSync(
'./content/subfolder/result-sync.txt', `Here is the result : ${first}, ${second}`, 
{flag: 'a'}
)

console.log('Done with first project')
console.log('Start with new one project')