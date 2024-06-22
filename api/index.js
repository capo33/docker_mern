const express = require('express');
const cors = require('cors');
const connect = require('./config/db');

// Initialize express
const app = express();

// DB connection
connect()
 
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', async (req, res) => {
  res.send('Hello World');
});

// Start server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});