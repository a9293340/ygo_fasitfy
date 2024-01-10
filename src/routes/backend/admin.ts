import { FastifyInstance } from 'fastify';
import { common200Schema, commonDataSchema } from '@/utils/common';
import { routeLogin } from './admin/login';
import { preRouteLogout, routeLogout } from './admin/logout';

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

  // Logout
  app.route({
    method: 'POST',
    url: '/logout',
    schema: {
      body: commonDataSchema,
      response: {
        200: common200Schema,
      },
    },
    handler: routeLogout,
    preHandler: preRouteLogout,
  });
}
