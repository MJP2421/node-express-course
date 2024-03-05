const { writeFile, readFile } = require("fs").promises;

writeFile('temp.txt', 'This is my line 1')
     .then(() => {
    return writeFile('temp.txt','This is my line 2')
   })

   .then(() => {
    return writeFile('temp.txt','This is my line 3')
   })

    .then(() => {
     return readFile('temp.txt', 'utf8');

   })

     .then((data) => {
        console.log(data);
     })

     .catch((error) => {
        console.log('An error occurred:', error)
     })


