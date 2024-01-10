import { FastifyInstance } from 'fastify';
import backendRoutes from './backend/index';
import { findInDatabase } from '../utils/mongo';
import Admin from '../models/admin.model';

export default async function registerRoutes(
  app: FastifyInstance,
  options: any
): Promise<void> {
  app.register(backendRoutes);

  app.route({
    method: 'GET',
    url: '/test',
    handler: async (request, reply) => {
      const a = await findInDatabase(Admin, {}, { limit: 1 });
      reply.send(`test!${a}`);
    },
  });
}
