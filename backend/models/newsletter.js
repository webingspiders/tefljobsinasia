const mongoose = require('mongoose');
const validator = require('validator');

const newsletterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    maxLength: [30, 'Your name cannot exceed 30 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    validate: [validator.isEmail, 'Please enter a valid email address']
  },
  role: {
    type: String,
    default: 'subscriber',
  },
  phoneNo: {
    type: String,
    validate: [validator.isMobilePhone, 'Please enter a valid phone number']
  },
  message: {
    type: String
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Newsletter', newsletterSchema);
