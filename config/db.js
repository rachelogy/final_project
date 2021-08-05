// mongoose can be used to interact with mongodb database
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected......');
  } catch (err) {
    // when there is an error, we can exit
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
