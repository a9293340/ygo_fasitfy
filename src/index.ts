import fastify, {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
} from 'fastify';
import connectDB from './config/db.config';
import rateLimit from '@fastify/rate-limit';
import Redis from 'ioredis';
import registerRoutes from './routes/index';

const app: FastifyInstance = fastify({
  logger: {
    level: 'debug',
    stream: {
      write: msg => {
        const logger = JSON.parse(msg);
        // 紀錄日誌 level msg time pid hostname
        console.log(logger);
      },
    },
  },
  bodyLimit: 10485760,
});
// 建立緩存 (windows & macOs沒有)
let redis: Redis | null;

try {
  redis = new Redis(); // 连接到默认的 Redis 设置
} catch (error) {
  console.log('無法連接到redis:', error);
}

const startServer = async () => {
  // Connect DB
  await connectDB();

  // RateLimit
  await app.register(rateLimit, {
    max: 20, // 每个时间窗口的最大请求数
    timeWindow: 10000, // 时间窗口的长度，单位毫秒
  });

  // 紀錄request的資訊至日誌
  app.addHook(
    'onRequest',
    (request: FastifyRequest, reply: FastifyReply, done: Function) => {
      const ip = request.ip;
      const userAgent = request.headers['user-agent'];
      const requestSize = request.headers['content-length'] || 0;

      request.log.info({ ip, userAgent, requestSize }, 'request');
      done();
    }
  );

  // 紀錄reply的資訊至日誌
  app.addHook(
    'onSend',
    (
      request: FastifyRequest,
      reply: FastifyReply,
      payload: string | Buffer,
      done: Function
    ) => {
      const responseSize = Buffer.byteLength(payload);
      request.log.info({ responseSize }, 'reply');
      done();
    }
  );

  //全局middleware

  // routes引入
  registerRoutes(app, redis);

  // Run Server
  await app.listen({ port: 3300, host: '0.0.0.0' });
  console.log('Server running!');
};

startServer();
