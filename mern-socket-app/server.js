const express = require('express');
const { Socket } = require('socket.io');
const app = express();

const server = app.listen(8000, () => 
  console.log('The server is all fired up on port 8000')
);

// Initialize the socket.io library and pass it our Express server
const io = require('socket.io')(server, { cors: { origin: "*" } });

io.on('connection', (socket) => {
  console.log("Nice to meet you. (shake hand)");

  socket.emit('welcome', 'Welcome to the socket connection!');
});
