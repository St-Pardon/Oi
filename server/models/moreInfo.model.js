import { Schema, model } from 'mongoose';

const { ObjectId } = Schema;

const MoreInfoSchema = new Schema({
  id: ObjectId,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  user_id: { type: String, required: true, unique: true },
  request: [
    {
      request_id: String,
      time: { type: Date, default: Date.now },
      status: { type: String, default: 'pending' },
    },
  ],
  about: { type: String, max: 750 },
});

export const moreInfoModel = model('moreInfoModel', MoreInfoSchema);
