const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hk-restaurant';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/menu', require('./routes/menuRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

// Default route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to Hong Kong Restaurant API' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
