const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path');




const db = require('./config/keys_dev').mongoURI
const users = require("./routes/api/users")

const User = require("./models/User")
const bodyParser = require('body-parser')
const passport = require('passport')
const robots = require('./routes/api/robots')


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}



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
const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Listening on port ${port}`)})
  
