import { Schema, SchemaType } from 'mongoose';
interface MongooseField {
  type?: any;
  [key: string]: any;
}

const mongooseToTsInterface = (
  mongooseSchema: Schema,
  interfaceName: string = 'ICard'
): string => {
  let tsInterface: string = `interface ${interfaceName} {\n`;
  Object.keys(mongooseSchema).forEach((key: string) => {
    const field: MongooseField = mongooseSchema[key];
    tsInterface += `  ${key}: ${mongooseFieldToTsType(field)};\n`;
  });
  tsInterface += '}';
  return tsInterface;
};

const mongooseFieldToTsType = (field: MongooseField): string => {
  if (field.type) {
    return mongooseTypeToTsType(field.type);
  } else if (Array.isArray(field)) {
    const arrayType: string =
      field.length > 0 ? mongooseFieldToTsType(field[0]) : 'any';
    return `Array<${arrayType}>`;
  } else if (
    typeof field === 'object' &&
    field !== null &&
    !(field instanceof Function)
  ) {
    return generateNestedInterface(field);
  } else {
    return 'any';
  }
};

const generateNestedInterface = (nestedSchema: MongooseField): string => {
  let nestedInterface: string = '{\n';
  Object.keys(nestedSchema).forEach((key: string) => {
    nestedInterface += `    ${key}: ${mongooseFieldToTsType(
      nestedSchema[key]
    )};\n`;
  });
  nestedInterface += '  }';
  return nestedInterface;
};

const mongooseTypeToTsType = (mongooseType: SchemaType): string => {
  const typeMapping: { [key: string]: string } = {
    String: 'string',
    Number: 'number',
    Date: 'Date',
    Buffer: 'Buffer',
    Boolean: 'boolean',
    ObjectId: 'string',
    Array: 'Array<any>',
  };
  return typeMapping[mongooseType.constructor.name] || 'any';
};

export { mongooseToTsInterface };
