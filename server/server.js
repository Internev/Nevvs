const express = require('express')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser')
const { getFeed } = require('./parsing/parse')
const passport = require('passport')
// const localSignupStrategy = require('./passport/local-signup')
// const localLoginStrategy = require('./passport/local-login')
// const authRoutes = require('./passport/authRoutes')
// const { dbUri } = require('../config')
const { dbTest } = require('./db/dbRoutes')

let app = express()

let port = process.env.PORT || 3000

app
  .use(express.static(path.join(__dirname, '../client')))
  .use(bodyParser.json())
  .use(session({
    secret: 'AxlotlBadgerstone',
    resave: false,
    saveUninitialized: true
  }))
  .use(passport.initialize())
  .use(passport.session())
  .use('/auth', dbTest)
  .post('/getFeed', getFeed)
  .listen(port, () => { console.log(`Server listening on ${port}`) })

// passport
//   .use('local-signup', localSignupStrategy)
//   .use('local-login', localLoginStrategy)
