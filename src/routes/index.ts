import { FastifyInstance } from 'fastify';
import Redis from 'ioredis';

import frontendRoutes from './frontend/index';
import backendRoutes from './backend/index';
import commonRoutes from './common/index';

export default function registerRoutes(
  app: FastifyInstance,
  redis: Redis
): void {
  frontendRoutes(app, redis);
  backendRoutes(app, redis);
  commonRoutes(app, redis);
}
