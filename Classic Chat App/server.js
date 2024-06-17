const express = require('express');
const { Socket } = require('socket.io');
const app = express();

const server = app.listen(8000, () => 
  console.log('The server is all fired up on port 8000')
);

// Initialize the socket.io library and pass it our Express server
const io = require('socket.io')(server, { cors: { origin: "*" } });

let chatHistory = []; // Array to store chat history
let users = {}; // Object to store users

io.on('connection', (socket) => {
  console.log(`New connection: ${socket.id}`);

  // Send chat history to the newly connected client
  socket.emit('chatHistory', chatHistory);

  // Listen for user joining
  socket.on('join', (username) => {
    users[socket.id] = username;
    const joinMessage = { text: `${username} has joined the chat`, timestamp: new Date().toISOString(), system: true };
    chatHistory.push(joinMessage);
    io.emit('chatMessage', joinMessage);
  });

  // Listen for incoming chat messages
  socket.on('chatMessage', (message) => {
    chatHistory.push(message); // Add message to chat history
    io.emit('chatMessage', message); // Broadcast message to all clients
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    const username = users[socket.id];
    if (username) {
      const leaveMessage = { text: `${username} has left the chat`, timestamp: new Date().toISOString(), system: true };
      chatHistory.push(leaveMessage);
      io.emit('chatMessage', leaveMessage);
      delete users[socket.id];
    }
  });

  socket.emit('welcome', 'Welcome to the socket connection!');
});
