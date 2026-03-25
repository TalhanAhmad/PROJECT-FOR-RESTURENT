const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  customerPhone: {
    type: String,
    required: true,
  },
  items: [
    {
      menuItemId: mongoose.Schema.Types.ObjectId,
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  totalPrice: Number,
  orderType: {
    type: String,
    enum: ['Dine-in', 'Takeout', 'Delivery'],
    default: 'Dine-in',
  },
  specialInstructions: String,
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Preparing', 'Ready', 'Completed', 'Cancelled'],
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);
