const { User } = require('./db')

const dbTest = (req, res) => {
  console.log(req.body)
  // res.send('hihi')
  User.sync({force: true})
    .then(() => {
      return User.create({
        email: req.body.email,
        password: req.body.password,
        feeds: '{}'
      })
    })
    .then(() => {
      return User.findOne({where: {email: 'punch'}})
    })
    .then(user => {
      res.send(user)
    })

  // User.sync()
  //   .then(() => {
  //     User.create({
  //       email: 'test@eagle.com',
  //       password: 'hush',
  //       feeds: JSON.stringify(feedlist)
  //     })
  //     .then(() => {
  //       return User.findAll()
  //     })
  //     .then(users => {
  //       expect(users[0].email).toBe('test@eagle.com')
  //     })
  //     .then(() =>{
  //       return User.findOne({email: 'test@eagle.com'})
  //     })
  //     .then(user => {
  //       expect(user.email).toBe('test@eagle.com')
  //     })
  //   })
}

module.exports.dbTest = dbTest
