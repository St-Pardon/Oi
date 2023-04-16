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
      sender_id: String,
      time: { type: Date, default: Date.now },
      status: { type: String, default: 'pending' },
    },
  ],
  about: { type: String, max: 750 },
  display_picture: {
    type: String,
    default:
      'https://res.cloudinary.com/dq4o7ygcd/image/upload/v1681641674/depositphotos_137014128-stock-illustration-user-profile-icon_pbanxc.webp',
  },
});

export const moreInfoModel = model('moreInfoModel', MoreInfoSchema);
