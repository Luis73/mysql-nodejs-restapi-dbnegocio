const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('./configs/config')
const cors = require('cors')
const passport = require("passport");
const users = require("./src/routes/api/users");
const path = require("path");

const db = require('./db')
const articleRouter = require('./src/routes/article-router')
const app = express()
const server = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cors())
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, "client", "build")))


require("./config/passport")(passport);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.use('/api', articleRouter)
app.use("/api/users", users);

app.listen(server, () => console.log(`Server running on port ${server}`))
