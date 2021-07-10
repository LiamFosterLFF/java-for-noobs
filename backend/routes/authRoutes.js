const express = require('express');
const router = express.Router();

const { register, login, forgotPassword, resetPassword } = require('../controllers/authControllers')

//@desc Register a new user
//@route POST /auth/register
//@access Public
router.post('/register', register);

//@desc Login a user
//@route POST /auth/login
//@access Public
router.post('/login', login);

//@desc Trigger forgot password email
//@route POST /auth/forgotPassword
//@access Public
router.post('/forgotPassword', forgotPassword);

//@desc Reset a password
//@route POST /auth/resetPassword
//@access Public
router.post('/resetPassword', resetPassword);

module.exports = router;