import fastify from 'fastify';
import connectDB from './config/db.config';

const app = fastify({ logger: true });

const startServer = async () => {
  // Connect DB
  await connectDB();

  // Run Server
  await app.listen({ port: 3300, host: '0.0.0.0' });
  console.log('Server running!');
};

startServer();
