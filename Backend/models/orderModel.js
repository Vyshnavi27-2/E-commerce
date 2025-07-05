const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    default: 1,
  },
  imageUrl: String, // 🟢 new
  name: String,     // 🟢 new
  price: Number,    // 🟢 new
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
