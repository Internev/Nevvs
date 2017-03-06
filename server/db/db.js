const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const connect = (uri) => {
  mongoose.connect(uri)
  mongoose.connection.on('error', err => {
    console.error('Mongoose error:', err)
    process.exit(1)
  })
}

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String
})

UserSchema.methods.comparePassword = (password, cb) => {
  bcrypt.compare(password, this.password, cb)
}

UserSchema.pre('save', next => {
  if (!this.isModified('password')) return next()

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) return next(saltError)

    return bcrypt.hash(this.password, salt, (hashError, hash) => {
      if (hashError) return next(hashError)
      this.password = hash

      return next()
    })
  })
})

module.exports.connect = connect
module.exports.User = mongoose.model('User', UserSchema)
