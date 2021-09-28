const http =require('http');
const fs = require('fs');

// read on server 
const server=http.createServer((req, res) => {
    const myReadStream=fs.createReadStream(`${__dirname}/bigData.txt`);
    
    
        myReadStream.on('data', (data) =>{
        console.log(data.toString());

    })

   // myReadStream.pipe(res);
    
})

server.listen(3000)
console.log('listening on port 3000')



/*  
const http =require('http');
const fs = require('fs');


const ourReadStream=fs.createReadStream(`${__dirname}/bigData.txt`);

ourReadStream.on('data',(chunk) => {
    console.log(chunk.toString());
})



*/