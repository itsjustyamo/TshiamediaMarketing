const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const connection = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...');
    return connection;
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
