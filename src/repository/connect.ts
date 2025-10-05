import mongoose from 'mongoose';

const REMOTE_HOST = '45.142.36.10';
const MONGO_DB_URL = `${process.env.DB_URL}/test`

// export const connectDB = async () => {
//     console.log('start connecting to DB');
//     try {
//         // Connect to MongoDB, mongodb://container_name:container_port/dbname
//         mongoose.connect('mongodb://mongo:27017/node-mongo').then(() => {
//             console.log('MongoDB Connected');
//         }).catch(error => {
//             console.log(error);
//         });
//     } catch (e) {
//         console.log(e);
//     }
// };
// mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase
// mongodb+srv://root:password@mongo:27017/node-mongo
// const MONGODB_URI = 'mongodb://mongo:27017/node-mongo';
const MONGODB_URI = `${process.env.DB_URL}`;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

type WithMongoose = typeof globalThis & {
    mongoose: { conn: null | mongoose.Mongoose, promise: null | Promise<mongoose.Mongoose> };
};
/** 
 * Cached connection for MongoDB.
 */
let cached = (global as WithMongoose).mongoose;

if (!cached) {
  cached = (global as WithMongoose).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    console.log(`Connectiong to ${MONGODB_URI}`);
    cached.promise = mongoose.connect(MONGODB_URI, {
        user: process.env.DB_USERNAME || 'rootadmin',
        pass: process.env.DB_PASSWORD || 'rootpassword',
        authSource: 'admin',
    }).then((mongoose) => {
      console.log('DB connected');
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;