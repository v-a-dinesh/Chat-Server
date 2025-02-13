// src/api/websocket/controllers/websocket.ts

export default {
    initialize(ctx) {
      const websocketService = strapi.service('api::websocket.websocket');
      websocketService.initialize();
      
      return {
        message: 'WebSocket server initialized'
      };
    }
  };