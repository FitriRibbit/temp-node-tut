const http = require('http')

const server = http.createServer((req, res)=>{
    //console.log(req)
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    //res.write();
    //res.end()
    if(req.url === '/about'){
        res.end('This is your about page')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We cant seem yo find page you wanna show and looking for</p>
    <a href="/">back home</a>  <br> <a href="/about">About</a>
    `)
})

server.listen(5000)