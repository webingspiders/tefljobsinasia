const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((con) =>
      console.log(`MongoDB database connected to HOST: ${con.connection.host}`)
    );
};

module.exports = connectDB;
