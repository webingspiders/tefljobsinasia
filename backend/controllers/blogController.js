const Blog = require('../models/blog');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// Create a new Blog
exports.newBlog = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;

  const blog = await Blog.create(req.body);

  res.status(201).json({
    success: true,
    blog,
  });
});

// Get all Blogs
exports.getBlogs = catchAsyncErrors(async (req, res, next) => {
  const blogs = await Blog.find();
  res.status(200).json({
    success: true,
    blogs,
  });
});

// Get a blog by id
exports.getBlogById = catchAsyncErrors(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new ErrorHandler('Blog not found', 404));
  }

  res.status(200).json({
    success: true,
    blog,
  });
});

//Update Blog by id
exports.updateBlog = catchAsyncErrors(async (req, res, next) => {
  let blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new ErrorHandler('Blog not found', 404));
  }

  blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    blog,
  });
});

// Delete Blogs
exports.deleteBlog = catchAsyncErrors(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new ErrorHandler('Blog not found', 404));
  }

  await blog.remove();

  res.status(200).json({
    success: true,
    message: 'Blog is successfully removed',
  });
});
