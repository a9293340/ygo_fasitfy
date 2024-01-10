import { FastifyInstance } from 'fastify';
import { common200Schema, commonDataSchema } from '../../utils/common';
import { routeLogin } from './admin/login';

interface IAdmin {
  type: any;
  name: any;
  create_date: any;
  photo: any;
  status: any;
  account: any;
  password: any;
  email: any;
}

export default async function adminRoute(app: FastifyInstance, options: any) {
  // Login
  app.route({
    method: 'POST',
    url: '/login',
    schema: {
      body: commonDataSchema,
      response: {
        200: common200Schema,
      },
    },
    handler: routeLogin,
  });
}
