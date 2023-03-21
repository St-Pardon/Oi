import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectToMongoDB = () => {
  mongoose.connect(process.env.MONGODB_URI);
  mongoose.connection.on('connected', () =>
    console.log('Connection to mongodb atlas successful \nEnjoy!!!')
  );
  mongoose.connection.on('error', (err) =>
    console.log(`Error connecting to mongodb atlas -> ${err}`)
  );
};
