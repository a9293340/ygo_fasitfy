import { FastifyInstance } from 'fastify';
import Redis from 'ioredis';

import frontendRoutes from './frontend/index';
import backendRoutes from './backend/index';
import commonRoutes from './common/index';

export default async function registerRoutes(
  app: FastifyInstance,
  redis: Redis
): Promise<void> {
  await frontendRoutes(app, redis);
  await backendRoutes(app, redis);
  await commonRoutes(app, redis);
}
