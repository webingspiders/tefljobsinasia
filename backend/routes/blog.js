const express = require('express');
const router = express.Router();

const {
  getBlogs,
  newBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/blogs').get(getBlogs);
router
  .route('/admin/blog/new')
  .post(isAuthenticatedUser, authorizeRoles('admin'), newBlog);
router.route('/blog/:id').get(getBlogById);
router
  .route('/admin/blog/:id')
  .put(isAuthenticatedUser, authorizeRoles('admin'), updateBlog)
  .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteBlog);

module.exports = router;
