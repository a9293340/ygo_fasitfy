import S from 'fluent-json-schema';
import * as CryptoJS from 'crypto-js';
import dotenv from 'dotenv';
import { FastifyReply } from 'fastify';
import { v4 } from 'uuid';
import BackendToken from '../models/frontend_token.model';
import FrontendToken from '../models/frontend_token.model';
import { deleteOneDocument, findInDatabase } from './mongo';
dotenv.config();

export const commonDataSchema = S.object().prop('data', S.string().required());
export const common200Schema = S.object()
  .prop('error_code', S.integer())
  .prop('data', S.string());

export const encode = <T extends object>(encodeValue: T) =>
  CryptoJS.AES.encrypt(
    JSON.stringify(encodeValue),
    process.env.VITE_ENCODEKEY
  ).toString();

export const decode = <T>(decodeValue: string): T =>
  JSON.parse(
    CryptoJS.AES.decrypt(decodeValue, process.env.VITE_ENCODEKEY).toString(
      CryptoJS.enc.Utf8
    )
  ) as T;

// 隨機生成id
export const generateRandomString = (length: number): string => {
  const characters: string =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const symbols: string = '!@#%-=';
  const symbolsLimit: number = 2;
  let randomString: string = '';
  let symbolsCount: number = 0;

  for (let i: number = 0; i < length; i++) {
    const shouldInsertSymbol: boolean =
      symbolsCount < symbolsLimit && Math.random() < symbolsLimit / length;

    if (shouldInsertSymbol) {
      const randomSymbolIndex: number = Math.floor(
        Math.random() * symbols.length
      );
      randomString += symbols.charAt(randomSymbolIndex);
      symbolsCount++;
    } else {
      const randomIndex: number = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
  }

  return randomString;
};

export const toCamelCase = (input: string): string => {
  return input
    .split('_')
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
};

export const convertBase64ToImage = (base64Data: string, deck_name: string) => {
  const img = new Image();

  img.onload = function () {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error('無法創建canvas');
    }

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = dataURL;
    downloadLink.download = deck_name + '.png';

    // 临时添加到文档，以触发下载
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  img.src = base64Data;
};

export const replyError = (
  reply: FastifyReply,
  error: number,
  error_code: number,
  filter: Record<string, any>
) => {
  reply.status(error).send({
    error_code: error_code,
    data: encode(filter),
  });
};

export const makeToken = async (
  type: string,
  removeToken: boolean,
  tokenReq: string
) => {
  const token = v4() as string;
  const model = type === 'b' ? BackendToken : FrontendToken;
  if (removeToken) await deleteOneDocument(model, { tokenReq });
  const date = new Date();
  await findInDatabase(model, { token, tokenReq, date });

  return encode({ token, date });
};
