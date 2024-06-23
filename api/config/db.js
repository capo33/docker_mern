const mongoose = require('mongoose');

// DB connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
};

module.exports = connect;