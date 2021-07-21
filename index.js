const app = require('express')();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res)=> {
    res.sendFile(`${__dirname}/public/index.html`)
})

server.listen(3000, () => {
    console.log("I'm watching you")
})