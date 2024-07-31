require('dotenv').config();
const mongoose = require('mongoose');

const db=process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('\x1b[32mMongoDB connected successfully\x1b[0m');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
