const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { getFeed } = require('./parsing/parse')

let app = express()

app
  .use(express.static(path.join(__dirname, '../client')))
  .use(bodyParser.json())
  .post('/getFeed', getFeed)
  .listen(3000, () => { console.log('Server listening on 3k.') })
