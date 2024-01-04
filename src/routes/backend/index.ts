import { FastifyInstance } from 'fastify';
import Redis from 'ioredis';

/**
 * 注册後台路由的函数。
 * @param app Fastify 應用實例。
 * @param redis Redis 客户端實例。
 */
export default function frontendRoutes(
  app: FastifyInstance,
  redis: Redis
): void {}
