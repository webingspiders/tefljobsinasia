const express = require('express');
const router = express.Router();

const {
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  updatePassword,
  registerUser,
  getUserProfile,
} = require('../controllers/authController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

//Adding Routes
router.route('/admin/register').post(registerUser);
router.route('/admin/login').post(loginUser);
router.route('/admin/logout').get(logoutUser);
router.route('/admin/me').get(isAuthenticatedUser, getUserProfile);
router.route('/admin/password/forgot').post(forgotPassword);
router.route('/admin/password/reset/:token').put(resetPassword);
router
  .route('/admin/password/update')
  .put(isAuthenticatedUser, authorizeRoles('admin'), updatePassword);

module.exports = router;
