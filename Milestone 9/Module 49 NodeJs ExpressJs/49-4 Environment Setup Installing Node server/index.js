const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('Hello! My first node Server');
    }
    else if(req.url === '/about'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('My node Server about section');
    }

});

server.listen(7777, ()=>{
    console.log('Server is running on port 5000');
})