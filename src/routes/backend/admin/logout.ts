import BackendToken from '@/models/backend_token.model';
import { decode, encode, replyError } from '@/utils/common';
import { deleteOneDocument } from '@/utils/mongo';
import { checkToken, findErrorStatus } from '@/utils/token';
import { FastifyReply, FastifyRequest } from 'fastify';

interface LogoutBody {
  token: string;
  tokenReq: string;
}

type LogoutRequest = FastifyRequest<{
  Body: LogoutBody | string;
}>;

export const routeLogout = async (
  request: LogoutRequest,
  reply: FastifyReply
) => {
  if (typeof request.body !== 'string') {
    const { token, tokenReq } = request.body;
    try {
      await deleteOneDocument(BackendToken, { token, tokenReq });
      reply.status(200).send({ error_code: 0, data: encode({}) });
    } catch (error) {
      replyError(reply, 400, 10004, {});
    }
  } else replyError(reply, 400, 10004, {});
};

export const preRouteLogout = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  if (typeof request.body === 'string') {
    const { token, tokenReq } = decode<LogoutBody>(request.body as string);
    const error_code = await checkToken(tokenReq, token, request.url);
    if (error_code) reply.status(findErrorStatus(error_code)).send(error_code);
    else request.body = { token, tokenReq };
  } else replyError(reply, 400, 10004, {});
};
