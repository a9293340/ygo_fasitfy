import {
  FilterQuery,
  Model,
  QueryOptions,
  UpdateQuery,
  Document,
  UpdateWriteOpResult,
  Aggregate,
} from 'mongoose';

interface OperationResult {
  n?: number;
  ok?: number;
  deletedCount?: number;
}

export const findInDatabase = <T>(
  model: Model<T>,
  filter: FilterQuery<T>,
  options?: QueryOptions,
  projection?: Record<string, any>
): Promise<T[]> => model.find(filter, projection, options).exec();

export const createDocument = <T>(model: Model<T>, doc: T): Promise<T> =>
  model.create(doc);

export const updateOneDocument = <T>(
  model: Model<T>,
  filter: FilterQuery<T>,
  update: UpdateQuery<T>,
  options?: QueryOptions
): Promise<UpdateWriteOpResult> =>
  model.updateOne(filter, update, options).exec();

export const updateManyDocuments = <T>(
  model: Model<T>,
  filter: FilterQuery<T>,
  update: UpdateQuery<T>,
  options?: QueryOptions
): Promise<UpdateWriteOpResult> =>
  model.updateMany(filter, update, options).exec();

export const deleteOneDocument = <T>(
  model: Model<T>,
  filter: FilterQuery<T>,
  options?: QueryOptions
): Promise<OperationResult> => model.deleteOne(filter, options).exec();

export const deleteManyDocuments = <T>(
  model: Model<T>,
  filter: FilterQuery<T>,
  options?: QueryOptions
): Promise<OperationResult> => model.deleteMany(filter, options).exec();

export const aggregateDocuments = <T>(
  model: Model<T>,
  pipeline: any[]
): Aggregate<any[]> => model.aggregate(pipeline);
