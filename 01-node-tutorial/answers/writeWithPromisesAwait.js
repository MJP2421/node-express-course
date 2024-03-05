const {writeFile, readFile } = require("fs").promises;

async function writer() {
   try{
    await writeFile('./temporary/temp.txt','Hello world/n This is my second line/n This is my third line' )
   }catch (err) {
    console.log(`This is an error:`, err);
    return
   }
}

async function reader() {
    try{
    await readFile('./temporary/temp.txt', "utf-8")
    } catch (err) {
        console.log(`This is an error`,err);
        return
    }
}

async function readWrite() {
    try{
        await reader()
        await writer()
    } catch(err) {
        console.log(`This is an error`, err)
        return
    }
    
}
readWrite()