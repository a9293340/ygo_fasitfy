import mongoose from 'mongoose';

const frontend_tokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  date: { type: Date, required: true },
  tokenReq: { type: String, required: true },
});

const FrontendToken = mongoose.model(
  'frontend_token',
  frontend_tokenSchema,
  'frontend_token'
);

export default FrontendToken;
