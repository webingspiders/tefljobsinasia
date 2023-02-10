const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';

  if (process.env.NODE_ENV === 'DEVELOPMENT') {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errorMessage: err.message,
      errorStack: err.stack,
    });
  }

  if (process.env.NODE_ENV === 'PRODUCTION') {
    let error = { ...err };

    error.message = err.message;

    //Wrong Mongoose Object Id Error
    if (err.name == 'CastError') {
      const message = `Resource noe found. Invalid ${err.path}`;
      error = new ErrorHandler(message, 400);
    }

    //Handling Mongoose Validation Error
    if (err.name == 'ValidationError') {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(message, 400);
    }

    //Handling duplicate Mongoose key errors
    if (err.code === 11000) {
      const message = `Duplicate ${Object.keys(err.keyValue)} entered.`;
      error = new ErrorHandler(message, 400);
    }

    //Handling wrong JWT token errors
    if (err.name == 'JsonWebTokenError') {
      const message = 'Json Web Token is invalid. Try again!!';
      error = new ErrorHandler(message, 400);
    }

    //Handling expired JWT token errors
    if (err.name == 'TokenExpiredError') {
      const message = 'Json Web Token has expired. Try again!!';
      error = new ErrorHandler(message, 400);
    }

    res.status(error.statusCode).json({
      success: false,
      message: error.message || 'Internal Server Error',
    });
  }
};
