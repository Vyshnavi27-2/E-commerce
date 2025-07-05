const express = require('express');
const router = express.Router();
const { registerUser, loginUser, createAdminUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/create-admin', createAdminUser);  // 👈 This is for creating admin

module.exports = router;
