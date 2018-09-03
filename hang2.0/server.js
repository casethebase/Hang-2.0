// Dependencies
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const session = require("express-session");
const passport = require("./config/passport");



// Express and port set up
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware set up
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// DB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/buddha_users");


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
    console.log(`Server listening on port:${PORT}`)
})
var passport = require("./config/passport");
