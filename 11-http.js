const http  = require('http')
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end("Welcome to the home page")
    }
    else if(req.url === '/about'){
        res.end("Welcome to the about section")
    }
    else
    {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
    <h1>Oops</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
`);}
})

server.listen(4000);

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end("Welcome to the home page");
//     } else if (req.url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end("Welcome to the about section");
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end(`
//             <h1>Oops</h1>
//             <p>We can't seem to find the page you are looking for</p>
//             <a href="/">back home</a>
//         `);
//     }
// });

// server.listen(4000, () => {
//     console.log('Server is listening on port 4000');
// });
