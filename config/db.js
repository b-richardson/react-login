const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
const Db = "mongodb://brich804:brianrichardson@ac-x5wxifn-shard-00-00.rah5fuj.mongodb.net:27017,ac-x5wxifn-shard-00-01.rah5fuj.mongodb.net:27017,ac-x5wxifn-shard-00-02.rah5fuj.mongodb.net:27017/?ssl=true&replicaSet=atlas-pq91n0-shard-0&authSource=admin&retryWrites=true&w=majority"
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
 
// var _db;
 
// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       // Verify we got a good "db" object
//       if (db)
//       {
//         _db = db.db("employees");
//         console.log("Successfully connected to MongoDB."); 
//       }
//       return callback(err);
//          });
//   },
 
//   getDb: function () {
//     return _db;
//   },
// };


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(Db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn.connection.host
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;