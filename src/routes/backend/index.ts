import { FastifyInstance } from 'fastify';
import adminRouter from './admin';

/**
 * 注册後台路由的函数。
 * @param app Fastify 應用實例。
 * @param redis Redis 客户端實例。
 */
export default async function frontendRoutes(
  app: FastifyInstance,
  options: any
): Promise<void> {
  app.register(adminRouter, { prefix: '/admin' });
}
