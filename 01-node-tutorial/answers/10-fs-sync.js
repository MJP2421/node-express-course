const { readFileSync, writeFileSync } = require('fs')

const firstFile = readFileSync('./temporary/.keep', 'utf8')

const firstLine = 'Good Afternoon'
const secondLine = 'Time to go to sleep'
const thirdLine = 'Goodnight'

writeFileSync(
    './temporary/fileA.txt',`Here is the result : ${firstLine},${secondLine},${thirdLine}`,
    { flag: 'a' }
)
//const first = readFileSync('./content/first.txt', 'utf8')
//const second = readFileSync('./content/second.txt', 'utf8')

//writeFileSync(
    //'./content/result-sync.txt',
    //`Here is the result : ${first}, ${second}`
    //{flag: 'a}
//)



//console.log(first,second)