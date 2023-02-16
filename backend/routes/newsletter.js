const express = require('express');
const router = express.Router();

const {
  registerSubscriber, getSubscribers
} = require('../controllers/newsletterController');

//Adding Routes
router.route('/newsletter/register').post(registerSubscriber);
router.route('/newsletters').get(getSubscribers);

module.exports = router;