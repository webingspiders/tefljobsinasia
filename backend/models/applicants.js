const mongoose = require('mongoose');
const validator = require('validator');

const applicantSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter your name'],
    maxLength: [20, 'Your name cannot exceed 20 characters'],
  },
  middleName: {
    type: String,
    maxLength: [20, 'Your name cannot exceed 20 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Please enter your name'],
    maxLength: [20, 'Your name cannot exceed 20 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    validate: [validator.isEmail, 'Please enter a valid email address']
  },
  phoneNo: {
    type: String,
    required: true,
    validate: [validator.isMobilePhone, 'Please enter a valid phone number']
  },
  dateOfBirth: {
    type: String,
    required: [true, 'Please enter your DOB']
  },
  addressline1: {
    type: String,
  },
  addressline2: {
    type: String,
  },
  experience: {
    type: String,
    required: [true, 'Please enter your Experience'],
  },
  country: {
    type: String,
  },
  qualification: {
    type: String,
    required: [true, 'Please enter your Qualifications'],
  },
  native: {
    type: String,
    required: true,
  },
  agreement: {
    type: Boolean,
    required: true,
  },
  cv: {
    type: String,
    required: [true, 'Please enter your CV'],
  },
  videoCv: {
    type: String,
  },
  role: {
    type: String,
    default: 'applicant',
  },
  message: {
    type: String
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Applicant', applicantSchema);
