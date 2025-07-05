const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    image: String  // for image URL later
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
