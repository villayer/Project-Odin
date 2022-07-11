const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 9000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    const request_url = url.parse(req.url).pathname;
    
    // routes for pages
    if (request_url === "/") {
        fs.readFile(__dirname + "/index.html", 'utf-8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            res.end(data);
        })
    }

    else if(request_url === "/about") 
        fs.readFile(__dirname + "/about.html", 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            res.end(data);
        })
    
    else if(request_url === "/contact") 
        fs.readFile(__dirname + "/contact.html", 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            res.end(data);
        })
    
    else
        fs.readFile(__dirname + "/404.html", 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            res.end(data);
        })

});

server.listen(port, () => {
    console.log(`running on http://localhost:${port}`)
});

