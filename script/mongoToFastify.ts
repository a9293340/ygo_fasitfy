import { Schema, SchemaType } from 'mongoose';
interface MongooseField {
  type?: any;
  [key: string]: any;
}

const mongooseToFastifySchema = (mongooseSchema: Schema): object => {
  const fastifySchema: { properties: { [key: string]: any } } = {
    properties: {},
  };
  Object.keys(mongooseSchema).forEach((key: string) => {
    const field: MongooseField = mongooseSchema[key];
    fastifySchema.properties[key] = mongooseFieldToFastifyType(field);
  });
  return {
    response: { 200: { type: 'object', properties: fastifySchema.properties } },
  };
};

const mongooseFieldToFastifyType = (field: MongooseField): object => {
  let fieldType = field.type || field;

  if (fieldType instanceof Function) {
    return { type: mongooseTypeToFastifyType(fieldType) };
  } else if (Array.isArray(fieldType)) {
    const arrayType =
      fieldType.length > 0
        ? mongooseFieldToFastifyType(fieldType[0])
        : { type: 'any' };
    return { type: 'array', items: arrayType };
  } else if (typeof fieldType === 'object' && fieldType !== null) {
    if (fieldType.type) {
      return { type: mongooseTypeToFastifyType(fieldType.type) };
    } else {
      return {
        type: 'object',
        properties: generateFastifyNestedObject(fieldType),
      };
    }
  } else {
    return { type: 'any' };
  }
};

const generateFastifyNestedObject = (nestedSchema: MongooseField): object => {
  const nestedObject: { [key: string]: any } = {};
  Object.keys(nestedSchema).forEach((key: string) => {
    nestedObject[key] = mongooseFieldToFastifyType(nestedSchema[key]);
  });
  return nestedObject;
};

const mongooseTypeToFastifyType = (mongooseType: SchemaType): string => {
  const typeName = mongooseType.constructor.name;
  const typeMapping: { [key: string]: string } = {
    String: 'string',
    Number: 'number',
    Date: 'string',
    Boolean: 'boolean',
    ObjectId: 'string',
  };
  return typeMapping[typeName] || 'any';
};

export { mongooseToFastifySchema };
