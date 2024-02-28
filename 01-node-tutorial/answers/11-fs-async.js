const { writeFile } = require('fs')
console.log('at start');

writeFile('./temporary/output.txt', 
'This is line 1/n', (err, result) => {
    console.log('at point');
    if(err) {
        console.log('This error happened:', err);
    } else {
        writeFile(
            './temporary/fileB.txt', 'This is line 2/n', {flag: 'a'}, (err,results) => {
                
                if(err){
                    console.log('This error happened:', err);

                } else {
                  writeFile(
                    './temporary/fileB.txt', 'This is line 3/n', {flag:'a'}, (err,result) => {
                        if(err) {
                            console.log('This erros happened:', err);
                        } else {
                            return
                        }
                    }
                  )
                }
            }
          )
    }
}
);
console.log('at the end');