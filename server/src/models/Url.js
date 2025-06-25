import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  code: { type: String, unique: true, index: true },
  longUrl: { type: String, required: true },
  clicks: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now, expires: '90d' } // optional TTL
});

export default mongoose.model('Url', urlSchema);
