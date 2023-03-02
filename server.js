const express = require("express");
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const port = 5000;
// const connectDB = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));


app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const dbo = require("./config/db");
// connectDB();
dbo();

// app.listen(port, () => {
  // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
 
//   });
//   console.log(`Server is running on port: ${port}`);
// });

app.listen(port, () => {
  // dbo.connectToServer(function (err) {
  //   console.log('boo')
  //   if (err) console.error(err);
 
  // });
    console.log(`Server is running on port ${port}, you better catch it!`);
  });
  