import { Server } from 'socket.io';
import http from 'http';
import express from 'express';
import { userInfo } from 'os';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173'],
  },
});

export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

const userSocketMap = {};

io.on('connection', (socket) => {
  console.log('A user is connected: ', socket.id);

  // Map the user ID to the socket ID
  const userId = socket.handshake.query.userId;
  if (userId) userSocketMap[userId] = socket.id;

  // Notify all users about the online users
  io.emit('getOnlineUsers', Object.keys(userSocketMap));

  // Emit the socket ID to the connected user
  socket.emit('me', socket.id);

  // Handle video call-related events
  socket.on('calluser', ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit('calluser', { signal: signalData, from, name });
  });

  socket.on('answercall', (data) => {
    io.to(data.to).emit('callaccepted', data.signal);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected: ', socket.id);

    // Remove the user from the user-socket map
    if (userId) delete userSocketMap[userId];

    // Notify all users about the updated online users
    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    // Broadcast that the call has ended
    socket.broadcast.emit('callended');
  });
});

export { io, app, server };
