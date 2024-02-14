require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Database connection error', err);
  }
};

module.exports = connectDB;
