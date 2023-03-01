const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://brich804:brianrichardson@ac-x5wxifn-shard-00-00.rah5fuj.mongodb.net:27017,ac-x5wxifn-shard-00-01.rah5fuj.mongodb.net:27017,ac-x5wxifn-shard-00-02.rah5fuj.mongodb.net:27017/?ssl=true&replicaSet=atlas-pq91n0-shard-0&authSource=admin&retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;

