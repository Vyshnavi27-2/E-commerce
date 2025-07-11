const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    imageUrl: { type: String }  // <-- New field added for image
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
