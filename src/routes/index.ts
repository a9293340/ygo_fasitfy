import { FastifyInstance } from 'fastify';
import backendRoutes from './backend/index';

export default async function registerRoutes(
  app: FastifyInstance,
  options: any
): Promise<void> {
  app.register(backendRoutes);

  // 測試route
  app.route({
    method: 'GET',
    url: '/test',
    handler: async (request, reply) => {
      reply.send(`test!`);
    },
  });
}
