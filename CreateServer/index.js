const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url==='/'){
        res.write('This is root directory');
        res.end()
    }
    else{
        res.write('This is not root directory');
        res.end()

    }
})

server.listen(3000)
console.log('listening on port 3000')

// run: `node index`