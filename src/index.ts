import fastify, {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
} from 'fastify';
import connectDB from './config/db.config';
import rateLimit from '@fastify/rate-limit';

const app: FastifyInstance = fastify({
  logger: {
    level: 'debug',
    stream: {
      write: msg => {
        // 紀錄日誌
        console.log(msg);
      },
    },
  },
  bodyLimit: 10485760,
});

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

  // Run Server
  await app.listen({ port: 3300, host: '0.0.0.0' });
  console.log('Server running!');
};

startServer();
