const express = require('express');
const router = express.Router();

const {
  registerSubscriber
} = require('../controllers/newsletterController');

//Adding Routes
router.route('/newsletter/register').post(registerSubscriber);

module.exports = router;