const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const io = require('socket.io')(80);

app.get('/', (req, res)=> {
    res.sendFile(`${__dirname}/public/index.html`)
})

io.on('connection', (socket) => {
    console.log("You are connected")

    socket.on('chat text', (mesg) => {
        // console.log("message: ", + msg)
        io.emit("message: ", + msg);
    });
})

// socket.on('disconnect', () => {
//     console.log("2 host connceted")
// });

// socket.on("chat message", (msg) => {
//     io.emit('chat message', msg)
// })



server.listen(3000, () => {
    console.log("I'm watching you")
})