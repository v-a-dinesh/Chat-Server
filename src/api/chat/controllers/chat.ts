// src/api/chat/controllers/chat.ts

interface Context {
    strapi: any; // Using any temporarily
    request: {
      body: {
        message: string;
      };
    };
    badRequest: (message: string) => any;
  }
  
  export default {
    async sendMessage(ctx: Context) {
      try {
        const { message } = ctx.request.body;
        
        if (ctx.strapi.io) {
          ctx.strapi.io.emit('message', {
            text: message,
            timestamp: new Date(),
          });
          
          return {
            success: true,
            message: 'Message sent successfully'
          };
        }
        
        return ctx.badRequest('WebSocket server not initialized');
      } catch (error) {
        return ctx.badRequest('Failed to send message');
      }
    },
  };