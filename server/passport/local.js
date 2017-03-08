const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { comparePass } = require('./_helpers')
const init = require('./passport')
const { User } = require('../db/db')

init()

passport.use(new LocalStrategy(options, (email, password, done) => {
  User.findOne({where: {email}})
    .then(user => {
      if (!user) return done(null, false)
      if (!comparePass(password, user.password)){
        return done(null, false)
      } else {
        return done(null, user)
      }
    })
    .catch(err => done(err))
}))

module.exports = passport
