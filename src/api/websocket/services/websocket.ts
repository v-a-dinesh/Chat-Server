// backend/src/api/websocket/services/websocket.ts

import { Server } from 'socket.io';

export default ({ strapi }) => ({
  initialize() {
    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["content-type"],
        credentials: true
      }
    });

    io.on('connection', (socket) => {
      console.log('Client connected:', socket.id);

      socket.on('message', (message) => {
        console.log('Message received, echoing back:', message);
        // Echo back to the specific client
        setTimeout(() => {  // Added small delay to simulate response
          socket.emit('echo', message);
        }, 500);
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
      });
    });

    strapi.io = io;
    console.log('WebSocket server initialized successfully');
  }
});