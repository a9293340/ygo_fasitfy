import { FastifyInstance } from 'fastify';
import Redis from 'ioredis';

/**
 * 注册通用路由的函数。
 * @param app Fastify 應用實例。
 * @param redis Redis 客户端實例。
 */
export default function commonRoutes(
  app: FastifyInstance,
  redis: Redis
): void {}
