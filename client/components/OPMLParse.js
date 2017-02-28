import { getIndex } from './feedIndex'

export function OPMLParse (xml) {
  // Writing my own because existent ones are disappointing.
  let newFeeds = []
  let nodes = xml.split('<outline').filter(line => /Url/.test(line))
  nodes.forEach(node => {
    let feed = {}
    feed.text = /text="(.*?)"/.exec(node)[1]
    feed.title = /title="(.*?)"/.exec(node)[1]
    feed.type = /type="(.*?)"/.exec(node)[1]
    feed.xmlUrl = /xmlUrl="(.*?)"/.exec(node)[1]
    feed.htmlUrl = /htmlUrl="(.*?)"/.exec(node)[1]
    feed.id = getIndex()
    newFeeds.push(feed)
  })
  return newFeeds
}
