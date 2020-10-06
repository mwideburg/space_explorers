const express = require('express');
const app = express();
const mongoose = require('mongoose')





const db = require('./config/keys').mongoURI
const users = require("./routes/api/users")

const User = require("./models/User")
const bodyParser = require('body-parser')
const passport = require('passport')
const robots = require('./routes/api/robots')
const enemies = require('./routes/api/enemies')





mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connected to mongoose db"))
    .catch((err) => console.log(`Error: ${err}`))

// app.use(passport.session());
app.use(passport.initialize())
require('./config/passport')(passport);

// app.use(bodyParser.urlencoded({
//     extended: false
// }))
app.get("/", (req, res) => res.send("Hello World!!"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users)
app.use('/api/robots', robots)
app.use('/api/enemies', enemies)
const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Listening on port ${port}`)})
  
