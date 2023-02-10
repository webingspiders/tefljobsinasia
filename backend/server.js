const app = require('./app');
const connectDB = require('./config/database');

const dotenv = require('dotenv');

//Handle Uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down server due to uncaught exception');
  process.exit(1);
});

dotenv.config({ path: 'config/config.env' });

//Connecting to database
connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server has started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

//Handle Unhandled Promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down server due to unhandled Promise rejections');
  server.close(() => {
    process.exit(1);
  });
});
