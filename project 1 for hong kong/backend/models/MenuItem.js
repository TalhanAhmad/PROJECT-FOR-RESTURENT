const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  category: {
    type: String,
    enum: ['Soups', 'Rice', 'Chow Mein', 'Chicken', 'Beef', 'Seafood', 'Vegetables'],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: String,
  isSpecial: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
