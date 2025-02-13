// ./src/bootstrap.ts
export default async ({ strapi }) => {
    // Initialize websocket service
    strapi.service('api::websocket.websocket').initialize();
  };