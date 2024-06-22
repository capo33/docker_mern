const mongoose = require('mongoose');

// DB connection
const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/docker-mern')
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
};

module.exports = connect;