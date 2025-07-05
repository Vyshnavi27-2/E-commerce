require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/userModel');

// Replace with your MongoDB connection string
mongoose.connect('mongodb://127.0.0.1:27017/ecommerceDB/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('Connected to MongoDB');

  const existingAdmin = await User.findOne({ email: 'admin@example.com' });
  if (existingAdmin) {
    console.log('Admin already exists');
    mongoose.disconnect();
    return;
  }

  const hashedPassword = await bcrypt.hash('adminpassword', 10);
  const adminUser = await User.create({
    name: 'Admin',
    email: 'admin@example.com',
    password: hashedPassword,
    isAdmin: true
  });

  console.log('Admin user created:', adminUser);
  mongoose.disconnect();
})
.catch(err => console.error('Error:', err));
