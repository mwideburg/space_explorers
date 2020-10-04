const express = require('express');
const app = express();
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI
const users = require("./routes/api/users")
const tweets = require("./routes/api/tweets")
const User = require("./models/User")
const bodyParser = require('body-parser')
const passport = require('passport')




app.use(passport.initialize())
// app.use(passport.session());

require('./config/passport')(passport);

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("Connected to mongoose db"))
    .catch((err) => console.log(`Error: ${err}`))

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users)
app.use('/api/tweets', tweets)

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Listening on port ${port}`)})
  
