// src/index.ts

interface BootstrapParams {
  strapi: any; // Using any temporarily
}

export default {
  register(/* { strapi } */) {},

  async bootstrap({ strapi }: BootstrapParams) {
    try {
      const websocketService = strapi.service('api::websocket.websocket');
      if (websocketService) {
        await websocketService.initialize();
        console.log('WebSocket server initialized successfully');
      }
    } catch (error) {
      console.error('Failed to initialize WebSocket server:', error);
    }
  },
};