// src/api/chat/routes/chat.ts

export default {
    routes: [
      {
        method: 'POST',
        path: '/chat/send',
        handler: 'chat.sendMessage',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };