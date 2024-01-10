import { v4 as uuidv4 } from 'uuid';
import AES from 'crypto-js/aes';

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
    'member',
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
  }
};
