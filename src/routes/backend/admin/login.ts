import { FastifyReply, FastifyRequest } from 'fastify';
import { decode, makeToken, replyError } from '../../../utils/common';
import { findInDatabase } from '../../../utils/mongo';
import Admin from '../../../models/admin.model';
import BackendToken from '../../../models/frontend_token.model';

interface LoginBody {
  account: string;
  password: string;
}

export const routeLogin = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { account, password } = decode<LoginBody>(request.body as string);
  // 解碼錯誤
  if (!account || !password) replyError(reply, 400, 10003, {});
  else {
    try {
      const {
        account: dbAccount,
        password: dbPwd,
        type,
        status,
      } = (await findInDatabase(Admin, { account }))[0];
      // 無此帳號
      if (!dbAccount) replyError(reply, 404, 11001, {});
      // 密碼錯誤
      else if (dbPwd !== password) replyError(reply, 401, 11002, {});
      // 權限不足 || 被ban
      else if (type >= 2 || status)
        replyError(reply, 403, type >= 2 ? 11004 : 10008, {});
      // 正確回傳
      else {
        const check = await findInDatabase(BackendToken, {
          tokenReq: dbAccount,
        });
        reply.status(200).send({
          error_code:
            check.length &&
            new Date().getTime() - new Date(check[0].date).getTime() >
              60 * 60 * 1000
              ? 10009
              : 0,
          data: await makeToken('b', !!check.length, dbAccount),
        });
      }
    } catch (error) {
      replyError(reply, 400, 10004, {});
    }
  }
};
