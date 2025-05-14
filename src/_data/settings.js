const client = require('./sanityClient')

module.exports = async function() {
  const query = `*[_type == "settings"][0] {
    name,
    description,
    author,
    url,
    "ogImage": ogImage.asset->url
  }`

  const settings = await client.fetch(query)
  return settings || {
    name: 'The Drop Bears',
    description: 'FRC Team 4774 from Sydney, Australia',
    author: 'The Drop Bears',
    url: 'https://thedropbears.org.au',
    ogImage: '/static/img/team-og-image.jpg'
  }
}
