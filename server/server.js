const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { getFeed } = require('./parsing/parse')
// const passport = require('passport')
// const localSignupStrategy = require('./passport/local-signup')
// const localLoginStrategy = require('./passport/local-login')
// const authRoutes = require('./passport/authRoutes')
// const { dbUri } = require('../config')
const { dbTest } = require('./db/dbRoutes')

let app = express()

app
  .use(express.static(path.join(__dirname, '../client')))
  .use(bodyParser.json())
  // .use(passport.initialize())
  .use('/auth', dbTest)
  .post('/getFeed', getFeed)
  .listen(3000, () => { console.log('Server listening on 3k.') })

// passport
//   .use('local-signup', localSignupStrategy)
//   .use('local-login', localLoginStrategy)
