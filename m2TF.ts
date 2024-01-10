import fs from 'fs';
import { mongooseToFastifySchema } from './script/mongoToFastify';
import { mongooseToTsInterface } from './script/mongoToTs';

const capitalize = (str: string): string =>
  str
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

const m2TF = async () => {
  const filePath = process.argv[2];
  const data: Record<string, any> = await import(filePath);
  let tsInt = "declare module 'module-types' {";
  let fast = '';
  let keys: string[] = [];
  for (const key in data) {
    if (key === 'default') continue;
    keys.push(key);
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const schema = data[key];
      tsInt += mongooseToTsInterface(schema, `I${capitalize(key)}`);
      fast += `const ${key} = ${JSON.stringify(
        mongooseToFastifySchema(schema)
      )} \n`;
    }
  }
  tsInt += '}';
  fast += `\n export{${keys.join(',')}}`;

  fs.writeFileSync('./schema/database.d.ts', tsInt);
  fs.writeFileSync('./schema/fastifySchema.ts', fast);
};

m2TF();
