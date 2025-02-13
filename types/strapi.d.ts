// src/types/socket.d.ts

import { Server } from 'socket.io';

declare module '@strapi/strapi' {
  interface Common {
    io: Server;
  }
}