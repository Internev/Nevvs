const parser = require('rss-parser')

module.exports.getFeed = (req, res) => {
  parser.parseURL(req.body.site, (err, parsed) => {
    if (err) {
      console.error(err)
      res.send(500)
    } else {
      res.send(parsed.feed)
    }
  })
}
