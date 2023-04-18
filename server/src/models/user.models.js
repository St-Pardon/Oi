import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const { ObjectId } = Schema;

const UserSchema = new Schema({
  id: ObjectId,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  username: { type: String, required: true, unique: true },
  display_name: { type: String },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone_no: { type: String, required: true },
  chatlist: [String],
  group: [String]
});

// Encrypt user password
UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

// validate password
UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};

export const userModel = model('userModel', UserSchema);
