import mongoose from 'mongoose';

const MONGO_DB_URL = 'mongodb://45.142.36.10:27017/test'

export const connectDB = async () => {
    await mongoose.connect(MONGO_DB_URL);
};