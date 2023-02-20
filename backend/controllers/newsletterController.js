const Newsletter = require('../models/newsletter');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendEmail = require('../utils/sendEmail');

//Register a Subscriber
exports.registerSubscriber = catchAsyncErrors(async (req, res, next) => {
  const { name, email } = req.body;

  const user = await Newsletter.create({
    name,
    email
  });

  // await sendEmail({
  //   email: user.email,
  //   subject: 'Thank you for subscribing!',
  //   message: `Hi ${user.name},\n\nThank you for subscibing to our newsletter.\n\nWe'll be notifying you of our upcoming job roles.`,
  // });

  // await sendEmail({
  //   email: 'contact@tefljobsinasia.com',
  //   subject: 'New Subsciber!',
  //   message: `You have a new subscriber.\n\nUser details:\nName: ${user.name}\nEmail: ${user.email}`,
  // });

  res.status(200).json({
    success: true,
    message: `Email sent to ${user.email}`,
  });

});

exports.registerQueries = catchAsyncErrors(async (req, res, next) => {
  const { name, email, phone, message } = req.body;

  const user = await Newsletter.create({
    name,
    email, phone, message
  });

  // await sendEmail({
  //   email: user.email,
  //   subject: 'Thank you for subscribing!',
  //   message: `Hi ${user.name},\n\nThank you for subscibing to our newsletter.\n\nWe'll be notifying you of our upcoming job roles.`,
  // });

  // await sendEmail({
  //   email: 'contact@tefljobsinasia.com',
  //   subject: 'New Subsciber!',
  //   message: `You have a new subscriber.\n\nUser details:\nName: ${user.name}\nEmail: ${user.email}`,
  // });

  res.status(200).json({
    success: true,
    message: `Email sent to ${user.email}`,
  });

});

exports.getSubscribers = catchAsyncErrors(async (req, res, next) => {
  const subscribers = await Newsletter.find();
  res.status(200).json({
    success: true,
    subscribers,
  });
});