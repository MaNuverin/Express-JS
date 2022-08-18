const http = require('http')
const {readFileSync} = require('fs');
//get all files
const homePage = readFileSync('./public/index.html');
const Style = readFileSync('./public/css/style.css');
const Javascript = readFileSync('./public/app.js');
const server = http.createServer((req, res) => {
    const url = req.url;
    //home page
    if(url === '/'){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(homePage)
        res.end()
    }
    //about page
    else if(url === '/about'){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    //styling
    else if(url === '/css/style.css'){
        res.writeHead(200, {'content-type' : 'text/css'})
        res.write(Style)
        res.end()
    }
    //Manis
    else if(url === '/app.js'){
        res.writeHead(200, {'content-type' : 'text/javascript'})
        res.write(Javascript)
        res.end()
    }
    //404
    else {
        res.writeHead(404, {'content-type' : 'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
})
server.listen(3000, (req, res) => {
    console.log('Server Running On Port 3000')
})