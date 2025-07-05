const Product = require('../models/productModel');
const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    const userId = req.user.id;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const order = await Order.create({
      user: userId,
      product: productId,
      quantity,
      imageUrl: product.imageUrl, // store image here
      name: product.name,
      price: product.price,
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
