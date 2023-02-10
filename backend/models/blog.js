const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter blog title'],
    trim: true,
    maxLength: [100, 'Blog title must be less than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please enter the blog description'],
    minlength: [400, 'Blog Description must be longer than 400 characters'],
  },
  image: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  previewText: {
    type: String,
    required: [true, 'Please enter a preview text'],
    maxLength: [200, 'Blog Preview Text must be shorter than 100 characters'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Blog', blogSchema);
