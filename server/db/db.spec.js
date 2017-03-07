const { db, User } = require('./db')

let feedlist = {
  text: 'Testfeed',
  title: 'Testfeed',
  type: 'rss',
  xmlUrl: 'http://internev.com/feed/',
  htmlUrl: 'http://internev.com/'
}

describe('db', () => {
  User.sync({force: true})
  .then(() => {
    return User.create({
      email: 'test@eagle.com',
      password: 'hush',
      feeds: JSON.stringify(feedlist)
    })
  })
  .then(() => {
    User.findAll()
      .then(users => {
        it('should write to db', () =>{
          expect(users[0].email).toBe('test@eagle.com')
        })
      })
  })
  .then(() => {
    User.findOne({email: 'test@eagle.com'})
      .then(user => {
        it('should find one in db', () => {
          expect(user.email).toBe('test@eagle.com')
        })
      })
  })
  .then(() => {
    User.destroy({where: {email: 'test@eagle.com'}})
  })
  .then(() => {
    User.findAll()
      .then(users => {
        it('should write to db', () =>{
          expect(users.length).toBe(0)
        })
      })
  })
})
