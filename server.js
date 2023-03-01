const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const port = 5000;
const connectDB = require("./config/database");

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

app.listen(port, () => {
    console.log(`Server is running on port ${port}, you better catch it!`);
  });
  