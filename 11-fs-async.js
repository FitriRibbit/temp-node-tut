const { readFile, writeFile } = require('fs')
console.log('start')

readFile('./content/subfolder/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result;
    readFile('./content/subfolder/second.txt', 'utf-8', (err, result) =>{
        if(err){
            console.log(err)
            return;
        }
        const second = result;
        writeFile('./content/subfolder/result-async.txt', 
            `Here the result of written file: ${first}, ${second}`, (err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
            console.log('done with this task')
        })
})
})

console.log('starting next task')
