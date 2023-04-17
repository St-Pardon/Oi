import { Schema, model } from 'mongoose';
const { ObjectId } = Schema;

const GroupSchema = new Schema({
  id: ObjectId,
  group_name: { type: String, max: 30, required: true },
  group_dp: {
    type: String,
    default:
      'https://res.cloudinary.com/dq4o7ygcd/image/upload/v1681726846/contactPictureNoLogin_xp11pm.jpg',
  },
  group_info: { type: String, max: 300 },
  creator: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  members: [
    {
      member_id: { type: String, required: true },
      member_role: {
        type: String,
        default: 'member',
        enum: ['member', 'admin'],
      },
    },
  ],
});

export const groupModel = model('groupModel', GroupSchema);
