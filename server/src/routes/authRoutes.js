// /routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser, assignRoleToUser } = require('./../controller/authController');
const router = express.Router();

// Routes for registration and login
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/assignRole', assignRoleToUser);
module.exports = router;
