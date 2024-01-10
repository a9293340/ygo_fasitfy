import { RedisClient } from 'redis'; // 替換為您的 Redis 客戶端的正確導入

declare module 'fastify' {
  interface FastifyInstance {
    redis: RedisClient;
  }

  interface FastifyRequest {
    redis: RedisClient;
  }
}
