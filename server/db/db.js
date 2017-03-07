const Sequelize = require('sequelize')

const db = new Sequelize('nevvs', 'n', 'hush',
  {host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
)

const User = db.define('user', {
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  feeds: Sequelize.JSON
})

module.exports.db = db
module.exports.User = User
