const bcrypt = require('bcryptjs')

const comparePass = (userPass, dbPass) => {
  return bcrypt.compareSync(userPass, dbPass)
}

module.exports.comparePass = comparePass
