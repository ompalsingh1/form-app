// imports
// require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path");
const User = require("./models/users");

const app = express();
const PORT = process.env.PORT || 3000;

//  middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route prefix
app.use("", require("./routes/routes.js"));

app.use(
  session({
    secret: "my secret key",
    saveUninitialized: true,
    resave: false,
  })
);

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

mongoose
  .connect("mongodb://127.0.0.1:27017/forms")
  .then(() => {
    console.log("connected to the database of mongoose");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })

  .catch(() => {
    console.log("connection error !!");
  });
