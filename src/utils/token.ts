import FrontendToken from '@/models/frontend_token.model';
import BackendToken from '@/models/backend_token.model';
import { findInDatabase, updateOneDocument } from './mongo';

const routeCheck = {
  articleList: [
    '/metaDeck',
    '/serialIntroduction',
    '/usefulCardIntroduction',
    '/productInformation',
    '/rules',
    '/seriesStory',
    '/battlePaper',
  ],
  list: [
    '/calendar',
    '/banner',
    '/cards',
    '/cardsImage',
    '/packType',
    '/search',
    '/member',
  ],
  deckList: ['/deck'],
  add: ['/deck', 'member'],
  edit: ['/deck', 'member'],
  delete: ['/deck'],
  resetPassword: ['member'],
};

const checkFrontEndPath = (url: string) => {
  const check = url.split('/')[url.split('/').length - 1];
  const rCheck = routeCheck[check];
  return !rCheck ? false : url.indexOf(rCheck) !== -1;
};

export const checkToken = async (
  tokenReq: string,
  token: string,
  url: string
) => {
  // 前台部分路由 pass
  if (token === 'frontend' && checkFrontEndPath(url)) return 0;
  // 非合格前台路由
  else if (token === 'frontend') return 10008;
  else {
    const jud = url.indexOf('/deck/') !== -1 ? FrontendToken : BackendToken;
    let error_code = 0;
    try {
      const checkToken = await findInDatabase(jud, { token, tokenReq });
      if (!checkToken.length) return 10005;
      else {
        // 前台登入時間維持3天 後台6小時
        const checkDate =
          new Date().getTime() - new Date(checkToken[0].date).getTime() >
          (jud === FrontendToken ? 72 : 6) * 60 * 60 * 1000;
        error_code = checkDate ? 10005 : 0;
        if (!error_code)
          updateOneDocument(jud, { token, tokenReq }, { date: new Date() });
      }
    } catch (error) {
      error_code = 10004;
    }

    return error_code;
  }
};

export const findErrorStatus = (error_code: number) => {
  let status = 0;
  switch (error_code) {
    case 10003:
      status = 400;
      break;
    case 11001:
      status = 404;
      break;
    case 10005:
      status = 404;
      break;
    case 11002:
      status = 401;
      break;
    case 11004:
      status = 403;
      break;
    case 10008:
      status = 403;
      break;
    case 10004:
      status = 400;
      break;
  }

  return status;
};
