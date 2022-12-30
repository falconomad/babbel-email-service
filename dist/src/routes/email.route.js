"use strict";
const express = require('express');
const router = express.Router();
const { generateEmail } = require('../controllers/email.controller');
router.post('/email', generateEmail);
module.exports = router;
