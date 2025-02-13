// src/api/websocket/routes/websocket.ts

export default {
    routes: [
      {
        method: 'GET',
        path: '/websocket/initialize',
        handler: 'websocket.initialize',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };