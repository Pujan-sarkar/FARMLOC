const express = require('express')
const emailrouter = express.Router();
const { SendEmail } = require('../controllers/emailController');

emailrouter.post("/" , SendEmail);

module.exports = emailrouter
