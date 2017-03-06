const { dbUri } = require('../../config')
const db = require('./db')

db.connect('mongodb://localhost/nevvstest')

describe('db', () => {
  it('should should have a User schema', () => {
    expect(db.User).toBeDefined()
  })
  it('should write to db', () => {
    let newUser = new db.User({email: 'test@eagle.com', password: 'squawk!'})
    db.User.count({email: 'test@eagle.com'}, (err, count) => {
      expect(count).toBe(1)
    })
  })
  it('should remove from db', () => {
    db.User.remove({email: 'test@eagle.com'}, err => {
      if (err) console.error('removal error', err)
    })
    db.User.count({email: 'test@eagle.com'}, (err, count) => {
      expect(count).toBe(0)
    })
  })
})
