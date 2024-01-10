import mongoose from 'mongoose';

const backend_tokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  date: { type: Date, required: true },
  tokenReq: { type: String, required: true },
});

const BackendToken = mongoose.model(
  'backend_token',
  backend_tokenSchema,
  'backend_token'
);

export default BackendToken;
