const express = require('express')
const path = require('path')

let app = express()

app
  .use(express.static(path.join(__dirname, '../client')))
  .listen(3000, () => { console.log('Server listening on 3k.') })
